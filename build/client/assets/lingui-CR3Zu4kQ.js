import{a as h}from"./components-BiZKUSio.js";import{i as v}from"./index-1YnX0IqW.js";const y="modulepreload",E=function(t){return"/"+t},u={},m=function(r,o,l){let c=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),i=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.all(o.map(n=>{if(n=E(n),n in u)return;u[n]=!0;const a=n.endsWith(".css"),d=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${d}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":y,a||(s.as="script",s.crossOrigin=""),s.href=n,i&&s.setAttribute("nonce",i),document.head.appendChild(s),a)return new Promise((f,p)=>{s.addEventListener("load",f),s.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}return c.then(()=>r()).catch(e=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=e,window.dispatchEvent(i),!i.defaultPrevented)throw e})},_=(t,r,o)=>{const l=t[r];return l?typeof l=="function"?l():Promise.resolve(l):new Promise((c,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+r+(r.split("/").length!==o?". Note that variables only represent file names one level deep.":""))))})};async function g(t){const{messages:r}=await _(Object.assign({"../../locales/en.po":()=>m(()=>import("./en-B9MSNsrG.js"),[]),"../../locales/fr.po":()=>m(()=>import("./fr-B8AW8ww6.js"),[])}),`../../locales/${t}.po`,4);return v.loadAndActivate({locale:t,messages:r})}function P(t="locale"){const[r]=h(),{[t]:o}=r.data??{};if(!o)throw new Error("Missing locale returned by the root loader.");if(typeof o=="string")return o;throw new Error("Invalid locale returned by the root loader.")}export{g as l,P as u};