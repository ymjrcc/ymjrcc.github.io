webpackJsonp([11],{801:function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),s=u(a),n=r(95),c=u(n),f=r(314);t.default={namespace:"template",state:{tempList:{results:[]},curItem:"storeDesc"},effects:{fetchTemplates:c.default.mark(function e(t,r){var u,a=r.call,s=r.put;r.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(f.queryTempList);case 2:return u=e.sent,e.next=5,s({type:"save",payload:{tempList:u}});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var r=t.payload;return(0,s.default)({},e,r)},updateCurItem:function(e,t){return(0,s.default)({},e,{curItem:t.curItem})}}},e.exports=t.default}});