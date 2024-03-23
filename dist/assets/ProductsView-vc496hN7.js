import{a as j}from"./axios-nwi5g7Xq.js";import{_ as et,o as N,c as k,a as s,n as nt,h as it,F as tt,i as gt,t as z,g as $,v as q,j as It,k as $t,d as Et,b as rt,r as lt,l as yt}from"./index-Vow0FFhs.js";const Rt={name:"PaginationComponent",props:["pages","getProduct"]},Vt={"aria-label":"Page navigation example"},Ut={class:"pagination"},Bt=s("span",{"aria-hidden":"true"},"«",-1),Ft=[Bt],qt=["onClick"],Kt=s("span",{"aria-hidden":"true"},"»",-1),Yt=[Kt];function Wt(d,u,e,l,r,n){return N(),k("nav",Vt,[s("ul",Ut,[s("li",{class:nt(["page-item",{disabled:!e.pages.has_pre}])},[s("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:u[0]||(u[0]=it(t=>e.getProduct(e.pages.current_page-1),["prevent"]))},Ft)],2),(N(!0),k(tt,null,gt(e.pages.total_pages,t=>(N(),k("li",{key:"page"+t,class:nt(["page-item",{active:t===e.pages.current_page}])},[s("a",{class:"page-link",href:"#",onClick:it(i=>e.getProduct(t),["prevent"])},z(t),9,qt)],2))),128)),s("li",{class:nt(["page-item",{disabled:!e.pages.has_next}])},[s("a",{class:"page-link",href:"#","aria-label":"Next",onClick:u[1]||(u[1]=it(t=>e.getProduct(e.pages.current_page+1),["prevent"]))},Yt)],2)])])}const zt=et(Rt,[["render",Wt]]);var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jt(d){return d&&d.__esModule&&Object.prototype.hasOwnProperty.call(d,"default")?d.default:d}var Ot={exports:{}},at={exports:{}},ct={exports:{}};/*!
  * Bootstrap data.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var At;function Qt(){return At||(At=1,function(d,u){(function(e,l){d.exports=l()})(R,function(){const e=new Map;return{set(r,n,t){e.has(r)||e.set(r,new Map);const i=e.get(r);if(!i.has(n)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(n,t)},get(r,n){return e.has(r)&&e.get(r).get(n)||null},remove(r,n){if(!e.has(r))return;const t=e.get(r);t.delete(n),t.size===0&&e.delete(r)}}})}(ct)),ct.exports}var dt={exports:{}},J={exports:{}};/*!
  * Bootstrap index.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var vt;function Y(){return vt||(vt=1,function(d,u){(function(e,l){l(u)})(R,function(e){const n="transitionend",t=o=>(o&&window.CSS&&window.CSS.escape&&(o=o.replace(/#([^\s"#']+)/g,(h,a)=>`#${CSS.escape(a)}`)),o),i=o=>o==null?`${o}`:Object.prototype.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase(),p=o=>{do o+=Math.floor(Math.random()*1e6);while(document.getElementById(o));return o},c=o=>{if(!o)return 0;let{transitionDuration:h,transitionDelay:a}=window.getComputedStyle(o);const P=Number.parseFloat(h),w=Number.parseFloat(a);return!P&&!w?0:(h=h.split(",")[0],a=a.split(",")[0],(Number.parseFloat(h)+Number.parseFloat(a))*1e3)},v=o=>{o.dispatchEvent(new Event(n))},E=o=>!o||typeof o!="object"?!1:(typeof o.jquery<"u"&&(o=o[0]),typeof o.nodeType<"u"),_=o=>E(o)?o.jquery?o[0]:o:typeof o=="string"&&o.length>0?document.querySelector(t(o)):null,g=o=>{if(!E(o)||o.getClientRects().length===0)return!1;const h=getComputedStyle(o).getPropertyValue("visibility")==="visible",a=o.closest("details:not([open])");if(!a)return h;if(a!==o){const P=o.closest("summary");if(P&&P.parentNode!==a||P===null)return!1}return h},D=o=>!o||o.nodeType!==Node.ELEMENT_NODE||o.classList.contains("disabled")?!0:typeof o.disabled<"u"?o.disabled:o.hasAttribute("disabled")&&o.getAttribute("disabled")!=="false",O=o=>{if(!document.documentElement.attachShadow)return null;if(typeof o.getRootNode=="function"){const h=o.getRootNode();return h instanceof ShadowRoot?h:null}return o instanceof ShadowRoot?o:o.parentNode?O(o.parentNode):null},x=()=>{},S=o=>{o.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,L=[],K=o=>{document.readyState==="loading"?(L.length||document.addEventListener("DOMContentLoaded",()=>{for(const h of L)h()}),L.push(o)):o()},W=()=>document.documentElement.dir==="rtl",m=o=>{K(()=>{const h=I();if(h){const a=o.NAME,P=h.fn[a];h.fn[a]=o.jQueryInterface,h.fn[a].Constructor=o,h.fn[a].noConflict=()=>(h.fn[a]=P,o.jQueryInterface)}})},f=(o,h=[],a=o)=>typeof o=="function"?o(...h):a,b=(o,h,a=!0)=>{if(!a){f(o);return}const w=c(h)+5;let T=!1;const C=({target:B})=>{B===h&&(T=!0,h.removeEventListener(n,C),f(o))};h.addEventListener(n,C),setTimeout(()=>{T||v(h)},w)},y=(o,h,a,P)=>{const w=o.length;let T=o.indexOf(h);return T===-1?!a&&P?o[w-1]:o[0]:(T+=a?1:-1,P&&(T=(T+w)%w),o[Math.max(0,Math.min(T,w-1))])};e.defineJQueryPlugin=m,e.execute=f,e.executeAfterTransition=b,e.findShadowRoot=O,e.getElement=_,e.getNextActiveElement=y,e.getTransitionDurationFromElement=c,e.getUID=p,e.getjQuery=I,e.isDisabled=D,e.isElement=E,e.isRTL=W,e.isVisible=g,e.noop=x,e.onDOMContentLoaded=K,e.parseSelector=t,e.reflow=S,e.toType=i,e.triggerTransitionEnd=v,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(J,J.exports)),J.exports}/*!
  * Bootstrap event-handler.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Pt;function G(){return Pt||(Pt=1,function(d,u){(function(e,l){d.exports=l(Y())})(R,function(e){const l=/[^.]*(?=\..*)\.|.*/,r=/\..*/,n=/::\d+$/,t={};let i=1;const p={mouseenter:"mouseover",mouseleave:"mouseout"},c=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function v(m,f){return f&&`${f}::${i++}`||m.uidEvent||i++}function E(m){const f=v(m);return m.uidEvent=f,t[f]=t[f]||{},t[f]}function _(m,f){return function b(y){return W(y,{delegateTarget:m}),b.oneOff&&K.off(m,y.type,f),f.apply(m,[y])}}function g(m,f,b){return function y(o){const h=m.querySelectorAll(f);for(let{target:a}=o;a&&a!==this;a=a.parentNode)for(const P of h)if(P===a)return W(o,{delegateTarget:a}),y.oneOff&&K.off(m,o.type,f,b),b.apply(a,[o])}}function D(m,f,b=null){return Object.values(m).find(y=>y.callable===f&&y.delegationSelector===b)}function O(m,f,b){const y=typeof f=="string",o=y?b:f||b;let h=L(m);return c.has(h)||(h=m),[y,o,h]}function x(m,f,b,y,o){if(typeof f!="string"||!m)return;let[h,a,P]=O(f,b,y);f in p&&(a=(st=>function(A){if(!A.relatedTarget||A.relatedTarget!==A.delegateTarget&&!A.delegateTarget.contains(A.relatedTarget))return st.call(this,A)})(a));const w=E(m),T=w[P]||(w[P]={}),C=D(T,a,h?b:null);if(C){C.oneOff=C.oneOff&&o;return}const B=v(a,f.replace(l,"")),V=h?g(m,b,a):_(m,a);V.delegationSelector=h?b:null,V.callable=a,V.oneOff=o,V.uidEvent=B,T[B]=V,m.addEventListener(P,V,h)}function S(m,f,b,y,o){const h=D(f[b],y,o);h&&(m.removeEventListener(b,h,!!o),delete f[b][h.uidEvent])}function I(m,f,b,y){const o=f[b]||{};for(const[h,a]of Object.entries(o))h.includes(y)&&S(m,f,b,a.callable,a.delegationSelector)}function L(m){return m=m.replace(r,""),p[m]||m}const K={on(m,f,b,y){x(m,f,b,y,!1)},one(m,f,b,y){x(m,f,b,y,!0)},off(m,f,b,y){if(typeof f!="string"||!m)return;const[o,h,a]=O(f,b,y),P=a!==f,w=E(m),T=w[a]||{},C=f.startsWith(".");if(typeof h<"u"){if(!Object.keys(T).length)return;S(m,w,a,h,o?b:null);return}if(C)for(const B of Object.keys(w))I(m,w,B,f.slice(1));for(const[B,V]of Object.entries(T)){const F=B.replace(n,"");(!P||f.includes(F))&&S(m,w,a,V.callable,V.delegationSelector)}},trigger(m,f,b){if(typeof f!="string"||!m)return null;const y=e.getjQuery(),o=L(f),h=f!==o;let a=null,P=!0,w=!0,T=!1;h&&y&&(a=y.Event(f,b),y(m).trigger(a),P=!a.isPropagationStopped(),w=!a.isImmediatePropagationStopped(),T=a.isDefaultPrevented());const C=W(new Event(f,{bubbles:P,cancelable:!0}),b);return T&&C.preventDefault(),w&&m.dispatchEvent(C),C.defaultPrevented&&a&&a.preventDefault(),C}};function W(m,f={}){for(const[b,y]of Object.entries(f))try{m[b]=y}catch{Object.defineProperty(m,b,{configurable:!0,get(){return y}})}return m}return K})}(dt)),dt.exports}var ut={exports:{}},ht={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var St;function xt(){return St||(St=1,function(d,u){(function(e,l){d.exports=l()})(R,function(){function e(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function l(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}return{setDataAttribute(n,t,i){n.setAttribute(`data-bs-${l(t)}`,i)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${l(t)}`)},getDataAttributes(n){if(!n)return{};const t={},i=Object.keys(n.dataset).filter(p=>p.startsWith("bs")&&!p.startsWith("bsConfig"));for(const p of i){let c=p.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),t[c]=e(n.dataset[p])}return t},getDataAttribute(n,t){return e(n.getAttribute(`data-bs-${l(t)}`))}}})}(ht)),ht.exports}/*!
  * Bootstrap config.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var wt;function bt(){return wt||(wt=1,function(d,u){(function(e,l){d.exports=l(xt(),Y())})(R,function(e,l){class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,i){const p=l.isElement(i)?e.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof p=="object"?p:{},...l.isElement(i)?e.getDataAttributes(i):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,i=this.constructor.DefaultType){for(const[p,c]of Object.entries(i)){const v=t[p],E=l.isElement(v)?"element":l.toType(v);if(!new RegExp(c).test(E))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${p}" provided type "${E}" but expected type "${c}".`)}}}return r})}(ut)),ut.exports}/*!
  * Bootstrap base-component.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Tt;function Ht(){return Tt||(Tt=1,function(d,u){(function(e,l){d.exports=l(Qt(),G(),bt(),Y())})(R,function(e,l,r,n){const t="5.3.3";class i extends r{constructor(c,v){super(),c=n.getElement(c),c&&(this._element=c,this._config=this._getConfig(v),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),l.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,v,E=!0){n.executeAfterTransition(c,v,E)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return e.get(n.getElement(c),this.DATA_KEY)}static getOrCreateInstance(c,v={}){return this.getInstance(c)||new this(c,typeof v=="object"?v:null)}static get VERSION(){return t}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}return i})}(at)),at.exports}var ft={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Dt;function ot(){return Dt||(Dt=1,function(d,u){(function(e,l){d.exports=l(Y())})(R,function(e){const l=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let i=n.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),t=i&&i!=="#"?i.trim():null}return t?t.split(",").map(i=>e.parseSelector(i)).join(","):null},r={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(i=>i.matches(t))},parents(n,t){const i=[];let p=n.parentNode.closest(t);for(;p;)i.push(p),p=p.parentNode.closest(t);return i},prev(n,t){let i=n.previousElementSibling;for(;i;){if(i.matches(t))return[i];i=i.previousElementSibling}return[]},next(n,t){let i=n.nextElementSibling;for(;i;){if(i.matches(t))return[i];i=i.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(i=>!e.isDisabled(i)&&e.isVisible(i))},getSelectorFromElement(n){const t=l(n);return t&&r.findOne(t)?t:null},getElementFromSelector(n){const t=l(n);return t?r.findOne(t):null},getMultipleElementsFromSelector(n){const t=l(n);return t?r.find(t):[]}};return r})}(ft)),ft.exports}var mt={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Mt;function Gt(){return Mt||(Mt=1,function(d,u){(function(e,l){d.exports=l(G(),bt(),Y())})(R,function(e,l,r){const n="backdrop",t="fade",i="show",p=`mousedown.bs.${n}`,c={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},v={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class E extends l{constructor(g){super(),this._config=this._getConfig(g),this._isAppended=!1,this._element=null}static get Default(){return c}static get DefaultType(){return v}static get NAME(){return n}show(g){if(!this._config.isVisible){r.execute(g);return}this._append();const D=this._getElement();this._config.isAnimated&&r.reflow(D),D.classList.add(i),this._emulateAnimation(()=>{r.execute(g)})}hide(g){if(!this._config.isVisible){r.execute(g);return}this._getElement().classList.remove(i),this._emulateAnimation(()=>{this.dispose(),r.execute(g)})}dispose(){this._isAppended&&(e.off(this._element,p),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const g=document.createElement("div");g.className=this._config.className,this._config.isAnimated&&g.classList.add(t),this._element=g}return this._element}_configAfterMerge(g){return g.rootElement=r.getElement(g.rootElement),g}_append(){if(this._isAppended)return;const g=this._getElement();this._config.rootElement.append(g),e.on(g,p,()=>{r.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(g){r.executeAfterTransition(g,this._getElement(),this._config.isAnimated)}}return E})}(mt)),mt.exports}var X={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Ct;function Jt(){return Ct||(Ct=1,function(d,u){(function(e,l){l(u,G(),ot(),Y())})(R,function(e,l,r,n){const t=(i,p="hide")=>{const c=`click.dismiss${i.EVENT_KEY}`,v=i.NAME;l.on(document,c,`[data-bs-dismiss="${v}"]`,function(E){if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),n.isDisabled(this))return;const _=r.getElementFromSelector(this)||this.closest(`.${v}`);i.getOrCreateInstance(_)[p]()})};e.enableDismissTrigger=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(X,X.exports)),X.exports}var pt={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Nt;function Xt(){return Nt||(Nt=1,function(d,u){(function(e,l){d.exports=l(G(),ot(),bt())})(R,function(e,l,r){const n="focustrap",i=".bs.focustrap",p=`focusin${i}`,c=`keydown.tab${i}`,v="Tab",E="forward",_="backward",g={autofocus:!0,trapElement:null},D={autofocus:"boolean",trapElement:"element"};class O extends r{constructor(S){super(),this._config=this._getConfig(S),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return g}static get DefaultType(){return D}static get NAME(){return n}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,i),e.on(document,p,S=>this._handleFocusin(S)),e.on(document,c,S=>this._handleKeydown(S)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,i))}_handleFocusin(S){const{trapElement:I}=this._config;if(S.target===document||S.target===I||I.contains(S.target))return;const L=l.focusableChildren(I);L.length===0?I.focus():this._lastTabNavDirection===_?L[L.length-1].focus():L[0].focus()}_handleKeydown(S){S.key===v&&(this._lastTabNavDirection=S.shiftKey?_:E)}}return O})}(pt)),pt.exports}var _t={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var kt;function Zt(){return kt||(kt=1,function(d,u){(function(e,l){d.exports=l(xt(),ot(),Y())})(R,function(e,l,r){const n=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",t=".sticky-top",i="padding-right",p="margin-right";class c{constructor(){this._element=document.body}getWidth(){const E=document.documentElement.clientWidth;return Math.abs(window.innerWidth-E)}hide(){const E=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,i,_=>_+E),this._setElementAttributes(n,i,_=>_+E),this._setElementAttributes(t,p,_=>_-E)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,i),this._resetElementAttributes(n,i),this._resetElementAttributes(t,p)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(E,_,g){const D=this.getWidth(),O=x=>{if(x!==this._element&&window.innerWidth>x.clientWidth+D)return;this._saveInitialAttribute(x,_);const S=window.getComputedStyle(x).getPropertyValue(_);x.style.setProperty(_,`${g(Number.parseFloat(S))}px`)};this._applyManipulationCallback(E,O)}_saveInitialAttribute(E,_){const g=E.style.getPropertyValue(_);g&&e.setDataAttribute(E,_,g)}_resetElementAttributes(E,_){const g=D=>{const O=e.getDataAttribute(D,_);if(O===null){D.style.removeProperty(_);return}e.removeDataAttribute(D,_),D.style.setProperty(_,O)};this._applyManipulationCallback(E,g)}_applyManipulationCallback(E,_){if(r.isElement(E)){_(E);return}for(const g of l.find(E,this._element))_(g)}}return c})}(_t)),_t.exports}/*!
  * Bootstrap modal.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(d,u){(function(e,l){d.exports=l(Ht(),G(),ot(),Gt(),Jt(),Xt(),Y(),Zt())})(R,function(e,l,r,n,t,i,p,c){const v="modal",_=".bs.modal",g=".data-api",D="Escape",O=`hide${_}`,x=`hidePrevented${_}`,S=`hidden${_}`,I=`show${_}`,L=`shown${_}`,K=`resize${_}`,W=`click.dismiss${_}`,m=`mousedown.dismiss${_}`,f=`keydown.dismiss${_}`,b=`click${_}${g}`,y="modal-open",o="fade",h="show",a="modal-static",P=".modal.show",w=".modal-dialog",T=".modal-body",C='[data-bs-toggle="modal"]',B={backdrop:!0,focus:!0,keyboard:!0},V={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class F extends e{constructor(A,M){super(A,M),this._dialog=r.findOne(w,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new c,this._addEventListeners()}static get Default(){return B}static get DefaultType(){return V}static get NAME(){return v}toggle(A){return this._isShown?this.hide():this.show(A)}show(A){this._isShown||this._isTransitioning||l.trigger(this._element,I,{relatedTarget:A}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(y),this._adjustDialog(),this._backdrop.show(()=>this._showElement(A)))}hide(){!this._isShown||this._isTransitioning||l.trigger(this._element,O).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(h),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){l.off(window,_),l.off(this._dialog,_),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new n({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new i({trapElement:this._element})}_showElement(A){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const M=r.findOne(T,this._dialog);M&&(M.scrollTop=0),p.reflow(this._element),this._element.classList.add(h);const U=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,l.trigger(this._element,L,{relatedTarget:A})};this._queueCallback(U,this._dialog,this._isAnimated())}_addEventListeners(){l.on(this._element,f,A=>{if(A.key===D){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),l.on(window,K,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),l.on(this._element,m,A=>{l.one(this._element,W,M=>{if(!(this._element!==A.target||this._element!==M.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(y),this._resetAdjustments(),this._scrollBar.reset(),l.trigger(this._element,S)})}_isAnimated(){return this._element.classList.contains(o)}_triggerBackdropTransition(){if(l.trigger(this._element,x).defaultPrevented)return;const M=this._element.scrollHeight>document.documentElement.clientHeight,U=this._element.style.overflowY;U==="hidden"||this._element.classList.contains(a)||(M||(this._element.style.overflowY="hidden"),this._element.classList.add(a),this._queueCallback(()=>{this._element.classList.remove(a),this._queueCallback(()=>{this._element.style.overflowY=U},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const A=this._element.scrollHeight>document.documentElement.clientHeight,M=this._scrollBar.getWidth(),U=M>0;if(U&&!A){const Q=p.isRTL()?"paddingLeft":"paddingRight";this._element.style[Q]=`${M}px`}if(!U&&A){const Q=p.isRTL()?"paddingRight":"paddingLeft";this._element.style[Q]=`${M}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(A,M){return this.each(function(){const U=F.getOrCreateInstance(this,A);if(typeof A=="string"){if(typeof U[A]>"u")throw new TypeError(`No method named "${A}"`);U[A](M)}})}}return l.on(document,b,C,function(st){const A=r.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&st.preventDefault(),l.one(A,I,Q=>{Q.defaultPrevented||l.one(A,S,()=>{p.isVisible(this)&&this.focus()})});const M=r.findOne(P);M&&F.getInstance(M).hide(),F.getOrCreateInstance(A).toggle(this)}),t.enableDismissTrigger(F),p.defineJQueryPlugin(F),F})})(Ot);var te=Ot.exports;const Lt=jt(te),ee={props:["selectedProduct","isActionAdd","addProduct","editProduct","deleteImage","addImage"],data(){return{productModal:null,editSelectedProduct:{}}},mounted(){this.productModal=new Lt(document.getElementById("productModal")),this.editSelectedProduct=this.selectedProduct},watch:{tempProduct(){this.editSelectedProduct=this.selectedProduct}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()}}},oe={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},se={class:"modal-dialog modal-xl"},ne={class:"modal-content border-0"},ie={class:"modal-header bg-dark text-white"},re={id:"productModalLabel",class:"modal-title"},le={key:0},ae={key:1},ce=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),de={class:"modal-body"},ue={class:"row"},he={class:"col-sm-4"},fe={class:"mb-2"},me={class:"mb-3"},pe=s("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),_e=["src","alt"],ge=s("h3",{class:"mb-3"},"更多圖片",-1),be={class:"mb-3"},Ee={for:"imageUrl",class:"form-label"},ye={style:{display:"flex"}},Ae=["onUpdate:modelValue"],ve=["onClick"],Pe=["src","alt"],Se={class:"col-sm-8"},we={class:"mb-3"},Te=s("label",{for:"title",class:"form-label"},"標題",-1),De={class:"row"},Me={class:"mb-3 col-md-6"},Ce=s("label",{for:"category",class:"form-label"},"分類",-1),Ne={class:"mb-3 col-md-6"},ke=s("label",{for:"price",class:"form-label"},"單位",-1),Oe={class:"row"},xe={class:"mb-3 col-md-6"},Le=s("label",{for:"origin_price",class:"form-label"},"原價",-1),Ie={class:"mb-3 col-md-6"},$e=s("label",{for:"price",class:"form-label"},"售價",-1),Re=s("hr",null,null,-1),Ve={class:"mb-3"},Ue=s("label",{for:"description",class:"form-label"},"產品描述",-1),Be={class:"mb-3"},Fe=s("label",{for:"content",class:"form-label"},"說明內容",-1),qe={class:"mb-3"},Ke={class:"form-check"},Ye=s("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),We={class:"modal-footer"},ze=s("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function je(d,u,e,l,r,n){return N(),k("div",oe,[s("div",se,[s("div",ne,[s("div",ie,[s("h5",re,[e.isActionAdd?(N(),k("span",le,"新增產品")):(N(),k("span",ae,"編輯產品"))]),ce]),s("div",de,[s("div",ue,[s("div",he,[s("div",fe,[s("div",me,[pe,$(s("input",{"onUpdate:modelValue":u[0]||(u[0]=t=>r.editSelectedProduct.imageUrl=t),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[q,r.editSelectedProduct.imageUrl]])]),s("img",{class:"img-fluid",src:e.selectedProduct.imageUrl,alt:e.selectedProduct.title},null,8,_e)]),ge,(N(!0),k(tt,null,gt(e.selectedProduct.imagesUrl,(t,i)=>(N(),k("div",{class:"mb-2",key:t},[s("div",be,[s("label",Ee,"圖片 "+z(i+1),1),s("div",ye,[$(s("input",{"onUpdate:modelValue":p=>r.editSelectedProduct.imagesUrl[i]=p,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,Ae),[[q,r.editSelectedProduct.imagesUrl[i]]]),s("button",{onClick:p=>e.deleteImage(i),class:"btn btn-danger btn-sm"},"X",8,ve)])]),t?(N(),k("img",{key:0,class:"img-fluid",src:t,alt:e.selectedProduct.title},null,8,Pe)):It("",!0)]))),128)),s("div",null,[s("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:u[1]||(u[1]=(...t)=>e.addImage&&e.addImage(...t))}," 新增圖片 ")])]),s("div",Se,[s("div",we,[Te,$(s("input",{"onUpdate:modelValue":u[2]||(u[2]=t=>r.editSelectedProduct.title=t),id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[q,r.editSelectedProduct.title]])]),s("div",De,[s("div",Me,[Ce,$(s("input",{"onUpdate:modelValue":u[3]||(u[3]=t=>r.editSelectedProduct.category=t),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[q,r.editSelectedProduct.category]])]),s("div",Ne,[ke,$(s("input",{"onUpdate:modelValue":u[4]||(u[4]=t=>r.editSelectedProduct.unit=t),id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[q,r.editSelectedProduct.unit]])])]),s("div",Oe,[s("div",xe,[Le,$(s("input",{"onUpdate:modelValue":u[5]||(u[5]=t=>r.editSelectedProduct.origin_price=t),id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[q,r.editSelectedProduct.origin_price,void 0,{number:!0}]])]),s("div",Ie,[$e,$(s("input",{"onUpdate:modelValue":u[6]||(u[6]=t=>r.editSelectedProduct.price=t),id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[q,r.editSelectedProduct.price,void 0,{number:!0}]])])]),Re,s("div",Ve,[Ue,$(s("textarea",{"onUpdate:modelValue":u[7]||(u[7]=t=>r.editSelectedProduct.description=t),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`
            `,512),[[q,r.editSelectedProduct.description]])]),s("div",Be,[Fe,$(s("textarea",{"onUpdate:modelValue":u[8]||(u[8]=t=>r.editSelectedProduct.content=t),id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`
            `,512),[[q,r.editSelectedProduct.content]])]),s("div",qe,[s("div",Ke,[$(s("input",{"onUpdate:modelValue":u[9]||(u[9]=t=>r.editSelectedProduct.is_enabled=t),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[$t,r.editSelectedProduct.is_enabled]]),Ye])])])])]),s("div",We,[ze,e.isActionAdd?(N(),k("button",{key:0,type:"button",class:"btn btn-primary",onClick:u[10]||(u[10]=(...t)=>e.addProduct&&e.addProduct(...t))}," 確認 ")):(N(),k("button",{key:1,type:"button",class:"btn btn-primary",onClick:u[11]||(u[11]=(...t)=>e.editProduct&&e.editProduct(...t))}," 確認 "))])])])],512)}const Qe=et(ee,[["render",je]]),He={props:["selectedProduct","deleteProduct"],data(){return{delProductModal:null}},mounted(){this.delProductModal=new Lt(document.getElementById("delProductModal"))},methods:{openModal(){this.delProductModal.show()},closeModal(){this.delProductModal.hide()}}},Ge={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Je={class:"modal-dialog"},Xe={class:"modal-content border-0"},Ze=s("div",{class:"modal-header bg-danger text-white"},[s("h5",{id:"delProductModalLabel",class:"modal-title"},[s("span",null,"刪除產品")]),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),to={class:"modal-body"},eo={class:"text-danger"},oo={class:"modal-footer"},so=s("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function no(d,u,e,l,r,n){return N(),k("div",Ge,[s("div",Je,[s("div",Xe,[Ze,s("div",to,[Et(" 是否刪除 "),s("strong",eo,z(e.selectedProduct.title),1),Et(" 商品(刪除後將無法恢復)。 ")]),s("div",oo,[so,s("button",{type:"button",class:"btn btn-danger",onClick:u[0]||(u[0]=(...t)=>e.deleteProduct&&e.deleteProduct(...t))}," 確認刪除 ")])])])],512)}const io=et(He,[["render",no]]);var ro={VITE_URL:"https://ec-course-api.hexschool.io",VITE_PATH:"amaaaa",BASE_URL:"//",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:H,VITE_PATH:Z}=ro,lo={data(){return{selectedProduct:{imagesUrl:[]},isActionAdd:!1,products:[],pages:{}}},methods:{checkLogin(){j.post(`${H}/v2/api/user/check`).then(d=>{this.getProduct()}).catch(d=>{console.log(d),this.$router.push("/login")})},getProduct(d=1){j.get(`${H}/v2/api/${Z}/admin/products?page=${d}`).then(u=>{this.products=Object.values(u.data.products),this.pages=u.data.pagination,console.log(u)}).catch(u=>{console.log(u)})},openAddProductModal(){this.selectedProduct={imagesUrl:[]},this.isActionAdd=!0,this.$refs.productModal.openModal()},openEditProductModal(d){this.selectedProduct={...d},this.isActionAdd=!1,this.$refs.productModal.openModal()},openDeleteProductModal(d){this.selectedProduct=d,this.$refs.delProductModal.openModal()},addProduct(){j.post(`${H}/v2/api/${Z}/admin/product`,{data:this.selectedProduct}).then(d=>{alert(d.data.message),this.$refs.productModal.closeModal(),this.getProduct()}).catch(d=>{alert(d.data.message)})},editProduct(){j.put(`${H}/v2/api/${Z}/admin/product/${this.selectedProduct.id}`,{data:this.selectedProduct}).then(d=>{alert(d.data.message),this.$refs.productModal.closeModal(),this.getProduct()}).catch(d=>{alert(d.data.message)})},deleteProduct(){j.delete(`${H}/v2/api/${Z}/admin/product/${this.selectedProduct.id}`).then(d=>{alert(d.data.message),this.$refs.delProductModal.closeModal(),this.getProduct()}).catch(d=>{alert(d.data.message)})},addImage(){this.selectedProduct.imagesUrl==null&&(this.selectedProduct.imagesUrl=[]),this.selectedProduct.imagesUrl.push("")},deleteImage(d){this.selectedProduct.imagesUrl.splice(d,1)}},mounted(){const d=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");j.defaults.headers.common.Authorization=d,this.checkLogin()},components:{pagination:zt,productModal:Qe,delProductModal:io}},ao=s("h2",null,"產品列表",-1),co={class:"container"},uo={class:"text-end mt-4"},ho={class:"table mt-4"},fo=s("thead",null,[s("tr",null,[s("th",{width:"120"}," 分類 "),s("th",null,"產品名稱"),s("th",{width:"120"}," 原價 "),s("th",{width:"120"}," 售價 "),s("th",{width:"100"}," 是否啟用 "),s("th",{width:"120"}," 編輯 ")])],-1),mo={class:"text-end"},po={class:"text-end"},_o={class:"text-success"},go={class:"btn-group"},bo=["onClick"],Eo=["onClick"];function yo(d,u,e,l,r,n){const t=lt("pagination"),i=lt("product-modal"),p=lt("del-product-modal");return N(),k(tt,null,[ao,s("div",co,[s("div",uo,[s("button",{class:"btn btn-primary",type:"button",onClick:u[0]||(u[0]=(...c)=>n.openAddProductModal&&n.openAddProductModal(...c))}," 建立新的產品 ")]),s("table",ho,[fo,s("tbody",null,[(N(!0),k(tt,null,gt(r.products,c=>(N(),k("tr",{key:c.id},[s("td",null,z(c.category),1),s("td",null,z(c.title),1),s("td",mo,z(c.origin_price),1),s("td",po,z(c.price),1),s("td",null,[$(s("span",_o,"啟用",512),[[yt,c.is_enabled]]),$(s("span",null,"未啟用",512),[[yt,!c.is_enabled]])]),s("td",null,[s("div",go,[s("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:v=>n.openEditProductModal(c)}," 編輯 ",8,bo),s("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:v=>n.openDeleteProductModal(c)}," 刪除 ",8,Eo)])])]))),128))])]),rt(t,{pages:r.pages,"get-product":n.getProduct},null,8,["pages","get-product"])]),rt(i,{"selected-product":r.selectedProduct,"add-product":n.addProduct,"edit-product":n.editProduct,"is-action-add":r.isActionAdd,"delete-image":n.deleteImage,"add-image":n.addImage,ref:"productModal"},null,8,["selected-product","add-product","edit-product","is-action-add","delete-image","add-image"]),rt(p,{"selected-product":r.selectedProduct,"delete-product":n.deleteProduct,ref:"delProductModal"},null,8,["selected-product","delete-product"])],64)}const Po=et(lo,[["render",yo]]);export{Po as default};
