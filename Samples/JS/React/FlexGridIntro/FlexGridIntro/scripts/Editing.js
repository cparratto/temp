var Editing = React.createClass({
    render: function () {
        return React.createElement("div", null,
            React.createElement("h2", null, "Editing"),
            React.createElement("p", null, "FlexGrid has built-in support for fast, in-cell editing like you find in Microsoft Excel. There is no need to add extra columns with Edit buttons that switch between display and edit modes."),
            React.createElement("p", null, "Users can start editing by typing into any cell. This puts the cell in quick-edit mode. In this mode, pressing a cursor key finishes the editing and moves the selection to a different cell."),
            React.createElement("p", null, "Another way to start editing is by pressing F2 or by clicking a cell twice. This puts the cell in full-edit mode. In this mode, pressing a cursor key moves the caret within the cell text. To finish editing and move to another cell, user must press the Enter, Tab, or Escape key."),
            React.createElement("p", null, "Data is automatically coerced to the proper type when editing finishes. If the user enters invalid data, the edit is cancelled and the original data remains in place."),
            React.createElement("p", null,
                "You can disable editing at the grid, column, or row levels using the ",
                React.createElement("b", null, "isReadOnly"),
                " property of the grid, column, or row objects. In this example, we make the ID column read-only."),
            React.createElement("p", null,
                "You can add drop-down lists to cells using the ",
                React.createElement("b", null, "dataMap"),
                " property of the column objects. In this example, we provide a list of valid countries that the user must choose from."),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-6" },
                    React.createElement("ul", { className: "nav nav-tabs", role: "tablist" },
                        React.createElement("li", { className: "active" },
                            React.createElement("a", { href: "#edJsx", role: "tab", "data-toggle": "tab" }, "JSX")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#edJs", role: "tab", "data-toggle": "tab" }, "JS"))),
                    React.createElement("div", { className: "tab-content" },
                        React.createElement("div", { className: "tab-pane active pane-content", id: "edJsx" },
                            '<Wj.FlexGrid\n',
                            '    autoGenerateColumns={ false }\n',
                            '    columns={[\n',
                            '        { header: \'ID\', binding: \'id\', isReadOnly: true },\n',
                            '        { header: \'Country\', binding: \'country\', dataMap: Util.getCountries() },\n',
                            '        { header: \'Date\', binding: \'date\' },\n',
                            '        { header: \'Revenue\', binding: \'amount\', format: \'n0\' },\n',
                            '        { header: \'Active\', binding: \'active\' }\n',
                            '    ]}\n',
                            '    itemsSource={ Util.getData() }/>\n'),
                        React.createElement("div", { className: "tab-pane pane-content", id: "edJs" },
                            'function getCountries() {\n',
                            '    return \'US,Germany,UK,Japan,Italy,Greece\'.split(\',\');\n',
                            '}\n',
                            'function getData() {\n',
                            '    var countries = getCountries(),\n',
                            '        data = [];\n',
                            '    for (var i = 0; i < 100; i++) {\n',
                            '        data.push({\n',
                            '            id: i,\n',
                            '            country: countries[i % countries.length],\n',
                            '            date: new Date(2014, i % 12, i % 28),\n',
                            '            amount: Math.random() * 10000,\n',
                            '            active: i % 4 == 0\n',
                            '        });\n',
                            '    }\n',
                            '    return data;\n',
                            '}'))),
                React.createElement("div", { className: "col-md-6" },
                    React.createElement("h4", null, "Result (live):"),
                    React.createElement(Wj.FlexGrid, { autoGenerateColumns: false, columns: [
                            { header: 'ID', binding: 'id', isReadOnly: true },
                            { header: 'Country', binding: 'country', dataMap: Util.getCountries() },
                            { header: 'Date', binding: 'date' },
                            { header: 'Revenue', binding: 'amount', format: 'n0' },
                            { header: 'Active', binding: 'active' }
                        ], itemsSource: Util.getData() }))));
    }
});
//# sourceMappingURL=Editing.js.map