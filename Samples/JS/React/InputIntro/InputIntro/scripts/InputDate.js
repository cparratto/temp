var InputDate = React.createClass({
    getInitialState: function () {
        var today = new Date();
        return {
            theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),
            minDate: new Date(today.getFullYear(), 0, 1),
            maxDate: new Date(today.getFullYear(), 11, 31)
        };
    },
    // Wijmo event handlers
    formatItem: function (s, e) {
        var weekday = e.data.getDay(), holiday = Util.getHoliday(e.data);
        wijmo.toggleClass(e.item, 'date-weekend', weekday == 0 || weekday == 6);
        wijmo.toggleClass(e.item, 'date-holiday', !!holiday);
        e.item.title = holiday;
    },
    dateChanged: function (s, e) {
        this.setState({ theDate: s.value });
    },
    render: function () {
        return React.createElement("div", null,
            React.createElement("h2", null, "InputDate and Calendar"),
            React.createElement("p", null, "The InputDate control allows you to edit and select dates through a drop-down calendar, preventing you from entering an incorrect value. The InputDate's drop-down calendar was developed as a separate control and can be used be used independently from the InputDate control."),
            React.createElement("p", null, "Both InputDate and Calendar, specify several properties to alter the controls' behavior. The most commonly used properties include:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("b", null, "value"),
                    ": Specifies the date value for the control."),
                React.createElement("li", null,
                    React.createElement("b", null, "min"),
                    ": Specifies the minimum date value that can be entered in the control."),
                React.createElement("li", null,
                    React.createElement("b", null, "max"),
                    ": Specifies the maximum date value that can be entered in the control.")),
            React.createElement("p", null, "The example below demonstrates how to use each of these properties."),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6" },
                    React.createElement("div", null,
                        React.createElement("ul", { className: "nav nav-tabs", role: "tablist" },
                            React.createElement("li", { className: "active" },
                                React.createElement("a", { href: "#idJsx", role: "tab", "data-toggle": "tab" }, "JSX")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#idJs", role: "tab", "data-toggle": "tab" }, "JS"))),
                        React.createElement("div", { className: "tab-content" },
                            React.createElement("div", { className: "tab-pane active pane-content", id: "idJsx" },
                                '<div className="app-input-group">\n',
                                '    <label>Bound InputDate with min & max: </label>\n',
                                '    <Wj.InputDate\n',
                                '        value={ this.state.theDate }\n',
                                '        min={ this.state.minDate }\n',
                                '        max={ this.state.maxDate }\n',
                                '        valueChanged={ this.dateChanged }/>\n',
                                '</div>\n',
                                '<div className="app-input-group">\n',
                                '    <label>Bound Calendar with min & max: </label>\n',
                                '    <Wj.Calendar\n',
                                '        style={{ width: \'300px\' }}\n',
                                '        value={ this.state.theDate }\n',
                                '        min={ this.state.minDate }\n',
                                '        max={ this.state.maxDate }\n',
                                '        formatItem={ this.formatItem }\n',
                                '        valueChanged={ this.dateChanged }/>\n',
                                '</div>\n',
                                '<p>\n',
                                '    Selected Date: <b>{Util.format(this.state.theDate, \'D\') }</b>\n',
                                '</p>\n',
                                '<p>\n',
                                '    <b>\n',
                                '        Valid Range:\n',
                                '        { Util.format(this.state.minDate, \'d\') } to\n',
                                '        { Util.format(this.state.maxDate, \'d\') }\n',
                                '    </b>\n',
                                '</p>\n'),
                            React.createElement("div", { className: "tab-pane pane-content", id: "idJs" },
                                'getInitialState: function () {\n',
                                '    var today = new Date();\n',
                                '    return {\n',
                                '        theDate: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30),\n',
                                '        minDate: new Date(today.getFullYear(), 0, 1),\n',
                                '        maxDate: new Date(today.getFullYear(), 11, 31)\n',
                                '    }\n',
                                '},\n',
                                '\n',
                                '// Wijmo event handlers\n',
                                'formatItem: function (s, e) {\n',
                                '    var weekday = e.data.getDay(),\n',
                                '        holiday = Util.getHoliday(e.data);\n',
                                '    wijmo.toggleClass(e.item, \'date-weekend\', weekday == 0 || weekday == 6);\n',
                                '    wijmo.toggleClass(e.item, \'date-holiday\', !!holiday);\n',
                                '    e.item.title = holiday;\n',
                                '},\n',
                                'dateChanged: function (s, e) {\n',
                                '    this.setState({ theDate: s.value });\n',
                                '}')))),
                React.createElement("div", { className: "col-md-6" },
                    React.createElement("h4", null, "Result (live): "),
                    React.createElement("div", { className: "app-input-group" },
                        React.createElement("label", null, "Bound InputDate with min & max: "),
                        React.createElement(Wj.InputDate, { value: this.state.theDate, min: this.state.minDate, max: this.state.maxDate, valueChanged: this.dateChanged })),
                    React.createElement("div", { className: "app-input-group" },
                        React.createElement("label", null, "Bound Calendar with min & max: "),
                        React.createElement(Wj.Calendar, { style: { width: '300px' }, value: this.state.theDate, min: this.state.minDate, max: this.state.maxDate, formatItem: this.formatItem, valueChanged: this.dateChanged })),
                    React.createElement("p", null,
                        "Selected Date: ",
                        React.createElement("b", null, Util.format(this.state.theDate, 'D'))),
                    React.createElement("p", null,
                        React.createElement("b", null,
                            "Valid Range: ",
                            ' ',
                            Util.format(this.state.minDate, 'd'),
                            " to",
                            ' ',
                            Util.format(this.state.maxDate, 'd'))))));
    }
});
//# sourceMappingURL=InputDate.js.map