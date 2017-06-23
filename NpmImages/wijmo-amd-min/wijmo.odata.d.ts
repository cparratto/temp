import * as wjcCore from 'wijmo/wijmo';
export declare class ODataCollectionView extends wjcCore.CollectionView {
    _url: string;
    _tbl: string;
    _count: number;
    _fields: string[];
    _keys: string[];
    _dataTypes: any;
    _sortOnServer: boolean;
    _pageOnServer: boolean;
    _filterOnServer: boolean;
    _inferDataTypes: boolean;
    _dataTypesInferred: any;
    _filterDef: string;
    _toGetData: any;
    _loading: boolean;
    _requestHeaders: any;
    _odv: number;
    static _odvCache: {};
    static _rxDate: RegExp;
    constructor(url: string, tableName: string, options?: any);
    readonly tableName: string;
    fields: string[];
    requestHeaders: any;
    keys: string[];
    dataTypes: any;
    inferDataTypes: boolean;
    sortOnServer: boolean;
    pageOnServer: boolean;
    filterOnServer: boolean;
    filterDefinition: string;
    updateFilterDefinition(filterProvider: any): void;
    oDataVersion: number;
    readonly isLoading: boolean;
    loading: wjcCore.Event;
    onLoading(e?: wjcCore.EventArgs): void;
    loaded: wjcCore.Event;
    onLoaded(e?: wjcCore.EventArgs): void;
    load(): void;
    error: wjcCore.Event;
    onError(e: wjcCore.RequestErrorEventArgs): boolean;
    commitNew(): void;
    commitEdit(): void;
    remove(item: any): void;
    readonly totalItemCount: number;
    readonly pageCount: number;
    pageSize: number;
    onPageChanging(e: wjcCore.PageChangingEventArgs): boolean;
    _getPageView(): any[];
    _performRefresh(): void;
    _storeItems(items: any[], append: boolean): void;
    _getReadUrl(nextLink?: string): string;
    _getReadParams(nextLink?: string): any;
    _getData(nextLink?: string): void;
    private _stringifyNumbers(item);
    private _convertItem(dataTypes, item);
    private _getInferredDataTypes(arr);
    private _getServiceUrl();
    private _getSchema();
    private _getWriteUrl(item?);
    private _asODataFilter(filter);
    private _asODataValueFilter(vf);
    private _asODataConditionFilter(cf);
    private _asODataCondition(cf, cond);
    private _asODataValue(val, dataType);
    private _error(xhr);
}
export declare class ODataVirtualCollectionView extends ODataCollectionView {
    _data: any[];
    _skip: number;
    _start: number;
    _end: number;
    _refresh: boolean;
    _loadOffset: number;
    _toSetWindow: any;
    constructor(url: string, tableName: string, options?: any);
    setWindow(start: number, end: number): void;
    pageOnServer: boolean;
    sortOnServer: boolean;
    filterOnServer: boolean;
    canGroup: boolean;
    _performRefresh(): void;
    _getReadParams(nextLink?: string): any;
    _storeItems(items: any[], append: boolean): void;
    _performSetWindow(start: number, end: number): void;
}