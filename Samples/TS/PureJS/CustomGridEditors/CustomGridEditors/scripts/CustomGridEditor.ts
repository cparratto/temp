class CustomGridEditor {
    _grid: wijmo.grid.FlexGrid;
    _col: wijmo.grid.Column;
    _ctl: wijmo.Control;
    _rng: wijmo.grid.CellRange;
    _openDropDown: boolean;

    /**
     * Initializes a new instance of a CustomGridEditor.
     */
    constructor(flex: wijmo.grid.FlexGrid, binding: string, edtClass: any, options: any) {

        // save references
        this._grid = flex;
        this._col = flex.columns.getColumn(binding);

        // create editor
        this._ctl = new edtClass(document.createElement('div'), options);

        // connect grid events
        this._grid.beginningEdit.addHandler(this._beginningEdit, this);
        this._grid.scrollPositionChanged.addHandler(this._closeEditor, this);

        // connect editor events
        this._ctl.addEventListener(this._ctl.hostElement, 'keydown', (e: KeyboardEvent) => {
            switch (e.keyCode) {
                case wijmo.Key.Tab:
                case wijmo.Key.Enter:
                    this._closeEditor(true);
                    this._grid.focus();

                    // forward event to the grid so it will move the selection
                    var evt = document.createEvent('HTMLEvents');
                    evt.initEvent('keydown', true, true);
                    evt['ctrlKey'] = e.ctrlKey;
                    evt['shiftKey'] = e.shiftKey;
                    evt['keyCode'] = e.keyCode;
                    this._grid.hostElement.dispatchEvent(evt);
                    break;

                case wijmo.Key.Escape:
                    this._closeEditor(false);
                    this._grid.focus();
                    break;
            }
        });
        this._ctl.lostFocus.addHandler(() => {
            setTimeout(() => { // Chrome/FireFox need a timeOut here... (TFS 138985)
                if (!this._ctl.containsFocus()) {
                    this._closeEditor(true);
                }
            });
        });

        // open drop-down on f4/alt-down
        this._grid.addEventListener(this._grid.hostElement, 'keydown', (e: KeyboardEvent) => {
            this._openDropDown = false;
            if (e.keyCode == wijmo.Key.F4 ||
                (e.altKey && (e.keyCode == wijmo.Key.Down || e.keyCode == wijmo.Key.Up))) {
                var colIndex = this._grid.selection.col;
                if (colIndex > -1 && this._grid.columns[colIndex] == this._col) {
                    this._openDropDown = true;
                    this._grid.startEditing(true);
                    e.preventDefault();
                }
            }
        }, true);

        // close editor when user resizes the window
        window.addEventListener('resize', () => {
            if (this._ctl.containsFocus()) {
                this._closeEditor(true);
                this._grid.focus();
            }
        });
    }

    // gets an instance of the control being hosted by this grid editor
    get control() {
        return this._ctl;
    }

    // handle the grid's beginningEdit event by canceling the built-in editor,
    // initializing the custom editor and giving it the focus.
    _beginningEdit(grid: wijmo.grid.FlexGrid, args: wijmo.grid.CellRangeEventArgs) {

        // check that this is our column
        if (grid.columns[args.col] != this._col) {
            return;
        }

        // check that this is not the Delete key
        // (which is used to clear cells and should not be messed with)
        var evt = args.data;
        if (evt && evt.keyCode == wijmo.Key.Delete) {
            return;
        }

        // cancel built-in editor
        args.cancel = true;

        // save cell being edited
        this._rng = args.range;

        // initialize editor host
        var rc = grid.getCellBoundingRect(args.row, args.col);
        wijmo.setCss(this._ctl.hostElement, {
            position: 'absolute',
            left: rc.left - 1 + pageXOffset,
            top: rc.top - 1 + pageYOffset,
            width: rc.width + 1,
            height: grid.rows[args.row].renderHeight + 1,
            borderRadius: '0px'
        });

        // initialize editor content
        if (!wijmo.isUndefined(this._ctl['text'])) {
            this._ctl['text'] = grid.getCellData(this._rng.row, this._rng.col, true);
        } else {
            throw 'Can\'t set editor value/text...';
        }

        // start editing item
        var ecv = wijmo.tryCast(grid.collectionView, 'IEditableCollectionView'),
            item = grid.rows[args.row].dataItem;
        if (ecv && item) {
            setTimeout(function () {
                ecv.editItem(item);
            }, 210); // FlexGrid commits edits 200ms after losing focus
        }

        // activate editor
        document.body.appendChild(this._ctl.hostElement);
        this._ctl.focus();
        setTimeout(() => {

            // get the key that triggered the editor
            var key = (evt && evt.charCode > 32)
                ? String.fromCharCode(evt.charCode)
                : null;

            // get input element in the control
            var input = <HTMLInputElement>this._ctl.hostElement.querySelector('input');

            // send key to editor
            if (input) {
                if (key) {
                    input.value = key;
                    wijmo.setSelectionRange(input, key.length, key.length);
                    var evtInput = document.createEvent('HTMLEvents');
                    evtInput.initEvent('input', true, false);
                    input.dispatchEvent(evtInput);
                } else {
                    input.select();
                }
            }

            // give the control focus
            if (!input && !this._openDropDown) {
                this._ctl.focus();
            }

            // open drop-down on F4/alt-down
            if (this._openDropDown && this._ctl instanceof wijmo.input.DropDown) {
                this._ctl.isDroppedDown = true;
                this._ctl.dropDown.focus();
            }

        }, 50);
    }

    // close the custom editor, optionally saving the edits back to the grid
    _closeEditor(saveEdits: boolean) {
        if (this._rng) {
            var grid = this._grid,
                ctl = this._ctl,
                host = ctl.hostElement;

            // raise grid's cellEditEnding event
            var e = new wijmo.grid.CellEditEndingEventArgs(grid.cells, this._rng);
            grid.onCellEditEnding(e);

            // save editor value into grid
            if (saveEdits) {
                if (!wijmo.isUndefined(ctl['value'])) {
                    this._grid.setCellData(this._rng.row, this._rng.col, ctl['value']);
                } else if (!wijmo.isUndefined(ctl['text'])) {
                    this._grid.setCellData(this._rng.row, this._rng.col, ctl['text']);
                } else {
                    throw 'Can\'t get editor value/text...';
                }
                this._grid.invalidate();
            }

            // close editor and remove it from the DOM
            if (ctl instanceof wijmo.input.DropDown) {
                ctl.isDroppedDown = false;
            }
            host.parentElement.removeChild(host);
            this._rng = null;

            // raise grid's cellEditEnded event
            grid.onCellEditEnded(e);
        }
    }
}