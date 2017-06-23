var Styling = React.createClass({
    // initialize state
    getInitialState: function () {
        return {
            color: {
                red: 100,
                green: 100,
                blue: 100
            }
        };
    },
    // event handlers
    redChanged: function (s, e) {
        var c = this.state.color;
        this.setState({ color: { red: s.value, green: c.green, blue: c.blue } });
    },
    greenChanged: function (s, e) {
        var c = this.state.color;
        this.setState({ color: { red: c.red, green: s.value, blue: c.blue } });
    },
    blueChanged: function (s, e) {
        var c = this.state.color;
        this.setState({ color: { red: c.red, green: c.green, blue: s.value } });
    },
    // render the component
    render: function () {
        return React.createElement("div", null,
            React.createElement("h2", { id: "Styling" }, "Styling"),
            React.createElement("p", null, "The appearance of the gauge controls is primarily defined in CSS. To customize it, copy the CSS rules from the default theme to a new CSS file and modify the rules as needed."),
            React.createElement("p", null, "In this example, we added a \"custom-gauge\" class to the gauges and defined some CSS rules to customize the appearance of the gauge's \"face\" range and of the thumb. The custom CSS rules also use the \"wj-state-focused\" class to increase the size of the thumb when the gauge has the focus."),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6" },
                    React.createElement("div", null,
                        React.createElement("ul", { className: "nav nav-tabs", role: "tablist" },
                            React.createElement("li", { className: "active" },
                                React.createElement("a", { href: "#stJsx", role: "tab", "data-toggle": "tab" }, "JSX")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#stJs", role: "tab", "data-toggle": "tab" }, "JS")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#stCss", role: "tab", "data-toggle": "tab" }, "CSS"))),
                        React.createElement("div", { className: "tab-content" },
                            React.createElement("div", { className: "tab-pane active pane-content", id: "stJsx" },
                                '<h4>\n',
                                '    Use the gauges to edit this color:\n',
                                '    <span\n',
                                '        style={{\n',
                                '            border: \'1px solid #333\', \n',
                                '            backgroundColor: \'rgb(\' + this.state.color.red + \',\' + this.state.color.green + \',\' + this.state.color.blue + \')\' \n',
                                '        }}>\n',
                                '        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n',
                                '    </span>\n',
                                '</h4>\n',
                                '\n',
                                '<h4>\n',
                                '    Default Styles</h4>\n',
                                '<Wj.LinearGauge\n',
                                '    value={ this.state.color.red }\n',
                                '    valueChanged={ this.redChanged }\n',
                                '    min={ 0 } max={ 255 } step={ 5 }\n',
                                '    isReadOnly={ false }\n',
                                '    pointer={{ color: \'red\' }} />\n',
                                '<Wj.LinearGauge\n',
                                '    value={ this.state.color.green }\n',
                                '    valueChanged={ this.greenChanged }\n',
                                '    min={ 0 } max={ 255 } step={ 5 }\n',
                                '    isReadOnly={ false }\n',
                                '    pointer={{ color: \'green\' }} />\n',
                                '<Wj.LinearGauge\n',
                                '    value={ this.state.color.blue }\n',
                                '    valueChanged={ this.blueChanged }\n',
                                '    min={ 0 } max={ 255 } step={ 5 }\n',
                                '    isReadOnly={ false }\n',
                                '    pointer={{ color: \'blue\' }} />\n',
                                '\n',
                                '<h4>\n',
                                '    Custom CSS</h4>\n',
                                '<Wj.LinearGauge\n',
                                '    className="custom-gauge"\n',
                                '    value={ this.state.color.red }\n',
                                '    valueChanged={ this.redChanged }\n',
                                '    min={ 0 } max={ 255 } step={ 5 }\n',
                                '    isReadOnly={ false }\n',
                                '    thumbSize={ 10 }\n',
                                '    hasShadow={ false }\n',
                                '    face={{ thickness: 0.25 }}\n',
                                '    pointer={{ thickness: 0.25, color: \'red\' }}/>\n',
                                '<Wj.LinearGauge\n',
                                '    className="custom-gauge"\n',
                                '    value={ this.state.color.green }\n',
                                '    valueChanged={ this.greenChanged }\n',
                                '    min={ 0 } max={ 255 } step={ 5 }\n',
                                '    isReadOnly={ false }\n',
                                '    thumbSize={ 10 }\n',
                                '    hasShadow={ false }\n',
                                '    face={{ thickness: 0.25 }}\n',
                                '    pointer={{ thickness: 0.25, color: \'green\' }}/>\n',
                                '<Wj.LinearGauge\n',
                                '    className="custom-gauge"\n',
                                '    value={ this.state.color.blue }\n',
                                '    valueChanged={ this.blueChanged }\n',
                                '    min={ 0 } max={ 255 } step={ 5 }\n',
                                '    isReadOnly={ false }\n',
                                '    thumbSize={ 10 }\n',
                                '    hasShadow={ false }\n',
                                '    face={{ thickness: 0.25 }}\n',
                                '    pointer={{ thickness: 0.25, color: \'blue\' }}/>\n'),
                            React.createElement("div", { className: "tab-pane pane-content", id: "stJs" },
                                'getInitialState: function () {\n',
                                '    return {\n',
                                '        color: {\n',
                                '            red: 100,\n',
                                '            green: 100,\n',
                                '            blue: 100\n',
                                '        }\n',
                                '    }\n',
                                '},\n',
                                '\n',
                                '// event handlers\n',
                                'redChanged: function (s, e) {\n',
                                '    var c = this.state.color;\n',
                                '    this.setState({ color: { red: s.value, green: c.green, blue: c.blue }});\n',
                                '},\n',
                                'greenChanged: function (s, e) {\n',
                                '    var c = this.state.color;\n',
                                '    this.setState({ color: { red: c.red, green: s.value, blue: c.blue }});\n',
                                '},\n',
                                'blueChanged: function (s, e) {\n',
                                '    var c = this.state.color;\n',
                                '    this.setState({ color: { red: c.red, green: c.green, blue: s.value }});\n',
                                '}'),
                            React.createElement("div", { className: "tab-pane pane-content", id: "stCss" },
                                '.custom-gauge.wj-gauge {\n',
                                '    padding: 0px 10px;\n',
                                '}\n',
                                '.custom-gauge.wj-gauge .wj-face path {\n',
                                '    fill: #d0d0d0;\n',
                                '    stroke: none;\n',
                                '}\n',
                                '.custom-gauge.wj-gauge .wj-pointer path {\n',
                                '    fill: #404040;\n',
                                '    stroke: none;\n',
                                '}\n',
                                '.custom-gauge.wj-gauge circle.wj-pointer {\n',
                                '    fill: #404040;\n',
                                '    stroke: none;\n',
                                '}\n',
                                '.custom-gauge.wj-gauge.wj-state-focused circle.wj-pointer {\n',
                                '    fill: red;\n',
                                '    stroke: black;\n',
                                '    stroke-width: 8px;\n',
                                '}\n')))),
                React.createElement("div", { className: "col-md-6" },
                    React.createElement("h4", null, "Result (live): "),
                    React.createElement("h4", null,
                        "Use the gauges to edit this color:",
                        ' ',
                        React.createElement("span", { style: {
                                border: '1px solid #333',
                                backgroundColor: 'rgb(' + this.state.color.red + ',' + this.state.color.green + ',' + this.state.color.blue + ')'
                            } }, "\u00A0\u00A0\u00A0\u00A0\u00A0")),
                    React.createElement("h4", null, "Default Styles"),
                    React.createElement(Wj.LinearGauge, { value: this.state.color.red, valueChanged: this.redChanged, min: 0, max: 255, step: 5, isReadOnly: false, pointer: { color: 'red' } }),
                    React.createElement(Wj.LinearGauge, { value: this.state.color.green, valueChanged: this.greenChanged, min: 0, max: 255, step: 5, isReadOnly: false, pointer: { color: 'green' } }),
                    React.createElement(Wj.LinearGauge, { value: this.state.color.blue, valueChanged: this.blueChanged, min: 0, max: 255, step: 5, isReadOnly: false, pointer: { color: 'blue' } }),
                    React.createElement("h4", null, "Custom CSS"),
                    React.createElement(Wj.LinearGauge, { className: "custom-gauge", value: this.state.color.red, valueChanged: this.redChanged, min: 0, max: 255, step: 5, isReadOnly: false, thumbSize: 10, hasShadow: false, face: { thickness: 0.25 }, pointer: { thickness: 0.25, color: 'red' } }),
                    React.createElement(Wj.LinearGauge, { className: "custom-gauge", value: this.state.color.green, valueChanged: this.greenChanged, min: 0, max: 255, step: 5, isReadOnly: false, thumbSize: 10, hasShadow: false, face: { thickness: 0.25 }, pointer: { thickness: 0.25, color: 'green' } }),
                    React.createElement(Wj.LinearGauge, { className: "custom-gauge", value: this.state.color.blue, valueChanged: this.blueChanged, min: 0, max: 255, step: 5, isReadOnly: false, thumbSize: 10, hasShadow: false, face: { thickness: 0.25 }, pointer: { thickness: 0.25, color: 'blue' } }))));
    }
});
//# sourceMappingURL=Styling.js.map