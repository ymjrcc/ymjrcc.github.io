webpackJsonp([5,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24],{1138:function(e,t,a){function n(e){return a(r(e))}function r(e){var t=u[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var u={"./activities.js":791,"./chart.js":792,"./classify.js":793,"./data.js":794,"./form.js":795,"./global.js":205,"./index.js":807,"./list.js":796,"./login.js":797,"./main.js":798,"./monitor.js":799,"./profile.js":800,"./project.js":801,"./register.js":802,"./rule.js":803,"./sites.js":804,"./template.js":805,"./user.js":806};n.keys=function(){return Object.keys(u)},n.resolve=r,e.exports=n,n.id=1138},791:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"activities",state:{list:[],loading:!0},effects:{fetchList:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(o.queryActivities);case 4:return n=e.sent,e.next=7,u({type:"saveList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveList:function(e,t){return(0,u.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},792:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"chart",state:{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[],loading:!1},effects:{fetch:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(o.fakeChartData);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n});case 7:case"end":return e.stop()}},e,this)}),fetchSalesData:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.fakeChartData);case 2:return n=e.sent,e.next=5,u({type:"save",payload:{salesData:n.salesData}});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a,{loading:!1})},clear:function(){return{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]}},changeLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,{loading:a})}}},e.exports=t.default},793:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(843),c=n(s),o=a(95),i=n(o);a(844);var l=a(313);t.default={namespace:"classify",state:{classifyList:{results:[],count:0},mainClassifyList:{results:[],count:0}},effects:{fetchClassify:i.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,e.next=3,u(l.queryClassifyList,n);case 3:return r=e.sent,e.next=6,s({type:"save",payload:{classifyList:r}});case 6:case"end":return e.stop()}},e,this)}),fetchMainClassify:i.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,e.next=3,u(l.queryMainClassifyList,n);case 3:return r=e.sent,e.next=6,s({type:"save",payload:{mainClassifyList:r}});case 6:case"end":return e.stop()}},e,this)}),patchClassify:i.default.mark(function e(t,a){var n,r,u=a.call;a.put,a.select;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,e.next=3,u(l.patchClassify,n);case 3:r=e.sent,c.default.success("\u5916\u7ad9\u7ad9\u70b9 "+r.site+" \u7684\u5916\u7ad9\u5206\u7c7b "+r.name+" \u5bf9\u5e94\u4e3b\u7ad9\u5206\u7c7b "+r.main_category+"\u3002");case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)}}},e.exports=t.default},794:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"data",state:{couponsList:{results:[]},couponsStore:"",storesList:{results:[]},countriesList:{result:[]},scrapydInfo:{}},effects:{fetchStores:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param||"",e.next=3,u(o.queryStoresList,n);case 3:return r=e.sent,e.next=6,s({type:"save",payload:{storesList:r}});case 6:case"end":return e.stop()}},e,this)}),fetchCountries:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.queryCountries);case 2:return n=e.sent,e.next=5,u({type:"save",payload:{countriesList:n}});case 5:case"end":return e.stop()}},e,this)}),patchStores:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,e.next=3,u(o.patchStores,n);case 3:return r=e.sent,e.next=6,s({type:"fetchStores",param:"status_exclude=-1"});case 6:case"end":return e.stop()}},e,this)}),pushStores:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,e.next=3,u(o.pushStores,n);case 3:return r=e.sent,e.next=6,s({type:"fetchStores",param:"status_exclude=-1"});case 6:case"end":return e.stop()}},e,this)}),fetchCoupons:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param||"",e.next=3,u(o.queryCouponsList,n);case 3:return r=e.sent,e.next=6,s({type:"save",payload:{couponsList:r}});case 6:case"end":return e.stop()}},e,this)}),pushCoupons:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,e.next=3,u(o.pushCoupons,n);case 3:return r=e.sent,e.next=6,s({type:"fetchCoupons"});case 6:case"end":return e.stop()}},e,this)}),fetchScrapyd:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,e.next=3,u(o.queryScrapyd,n);case 3:return r=e.sent,e.next=6,s({type:"save",payload:{scrapydInfo:r}});case 6:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},updateCouponsStore:function(e,t){return(0,u.default)({},e,{couponsStore:t.store})}}},e.exports=t.default},795:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(843),c=n(s),o=a(95),i=n(o);a(844);var l=a(316),d=a(313);t.default={namespace:"form",state:{step:{},regularFormSubmitting:!1,stepFormSubmitting:!1,advancedFormSubmitting:!1},effects:{submitRegularForm:i.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeRegularFormSubmitting",payload:!0});case 2:return e.next=4,r(d.fakeSubmitForm,n);case 4:return e.next=6,u({type:"changeRegularFormSubmitting",payload:!1});case 6:c.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)}),submitStepForm:i.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeStepFormSubmitting",payload:!0});case 2:return e.next=4,r(d.fakeSubmitForm,n);case 4:return e.next=6,u({type:"saveStepFormData",payload:n});case 6:return e.next=8,u({type:"changeStepFormSubmitting",payload:!1});case 8:return e.next=10,u(l.routerRedux.push("/form/step-form/result"));case 10:case"end":return e.stop()}},e,this)}),submitAdvancedForm:i.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeAdvancedFormSubmitting",payload:!0});case 2:return e.next=4,r(d.fakeSubmitForm,n);case 4:return e.next=6,u({type:"changeAdvancedFormSubmitting",payload:!1});case 6:c.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)})},reducers:{saveStepFormData:function(e,t){var a=t.payload;return(0,u.default)({},e,{step:(0,u.default)({},e.step,a)})},changeRegularFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{regularFormSubmitting:a})},changeStepFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{stepFormSubmitting:a})},changeAdvancedFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{advancedFormSubmitting:a})}}},e.exports=t.default},796:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"list",state:{list:[],loading:!1},effects:{fetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.queryFakeList,r);case 4:return n=e.sent,e.next=7,s({type:"queryList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),appendFetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.queryFakeList,r);case 4:return n=e.sent,e.next=7,s({type:"appendList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{queryList:function(e,t){return(0,u.default)({},e,{list:t.payload})},appendList:function(e,t){return(0,u.default)({},e,{list:e.list.concat(t.payload)})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},797:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(316),i=a(313);t.default={namespace:"login",state:{status:void 0},effects:{login:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeSubmitting",payload:!0});case 2:return e.next=4,u(i.accountLogin,r);case 4:return n=e.sent,e.next=7,s({type:"changeLoginStatus",payload:n});case 7:if(!n.token||!n.user){e.next=11;break}return localStorage.setItem("token","JWT "+n.token),e.next=11,s(o.routerRedux.push("/"));case 11:case"end":return e.stop()}},e,this)}),logout:c.default.mark(function e(t,a){var n=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:"changeLoginStatus",payload:{status:!1}});case 2:return localStorage.setItem("token",""),e.next=5,n(o.routerRedux.push("/user/login"));case 5:case"end":return e.stop()}},e,this)})},reducers:{changeLoginStatus:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status,type:a.type,submitting:!1})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default},798:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"main",state:{mainList:{results:[]},curSite:"",reports:{results:[]}},effects:{fetchMain:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.queryMainList);case 2:return n=e.sent,e.next=5,u({type:"save",payload:{mainList:n}});case 5:case"end":return e.stop()}},e,this)}),fetchReports:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param||"",e.next=3,u(o.queryReports,n);case 3:return r=e.sent,e.next=6,s({type:"save",payload:{reports:r}});case 6:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},updateCurSite:function(e,t){return(0,u.default)({},e,{curSite:t.curSite})}}},e.exports=t.default},799:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"monitor",state:{tags:[]},effects:{fetchTags:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.queryTags);case 2:return n=e.sent,e.next=5,u({type:"saveTags",payload:n.list});case 5:case"end":return e.stop()}},e,this)})},reducers:{saveTags:function(e,t){return(0,u.default)({},e,{tags:t.payload})}}},e.exports=t.default},800:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"profile",state:{basicGoods:[],basicLoading:!0,advancedOperation1:[],advancedOperation2:[],advancedOperation3:[],advancedLoading:!0},effects:{fetchBasic:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:{basicLoading:!0}});case 2:return e.next=4,r(o.queryBasicProfile);case 4:return n=e.sent,e.next=7,u({type:"show",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:{basicLoading:!1}});case 9:case"end":return e.stop()}},e,this)}),fetchAdvanced:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:{advancedLoading:!0}});case 2:return e.next=4,r(o.queryAdvancedProfile);case 4:return n=e.sent,e.next=7,u({type:"show",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:{advancedLoading:!1}});case 9:case"end":return e.stop()}},e,this)})},reducers:{show:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},changeLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,a)}}},e.exports=t.default},801:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"project",state:{notice:[],loading:!0},effects:{fetchNotice:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(o.queryProjectNotice);case 4:return n=e.sent,e.next=7,u({type:"saveNotice",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveNotice:function(e,t){return(0,u.default)({},e,{notice:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},802:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"register",state:{status:void 0},effects:{submit:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeSubmitting",payload:!0});case 2:return e.next=4,r(o.fakeRegister);case 4:return n=e.sent,e.next=7,u({type:"registerHandle",payload:n});case 7:return e.next=9,u({type:"changeSubmitting",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{registerHandle:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default},803:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"rule",state:{data:{list:[],pagination:{}},loading:!0},effects:{fetch:c.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(o.queryRule,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),add:c.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,i=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({type:"changeLoading",payload:!0});case 2:return e.next=4,s(o.addRule,r);case 4:return n=e.sent,e.next=7,i({type:"save",payload:n});case 7:return e.next=9,i({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)}),remove:c.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,i=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i({type:"changeLoading",payload:!0});case 2:return e.next=4,s(o.removeRule,r);case 4:return n=e.sent,e.next=7,i({type:"save",payload:n});case 7:return e.next=9,i({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},804:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"sites",state:{sitesList:{results:[]},curSite:"",curMenu:"info"},effects:{fetchSites:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.querySitesList);case 2:return n=e.sent,e.next=5,u({type:"save",payload:{sitesList:n}});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},updateCurSite:function(e,t){return(0,u.default)({},e,{curSite:t.curSite})},updateCurMenu:function(e,t){return(0,u.default)({},e,{curMenu:t.curMenu})}}},e.exports=t.default},805:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(313);t.default={namespace:"template",state:{tempList:{results:[]},curItem:"storeDesc"},effects:{fetchTemplates:c.default.mark(function e(t,a){var n,r,u=a.call,s=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,e.next=3,u(o.queryTempList,n);case 3:return r=e.sent,e.next=6,s({type:"save",payload:{tempList:r}});case 6:case"end":return e.stop()}},e,this)}),addTemplate:c.default.mark(function e(t,a){var n,r,u,s=a.call,i=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.param,r=t.template_type,e.next=3,s(o.addTemplate,n);case 3:return u=e.sent,e.next=6,i({type:"fetchTemplates",param:r});case 6:case"end":return e.stop()}},e,this)}),patchTemplate:c.default.mark(function e(t,a){var n,r,u,s,i=a.call,l=a.put;a.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.body,u=t.template_type,e.next=3,i(o.patchTemplate,{id:n,body:r});case 3:return s=e.sent,e.next=6,l({type:"fetchTemplates",param:u});case 6:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},updateCurItem:function(e,t){return(0,u.default)({},e,{curItem:t.curItem})}}},e.exports=t.default},806:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(7),u=n(r),s=a(95),c=n(s),o=a(999);t.default={namespace:"user",state:{list:[],loading:!1,currentUser:{}},effects:{fetch:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(o.query);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchCurrent:c.default.mark(function e(t,a){var n,r=a.call,u=a.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(o.queryCurrent);case 2:return n=e.sent,e.next=5,u({type:"saveCurrentUser",payload:n});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})},saveCurrentUser:function(e,t){return(0,u.default)({},e,{currentUser:t.payload})},changeNotifyCount:function(e,t){return(0,u.default)({},e,{currentUser:(0,u.default)({},e.currentUser,{notifyCount:t.payload})})}}},e.exports=t.default},807:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var n=a(1138),r=n.keys().filter(function(e){return"./index.js"!==e}),u=[],s=0;s<r.length;s+=1)u.push(n(r[s]));t.default=u,e.exports=t.default},843:function(e,t,a){"use strict";function n(e){if(l)return void e(l);s.a.newInstance({prefixCls:f,transitionName:"move-up",style:{top:i},getContainer:p},function(t){if(l)return void e(l);l=t,e(t)})}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,a=arguments[2],r=arguments[3],s={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[a];"function"==typeof t&&(r=t,t=o);var i=d++;return n(function(n){n.notice({key:i,duration:t,style:{},content:u.createElement("div",{className:f+"-custom-content "+f+"-"+a},u.createElement(c.default,{type:s}),u.createElement("span",null,e)),onClose:r})}),function(){l&&l.removeNotice(i)}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(5),s=(a.n(u),a(324)),c=a(311),o=3,i=void 0,l=void 0,d=1,f="ant-message",p=void 0;t.default={info:function(e,t,a){return r(e,t,"info",a)},success:function(e,t,a){return r(e,t,"success",a)},error:function(e,t,a){return r(e,t,"error",a)},warn:function(e,t,a){return r(e,t,"warning",a)},warning:function(e,t,a){return r(e,t,"warning",a)},loading:function(e,t,a){return r(e,t,"loading",a)},config:function(e){void 0!==e.top&&(i=e.top,l=null),void 0!==e.duration&&(o=e.duration),void 0!==e.prefixCls&&(f=e.prefixCls),void 0!==e.getContainer&&(p=e.getContainer)},destroy:function(){l&&(l.destroy(),l=null)}}},844:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(193),r=(a.n(n),a(867));a.n(r)},867:function(e,t){},999:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.queryCurrent=t.query=void 0;var r=a(95),u=n(r),s=a(331),c=n(s),o=(t.query=function(){var e=(0,c.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/users"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.queryCurrent=function(){var e=(0,c.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.default)("/api/currentUser"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a(332)),i=n(o)}});