(this.webpackJsonpquizappui=this.webpackJsonpquizappui||[]).push([[0],{23:function(e,a,t){},28:function(e,a,t){},38:function(e,a,t){e.exports=t(50)},43:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(17),l=t.n(r),o=t(13),m=t(6),s=(t(43),t(23),t(37)),i=function(e){return c.a.createElement("div",{className:"button"},c.a.createElement(s.a,{className:"button-logo"}),c.a.createElement("p",{className:"button-text"},"Sign In"))},u=function(e){return c.a.createElement("div",{className:"navBar"},c.a.createElement(o.b,{to:"/",className:"navBar-logo"},c.a.createElement("span",null,"Salvos")),c.a.createElement("a",{href:"https://quizapp-server.herokuapp.com/auth/google",className:"a"},c.a.createElement(i,null)))},d=function(e){return c.a.createElement("div",{className:"underLine"})},E=function(e){return c.a.createElement("div",{className:"bodyText"},c.a.createElement("div",{className:"bodyText-div-head"},c.a.createElement("h2",{className:"bodyText-head-online"},"Online"),c.a.createElement("h2",{className:"bodyText-head-quiz"},"Quiz")),c.a.createElement(d,null),c.a.createElement("h4",{className:"bodyText-byLine"},"Some text goes here"))},p=function(e){return c.a.createElement("div",{className:"home"},c.a.createElement(u,{className:"home-navBar"}),c.a.createElement(E,{className:"home-bodyText"}),c.a.createElement("div",{className:"home-signInButtonLarge"},c.a.createElement("a",{href:"https://quizapp-server.herokuapp.com/auth/google",className:"a"},c.a.createElement(i,null))))},h=(t(28),function(e){return c.a.createElement("div",{className:"gameArea"},c.a.createElement("p",{className:"start-text"},"You are ready to go"),c.a.createElement("div",{className:"start-underLine"}),c.a.createElement("div",{className:"button start-button",onClick:function(){return c.a.createElement("div",null)}},"Start Game"))}),v=function(e){return c.a.createElement("div",{className:"play"},c.a.createElement(o.b,{to:"/",className:"salvos-logo"},c.a.createElement("span",null,"Salvos")),c.a.createElement(h,{className:"dynamicGameArea"}))},N=function(e){return c.a.createElement("div",{className:"thankYou"})},f=function(e){return c.a.createElement("div",{className:"limitExceeded"})},b=function(e){return c.a.createElement("div",{className:"errorNotFound"})},g=function(){return document.body.classList.add("body"),c.a.createElement("div",{className:"App"},c.a.createElement(o.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",component:p,exact:!0}),c.a.createElement(m.a,{path:"/quiz/play",component:v,exact:!0}),c.a.createElement(m.a,{path:"/thankyou",component:N,exact:!0}),c.a.createElement(m.a,{path:"/limitexceeded",component:f,exact:!0}),c.a.createElement(m.a,{component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(35),x=t(53),k=t(36),w=t(19),z={firstName:"",lastName:"",userName:"",email:"",picture:""},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;if("ADD_USER"===a.type)return Object.assign({},e,a.payload)},q=Object(w.b)(S),B=new k.a({uri:"http://localhost:4001/api"});l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y.a,{store:q},c.a.createElement(x.a,{client:B},c.a.createElement(g,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.c19dc31b.chunk.js.map