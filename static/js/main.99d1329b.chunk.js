(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":0,"productName":"apple","icon":"\ud83c\udf4f","price":3,"inventory":10},{"id":1,"productName":"watermelon","icon":"\ud83c\udf49","price":90,"inventory":3},{"id":2,"productName":"pizza","icon":"\ud83c\udf55","price":10,"inventory":100},{"id":3,"productName":"salad","icon":"\ud83e\udd57","price":40,"inventory":0},{"id":4,"productName":"ice cream","icon":"\ud83c\udf66","price":7,"inventory":66},{"id":5,"productName":"water","icon":"\ud83e\uddca","price":10,"inventory":0},{"id":6,"productName":"sushi","icon":"\ud83c\udf63","price":33,"inventory":3}]')},21:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(15),o=c.n(i),j=(c(21),c(7)),s=c(2),a=c(12),d=c(1),h=function(e){var t=e.data.map((function(e){var t=e.id,c=e.productName,n=e.icon,r=e.inventory,i=e.price;return Object(d.jsxs)("li",{children:[Object(d.jsx)(j.b,{to:"/project/".concat(t),children:Object(d.jsx)("h5",{children:c})}),Object(d.jsx)("i",{children:n}),Object(d.jsxs)("h6",{children:[i,"\u20ac"]}),Object(d.jsxs)("h6",{children:[r," items in stock"]})]},t)}));return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("h3",{children:"Products "}),Object(d.jsx)("ul",{children:t})]})},l=function(e){var t=e.data.filter((function(t){return t.id==e.id}));console.log(t);var c=t.length?t.map((function(e){var t=e.id,c=e.productName,n=(e.icon,e.inventory,e.price);return Object(d.jsxs)("li",{children:[Object(d.jsxs)("h2",{children:[c," "]}),Object(d.jsxs)("h5",{children:[n,"\u20ac"]})]},t)})):"Sorry, something went wrong";return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("h3",{children:"Further Project Info"}),Object(d.jsx)("ul",{children:c}),Object(d.jsx)(j.b,{to:"/project",style:{textDecoration:"none"},children:"Back"})]})},b=function(){return Object(d.jsx)(r.a.Fragment,{children:Object(d.jsx)("h1",{children:"About Me"})})},p=function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("li",{children:"Home"})}),Object(d.jsx)(j.b,{to:"/project",children:Object(d.jsx)("li",{children:"Projects"})}),Object(d.jsx)(j.b,{to:"/about",children:Object(d.jsx)("li",{children:"About"})})]})},u=function(){return Object(d.jsx)("h1",{children:"Home"})},x=function(){return Object(d.jsx)("h1",{children:"Coming Soon"})},O=function(){return Object(d.jsxs)(j.a,{children:[Object(d.jsx)(p,{}),Object(d.jsx)("h1",{className:"jumbotron",children:"Portfolio Sven Wacker"}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{path:"/",exact:!0,component:u}),Object(d.jsx)(s.a,{path:"/about",exact:!0,component:b}),Object(d.jsx)(s.a,{path:"/project",exact:!0,component:function(){return Object(d.jsx)(h,{data:a})}}),Object(d.jsx)(s.a,{path:"/project/:id",component:function(e){var t=e.match;return console.log(t),Object(d.jsx)(l,{data:a,id:t.params.id})}}),Object(d.jsx)(s.a,{path:function(){return"/main"},children:Object(d.jsx)(x,{})})]})]})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.99d1329b.chunk.js.map