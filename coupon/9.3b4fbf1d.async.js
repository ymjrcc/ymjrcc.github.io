webpackJsonp([9],{791:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),u=r(a),o=n(944),i=r(o),c=n(128),s=r(c);n(945);var l=n(315),d=n(313);t.default={namespace:"form",state:{step:{},regularFormSubmitting:!1,stepFormSubmitting:!1,advancedFormSubmitting:!1},effects:{submitRegularForm:s.default.mark(function e(t,n){var r=t.payload,a=n.call,u=n.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeRegularFormSubmitting",payload:!0});case 2:return e.next=4,a(d.fakeSubmitForm,r);case 4:return e.next=6,u({type:"changeRegularFormSubmitting",payload:!1});case 6:i.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)}),submitStepForm:s.default.mark(function e(t,n){var r=t.payload,a=n.call,u=n.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeStepFormSubmitting",payload:!0});case 2:return e.next=4,a(d.fakeSubmitForm,r);case 4:return e.next=6,u({type:"saveStepFormData",payload:r});case 6:return e.next=8,u({type:"changeStepFormSubmitting",payload:!1});case 8:return e.next=10,u(l.routerRedux.push("/form/step-form/result"));case 10:case"end":return e.stop()}},e,this)}),submitAdvancedForm:s.default.mark(function e(t,n){var r=t.payload,a=n.call,u=n.put;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeAdvancedFormSubmitting",payload:!0});case 2:return e.next=4,a(d.fakeSubmitForm,r);case 4:return e.next=6,u({type:"changeAdvancedFormSubmitting",payload:!1});case 6:i.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)})},reducers:{saveStepFormData:function(e,t){var n=t.payload;return(0,u.default)({},e,{step:(0,u.default)({},e.step,n)})},changeRegularFormSubmitting:function(e,t){var n=t.payload;return(0,u.default)({},e,{regularFormSubmitting:n})},changeStepFormSubmitting:function(e,t){var n=t.payload;return(0,u.default)({},e,{stepFormSubmitting:n})},changeAdvancedFormSubmitting:function(e,t){var n=t.payload;return(0,u.default)({},e,{advancedFormSubmitting:n})}}},e.exports=t.default},944:function(e,t,n){"use strict";function r(e){if(l)return void e(l);o.a.newInstance({prefixCls:f,transitionName:"move-up",style:{top:s},getContainer:p},function(t){if(l)return void e(l);l=t,e(t)})}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,n=arguments[2],a=arguments[3],o={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[n];"function"==typeof t&&(a=t,t=c);var s=d++;return r(function(r){r.notice({key:s,duration:t,style:{},content:u.createElement("div",{className:f+"-custom-content "+f+"-"+n},u.createElement(i.default,{type:o}),u.createElement("span",null,e)),onClose:a})}),function(){l&&l.removeNotice(s)}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),o=(n.n(u),n(327)),i=n(311),c=3,s=void 0,l=void 0,d=1,f="ant-message",p=void 0;t.default={info:function(e,t,n){return a(e,t,"info",n)},success:function(e,t,n){return a(e,t,"success",n)},error:function(e,t,n){return a(e,t,"error",n)},warn:function(e,t,n){return a(e,t,"warning",n)},warning:function(e,t,n){return a(e,t,"warning",n)},loading:function(e,t,n){return a(e,t,"loading",n)},config:function(e){void 0!==e.top&&(s=e.top,l=null),void 0!==e.duration&&(c=e.duration),void 0!==e.prefixCls&&(f=e.prefixCls),void 0!==e.getContainer&&(p=e.getContainer)},destroy:function(){l&&(l.destroy(),l=null)}}},945:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(193),a=(n.n(r),n(946));n.n(a)},946:function(e,t){}});