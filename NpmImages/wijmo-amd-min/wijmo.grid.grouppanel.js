﻿/*
    *
    * Wijmo Library 5.20171.300
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
var __extends=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}();define(["require","exports","wijmo/wijmo","wijmo/wijmo.grid","wijmo/wijmo.grid.grouppanel"],function(n,t,i,r,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.grouppanel=u;'use strict';var f=function(n){function t(t,u){var f=n.call(this,t)||this,o,s,e;return f._hideGroupedCols=!0,f._maxGroups=6,o='Missing dependency: GroupPanel requires ',i.assert(r!=null,o+'wijmo.grid.'),s=f.getTemplate(),f.applyTemplate('wj-grouppanel wj-control',s,{_divMarkers:'div-markers',_divPH:'div-ph'}),e=f.hostElement,f.addEventListener(e,'dragstart',f._dragStart.bind(f)),f.addEventListener(e,'dragover',f._dragOver.bind(f)),f.addEventListener(e,'drop',f._drop.bind(f)),f.addEventListener(e,'dragend',f._dragEnd.bind(f)),f.addEventListener(e,'click',f._click.bind(f)),f.initialize(u),f}return __extends(t,n),Object.defineProperty(t.prototype,"hideGroupedColumns",{get:function(){return this._hideGroupedCols},set:function(n){n!=this._hideGroupedCols&&(this._hideGroupedCols=i.asBoolean(n))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxGroups",{get:function(){return this._maxGroups},set:function(n){n!=this._maxGroups&&(this._maxGroups=i.asNumber(n))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"placeholder",{get:function(){return this._divPH.textContent},set:function(n){this._divPH.textContent=n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"grid",{get:function(){return this._g},set:function(n){n=i.asType(n,r.FlexGrid,!0);n!=this._g&&(this._g&&(this._g.draggingColumn.removeHandler(this._draggingColumn),this._g.sortedColumn.removeHandler(this.invalidate),this._g.itemsSourceChanged.removeHandler(this._itemsSourceChanged),this._g.columns.collectionChanged.removeHandler(this._itemsSourceChanged)),this._g=n,this._g&&(this._g.draggingColumn.addHandler(this._draggingColumn,this),this._g.sortedColumn.addHandler(this.invalidate,this),this._g.itemsSourceChanged.addHandler(this._itemsSourceChanged,this),this._g.columns.collectionChanged.addHandler(this._itemsSourceChanged,this)),this._itemsSourceChanged(this._g,null))},enumerable:!0,configurable:!0}),t.prototype.refresh=function(){var e,u,f,c,t,s,a;if(n.prototype.refresh.call(this),this._divMarkers.innerHTML='',this._dragMarker=this._dragCol=null,this._gds){for(e=0;e<this._gds.length;e++){var l=this._gds[e],o=this._g.columnHeaders,h=-1,r=-1;for(u=o.rows.length-1;u>=0&&r<0;u--)for(f=0;f<o.columns.length&&r<0;f++)if(c=this._g._getBindingColumn(o,u,o.columns[f]),c&&c.binding==l.propertyName){r=f;h=u;break}r>-1&&h>-1&&(t=document.createElement('div'),this._g.cellFactory.updateCell(this._g.columnHeaders,h,r,t),t.setAttribute('class','wj-cell wj-header wj-groupmarker'),i.setCss(t,{position:'static',display:'inline-block',verticalAlign:'top',left:'',top:'',right:'',height:'auto',width:'auto'}),s=t.querySelector('.wj-elem-filter'),s&&s.parentElement.removeChild(s),a=i.createElement('<span wj-remove="" style="font-weight:normal;cursor:pointer;pointer;padding:12px;padding-right:3px">&times;</span>',t),this._divMarkers.appendChild(t))}this._divMarkers.children.length>0?(this._divPH.style.display='none',this._divMarkers.style.display=''):(this._divPH.style.display='',this._divMarkers.style.display='none')}},t.prototype._addGroup=function(n,t){for(var f=this._getIndex(t),u=this._gds,r=0;r<u.length;r++)if(u[r].propertyName==n.binding){u.removeAt(r);r<f&&f--;break}for(r=this.maxGroups-1;r<u.length;r++)this._removeGroup(r,u),r<f&&f--;u.deferUpdate(function(){var t=new i.PropertyGroupDescription(n.binding);u.insert(f,t)});n&&this.hideGroupedColumns&&(n.visible=!1);this.invalidate()},t.prototype._moveGroup=function(n,t){var r=this._gds,u=this._getElementIndex(this._dragMarker),i=this._getIndex(t);i>u&&i--;i>=this._gds.length&&(i=this._gds.length);u!=i&&r.deferUpdate(function(){var n=r[u];r.removeAt(u);r.insert(i,n)})},t.prototype._removeGroup=function(n,t){t===void 0&&(t=this._gds);var r=t[n].propertyName,i=this._g.columns.getColumn(r);t.removeAt(n);i&&(i.visible=!0)},t.prototype._getIndex=function(n){for(var r,i=this._divMarkers.children,t=0;t<i.length;t++)if(r=i[t].getBoundingClientRect(),n.clientX<r.left+r.width/2)return t;return i.length},t.prototype._getElementIndex=function(n){var i,t;if(n&&n.parentElement)for(i=n.parentElement.children,t=0;t<i.length;t++)if(i[t]==n)return t;return-1},t.prototype._draggingColumn=function(n,t){var i=this._g,r=i._getBindingColumn(t.panel,t.row,i.columns[t.col]);this._dragCol=r.binding?r:null},t.prototype._itemsSourceChanged=function(){this._gds&&this._gds.collectionChanged.removeHandler(this._groupsChanged);this._gds=null;this._g.collectionView&&(this._gds=this._g.collectionView.groupDescriptions,this._gds.collectionChanged.addHandler(this._groupsChanged,this));this.invalidate()},t.prototype._groupsChanged=function(){this.invalidate()},t.prototype._dragStart=function(n){i._startDrag(n.dataTransfer,'move');this._dragMarker=n.target;this._dragCol=null},t.prototype._dragOver=function(n){var t=this._dragCol||this._dragMarker;t&&(n.dataTransfer.dropEffect='move',n.preventDefault(),n.stopPropagation())},t.prototype._drop=function(n){this._dragMarker?this._moveGroup(this._dragMarker,n):this._dragCol&&this._addGroup(this._dragCol,n)},t.prototype._dragEnd=function(){this._dragMarker=this._dragCol=null},t.prototype._click=function(n){for(var o=document.elementFromPoint(n.clientX,n.clientY),c=o.getAttribute('wj-remove')!=null,t=o,f,e,u,h;t.parentElement&&!i.hasClass(t,'wj-cell');)t=t.parentElement;if(i.hasClass(t,'wj-cell')){var s=this._getElementIndex(t),l=this._g.collectionView,r=l.sortDescriptions;if(c)this._removeGroup(s);else if(n.ctrlKey)r.clear(),this.invalidate();else{for(f=this._gds[s],e=!0,u=0;u<r.length;u++)if(r[u].property==f.propertyName){e=!r[u].ascending;break}h=new i.SortDescription(f.propertyName,e);r.splice(0,r.length,h);this.invalidate()}}},t}(i.Control);f.controlTemplate='<div style="cursor:default;overflow:hidden;height:100%;width:100%;min-height:1em"><div wj-part="div-ph"><\/div><div wj-part="div-markers"><\/div><\/div>';t.GroupPanel=f})