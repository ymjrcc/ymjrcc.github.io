webpackJsonp([21],{792:function(e,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(7),n=s(a),u=r(95),c=s(u),o=r(313);t.default={namespace:"data",state:{couponsList:{results:[]},couponsStore:"",storesList:{results:[]},countriesList:[],scrapydInfo:{}},effects:{fetchStores:c.default.mark(function e(t,r){var s,a,n=r.call,u=r.put;r.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.param||"",e.next=3,n(o.queryStoresList,s);case 3:return a=e.sent,e.next=6,u({type:"save",payload:{storesList:a}});case 6:case"end":return e.stop()}},e,this)}),fetchCountries:c.default.mark(function e(t,r){var s,a=r.call,n=r.put;r.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(o.queryCountries);case 2:return s=e.sent,e.next=5,n({type:"save",payload:{countriesList:s}});case 5:case"end":return e.stop()}},e,this)}),fetchCoupons:c.default.mark(function e(t,r){var s,a,n=r.call,u=r.put;r.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.param||"",e.next=3,n(o.queryCouponsList,s);case 3:return a=e.sent,e.next=6,u({type:"save",payload:{couponsList:a}});case 6:case"end":return e.stop()}},e,this)}),fetchScrapyd:c.default.mark(function e(t,r){var s,a,n=r.call,u=r.put;r.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.param,e.next=3,n(o.queryScrapyd,s);case 3:return a=e.sent,e.next=6,u({type:"save",payload:{scrapydInfo:a}});case 6:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var r=t.payload;return(0,n.default)({},e,r)},updateCouponsStore:function(e,t){return(0,n.default)({},e,{couponsStore:t.store})}}},e.exports=t.default}});