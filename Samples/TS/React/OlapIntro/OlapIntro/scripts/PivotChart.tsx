declare var React: any;

var PivotChart = React.createClass({

    // initialize chart properties
    getInitialState: function () {
        return {
            chartType: 'Column',
            showLegend: 'Auto',
            showTitle: true
        }
    },

    // store reference to pivot chart control
    initChart: function (s, e) {
        this.setState({ theChart: s });
    },

    // change the chart properties
    chartTypeChanged: function (s, e) {
        this.setState({ chartType: s.text });
    },
    showLegendChanged: function (s, e) {
        this.setState({ showLegend: s.text });
    },
    showTitleChanged: function (e) {
        this.setState({ showTitle: e.target.checked });
    },

    render: function () {
        return <div>
            <h4>
                Show the results in a PivotChart</h4>
            <p>
                The <b>PivotChart</b> control provides a graphical visualization of the results.
                It is similar to Excel's pivot charts, including support for multiple chart
                types and hierarchical axes.</p>
            <p>
                To use the <b>PivotChart</b> control, connect it to a <b>PivotPanel</b> using
                the <b>itemsSource</b> property:</p>

            <div style={{ display: this.props.engine.isViewDefined ? 'none' : '' }}>
                <p>
                    Please create a view in order to see the chart.</p>
            </div>
            <div style={{ display: this.props.engine.isViewDefined ? '' : 'none' }}>
                <dl className="dl-horizontal">
                    <dt>Chart Type</dt>
                    <dd>
                        <Wj.ComboBox
                            itemsSource={ 'Column,Bar,Scatter,Line,Area,Pie'.split(',') }
                            text={ this.state.chartType }
                            textChanged={ this.chartTypeChanged }>
                        </Wj.ComboBox>
                    </dd>
                    <dt>Show Legend</dt>
                    <dd>
                        <Wj.ComboBox
                            itemsSource={ 'Always,Never,Auto'.split(',') }
                            text={ this.state.showLegend }
                            textChanged={ this.showLegendChanged }>
                        </Wj.ComboBox>
                    </dd>
                    <dt>Show Title</dt>
                    <dd>
                        <input
                            type="checkbox"
                            checked={ this.state.showTitle }
                            onChange={ this.showTitleChanged } />
                    </dd>
                </dl>
                <Wj.PivotChart
                    chartType={ this.state.chartType }
                    showTitle={ this.state.showTitle }
                    showLegend={ this.state.showLegend }
                    itemsSource={ this.props.engine }
                    initialized={ this.initChart }>
                </Wj.PivotChart>
            </div>

            <div className="source-card mdl-card mdl-shadow--2dp">
                <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                    <div className="mdl-tabs__tab-bar">
                        <a href="#html-chart" className="mdl-tabs__tab">JSX</a>
                        <a href="#js-chart" className="mdl-tabs__tab">JS</a>
                        <a href="#close-chart" className="mdl-tabs__tab is-active">X</a>
                    </div>
                    <div className="mdl-tabs__panel" id="html-chart">
                        <code className="pane-content">
                            {'<div style={{ display: this.props.engine.isViewDefined ? \'none\' : \'\' }}>\n'}
                            {'    <p>\n'}
                            {'        Please create a view in order to see the chart.</p>\n'}
                            {'</div>\n'}
                            {'<div style={{ display: this.props.engine.isViewDefined ? \'\' : \'none\' }}>\n'}
                            {'    <dl className="dl-horizontal">\n'}
                            {'        <dt>Chart Type</dt>\n'}
                            {'        <dd>\n'}
                            {'            <Wj.ComboBox\n'}
                            {'                itemsSource={ \'Column,Bar,Scatter,Line,Area,Pie\'.split(\',\') }\n'}
                            {'                text={ this.state.chartType }\n'}
                            {'                textChanged={ this.chartTypeChanged }>\n'}
                            {'            </Wj.ComboBox>\n'}
                            {'        </dd>\n'}
                            {'        <dt>Show Legend</dt>\n'}
                            {'        <dd>\n'}
                            {'            <Wj.ComboBox\n'}
                            {'                itemsSource={ \'Always,Never,Auto\'.split(\',\') }\n'}
                            {'                text={ this.state.showLegend }\n'}
                            {'                textChanged={ this.showLegendChanged }>\n'}
                            {'            </Wj.ComboBox>\n'}
                            {'        </dd>\n'}
                            {'        <dt>Show Title</dt>\n'}
                            {'        <dd>\n'}
                            {'            <input type="checkbox"\n'}
                            {'                checked={ this.state.showTitle }\n'}
                            {'                onChange={ this.showTitleChanged } />\n'}
                            {'        </dd>\n'}
                            {'    </dl>\n'}
                            {'    <Wj.PivotChart\n'}
                            {'        chartType={ this.state.chartType }\n'}
                            {'        showTitle={ this.state.showTitle }\n'}
                            {'        showLegend={ this.state.showLegend }\n'}
                            {'        itemsSource={ this.props.engine }\n'}
                            {'        initialized={ this.initChart }>\n'}
                            {'    </Wj.PivotChart>\n'}
                            {'</div>'}
                        </code>
                    </div>
                    <div className="mdl-tabs__panel" id="js-chart">
                        <code className="pane-content">
                            {'// store reference to pivot chart control\n'}
                            {'initChart: function (s, e) {\n'}
                            {'    this.setState({ theChart: s });\n'}
                            {'},\n'}
                            {'\n'}
                            {'// change the chart properties\n'}
                            {'chartTypeChanged: function (s, e) {\n'}
                            {'    this.state.theChart.chartType = s.text;\n'}
                            {'}'}
                            {'showLegendChanged: function (s, e) {\n'}
                            {'    this.state.theChart.showLegend = s.text;\n'}
                            {'},\n'}
                            {'showTitleChanged: function (e) {\n'}
                            {'    this.state.theChart.showTitle = e.target.checked;\n'}
                            {'},\n'}
                            {'getShowTitle() {\n'}
                            {'    return this.state.theChart ? this.state.theChart.showTitle : true;\n'}
                            {'},\n'}
                        </code>
                    </div>
                    <div className="mdl-tabs__panel" id="close-chart">
                    </div>
                </div>
            </div>
        </div>;
    }
});
