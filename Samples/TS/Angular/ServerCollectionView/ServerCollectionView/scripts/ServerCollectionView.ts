﻿/// <reference path="wijmo.d.ts" />
/// <reference path="wijmo.input.d.ts" />
/// <reference path="wijmo.grid.d.ts" />
/// <reference path="wijmo.grid.filter.d.ts" />
module wijmo.collections {
    'use strict';

    /**
     * Base class for server-based CollectionView classes.
     *
     * To use it, create a class that extends @see:ServerCollectionViewBase
     * and add overrides for the following methods:
     *
     * <ul>
     *    <li>_getReadUrl</li>
     *    <li>_getWriteUrl</li>
     *    <li>_getReadParameters</li>
     *    <li>_getFilterDefinition</li>
     * </ul>
     */
    export class ServerCollectionViewBase extends CollectionView {
        _url: string;
        _count = 0;
        _toGetData: number;
        _loading: boolean;
        _filterDef: string;
        _requestHeaders: any;
        _sortOnServer = true;
        _pageOnServer = true;
        _filterOnServer = true;
        _changeCount = 0;

        /**
         * Initializes a new instance of the @see:ServerCollectionViewBase class.
         *
         * @param url Url of the data service (e.g. 'DataHandler.ashx').
         * @param options JavaScript object containing initialization data (property
         * values and event handlers) for the @see:ServerCollectionView.
         */
        constructor(url: string, options?: any) {
            super();
            this._url = asString(url, false);
            if (options) {
                copy(this, options);
            }

            // when sortDescriptions change, sort on server
            this.sortDescriptions.collectionChanged.addHandler(() => {
                if (this.sortOnServer) {
                    this._getData();
                }
            });

            // go get the data
            this._getData();
        }

        // ** object model

        /**
         * Gets or sets a value that determines whether sort operations 
         * should be performed on the server or on the client.
         *
         * Use the @see:sortDescriptions property to specify how the
         * data should be sorted.
         */
        get sortOnServer(): boolean {
            return this._sortOnServer;
        }
        set sortOnServer(value: boolean) {
            if (value != this._sortOnServer) {
                this._sortOnServer = asBoolean(value);
                this._getData();
            }
        }
        /**
         * Gets or sets a value that determines whether paging should be 
         * performed on the server or on the client.
         *
         * Use the @see:pageSize property to enable paging.
         */
        get pageOnServer(): boolean {
            return this._pageOnServer;
        }
        set pageOnServer(value: boolean) {
            if (value != this._pageOnServer) {
                this._pageOnServer = asBoolean(value);
                if (this.pageSize) {
                    this._getData();
                }
            }
        }
        /**
         * Gets or sets a value that determines whether filtering should be performed on 
         * the server or on the client.
         *
         * Use the @see:filter property to perform filtering on the client, and use the 
         * @see:filterDefinition property to perform filtering on the server.
         *
         * In some cases it may be desirable to apply independent filters on the client 
         * <b>and</b> on the server. 
         *
         * You can achieve this by setting (1) the @see:filterOnServer property to false 
         * and the @see:filter property to a filter function (to enable client-side filtering) 
         * and (2) the @see:filterDefinition property to a filter string (to enable server-side 
         * filtering).
         */
        get filterOnServer(): boolean {
            return this._filterOnServer;
        }
        set filterOnServer(value: boolean) {
            if (value != this._filterOnServer) {
                this._filterOnServer = asBoolean(value);
                this._getData();
            }
        }
        /**
         * Gets or sets a string containing an OData filter specification to
         * be used for filtering the data on the server.
         */
        get filterDefinition(): string {
            return this._filterDef;
        }
        set filterDefinition(value: string) {
            if (value != this._filterDef) {
                this._filterDef = asString(value);
                this._getData();
            }
        }
        /**
         * Updates the filter definition based on a known filter provider such as the 
         * @see:FlexGridFilter.
         *
         * @param filterProvider Known filter provider, typically an instance of a
         * @see:FlexGridFilter.
         */
        updateFilterDefinition(filterProvider: any) {
            if (this.filterOnServer && wijmo.grid && wijmo.grid.filter && filterProvider instanceof grid.filter.FlexGridFilter) {
                this.filterDefinition = this._getFilterDefinition(filterProvider);
            }
        }
        /**
         * Gets or sets an object containing request headers to be used when sending 
         * or requesting data.
         *
         * The most typical use for this property is in scenarios where authentication
         * is required. For example:
         *
         * <pre>var categories = new wijmo.odata.ODataCollectionView(serviceUrl, 'Categories', {
         *   fields: ['Category_ID', 'Category_Name'],
         *   requestHeaders: { Authorization: db.token }
         * });</pre>
         */
        get requestHeaders(): any {
            return this._requestHeaders;
        }
        set requestHeaders(value: any) {
            this._requestHeaders = value;
        }
        /**
         * Gets a value that indicates the @see:ServerCollectionView is 
         * currently loading data.
         * 
         * This property can be used to provide progress indicators.
         */
        get isLoading(): boolean {
            return this._loading;
        }
        /**
         * Occurs when the @see:ServerCollectionView starts loading data.
         */
        loading = new Event();
        /**
         * Raises the @see:loading event.
         */
        onLoading(e?: EventArgs) {
            this.loading.raise(this, e);
        }
        /**
         * Occurs when the @see:ServerCollectionView finishes loading data.
         */
        loaded = new Event();
        /**
         * Raises the @see:loaded event.
         */
        onLoaded(e?: EventArgs) {
            this.loaded.raise(this, e);
        }
        /**
         * Loads or re-loads the data from the server.
         */
        load() {
            this._getData();
        }

        /**
         * Occurs when there is an error reading or writing data.
         */
        error = new Event();
        /**
         * Raises the @see:error event.
         *
         * By default, errors throw exceptions and trigger a data refresh. If you
         * want to prevent this behavior, set the @see:RequestErrorEventArgs.cancel
         * parameter to true in the event handler.
         *
         * @param e @see:RequestErrorEventArgs that contains information about the error.
         */
        onError(e: RequestErrorEventArgs): boolean {
            this.error.raise(this, e);
            return !e.cancel;
        }

        // ** overrides

        /**
         * Gets the total number of items in the view before paging is applied.
         */
        get totalItemCount(): number {
            return this.pageOnServer
                ? this._count
                : this._view.length;
        }
        /**
         * Gets the total number of pages.
         */
        get pageCount(): number {
            return this.pageSize ? Math.ceil(this.totalItemCount / this.pageSize) : 1;
        }
        /**
         * Gets or sets the number of items to display on a page.
         */
        get pageSize(): number {
            return this._pgSz;
        }
        set pageSize(value: number) {
            if (value != this._pgSz) {
                this._pgSz = asInt(value);
                if (this.pageOnServer) {
                    this._pgIdx = clamp(this._pgIdx, 0, this.pageCount - 1); // ensure page index is valid (TFS 121226)
                    this._getData();
                } else {
                    this.refresh();
                }
            }
        }
        /**
         * Raises the @see:pageChanging event.
         *
         * @param e @see:PageChangingEventArgs that contains the event data.
         */
        onPageChanging(e: collections.PageChangingEventArgs): boolean {
            super.onPageChanging(e);
            if (this.pageOnServer && !e.cancel) {
                this._getData();
            }
            return !e.cancel;
        }

        /**
         * Override @see:commitNew to add the new item to the database.
         */
        commitNew() {

            // to get new item back as JSON
            var requestHeaders = {
                'Accept': 'application/json'
            };
            if (this.requestHeaders) {
                for (var k in this.requestHeaders) {
                    requestHeaders[k] = this.requestHeaders[k];
                }
            }

            // commit to database
            var item = this.currentAddItem;
            if (item) {
                var url = this._getWriteUrl();
                if (url) {
                    httpRequest(url, {
                        method: 'POST',
                        requestHeaders: requestHeaders,
                        data: item,
                        success: (xhr) => {
                            var newItem = this._parseJSON(xhr.response);
                            for (var key in newItem) {
                                item[key] = newItem[key];
                            }
                            this._changeCount++;
                            this._getData();
                        },
                        error: this._error.bind(this)
                    });
                }
            }

            // allow base class
            super.commitNew();
        }
        /**
         * Override @see:commitEdit to modify the item in the database.
         */
        commitEdit() {

            // commit to database
            var item = this.currentEditItem;
            if (item && !this.currentAddItem && !this._sameContent(item, this._edtClone)) {
                if (this.items.indexOf(item) > -1) { // make sure we have this item...
                    var url = this._getWriteUrl(this._edtClone);
                    if (url) {
                        httpRequest(url, {
                            method: 'PUT',
                            requestHeaders: this.requestHeaders,
                            data: item,
                            success: (xhr) => {
                                this._changeCount++;
                                if (!this.currentEditItem) { // TFS 244721
                                    this._getData();
                                }
                            },
                            error: this._error.bind(this)
                        });
                    }
                }
            }

            // allow base class
            super.commitEdit();
        }
        /**
         * Override @see:remove to remove the item from the database.
         *
         * @param item Item to be removed from the database.
         */
        remove(item: any) {

            // remove from database
            if (item && item != this.currentAddItem) {
                if (this.items.indexOf(item) > -1) {
                    var url = this._getWriteUrl(item);
                    if (url) {
                        httpRequest(url, {
                            method: 'DELETE',
                            requestHeaders: this.requestHeaders,
                            success: (xhr) => {
                                this._changeCount++;
                                this._getData();
                            },
                            error: this._error.bind(this),
                        });
                    }
                }
            }

            // allow base class
            super.remove(item);
        }

        // we're paging on the server, so the pageView is the view
        _getPageView() {
            return this.pageOnServer
                ? this._view
                : super._getPageView();
        }

        // disable sort and filter on client if we're doing it on the server
        _performRefresh() {

            // save settings
            var canFilter = this._canFilter,
                canSort = this._canSort;

            // perform refresh
            this._canFilter = !this._filterOnServer;
            this._canSort = !this._sortOnServer;
            super._performRefresh();

            // restore settings
            this._canFilter = canFilter;
            this._canSort = canSort;
        }

        // ** implementation

        // get the data
        private _getData() {

            // get the data on a timeout to avoid doing it too often
            if (this._toGetData) {
                clearTimeout(this._toGetData);
            }
            this._toGetData = setTimeout(() => {

                // start loading
                this._loading = true;
                this.onLoading();

                // get parameters
                var params = this._getReadParameters();
                for (var k in params) {
                    params[k] = this._encodeUrl(params[k]);
                }

                // go get the data
                var url = this._getReadUrl();
                httpRequest(url, {
                    data: params,
                    success: (xhr) => {

                        // save cursor position
                        var position = this.currentPosition;

                        // parse response
                        var response = this._parseJSON(xhr.response);

                        // check if the item count decreased and we were reading past the end
                        var readPastEnd = response.count < this._count &&
                            this.pageSize > 0 && response.value.length < this.pageSize;

                        // store results
                        this._count = response.count;
                        this.sourceCollection = response.value;
                        this.refresh();

                        // restore cursor position
                        if (position > -1) {
                            this.moveCurrentToPosition(position);
                        }

                        // done
                        this._loading = false;
                        this.onLoaded();

                        // if we read past the end of the collection, read again (TFS 244749)
                        if (readPastEnd) {
                            this._getData();
                        }
                    },
                    error: (xhr) => {
                        this._loading = false;
                        this.onLoaded();
                        if (this.onError(new RequestErrorEventArgs(xhr))) {
                            throw 'HttpRequest Error: ' + xhr.status + ' ' + xhr.statusText;
                        }
                    }
                });
            }, 100);
        }

        // handle errors...
        private _error(xhr: XMLHttpRequest) {
            if (this.onError(new RequestErrorEventArgs(xhr))) {
                this._getData();
                throw 'HttpRequest Error: ' + xhr.status + ' ' + xhr.statusText;
            }
        }

        // parse JSON including dates
        _parseJSON(text: string): any {
            return JSON.parse(text, (key, value) => {
                if (typeof value === 'string') {

                    // parse dates saved as JSON-strings
                    var m = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/);
                    if (m) {
                        return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]));
                    }

                    // parse dates saved as OData-style strings
                    m = value.match(/^\/Date\((\d+)\)\/$/);
                    if (m) {
                        return new Date(parseInt(m[1]));
                    }
                }
                return value;
            });
        }

        // encode url parameters
        _encodeUrl(value: any): any {
            return isString(value) ? encodeURIComponent(value) : value;
        }

        // ** virtual/overridables

        // get url for read requests
        // note: read uses GET
        protected _getReadUrl(): string {
            var url = this._url;
            if (url[url.length - 1] != '/') {
                url += '/';
            }
            return url;
        }

        // get url for write requests
        // note: add uses POST, edit uses PUT, remove uses DELETE
        private _getWriteUrl(item?: any): string {
            var url = this._getReadUrl();
            if (item) { // add ID of item being edited or removed
                url += '(' + item.ID + ')';
            }
            return url;
        }

        // get parameters for read request
        // override to add parameters that apply the current sorting, paging, filtering, etc.
        protected _getReadParameters(): any {
            return {};
        }

        // get a filterDefinition string based on a filterProvider (typically a FlexGridFilter).
        // override to translate the filterProvider conditions into a filter string that
        // can be recognized by the server
        protected _getFilterDefinition(filterProvider): string {
            return null;
        }
    }

    /**
     * Extends @see: wijmo.collections.ServerCollectionViewBase to retrieve sorted
     * and paginated data from a very simple data service.
     */
    export class ServerCollectionView extends ServerCollectionViewBase {

        /**
         * Initializes a new instance of the @see:ServerCollectionViewBase class.
         *
         * @param url Url of the data service (e.g. 'DataHandler.ashx').
         * @param options JavaScript object containing initialization data (property
         * values and event handlers) for the @see:ServerCollectionView.
         */
        constructor(url: string, options?: any) {
            super(url);
            if (options) {
                copy(this, options);
            }
        }

        // *** overrides ***

        // get url for read request
        protected _getReadUrl(): string {
            return super._getReadUrl();
        }

        // get parameters for read request
        protected _getReadParameters(): any {
            var settings = {};

            // to refresh cache after changes
            settings['$ticks'] = this._changeCount;

            // server sort
            //
            // in this case we translate the SortDescriptions into a comma-separated 
            // list of fields to sort on, same syntax as DataView.Sort:
            // https://msdn.microsoft.com/en-us/library/system.data.dataview.sort(v=vs.110).aspx
            //
            if (this.sortOnServer && this.sortDescriptions.length) {
                var sort = '';
                for (var i = 0; i < this.sortDescriptions.length; i++) {
                    var sd = this.sortDescriptions[i];
                    if (sort) sort += ',';
                    sort += sd.property;
                    if (!sd.ascending) sort += ' desc';
                }
                settings['$orderby'] = sort;
            }

            // server paging
            if (this.pageOnServer && this.pageSize > 0) {
                settings['$skip'] = this.pageIndex * this.pageSize;
                settings['$top'] = this.pageSize;
            }

            // server filtering
            //
            // NOTE: we apply filterDefinition regardless of 'filterOnServer'; 
            // this allows filtering on the server and on the client at the same time
            //
            if (this.filterDefinition) {
                settings['$filter'] = this.filterDefinition;
            }

            // done
            return settings;
        }

        // get a filterDefinition string based on a filterProvider (typically a FlexGridFilter).
        //
        // in this case we translate the FlexGridFilter conditions for each column into
        // an expression using the same syntax as a DataView.RowFilter:
        // https://msdn.microsoft.com/en-us/library/system.data.dataview.rowfilter(v=vs.110).aspx
        //
        protected _getFilterDefinition(filter): string {
            if (filter instanceof grid.filter.FlexGridFilter) {
                var def = '';
                for (var c = 0; c < filter.grid.columns.length; c++) {
                    var col = filter.grid.columns[c],
                        cf = filter.getColumnFilter(col, false);
                    if (cf && cf.isActive) {
                        if (def) {
                            def += ' AND ';
                        }
                        if (cf.conditionFilter && cf.conditionFilter.isActive) {
                            def += this._getConditionFilterDefinition(cf.conditionFilter);
                        } else if (cf.valueFilter && cf.valueFilter.isActive) {
                            def += this._getValueFilterDefinition(cf.valueFilter);
                        }
                    }
                }
                return def;
            }
            return null;
        }
        private _getValueFilterDefinition(vf: grid.filter.ValueFilter): string {
            var col = vf.column,
                vals = [];
            for (var key in vf.showValues) {
                var value = changeType(key, col.dataType, col.format);
                vals.push(this._encodeFilterValue(value, col.dataType));
            }
            return '[' + col.binding + '] IN (' + vals.join(', ') + ')';
        }
        private _getConditionFilterDefinition(cf: grid.filter.ConditionFilter): string {
            var val = this._getConditionDefinition(cf, cf.condition1);
            if (cf.condition2.operator != null) {
                val += (cf.and ? ' AND ' : ' OR ') + this._getConditionDefinition(cf, cf.condition2);
            }
            return '(' + val + ')';
        }
        private _getConditionDefinition(cf: grid.filter.ConditionFilter, cond: grid.filter.FilterCondition): string {
            var expr = '',
                val = this._encodeFilterValue(cond.value, cf.column.dataType),
                unquoted = isString(cond.value) ? cond.value.replace(/'/g, '\'\'') : '';
            switch (cond.operator) {
                case 0: // EQ = 0, 
                    expr = '= ' + val;
                    break;
                case 1: // NE = 1,
                    expr = '<> ' + val;
                    break;
                case 2: // GT = 2, 
                    expr = '> ' + val;
                    break;
                case 3: // GE = 3, 
                    expr = '>= ' + val;
                    break;
                case 4: // LT = 4, 
                    expr = '< ' + val;
                    break;
                case 5: // LE = 5, 
                    expr = '<= ' + val;
                    break;
                case 6: // BW = 6, 
                    expr = 'LIKE \'' + unquoted + '*\'';
                    break;
                case 7: // EW = 7, 
                    expr = 'LIKE \'*' + unquoted + '\'';
                    break;
                case 8: // CT = 8, 
                    expr = 'LIKE \'*' + unquoted + '*\'';
                    break;
                case 9: // NC = 9 
                    expr = 'NOT LIKE \'*' + unquoted + '*\'';
                    break;
            }
            return '[' + cf.column.binding + '] ' + expr;
        }
        private _encodeFilterValue(val: any, dataType: DataType): string {
            if (isString(val)) {
                return "'" + val.replace(/'/g, '\'\'') + "'";
            } else if (isDate(val)) {
                return '#' + (val.getMonth() + 1) + '/' + val.getDate() + '/' + val.getFullYear() + '#';
            } else if (val != null) {
                return val.toString();
            }
            return dataType == DataType.String ? "''" : null;
        }
    }
}