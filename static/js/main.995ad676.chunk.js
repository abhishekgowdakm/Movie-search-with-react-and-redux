(this.webpackJsonpreactmoviesearch=this.webpackJsonpreactmoviesearch||[]).push([[0],{23:function(e,t,a){e.exports=a(54)},28:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),l=(a(28),a(6)),i=a.n(l),s=a(18),u=a(22),m=a(4),p=a(20),f=a.n(p),h=Object(m.b)((function(e){return{res:e.responce}}),(function(e){return{onGet:function(t){return e(function(e){return function(t){var a="https://api.themoviedb.org/3/search/movie?api_key=1d547d0f978f704dad5f29a2cd73fe62&language=en-US&query=".concat(e,"&inculde_adult=false");f.a.get(a).then((function(e){t(function(e){return{type:"GETQUERY",value:e}}(e.data.results))})).catch((function(e){console.log(e)}))}}(t))}}}))((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],l=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),e.onGet(c);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:l},r.a.createElement("label",{className:"label",htmlFor:"query"},"Movie name"),r.a.createElement("input",{type:"text",className:"input",value:c,onChange:function(e){return o(e.target.value)},placeholder:"i.e Jurassic Park"}),r.a.createElement("button",{className:"button",type:"submit"},"Search")),r.a.createElement("div",{className:"cards_main"},e.res.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement("div",{className:"cards",key:e.id},r.a.createElement("img",{className:"image",src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"title ".concat(e.title)}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,"Release Date: ",e.release_date),r.a.createElement("p",null,"Rating : ",e.vote_count),r.a.createElement("p",{className:"movie_desc"},e.overview))}))))}));a(53);var v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"React Movie Search"),r.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(2),E={responce:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETQUERY":return{responce:t.value};default:return{responce:e.responce}}},b=a(21),w=Object(d.c)(g,Object(d.a)(b.a));o.a.render(r.a.createElement(m.a,{store:w},r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.995ad676.chunk.js.map