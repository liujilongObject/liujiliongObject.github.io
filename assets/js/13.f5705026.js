(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{529:function(t,n,e){},596:function(t,n,e){"use strict";e(529)},615:function(t,n,e){"use strict";e.r(n);e(16);var s={name:"CanvasNest",props:{config:{type:Object,default:function(){return{color:"138,43,226",pointColor:"0,0,0",opacity:"0.5",count:100,zIndex:-1}}},el:{type:String,default:".canvas-nest"}},data:function(){return{cNest:null}},mounted:function(){var t=this;e.e(7).then(e.t.bind(null,607,7)).then((function(n){var e=n.default;t.renderCanvasNest(e)}))},beforeDestroy:function(){this.cNest&&this.cNest.destroy()},methods:{renderCanvasNest:function(t){var n=document.querySelector(this.el);this.cNest=new t(n,this.config)}}},c=(e(596),e(6)),o=Object(c.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"canvas-nest"})}),[],!1,null,"b131f928",null);n.default=o.exports}}]);