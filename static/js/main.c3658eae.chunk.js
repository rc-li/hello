(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(3),a=n.n(r),l=n(1),u=n(5);function i(e){var t=e.todo,n=e.toggleTodo;return c.a.createElement("div",null,c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",checked:t.complete,onChange:function(){n(t.id)}}),t.name))}function d(e){var t=e.todos,n=e.toggleTodo;return t.map((function(e){return c.a.createElement(i,{key:e.id,toggleTodo:n,todo:e})}))}var f=n(4),m=n.n(f);var p=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(o.useRef)();return Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todoApp.todos"));e&&r(e)}),[]),Object(o.useEffect)((function(){localStorage.setItem("todoApp.todos",JSON.stringify(n))}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{todos:n,toggleTodo:function(e){var t=Object(l.a)(n),o=t.find((function(t){return t.id===e}));o.complete=!o.complete,r(t)}}),c.a.createElement("input",{ref:a,type:"text"}),c.a.createElement("button",{onClick:function(e){var t=a.current.value;""!==t&&(r((function(e){return[].concat(Object(l.a)(e),[{id:m()(),name:t,complete:!1}])})),a.current.value=null)}},"Add Todo"),c.a.createElement("button",{onClick:function(){var e=n.filter((function(e){return!e.complete}));r(e)}},"Clear Completed Todo"),c.a.createElement("div",null,n.filter((function(e){return!e.complete})).length," left to do"))};a.a.render(c.a.createElement(p,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.c3658eae.chunk.js.map