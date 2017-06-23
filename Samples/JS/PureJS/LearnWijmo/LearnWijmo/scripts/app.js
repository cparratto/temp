onload = function () {

    // https://www.npmjs.com/package/jsfiddle-downloader
    //  npm install jsfiddle-downloader -g
    // To download all scripts of a given 'user' from jsFiddle.net:
    //  jsfiddle-downloader -u <user> [-o <output file>]

    // create tree
    var tree = new wijmo.nav.TreeView('#treeView', {
        displayMemberPath: 'header',
        childItemsPath: 'items',
        itemsSource: toc,
        formatItem: function (s, e) {
            var elem = e.element;
            if (e.dataItem.module) {
                var template = '<span class="module-icon module-icon-{symbol}" title="{fileName}">{symbol}</span> ';
                var icon = wijmo.format(template, e.dataItem.module);
                elem.innerHTML = icon + elem.innerHTML;
            }
            if (!e.dataItem.id || e.dataItem.id[0] == '?') {
                elem.style.color = 'red';
            }
        }
    });
    var msg = wijmo.Globalize.format(tree.totalItemCount, 'n0') + ' Lessons Available!';
    document.getElementById('itemCount').textContent = msg;

    // show selected item on click or enter
    tree.addEventListener(tree.hostElement, 'click', function (e) {
        location.hash = tree.selectedItem.id;
    });
    tree.addEventListener(tree.hostElement, 'keydown', function (e) {
        if (e.keyCode == wijmo.Key.Enter) {
            e.preventDefault();
            location.hash = tree.selectedItem.id;
        }
    });

    // show item's fiddle in fiddle frame
    var fiddleFrame = document.getElementById('fiddleFrame');
    function showFiddle(item) {
        if (item && item.id && item.id.indexOf('?') < 0) {
            var src = 'http://jsfiddle.net/Wijmo5/' +
                item.id.replace(/^=+/g, '') + // aliases start with '=' characters
                '/embedded/result,html,js,css/';
            if (src != fiddleFrame.src) {
                fiddleFrame.src = src;
            }
        }
    }

    // simple routing
    // http://joakim.beng.se/blog/posts/a-javascript-router-in-20-lines.html
    function router() {

        // select item, show fiddle
        var id = location.hash.slice(1);
        var item = findItem(toc, id) || toc[0];
        tree.selectedItem = item;
        showFiddle(item);

        // update page title (for SEO)
        var path = tree.selectedPath;
        var title = path[path.length - 1];
        document.title = title + ' | Learn Wijmo';
    }
    addEventListener('hashchange', router);
    router();

    // find an item in a hierarchical list by its id
    function findItem(list, id) {
        if (list && id) {
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                if (item.id == id) {
                    return item;
                }
                if (item.items) {
                    item = findItem(item.items, id);
                    if (item != null) {
                        return item;
                    }
                }
            }
        }
        return null;
    }
}

// define modules to show in the UI
var modules = {
    wijmo: { fileName: 'wijmo.js', symbol: 'Wj' },
    flexGrid: { fileName: 'wijmo.grid.js', symbol: 'Gr' },
    input: { fileName: 'wijmo.input.js', symbol: 'In' },
    chart: { fileName: 'wijmo.chart.js', symbol: 'Ch' },
    gauge: { fileName: 'wijmo.gauge.js', symbol: 'Ga' },
    nav: { fileName: 'wijmo.nav.js', symbol: 'Nv' },
    olap: { fileName: 'wijmo.olap.js', symbol: 'Ol' },
    viewer: { fileName: 'wijmo.viewer.js', symbol: 'Vw' }
};

// table of contents
// NOTE: the same fiddle can be included in multiple topics using 
// the same id; the 'ensureUniqueIds' function below will make 
// IDs unique so routing works OK for the duplicates.
var toc = [
    {
        header: 'Wijmo', module: modules.wijmo, id: 'oL3msc5j', items: [
          { header: 'Referencing Wijmo 5', id: 't2h58s45' },
          { header: 'Creating Controls', id: '4w5vzopr' },
          { header: 'Controls and Elements', id: 'h79d5u77' },
          { header: 'Properties and Enums', id: '2mk8w9av' },
          {
              header: 'Wijmo Events', id: '9tkuuf5t', items: [
                { header: 'HTML Events', id: 'yaameL1e' }]
          },
          { header: 'Themes', id: 'eug3yfe56' },
          {
              header: 'Pseudo Classes', id: 'gp1er53j', items: [
                { header: 'FlexGrid Focus', id: '3ydpcqet' }]
          },
          {
              header: 'Globalization', id: 'euta6t2d', items: [
                { header: 'Formatting', id: 'u9fo3ynp' },
                { header: 'Parsing', id: 'bjtfttf5' },
                { header: 'Customization', id: 'crpozugn' },
                {
                    header: 'wijmo.format', id: '1ot27737', items: [
                      { header: 'Pluralization', id: '69wx5mhz' }]
                }]
          },
          {
              header: 'CollectionView', id: 't3yc062t', items: [
                {
                    header: 'Loading Data', id: 'dxnemmoL', items: [
                      { header: 'Spinners', id: 'h23w5emj' },
                      { header: 'Loading JSON Dates', id: 'ene3rLmb' }]
                },
                {
                    header: 'Creating Views', id: 'w6pyagt2', items: [
                      { header: 'Currency', id: '1cqm4ca8' },
                      {
                          header: 'Sorting', id: '2g70rkct', items: [
                            { header: 'Stable Sort', id: '6gkymL4z' }]
                      },
                      {
                          header: 'Filtering', id: 'rgzc4LyL', items: [
                            { header: 'Chaining', id: 'azb2u3st' }]
                      },
                      { header: 'Grouping', id: 'rnspm1uy' },
                      { header: 'Paging', id: 'Lt57ppor' }]
                },
                {
                    header: 'Editing Views', id: '022vxh6a', items: [
                      { header: 'Editing', id: '022vxh6a' },
                      { header: 'Adding/Removing Items', id: 'ggevzdbj' },
                      { header: 'Tracking Changes', id: 's2nemwc3' },
                      { header: 'Validation', id: 'cgvks8x8' }]
                },
                { header: 'Performance', id: 'jmnmqkxh' },
                { header: 'Data Providers', id: 'xgo9us0r' }]
          },
          {
              header: 'Other Services', id: 'hmq6bgkc', items: [
                { header: 'Tooltip', id: '7djvL68d' },
                { header: 'Clipboard', id: '64vr06dd' },
                { header: 'PrintDocument', id: 'c75xjs11' },
                { header: 'Color', id: 'xjo09z48' },
                {
                    header: 'Glyphs', id: '14oo9xeg', items: [
                      { header: 'Customizing', id: 'g7mxg2w2' }]
                },
                { header: 'wijmo.format', id: '1ot27737' },
                { header: 'wijmo.httpRequest', id: '7vjtej20' },
                { header: 'wijmo.animate', id: 'ro9twyer' },
                { header: 'wijmo.showPopup', id: 'svg8pqwp' }]
          }]
        // TODO: Advanced Topics: templates, Authoring Controls
    },
    {
        header: 'Input', module: modules.input, id: 'wuf3acrc', items: [
          {
              header: 'Architecture', id: 'yb006bpe', items: [
                { header: 'DropDown', id: 'f2e7Lyqr' },
                { header: 'ComboBox', id: 'h85qyq55' },
                {
                    header: 'Pseudo-Classes', id: 'qhp9s0nx', items: [
                      { header: 'Focused State', id: 'c6ravuqd' },
                      { header: 'Clear Buttons', id: 'L21g8dyc' },
                      { header: 'Material Design', id: '5zaL8qqa' }]
                }]
          },
          {
              header: 'Strings/Objects', id: 'g5fh8uds', items: [
                {
                    header: 'ComboBox', id: 'uvvk9b2u', items: [
                      { header: 'Strings', id: 'nLcLr7cr' },
                      { header: 'Numbers and Dates', id: 'qr2070ft' },
                      {
                          header: 'Objects', id: '1kjw0fw0', items: [
                            { header: 'Master/Detail', id: 'uazd9mx4' },
                            { header: 'Sorting and Filtering', id: 'pqjhmwz8' },
                            { header: 'Chaining Combos', id: 'a8teyfhq' }]
                      },
                      { header: 'Multi-Column', id: 'w1bmx3cz' },
                      { header: 'HTML Content', id: '8k4fav0x' }]
                },
                {
                    header: 'AutoComplete', id: 'coarr9j5', items: [
                      { header: 'Async Loading', id: 'teLupgq3' },
                      {
                          header: 'Searching', id: 'Lbt3t7wf', items: [
                            { header: 'Search Path', id: 'L7mbp7sz' },
                            { header: 'Search Parameters', id: '1t1zh0dh' },
                            { header: 'Custom Search', id: '2r67wkcr' }]
                      }]
                },
                {
                    header: 'InputMask', id: 'j6er01bx', items: [
                      { header: 'rawValue', id: '1cLkog4u' },
                      { header: 'promptChar', id: '5e6wz2s7' },
                      { header: 'maskFull', id: '4zhhL6q0' }]
                },
                {
                    header: 'ListBox', id: 'pLLrjkjd', items: [
                      { header: 'formatItem', id: 'y0kdwvk4' }]
                }]
          },
          {
              header: 'Numbers', id: 'f0c4Ldnb', items: [
                {
                    header: 'InputNumber', id: 'f0c4Ldnb', items: [
                      { header: 'Formatting', id: 'qybq241k' },
                      { header: 'Step', id: 'qsL5fjyy' },
                      { header: 'Ranges (min/max)', id: 'wo6kfyda' }]
                },
                {
                    header: 'Gauges (Sliders)', id: 'xrxb3tcg', items: [
                      { header: 'LinearGauge', id: 'rkabhum1' },
                      { header: 'RadialGauge', id: 'nm6e4q1z' }]
                },
                { header: 'ComboBox', id: 'qr2070ft' }]
          },
          {
              header: 'Dates and Times', id: 'zgr431mw', items: [
                {
                    header: 'InputDate', id: 'bj0wbdfd', items: [
                      { header: 'Formatting', id: 'e7ryekcj' },
                      { header: 'Ranges (min/max)', id: 'L7tn8j16' },
                      {
                          header: 'Customization', id: '9o00t6mm', items: [
                            { header: 'More Customization', id: 'jqfw8908' }]
                      },
                      { header: 'Validation', id: 'btot9vr5' }]
                },
                { header: 'InputTime', id: 'hdpnf1Lz' },
                { header: 'InputDateTime', id: '465gmuL2' },
                {
                    header: 'Calendar', id: 'm1g1oaxd', items: [
                      { header: 'Ranges (min/max)', id: 'tcwa9hqd' },
                      { header: 'Customization', id: 'azt2ajy1' },
                      { header: 'Validation', id: 'z7wveb75' }]
                },
                { header: 'ComboBox', id: 'qr2070ft' }]
          },
          {
              header: 'Colors', id: 'z84ebpec', items: [
                { header: 'InputColor', id: 'kdca1Lk5' },
                { header: 'ColorPicker', id: 'tyardv5k' },
                { header: 'ComboBox', id: 'b00w0ebe' }]
          },
          {
              header: 'Multi-Item', id: 'b0f7bk6u', items: [
                { header: 'MultiSelect', id: '44w7fob2' },
                { header: 'MultiAutoComplete', id: '94c6wb77' },
                { header: 'ListBox', id: 'txhtjL5a' }]
          },
          {
              header: 'Menus', id: '5fe93pm8', items: [
                { header: 'Commands', id: 'kbfrm8hz' },
                { header: 'Value Pickers', id: '2jbxyq9p' },
                { header: 'Split Buttons', id: 'go8u85tk' },
                { header: 'Context Menus', id: 'bx7cto2u' }]
          },
          {
              header: 'Popups and Dialogs', id: 'j9t6s1xp', items: [
                {
                    header: 'Dialogs', id: '1ctsagyd', items: [
                      { header: 'Alerts and Prompts', id: '9vxtfaf3' },
                      { header: 'Transitions', id: 'jmef8wtu' },
                      { header: 'Pop-up Editors', id: '05s8w5fz' },
                      { header: 'Pop-up Dialogs', id: 'k2zsjon8' }]
                },
                { header: 'Popups with Owners', id: 'e225vyns' }]
          }]
    },
    {
        header: 'FlexGrid', module: modules.flexGrid, id: 'bwdea8y3', items: [
          {
              header: 'Concepts', id: 'bwdea8y3', items: [
                { header: 'Architecture', id: '2vosx6m7' },
                { header: 'Grid Panels', id: '152hy1w9' },
                { header: 'Rows and Columns', id: 'bzb13rpv' },
                {
                    header: 'Sizing and Scrolling', id: 'hdrtamq4', items: [
                      { header: 'Auto Row Heights', id: '41gr9gyt' },
                      { header: 'Auto Column Widths', id: 'horay76q' },
                      { header: 'No Scrollbars', id: '4rktv5g5' },
                      { header: 'Virtualization', id: 'ujfroryj' },
                      { header: 'Scrolling and ViewRange', id: 'pkdmuk8m' },
                      { header: 'Fast Scroller (iOS-style)', id: 'oe4b58nt' }]
                },
                {
                    header: 'Data Operations', id: '2vosx6m7', items: [
                      { header: 'Sorting', id: 'pu062h9t' },
                      {
                          header: 'Grouping', id: 'ah2f5w7f', items: [
                            { header: 'GroupPanel', id: 'hf7ud7ge' }]
                      },
                      {
                          header: 'Filtering', id: '0p5r9csy', items: [
                            {
                                header: 'FlexGridFilter', id: '1ttsyag4', items: [
                                  { header: 'Custom Icons', id: 'afq2b6p6' },
                                  { header: 'Custom Operators', id: 'Lsh961a1' },
                                  { header: 'Optimizations', id: 'zv5a82g8' }]
                            },
                            { header: 'Server-Side', id: '1bbh88tr' },
                            { header: 'Hierarchical Data', id: 'oL2xbgxr' }]
                      },
                      { header: 'Paging', id: 'Lt57ppor' },
                      { header: 'Persisting State', id: 'znjcvd10' }]
                },
                { header: 'Cells', id: 'd21zrqgd' },
                { header: 'Binding', id: 'y9Lj6os0' },
                { header: 'Deep Binding', id: '3kLqwp9e' },
                {
                    header: 'Selection', id: 't5n993gq', items: [
                      { header: 'Multi-Range Selection', id: 'ttdrv4Ln' }]
                },
                { header: 'Clipboard', id: '04fsxxbo' },
                {
                    header: 'Cell Merging', id: 'od6emykh', items: [
                      { header: 'Header Merging', id: 'uqmsqye2' },
                      { header: 'Custom Merging', id: 'p9qv7dmt' },
                      { header: 'Restricted Merging', id: '42t9j95q' }]
                }]
          },
          {
              header: 'Columns', id: 'ayuvd5sm', items: [
                { header: 'Collections', id: 'ayuvd5sm' },
                { header: 'Properties', id: 'w9p0em0d' },
                {
                    header: 'DataMaps', id: 'cn3p3wq7', items: [
                      {
                          header: 'Dynamic DataMaps', id: 'we6y7f2g', items: [
                            { header: 'Customize', id: '9aoo7mzm' },
                            { header: 'Switch', id: '6b68fwkp' }]
                      }]
                },
                {
                    header: 'Sizing', id: 'Lb786a3f', items: [
                      { header: 'Auto-Sizing', id: 'udcxxa6L' }]
                },
                {
                    header: 'Reordering', id: 'ejtt0jx8', items: [
                    { header: 'Drop Target Control', id: '4r4xqz5c' }]
                },
                {
                    header: 'Column Layout', id: 'daxp8gm6', items: [
                      { header: 'Column Picker', id: 'svg8pqwp' },
                      { header: 'Persisting State', id: 'znjcvd10' },
                      { header: 'Responsive Layouts', id: 'rz7h0cLg' }]
                },
                {
                    header: 'Freezing', id: 'pctunrd9', items: [
                      { header: 'Multi-Pane Grids', id: 'p8hw2a3v' }]
                },
                { header: 'Sticky Headers', id: '8zLr88n6' },
                {
                    header: 'Aggregates', id: '1pg27ffw', items: [
                      { header: 'Above the Data', id: 'st9jw19v' },
                      { header: 'Below the Data', id: 'Lrrmzsnw' },
                      { header: 'Custom Aggregates', id: 'cg2f5kfj' }]
                },
                { header: 'Custom Cells', id: '8Lgc37dc' },
                { header: 'Styling', id: 'nLdmgjng' }]
          },
          {
              header: 'Rows', id: 'ye46ku04', items: [
                { header: 'Collections', id: 'ye46ku04' },
                { header: 'Properties', id: 'xup60a1t' },
                { header: 'Adding/Removing', id: 'fwn44Lyy' },
                { header: 'Freezing', id: 'pctunrd9' },
                { header: 'Details', id: 'r9up8exz' },
                {
                    header: 'Styling', id: 'psdsh942', items: [
                      { header: 'Row Height', id: 'je6p2tgt' },
                      { header: 'Vertical Alignment', id: 'u9r4weon' },
                      { header: 'Hover', id: 'khcym8zp' }] // TODO: revise to use row elements
                }]
          },
          {
              header: 'Data Binding', id: '8pg43pj6', items: [
                { header: 'CollectionView', id: 'y3ehyzbs' },
                {
                    header: 'Loading Data', id: 'dxnemmoL', items: [
                      { header: 'Loading JSON Dates', id: 'ene3rLmb' }]
                },
                { header: 'OData', id: 'r5a21ysm' },
                { header: 'Virtual Data', id: 'smh5p6xr' },
                { header: 'Infinite Scrolling', id: 'ujfroryj' },
                {
                    header: 'Hierarchical Data', id: 'gz7e6Lgv', items: [
                      { header: 'Master/Detail', id: 'x0tud0b8' },
                      {
                          header: 'Tree Grids', id: 'kk9j93bL', items: [
                            { header: 'Editable Tree Grids', id: 'a2Lynj6v' },
                            { header: 'Unbound Tree Grids', id: 'Los124e0' },
                            { header: 'Filtering', id: 'oL2xbgxr' }]
                      },
                      { header: 'Row Details', id: 'r9up8exz' }]
                }]
          },
          {
              header: 'Editing', id: 'Lebn7sh8', items: [
                { header: 'Clipboard', id: '04fsxxbo' },
                { header: 'Read-only, Required Columns', id: '32jh96oh' },
                { header: 'DataMaps', id: 'cn3p3wq7' },
                {
                    header: 'Validation', id: 'ayewg4pg', items: [
                      { header: 'CollectionView', id: 'twgjr6s8' }]
                },
                {
                    header: 'Custom Editing', id: '8tm4mdqr', items: [
                      { header: 'Editing Events', id: '8tm4mdqr' },
                      { header: 'Always Editing', id: '4wmn70sz' },
                      { header: 'Inline Editing', id: 'hkxco8kb' },
                      { header: 'Popup Editors', id: '05s8w5fz' },
                      { header: 'Custom Editors', id: '1w9hr82h' },
                      { header: 'IME', id: 'yLk3kuLu' }]
                }]
          },
          {
              header: 'Custom Cells', id: 'cbb2dpv9', items: [
                { header: 'Conditional Styling', id: 'cbb2dpv9' },
                { header: 'Dynamic Updates', id: 'wm71r0em' },
                { header: 'Sparklines', id: '8Lgc37dc' },
                //{ header: 'Controls', id: '???' }, // TODO...
                { header: 'Custom Editors', id: '1w9hr82h' },
                {
                    header: 'Templates', id: '8yr4gg67', items: [
                      { header: 'Templates in Angular', id: 'dd14cqcx' }]
                }]
          },
          {
              header: 'Events', id: 'hzkw9x4p', items: [
                { header: 'Mouse', id: '16kyxo0n' },
                { header: 'Keyboard', id: 'k2zsjon8' },
                { header: 'Selection', id: '8th382uh' },
                { header: 'Editing', id: '8tm4mdqr' },
                { header: 'Resizing', id: 'syq26khL' },
                { header: 'Reordering', id: '4r4xqz5c' },
                { header: 'Drag and Drop', id: '0z1ou6cn' }]
          },
          {
              header: 'Import/Export', id: 'v9z4he0s', items: [
                { header: 'Excel (XLSX)', id: 'yzcefvLy' },
                { header: 'PDF', id: 'equxqkyt' },
                { header: 'Printer', id: 'v9z4he0s' }]
          }]
    },
    {
        header: 'FlexChart', module: modules.chart, id: 'zrbukdvm', items: [
          {
              header: 'Concepts', id: 'zrbukdvm', items: [
                {
                    header: 'Architecture', id: 'oybe27o0', items: [
                      { header: 'Sorting', id: 'oybe27o0' },
                      { header: 'Filtering', id: '8mbqew00' },
                      { header: 'Render Cycle', id: 'veL6qgv0' }]
                },
                {
                    header: 'Chart Types', id: '9n1dm5gd', items: [
                      { header: 'Multiple Chart Types', id: 'Lzgnha8k' },
                      {
                          header: 'Special Chart Types', id: 'xcxLm4mk', items: [
                            { header: 'Bar Charts', id: '8nndw7q5' },
                            { header: 'Bubble Charts', id: 'cef074Lc' },
                            { header: 'Candlestick Charts', id: '5zmgvsgo' },
                            { header: 'HighLowOpenClose Charts', id: 'p2qftk2b' },
                            { header: 'Funnel Charts', id: 'qte100x6' }]
                      }]
                },
                {
                    header: 'Styling', id: '64dy5ao5', items: [
                      { header: 'Series Styles', id: 'merzxr1q' },
                      { header: 'Palettes', id: 'aszrs9ho' },
                      { header: 'Gradients', id: 'exLsubmh' }]
                },
                { header: 'Export', id: 'oqm2scqa' }]
          },
          {
              header: 'Chart Elements', id: 'nggzzs57', items: [
                {
                    header: 'Legends and Titles', id: 'f81nn01v', items: [
                      { header: 'Title Styles', id: 'oje5us08' },
                      { header: 'Legend Styles', id: 'vkzasp97' },
                      { header: 'Legend Position', id: '42tw7ntq' },
                      { header: 'Legend Toggle', id: 'neg1dbyk' },
                      { header: 'Data Labels', id: '1g783zxx' }] // << review: it would be nice to be able to change the label position in the rendering event...
                },
                {
                    header: 'Series', id: 'n5c7gL6g', items: [
                      { header: 'Series Picker', id: 'wo8d3eLy' },
                      { header: 'Chart Types', id: 'Lzgnha8k' },
                      { header: 'Data Sources', id: '2q7L7po1' }]
                },
                {
                    header: 'Axes', id: 'q7y3Lejg', items: [
                      {
                          header: 'Labels and Formats', id: '303ccLve', items: [ // TFS 250732, fixed
                            { header: 'Custom Labels', id: 'u4gnd9q0' }] // TFS 251996
                      },
                      { header: 'Gridlines and Tickmarks', id: 'rqtq4uxr' }, // TFS 250742, fixed
                      {
                          header: 'Ranges', id: 'abrn5uow', items: [
                            { header: 'Zoom', id: 'pjobw9dx' }]
                      },
                      { header: 'Origin and Position', id: 'b5vzbu34' }, // TFS 250862, assigned to AlexT
                      { header: 'Reverse', id: '8nndw7q5' },
                      { header: 'Extra Axes', id: 't7p5h580' },
                      { header: 'Chart Scaling', id: 'rvn85cmb' }]
                },
                {
                    header: 'Tooltips', id: 'a8sg9Lur', items: [
                      { header: 'Data Labels', id: '1g783zxx' }]
                },
                {
                    header: 'Extra Elements', id: 'rn6eostL', items: [
                      {
                          header: 'Plot Areas', id: 'b57te4pp', items: [
                            { header: 'Stacked Charts', id: 'aq72xLtt' }]
                      },
                      { header: 'Line Markers', id: 'uLowxat8' },
                      {
                          header: 'Annotations', id: 'unrhhc0w', items: [ // review with string positions
                            { header: 'Symbols', id: 'zjn6m1eg' },
                            { header: 'Zones', id: 'yrom6u5z' },
                            { header: 'Zones Redux', id: 'hgc8L5w9' }]
                      },
                      {
                          header: 'Analytics', id: '8w9pc2r1', items: [
                            { header: 'Trend Lines', id: 'kfpjr61s' },
                            { header: 'Moving Averages', id: '357ztq8n' },
                            { header: 'Box & Whisker (Boxplot)', id: '9r6beor0' },
                            { header: 'Error Bars', id: 'c0zfy395' },
                            { header: 'Waterfall Charts', id: 't6bnzka7' },
                            { header: 'Custom Functions', id: '5ay8qdec' }]
                      },
                      { header: 'Range Selectors', id: 'vctwhrnw' }] // check min/maxScale with latest version
                }],
          },
          {
              header: 'Events', id: 'aq2p3vud', items: [
                {
                    header: 'Mouse', id: 'nggzzs57', items: [
                      { header: 'Hit-Testing', id: 'nggzzs57' },
                      { header: 'Zooming', id: 'pjobw9dx' },
                      { header: 'Zooming with the Wheel', id: '8mbqew00' },
                      { header: 'Grouping and Drill-down', id: 'e2pp0f66' }]
                },
                {
                    header: 'Selection', id: '06a4khdL', items: [
                      { header: 'Grouping and Drill-down', id: 'e2pp0f66' }]
                },
                {
                    header: 'Rendering', id: 'hgc8L5w9', items: [
                      { header: 'ItemFormatter', id: 'rptz23nL' }]
                }]
          },
          {
              header: 'Interactive Charts', id: 'qx0us59L', items: [
               { header: 'Zooming', id: 'pjobw9dx' },
               { header: 'Filtering and Zooming', id: '8mbqew00' },
               { header: 'Selection', id: '06a4khdL' },
               { header: 'Grouping and Drill-down', id: 'e2pp0f66' },
               { header: 'Animations', id: 'sxoxzt9h' }]
          }]
    },
    {
        header: 'Gauge', module: modules.gauge, id: 'xb3bugpk', items: [
          {
              header: 'Concepts', id: 'xb3bugpk', items: [
                {
                    header: 'Architecture', id: 'uypoe7ds', items: [
                      { header: 'Basic Properties', id: '38g6fLLz' },
                      { header: 'Ranges', id: 'oe6gev0q' }]
                },
                {
                    header: 'Gauge Types', id: 'ewzq66f1', items: [
                      { header: 'Radial Gauges', id: 'kqkm8zt0' },
                      { header: 'Linear Gauges', id: 'wkcehhvu' },
                      { header: 'Bullet Graphs', id: 'vqrwdvgq' }]
                },
                {
                    header: 'Styling', id: 'v2gchd3v', items: [
                      { header: 'CSS', id: 'v2gchd3v' },
                      { header: 'Hover', id: '1zk0jvs5' },
                      { header: 'Focus', id: 'hbxcp3j9' },
                      { header: 'Ranges', id: 'psmjmygd' },
                      { header: 'Silverlight', id: 'opf79jw1' }]
                }]
          },
          {
              header: 'Gauge Elements', id: 'b3nuoepd', items: [
                { header: 'Face', id: 'jxg3au0y' },
                { header: 'Pointer', id: 'nkf0tfhn' },
                { header: 'Ranges', id: '994qn6fn' },
                { header: 'Thumb', id: '5c4bjL9x' },
                { header: 'Tickmarks', id: '1eLcgmah' },
                { header: 'Text Values', id: 'yd0brsvp' }]
          }]
    }
    // TreeView intro:egmg93wc adding nodes:y4mgkhpf
    // FlexGrid perf: http://jsfiddle.net/Wijmo5/3zgrccab/
    // FlexChart perf: http://jsfiddle.net/Wijmo5/Luudv8th/

];

// ensure topic ids are unique
// (prepend '=' as needed to make them unique)
ensureUniqueIds(toc, {});
function ensureUniqueIds(items, ids) {
    for (var i = 0; items && i < items.length; i++) {
        var item = items[i];
        while (item.id in ids) {
            item.id = '=' + item.id;
        }
        ids[item.id] = true;
        if (item.items) {
            ensureUniqueIds(item.items, ids)
        }
    }
}
