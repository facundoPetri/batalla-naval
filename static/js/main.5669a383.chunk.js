(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=(n(12),n(0)),o=function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("h1",{children:"Batalla Naval"})})},s=n(2),h=function(e){var t=e.name,n=(e.currentPlayer,e.switchPlayer),r=e.hasShip,c=e.gameBoard,o=e.coords,h=Object(s.a)(o,2),u=h[0],l=h[1],d=Object(a.useState)(r&&"cpu"!==t?"cell has-ship":"cell ".concat(t)),j=Object(s.a)(d,2),b=j[0],f=j[1],p=Object(a.useState)(null),O=Object(s.a)(p,2),m=O[0],v=O[1],S=Object(a.useState)(c.board[l][u].isShot),y=Object(s.a)(S,2),x=y[0],g=y[1];return Object(a.useEffect)((function(){x&&(f(b+" is-shot"),r&&v("x"))}),[x,r]),Object(a.useEffect)((function(){g(c.board[l][u].isShot)})),Object(i.jsx)("div",{onClick:function(){!1!==c.receiveAttack([u,l])&&(c.receiveAttack([u,l]),n())},className:b,children:m})},u=function(e){var t=e.gameBoard,n=e.currentPlayer,a=e.switchPlayer,r=e.player,c=0,o=t.board.map((function(e,o){return e.map((function(e,s){return c++,Object(i.jsx)(h,{name:r,currentPlayer:n,switchPlayer:a,hasShip:e.hasShip,gameBoard:t,coords:[s,o]},c)}))}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"name",children:r}),Object(i.jsx)("div",{className:"board",style:n===r?{pointerEvents:"none",backgroundColor:"rgba(255, 255, 255, 0.4)"}:null,children:o})]})},l=n(3),d=n(4),j=n(6),b=function(){function e(t){Object(l.a)(this,e),this.ship=Array(t).fill("o"),this.length=t}return Object(d.a)(e,[{key:"hit",value:function(e){this.ship[e]="i"}},{key:"isSunk",value:function(){return this.ship.every((function(e){return"i"===e}))}}]),e}(),f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;Object(l.a)(this,e),this.board=Array(t).fill({hasShip:!1,isShot:!1}).map((function(e){return Array(t).fill({hasShip:!1,isShot:!1})})),this.fleet=[{ship:new b(1),coords:[]},{ship:new b(1),coords:[]},{ship:new b(2),coords:[]},{ship:new b(2),coords:[]},{ship:new b(3),coords:[]},{ship:new b(3),coords:[]},{ship:new b(4),coords:[]}]}return Object(d.a)(e,[{key:"receiveAttack",value:function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];if(this.board[a][n].isShot)return!1;if(this.board[a][n]=Object(j.a)(Object(j.a)({},this.board[a][n]),{},{isShot:!0}),this.board[a][n].hasShip)for(var r=0;r<this.fleet.length;r++)for(var c=0;c<this.fleet[r].coords.length;c++)JSON.stringify(this.fleet[r].coords[c])===JSON.stringify(e)&&this.fleet[r].ship.hit(c)}},{key:"checkCollisionsWithShips",value:function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return this.board[a][n].hasShip}},{key:"setRandomCoords",value:function(e){var t=[];if("horizontal"===(Math.random()<.5?"vertical":"horizontal"))for(var n=Math.floor(Math.random()*(11-e)),a=Math.floor(10*Math.random()),r=0;r<e;r++)t.push([n+r,a]);else for(var c=Math.floor(10*Math.random()),i=Math.floor(Math.random()*(11-e)),o=0;o<e;o++)t.push([c,i+o]);return t}},{key:"placeShip",value:function(e){var t=this;e.forEach((function(e){var n=Object(s.a)(e,2),a=n[0],r=n[1];t.board[r][a]={hasShip:!0,isShot:!1}}))}},{key:"areAllShipsSunk",value:function(){return this.fleet.every((function(e){return e.ship.isSunk()}))}},{key:"init",value:function(){var e=this;this.fleet.forEach((function(t){do{t.coords=e.setRandomCoords(t.ship.length)}while(t.coords.some((function(t){return e.checkCollisionsWithShips(t)})));e.placeShip(t.coords)}))}}]),e}(),p=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"human";Object(l.a)(this,e),this.name=t,this.type=n,this.gameBoard=new f,this.gameBoard.init()}return Object(d.a)(e,[{key:"autoplay",value:function(e){var t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());!0===e.board[n][t].isShot?this.autoplay(e):e.receiveAttack([t,n])}}]),e}(),O=function(e){var t=e.name,n=e.handleChange,a=e.handleClick;return Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{htmlFor:"name",children:"Ingresa tu nombre:"}),Object(i.jsx)("input",{id:"name",type:"text",placeholder:"Nombre",value:t,onChange:n}),Object(i.jsx)("button",{onClick:function(e){return a(e)},children:"Comenzar"})]})},m=function(e){var t=e.winner;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{className:"winner-text",children:["El ganador es: ",Object(i.jsx)("span",{children:t})]}),Object(i.jsx)("button",{onClick:function(){return window.location.reload()},children:"Volver a jugar"})]})},v=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(s.a)(c,2),h=o[0],l=o[1],d=Object(a.useState)(null),j=Object(s.a)(d,2),b=j[0],f=j[1],v=Object(a.useState)(!1),S=Object(s.a)(v,2),y=S[0],x=S[1],g=Object(a.useState)(null),k=Object(s.a)(g,2),w=k[0],C=k[1],B=function(){C(w===h.name?"cpu":h.name)},M=Object(a.useState)(""),N=Object(s.a)(M,2),P=N[0],A=N[1];Object(a.useEffect)((function(){h&&C(h.name)}),[h]);Object(a.useEffect)((function(){var e=setTimeout((function(){"cpu"===w&&(b.autoplay(h.gameBoard),B())}),500);return function(){return clearTimeout(e)}}),[w]);var E=Object(a.useRef)(!0);return Object(a.useEffect)((function(){E.current?E.current=!1:(h.gameBoard.areAllShipsSunk()&&x("cpu"),b.gameBoard.areAllShipsSunk()&&x(P))}),[w]),Object(i.jsxs)("div",{children:[y&&Object(i.jsx)(m,{winner:y}),!y&&!n&&Object(i.jsx)(O,{name:P,handleChange:function(e){var t=e.target.value;A(t)},handleClick:function(e){e.preventDefault(),""!==P&&(l(new p(P)),f(new p("cpu","cpu")),r(!0))}}),!y&&n&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("span",{className:"turn",children:["Turno de ",w]}),Object(i.jsxs)("div",{className:"game",children:[Object(i.jsx)(u,{gameBoard:h.gameBoard,currentPlayer:w,switchPlayer:B,player:h.name}),Object(i.jsx)(u,{gameBoard:b.gameBoard,currentPlayer:w,switchPlayer:B,player:b.name})]})]})]})},S=function(){return Object(i.jsxs)("div",{className:"footer",children:["Creado por Facundo Petri como parte de"," ",Object(i.jsx)("a",{href:"https://www.theodinproject.com",children:"The Odin Project"})," Javascript curriculum track."]})},y=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(v,{}),Object(i.jsx)(S,{})]})};c.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5669a383.chunk.js.map