import{b as h,c as y,d as p,e as x,r as s,_ as S,j as e,M as w,f as j,O as k,S as g}from"./components-BiZKUSio.js";import{i as M}from"./index-1YnX0IqW.js";import{u as L,A as b}from"./use-ternary-dark-mode-BV-Q2tUq.js";import{u as v,l as E}from"./lingui-CR3Zu4kQ.js";import{u as N}from"./remix-8WgreAnz.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let u="positions";function O({getKey:o,...l}){let{isSpaMode:n}=h(),t=y(),r=p();x({getKey:o,storageKey:u});let d=s.useMemo(()=>{if(!o)return null;let a=o(t,r);return a!==t.key?a:null},[]);if(n)return null;let f=((a,m)=>{if(!window.history.state||!window.history.state.key){let i=Math.random().toString(32).slice(2);window.history.replaceState({key:i},"")}try{let c=JSON.parse(sessionStorage.getItem(a)||"{}")[m||window.history.state.key];typeof c=="number"&&window.scrollTo(0,c)}catch(i){console.error(i),sessionStorage.removeItem(a)}}).toString();return s.createElement("script",S({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${f})(${JSON.stringify(u)}, ${JSON.stringify(d)})`}}))}const T=s.createContext(!1);function C(){return s.useContext(T)??!1}const I="/assets/tailwind-4GaJ5Mq6.css",$=()=>[{rel:"stylesheet",href:I}];function q(){const{csrf:o}=N(),l=C(),{isDarkMode:n}=L();s.useEffect(()=>{const r=document.querySelector("body");r&&(n?r.classList.add("dark"):r.classList.remove("dark"))},[n]);const t=v();return s.useEffect(()=>{M.locale!==t&&E(t)},[t]),e.jsxs("html",{lang:t??"en",className:"h-full",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),e.jsx(w,{}),e.jsx(j,{})]}),e.jsxs("body",{className:"h-full",children:[e.jsx(b,{token:o,children:e.jsx(k,{})}),e.jsx(O,{}),l?null:e.jsx(g,{})]})]})}export{q as default,$ as links};
