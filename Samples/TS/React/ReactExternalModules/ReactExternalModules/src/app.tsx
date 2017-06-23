//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//Wijmo
import * as wjInput from 'wijmo/wijmo.react.input';
import * as wjGrid from 'wijmo/wijmo.react.grid';
import * as wjChart from 'wijmo/wijmo.react.chart';
//Application
import { DataService } from './services/DataSvc';

class App extends React.Component {
    state = {
        theValue: null,
        theDate: null,
        data: null,
        chartData: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            theValue: 7,
            theDate: new Date(),
            data: DataService.default.getData(100),
            chartData: DataService.default.getData(6),
        };
    } 
    render () {
        return <div>
            <h1>Using Wijmo for React external modules in WebPack and SystemJS</h1>
            <p>
                This sample uses external module versions of the Wijmo for React interop,
                and shows how to:
            </p>
            <ul>
                <li>
                    Bundle it
                    by <a href="https://webpack.js.org/" target="_blank">WebPack 2</a> and
                    run using wpbundle.html page. Wijmo modules in CommonJS and AMD formats can be used.
                </li>
                <li>
                    Run it using <a href="https://github.com/systemjs/systemjs" target="_blank">SystemJS</a> loader
                    (default.htm page). Wijmo modules in CommonJS, AMD and System formats can be used.
                </li>
            </ul>
            <p>
                Npm images containing Wijmo external modules in different module formats can be found under the
                NpmImages folder in Wijmo download zip.
            </p>

            <h3>Components from the wijmo.react.input module</h3>
            <wjInput.InputNumber format="c2" step={1} value={this.state.theValue} />
            <br />
            <br />
            <wjInput.InputDate value={this.state.theDate} />
            <br />
            <br />

            <h3>Components from the wijmo.react.grid module</h3>
            <wjGrid.FlexGrid
                autoGenerateColumns={false}
                columns={[
                    { header: 'Country', binding: 'country', width: '*' },
                    { header: 'Date', binding: 'date' },
                    { header: 'Sales', binding: 'sales', format: 'c2' }
                ]}
                itemsSource={this.state.data}
                style={{ height: '250px', width: '500px' }}
            />
            <br />

            <h3>Components from the wijmo.react.chart module</h3>
            <wjChart.FlexChart
                itemsSource={this.state.chartData}
                bindingX="country"
                series={[
                    { name: 'Sales', binding: 'sales' },
                    { name: 'Downloads', binding: 'downloads' }
                ]} />
        </div>;
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));