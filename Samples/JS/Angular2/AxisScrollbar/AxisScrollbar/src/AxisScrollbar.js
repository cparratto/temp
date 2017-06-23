"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var wjcCore = require("wijmo/wijmo");
var wjcChart = require("wijmo/wijmo.chart");
var wjcChartInteraction = require("wijmo/wijmo.chart.interaction");
var wjcSelf = require("./AxisScrollbar");
window['AxisScrollbar'] = wjcSelf;
'use strict';
/**
    * The @see:AxisScrollbar control displays a scrollbar that allows the user to
    * choose the range of Axis.

    */
var AxisScrollbar = (function () {
    /**
        * Initializes a new instance of the @see:AxisScrollbar control.
        *
        * @param axis The axis that displays scrollbar.
        * @param options A JavaScript object containing initialization data for the control.
        */
    function AxisScrollbar(axis, options) {
        // fields
        this._isVisible = true;
        this._min = null;
        this._max = null;
        this._buttonsVisible = true;
        this._minScale = 0.01;
        // host
        this._chart = null;
        this._axis = null;
        this._rangeSlider = null;
        // elements
        this._slbarContainer = null;
        this._isXAxis = true;
        this._chartRefreshDelay = null;
        if (!axis) {
            wjcCore.assert(false, 'The Axis cannot be null.');
        }
        this._axis = axis;
        this._chart = axis._chart;
        this._isXAxis = this._axis.axisType === wjcChart.AxisType.X;
        wjcCore.copy(this, options);
        this._createScrollbar();
    }
    Object.defineProperty(AxisScrollbar.prototype, "buttonsVisible", {
        /**
            * Gets or sets the decrease button and increase button is visible or not.
            */
        get: function () {
            return this._buttonsVisible;
        },
        set: function (value) {
            if (value !== this._buttonsVisible) {
                this._buttonsVisible = wjcCore.asBoolean(value);
                if (!this._rangeSlider) {
                    return;
                }
                this._rangeSlider.buttonsVisible = this._buttonsVisible;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisScrollbar.prototype, "isVisible", {
        /**
            * Gets or sets the visibility of the Axis scrollbar.
            */
        get: function () {
            return this._isVisible;
        },
        set: function (value) {
            if (value != this._isVisible) {
                this._isVisible = wjcCore.asBoolean(value);
                if (!this._rangeSlider) {
                    return;
                }
                this._rangeSlider.isVisible = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AxisScrollbar.prototype, "minScale", {
        /**
            * Gets or sets the minimum range scale of the Axis scrollbar.
            * The minimum range scale should be greater than zero.
            */
        get: function () {
            return this._minScale;
        },
        set: function (value) {
            if (value > 0 && value != this._minScale) {
                this._minScale = wjcCore.asNumber(value);
                if (!this._rangeSlider) {
                    return;
                }
                this._rangeSlider.minScale = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
        * Removes the range selector from the chart.
        */
    AxisScrollbar.prototype.remove = function () {
        if (this._slbarContainer) {
            this._chart.hostElement.removeChild(this._slbarContainer);
            this._switchEvent(false);
            this._slbarContainer = null;
        }
    };
    AxisScrollbar.prototype._createScrollbar = function () {
        var chart = this._chart, chartHostEle = chart.hostElement;
        this._slbarContainer = wjcCore.createElement('<div class="wj-axis-scrollbar-container"></div>');
        this._rangeSlider = new wjcChartInteraction._RangeSlider(this._slbarContainer, true, // has space click function
        true, // has dec and inc buttons
        {
            buttonsVisible: this._buttonsVisible,
            isHorizontal: this._isXAxis,
            isVisible: this._isVisible,
            minScale: this._minScale
        });
        chartHostEle.appendChild(this._slbarContainer);
        this._switchEvent(true);
    };
    AxisScrollbar.prototype._switchEvent = function (isOn) {
        var eventListener = isOn ? 'addEventListener' : 'removeEventListener', eventHandler = isOn ? 'addHandler' : 'removeHandler';
        if (this._chart.hostElement) {
            this._chart.rendered[eventHandler](this._refresh, this);
            this._rangeSlider.rangeChanged[eventHandler](this._updateAxisRange, this);
            this._rangeSlider.rangeChanging[eventHandler](this._updatingAxisRange, this);
        }
    };
    AxisScrollbar.prototype._refresh = function () {
        var chartHostEle = this._chart.hostElement, rangeSlider = this._rangeSlider, pa, pOffset, plotBox, axisRect = this._axis._axrect, axisEle, axisOffset, isBottom, isLeft, rsWidth, rOffset = wjcCore.getElementRect(this._slbarContainer);
        if (rangeSlider._isSliding) {
            return;
        }
        // initialize the scrollbar range
        if (this._min === null) {
            this._min = wjcCore.isDate(this._axis.actualMin) ? this._axis.actualMin.valueOf() : this._axis.actualMin;
        }
        if (this._max === null) {
            this._max = wjcCore.isDate(this._axis.actualMax) ? this._axis.actualMax.valueOf() : this._axis.actualMax;
        }
        pa = chartHostEle.querySelector('.' + wjcChart.FlexChart._CSS_PLOT_AREA);
        pOffset = wjcCore.getElementRect(pa);
        plotBox = pa.getBBox(pa);
        //TODO: get the axis element when has multiple axes
        axisEle = chartHostEle.querySelector(this._isXAxis ? '.wj-axis-x' : '.wj-axis-y');
        axisOffset = wjcCore.getElementRect(axisEle);
        if (axisOffset.height === 0) {
            return;
        }
        if (this._isXAxis) {
            isBottom = this._axis.position === wjcChart.Position.Bottom;
            rangeSlider._refresh({
                left: plotBox.x,
                top: isBottom ? axisOffset.top + axisOffset.height - rOffset.top :
                    axisOffset.top - rOffset.top - axisOffset.height,
                width: plotBox.width
            });
        }
        else {
            isLeft = this._axis.position === wjcChart.Position.Left;
            rsWidth = rangeSlider._handleWidth;
            rangeSlider._refresh({
                left: isLeft ? axisOffset.left - rOffset.left - rsWidth :
                    axisOffset.left - rOffset.left + pOffset.width + this._axis._axrect.width,
                top: pOffset.top - rOffset.top,
                height: plotBox.height
            });
        }
    };
    AxisScrollbar.prototype._updateAxisRange = function () {
        var chart, axis, range, rangeSlider = this._rangeSlider;
        chart = this._chart;
        axis = this._axis;
        range = this._max - this._min;
        if (axis.reversed) {
            axis.min = this._max - rangeSlider._maxPos * range;
            axis.max = this._max - rangeSlider._minPos * range;
        }
        else {
            axis.min = this._min + rangeSlider._minPos * range;
            axis.max = this._min + rangeSlider._maxPos * range;
        }
        chart.invalidate();
    };
    AxisScrollbar.prototype._updatingAxisRange = function () {
        var self = this;
        this._chartRefreshDelay = window.setTimeout(function () {
            if (self._chartRefreshDelay) {
                clearTimeout(self._chartRefreshDelay);
                self._chartRefreshDelay = null;
            }
            self._updateAxisRange();
        }, 200);
    };
    return AxisScrollbar;
}());
exports.AxisScrollbar = AxisScrollbar;
//# sourceMappingURL=AxisScrollbar.js.map