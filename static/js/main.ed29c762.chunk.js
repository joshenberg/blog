(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=(n(12),n(1)),i=n(2),s=n(4),u=n(3),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h6",null,this.props.rating||"5!"))}}]),n}(r.a.Component),d=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,this.props.details.title||"OR TITLE"),r.a.createElement("h6",null,this.props.details.date||"TODAY IDIOT"),r.a.createElement(p,{rating:this.props.details.rating}))}}]),n}(r.a.Component),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{details:this.props.content.details}),r.a.createElement("p",null,this.props.content.text),r.a.createElement("br",null),r.a.createElement("hr",null))}}]),n}(r.a.Component),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={posts:[{details:{title:"First blog post",date:"Dec 01 01",rating:"4.5 I guess"},text:"I am a new post!"},{details:{title:"Second blog post",date:"Dec 02 02 02",rating:"3 I guess"},text:"Get over yourself!"},{details:{title:"Third blog post",date:"Dec 03 03 03",rating:"-1 I guess"},text:"bleep bloop"}]},a}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.posts.map((function(e){return r.a.createElement(m,{content:e})}));return r.a.createElement("div",null,e)}}]),n}(r.a.Component);n(13);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ed29c762.chunk.js.map