webpackJsonp([21],{800:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(7),u=r(s),n=a(95),c=r(n),l=a(317);t.default={namespace:"template",state:{tempList:{results:[]}},effects:{fetchTemplates:c.default.mark(function e(t,a){var r,s=a.call,u=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l.queryTempList);case 2:return r=e.sent,e.next=5,u({type:"save",payload:{tempList:r}});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)}}},e.exports=t.default}});