!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}({0:function(t,e,n){n("v8wI"),t.exports=n("wkor")},UFKg:function(t,e,n){var r=n("VU/8")(n("mwy9"),n("cpFE"),!1,null,null,null);t.exports=r.exports},"VU/8":function(t,e){t.exports=function(t,e,n,r,o,s){var i,c=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,c=t.default);var u,f="function"==typeof c?c.options:c;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=u):r&&(u=r),u){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=u,f.render=function(t,e){return u.call(e),d(t,e)}):f.beforeCreate=d?[].concat(d,u):[u]}return{esModule:i,exports:c,options:f}}},cpFE:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("card",{staticClass:"flex flex-col items-center justify-center"},[e("div",{staticClass:"px-3 py-3"},[e("h1",{staticClass:"text-center text-3xl text-80 font-light"},[e("b",[this._v(this._s(this.card.title)+":")]),this._v(" "+this._s(this._f("numberFormat")(this.count))+"\n        ")])])])},staticRenderFns:[]}},mwy9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={filters:{numberFormat:function(t){return isNaN(t)?t:Number(t).toLocaleString()}},props:{card:{type:Object,required:!0}},data:function(){return{count:0,errors:null}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;Nova.request().get("/nova-vendor/total-records/endpoint/",{params:{model:this.card.model}}).then(function(e){var n=e.data;t.$set(t,"count",n.count)}).catch(function(e){var n=e.response;t.$set(t,"errors",n.data.errors)})}}}},v8wI:function(t,e,n){Nova.booting(function(t,e){t.component("total-records",n("UFKg"))})},wkor:function(t,e){}});