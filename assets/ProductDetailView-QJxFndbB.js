import{a as U}from"./axios-nwi5g7Xq.js";import{m as k,e as ie,b as W,c as le,d as ne,g as j,S as re,a as oe,N as ce}from"./navigation-HtFpG003.js";import{_ as de,c as H,d as i,a as R,w as I,t as S,g as Z,h as pe,v as ue,i as me,F as Q,r as X,o as O,f as ee,j as te,b as G}from"./index-tXcN0AzJ.js";function V(g){return g===void 0&&(g=""),`.${g.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function fe(g){let{swiper:e,extendParams:P,on:p,emit:l}=g;const d="swiper-pagination";P({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:t=>t,formatFractionTotal:t=>t,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let _,C=0;function T(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(t,a){const{bulletActiveClass:s}=e.params.pagination;t&&(t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&(t.classList.add(`${s}-${a}`),t=t[`${a==="prev"?"previous":"next"}ElementSibling`],t&&t.classList.add(`${s}-${a}-${a}`)))}function y(t){const a=t.target.closest(V(e.params.pagination.bulletClass));if(!a)return;t.preventDefault();const s=W(a)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===s)return;e.slideToLoop(s)}else e.slideTo(s)}function L(){const t=e.rtl,a=e.params.pagination;if(T())return;let s=e.pagination.el;s=k(s);let n,v;const x=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,F=e.params.loop?Math.ceil(x/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(v=e.previousRealIndex||0,n=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(n=e.snapIndex,v=e.previousSnapIndex):(v=e.previousIndex||0,n=e.activeIndex||0),a.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const r=e.pagination.bullets;let h,u,M;if(a.dynamicBullets&&(_=ie(r[0],e.isHorizontal()?"width":"height",!0),s.forEach(m=>{m.style[e.isHorizontal()?"width":"height"]=`${_*(a.dynamicMainBullets+4)}px`}),a.dynamicMainBullets>1&&v!==void 0&&(C+=n-(v||0),C>a.dynamicMainBullets-1?C=a.dynamicMainBullets-1:C<0&&(C=0)),h=Math.max(n-C,0),u=h+(Math.min(r.length,a.dynamicMainBullets)-1),M=(u+h)/2),r.forEach(m=>{const f=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(b=>`${a.bulletActiveClass}${b}`)].map(b=>typeof b=="string"&&b.includes(" ")?b.split(" "):b).flat();m.classList.remove(...f)}),s.length>1)r.forEach(m=>{const f=W(m);f===n?m.classList.add(...a.bulletActiveClass.split(" ")):e.isElement&&m.setAttribute("part","bullet"),a.dynamicBullets&&(f>=h&&f<=u&&m.classList.add(...`${a.bulletActiveClass}-main`.split(" ")),f===h&&c(m,"prev"),f===u&&c(m,"next"))});else{const m=r[n];if(m&&m.classList.add(...a.bulletActiveClass.split(" ")),e.isElement&&r.forEach((f,b)=>{f.setAttribute("part",b===n?"bullet-active":"bullet")}),a.dynamicBullets){const f=r[h],b=r[u];for(let A=h;A<=u;A+=1)r[A]&&r[A].classList.add(...`${a.bulletActiveClass}-main`.split(" "));c(f,"prev"),c(b,"next")}}if(a.dynamicBullets){const m=Math.min(r.length,a.dynamicMainBullets+4),f=(_*m-_)/2-M*_,b=t?"right":"left";r.forEach(A=>{A.style[e.isHorizontal()?b:"top"]=`${f}px`})}}s.forEach((r,h)=>{if(a.type==="fraction"&&(r.querySelectorAll(V(a.currentClass)).forEach(u=>{u.textContent=a.formatFractionCurrent(n+1)}),r.querySelectorAll(V(a.totalClass)).forEach(u=>{u.textContent=a.formatFractionTotal(F)})),a.type==="progressbar"){let u;a.progressbarOpposite?u=e.isHorizontal()?"vertical":"horizontal":u=e.isHorizontal()?"horizontal":"vertical";const M=(n+1)/F;let m=1,f=1;u==="horizontal"?m=M:f=M,r.querySelectorAll(V(a.progressbarFillClass)).forEach(b=>{b.style.transform=`translate3d(0,0,0) scaleX(${m}) scaleY(${f})`,b.style.transitionDuration=`${e.params.speed}ms`})}a.type==="custom"&&a.renderCustom?(r.innerHTML=a.renderCustom(e,n+1,F),h===0&&l("paginationRender",r)):(h===0&&l("paginationRender",r),l("paginationUpdate",r)),e.params.watchOverflow&&e.enabled&&r.classList[e.isLocked?"add":"remove"](a.lockClass)})}function D(){const t=e.params.pagination;if(T())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let s=e.pagination.el;s=k(s);let n="";if(t.type==="bullets"){let v=e.params.loop?Math.ceil(a/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&v>a&&(v=a);for(let x=0;x<v;x+=1)t.renderBullet?n+=t.renderBullet.call(e,x,t.bulletClass):n+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}t.type==="fraction"&&(t.renderFraction?n=t.renderFraction.call(e,t.currentClass,t.totalClass):n=`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),t.type==="progressbar"&&(t.renderProgressbar?n=t.renderProgressbar.call(e,t.progressbarFillClass):n=`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],s.forEach(v=>{t.type!=="custom"&&(v.innerHTML=n||""),t.type==="bullets"&&e.pagination.bullets.push(...v.querySelectorAll(V(t.bulletClass)))}),t.type!=="custom"&&l("paginationRender",s[0])}function B(){e.params.pagination=le(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let a;typeof t.el=="string"&&e.isElement&&(a=e.el.querySelector(t.el)),!a&&typeof t.el=="string"&&(a=[...document.querySelectorAll(t.el)]),a||(a=t.el),!(!a||a.length===0)&&(e.params.uniqueNavElements&&typeof t.el=="string"&&Array.isArray(a)&&a.length>1&&(a=[...e.el.querySelectorAll(t.el)],a.length>1&&(a=a.filter(s=>ne(s,".swiper")[0]===e.el)[0])),Array.isArray(a)&&a.length===1&&(a=a[0]),Object.assign(e.pagination,{el:a}),a=k(a),a.forEach(s=>{t.type==="bullets"&&t.clickable&&s.classList.add(...(t.clickableClass||"").split(" ")),s.classList.add(t.modifierClass+t.type),s.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.type==="bullets"&&t.dynamicBullets&&(s.classList.add(`${t.modifierClass}${t.type}-dynamic`),C=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),t.type==="progressbar"&&t.progressbarOpposite&&s.classList.add(t.progressbarOppositeClass),t.clickable&&s.addEventListener("click",y),e.enabled||s.classList.add(t.lockClass)}))}function E(){const t=e.params.pagination;if(T())return;let a=e.pagination.el;a&&(a=k(a),a.forEach(s=>{s.classList.remove(t.hiddenClass),s.classList.remove(t.modifierClass+t.type),s.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&(s.classList.remove(...(t.clickableClass||"").split(" ")),s.removeEventListener("click",y))})),e.pagination.bullets&&e.pagination.bullets.forEach(s=>s.classList.remove(...t.bulletActiveClass.split(" ")))}p("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:a}=e.pagination;a=k(a),a.forEach(s=>{s.classList.remove(t.horizontalClass,t.verticalClass),s.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)})}),p("init",()=>{e.params.pagination.enabled===!1?z():(B(),D(),L())}),p("activeIndexChange",()=>{typeof e.snapIndex>"u"&&L()}),p("snapIndexChange",()=>{L()}),p("snapGridLengthChange",()=>{D(),L()}),p("destroy",()=>{E()}),p("enable disable",()=>{let{el:t}=e.pagination;t&&(t=k(t),t.forEach(a=>a.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),p("lock unlock",()=>{L()}),p("click",(t,a)=>{const s=a.target,n=k(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&n&&n.length>0&&!s.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const v=n[0].classList.contains(e.params.pagination.hiddenClass);l(v===!0?"paginationShow":"paginationHide"),n.forEach(x=>x.classList.toggle(e.params.pagination.hiddenClass))}});const q=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=k(t),t.forEach(a=>a.classList.remove(e.params.pagination.paginationDisabledClass))),B(),D(),L()},z=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=k(t),t.forEach(a=>a.classList.add(e.params.pagination.paginationDisabledClass))),E()};Object.assign(e.pagination,{enable:q,disable:z,render:D,update:L,init:B,destroy:E})}function ge(g){let{swiper:e,extendParams:P,on:p,emit:l,params:d}=g;e.autoplay={running:!1,paused:!1,timeLeft:0},P({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let _,C,T=d&&d.autoplay?d.autoplay.delay:3e3,c=d&&d.autoplay?d.autoplay.delay:3e3,y,L=new Date().getTime(),D,B,E,q,z,t,a;function s(o){!e||e.destroyed||!e.wrapperEl||o.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",s),!a&&u())}const n=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?D=!0:D&&(c=y,D=!1);const o=e.autoplay.paused?y:L+c-new Date().getTime();e.autoplay.timeLeft=o,l("autoplayTimeLeft",o,o/T),C=requestAnimationFrame(()=>{n()})},v=()=>{let o;return e.virtual&&e.params.virtual.enabled?o=e.slides.filter(w=>w.classList.contains("swiper-slide-active"))[0]:o=e.slides[e.activeIndex],o?parseInt(o.getAttribute("data-swiper-autoplay"),10):void 0},x=o=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(C),n();let $=typeof o>"u"?e.params.autoplay.delay:o;T=e.params.autoplay.delay,c=e.params.autoplay.delay;const w=v();!Number.isNaN(w)&&w>0&&typeof o>"u"&&($=w,T=w,c=w),y=$;const N=e.params.speed,K=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(N,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,N,!0,!0),l("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(N,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,N,!0,!0),l("autoplay")),e.params.cssMode&&(L=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return $>0?(clearTimeout(_),_=setTimeout(()=>{K()},$)):requestAnimationFrame(()=>{K()}),$},F=()=>{L=new Date().getTime(),e.autoplay.running=!0,x(),l("autoplayStart")},r=()=>{e.autoplay.running=!1,clearTimeout(_),cancelAnimationFrame(C),l("autoplayStop")},h=(o,$)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(_),o||(t=!0);const w=()=>{l("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",s):u()};if(e.autoplay.paused=!0,$){z&&(y=e.params.autoplay.delay),z=!1,w();return}y=(y||e.params.autoplay.delay)-(new Date().getTime()-L),!(e.isEnd&&y<0&&!e.params.loop)&&(y<0&&(y=0),w())},u=()=>{e.isEnd&&y<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(L=new Date().getTime(),t?(t=!1,x(y)):x(),e.autoplay.paused=!1,l("autoplayResume"))},M=()=>{if(e.destroyed||!e.autoplay.running)return;const o=j();o.visibilityState==="hidden"&&(t=!0,h(!0)),o.visibilityState==="visible"&&u()},m=o=>{o.pointerType==="mouse"&&(t=!0,a=!0,!(e.animating||e.autoplay.paused)&&h(!0))},f=o=>{o.pointerType==="mouse"&&(a=!1,e.autoplay.paused&&u())},b=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",m),e.el.addEventListener("pointerleave",f))},A=()=>{e.el.removeEventListener("pointerenter",m),e.el.removeEventListener("pointerleave",f)},ae=()=>{j().addEventListener("visibilitychange",M)},se=()=>{j().removeEventListener("visibilitychange",M)};p("init",()=>{e.params.autoplay.enabled&&(b(),ae(),F())}),p("destroy",()=>{A(),se(),e.autoplay.running&&r()}),p("_freeModeStaticRelease",()=>{(E||t)&&u()}),p("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?r():h(!0,!0)}),p("beforeTransitionStart",(o,$,w)=>{e.destroyed||!e.autoplay.running||(w||!e.params.autoplay.disableOnInteraction?h(!0,!0):r())}),p("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){r();return}B=!0,E=!1,t=!1,q=setTimeout(()=>{t=!0,E=!0,h(!0)},200)}}),p("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!B)){if(clearTimeout(q),clearTimeout(_),e.params.autoplay.disableOnInteraction){E=!1,B=!1;return}E&&e.params.cssMode&&u(),E=!1,B=!1}}),p("slideChange",()=>{e.destroyed||!e.autoplay.running||(z=!0)}),Object.assign(e.autoplay,{start:F,stop:r,pause:h,resume:u})}var ye={VITE_URL:"https://ec-course-api.hexschool.io",VITE_PATH:"amaaaa",BASE_URL:"/vue-e-commerce-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:Y,VITE_PATH:J}=ye,he={data(){return{products:[],product:{},status:{addCartLoading:""},buyQty:1}},methods:{getProducts(){U.get(`${Y}/v2/api/${J}/products/all`).then(g=>{this.products=g.data.products})},openProductDetail(g){console.log(g),this.$router.push(`/product/${g.id}`)},getProduct(){const{id:g}=this.$route.params;U.get(`${Y}/v2/api/${J}/product/${g}`).then(e=>{console.log(e),this.product=e.data.product})},addToCart(g,e=1){const P={product_id:g,qty:Number(e)};console.log(P),this.status.addCartLoading=g,U.post(`${Y}/v2/api/${J}/cart`,{data:P}).then(p=>{this.status.addCartLoading="",this.$router.push("/cart")})}},mounted(){this.getProduct(),this.getProducts()},components:{Swiper:re,SwiperSlide:oe},setup(){return{modules:[ge,fe,ce]}}},be=i("h2",null,"產品細節",-1),ve={class:"row align-items-center"},_e={class:"col-md-7"},Ce=["src","alt"],Le={class:"col-md-5"},xe={"aria-label":"breadcrumb"},we={class:"breadcrumb bg-white px-0 mb-0 py-3"},Te={class:"breadcrumb-item"},Ee={class:"breadcrumb-item"},$e=i("li",{class:"breadcrumb-item active","aria-current":"page"},"產品細節",-1),ke={class:"fw-bold h1 mb-1"},Se={key:0,class:"mb-0 text-muted text-end"},De={class:"h4 fw-bold text-end"},Be={class:"row align-items-center"},Me={class:"col-5"},Ae={class:"input-group my-3 bg-light rounded"},Pe=i("div",{class:"input-group-prepend"},[i("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1"},[i("i",{class:"fas fa-minus"})])],-1),Ie=i("div",{class:"input-group-append"},[i("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2"},[i("i",{class:"fas fa-plus"})])],-1),Oe={class:"col-1"},ze={class:"col-6"},Fe={class:"row my-5"},Ne={class:"col-md-4"},He={class:"col-md-3"},Re={class:"text-muted"},Ve=i("h3",{class:"fw-bold"},"更多",-1),qe=i("div",{class:"text-as-image"},[G(" 穀雨推薦 "),i("br"),i("ul",null,[i("li",null,"枸杞：明目養肝"),i("li",null,"菊花：清熱解毒"),i("li",null,"蓮子：益氣養心")])],-1),Ge={class:"card border-0 mb-4 position-relative position-relative"},Ue=["src","alt","onClick"],je={class:"card-body p-0"},Qe={class:"mb-0 mt-3"},Xe={class:"card-text mb-0"},Ye={class:"text-muted"},Je={key:0};function Ke(g,e,P,p,l,d){const _=X("swiper-slide"),C=X("swiper"),T=X("RouterLink");return O(),H(Q,null,[be,i("div",ve,[i("div",_e,[R(C,{navigation:!0,modules:p.modules},{default:I(()=>[(O(!0),H(Q,null,ee(l.product.imagesUrl,(c,y)=>(O(),te(_,{key:y},{default:I(()=>[i("img",{src:c,class:"d-block w-100",alt:l.product.title},null,8,Ce)]),_:2},1024))),128))]),_:1},8,["modules"])]),i("div",Le,[i("nav",xe,[i("ol",we,[i("li",Te,[R(T,{class:"text-muted",to:"/"},{default:I(()=>[G("首頁")]),_:1})]),i("li",Ee,[R(T,{class:"text-muted",to:"/products"},{default:I(()=>[G("產品列表")]),_:1})]),$e])]),i("h2",ke,S(l.product.title),1),l.product.origin_price!=l.product.price?(O(),H("p",Se,[i("del",null,"NT$"+S(l.product.origin_price),1)])):Z("",!0),i("p",De,"NT$"+S(l.product.price),1),i("div",Be,[i("div",Me,[i("div",Ae,[Pe,pe(i("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>l.buyQty=c),class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",value:"1"},null,512),[[ue,l.buyQty]]),Ie])]),i("div",Oe,S(l.product.unit),1),i("div",ze,[i("a",{onClick:e[1]||(e[1]=me(c=>d.addToCart(l.product.id,l.buyQty),["prevent"])),class:"text-nowrap btn btn-dark w-100 py-2"},"加入購物車")])])])]),i("div",Fe,[i("div",Ne,[i("p",null,S(l.product.content),1)]),i("div",He,[i("p",Re,S(l.product.description),1)])]),Ve,R(C,{loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},spaceBetween:10,breakpoints:{767:{slidesPerView:4,spaceBetween:30}},modules:p.modules,class:"mySwiper"},{default:I(()=>[R(_,null,{default:I(()=>[qe]),_:1}),(O(!0),H(Q,null,ee(l.products,c=>(O(),te(_,{key:c.id},{default:I(()=>[i("div",Ge,[i("img",{src:c.imageUrl,class:"card-img-top rounded-0",alt:c.title,style:{"object-fit":"cover",height:"300",cursor:"pointer"},onClick:y=>d.openProductDetail(c)},null,8,Ue),i("div",je,[i("h4",Qe,S(c.title),1),i("p",Xe,[G("NT$"+S(c.price)+" ",1),i("span",Ye,[c.origin_price!=c.price?(O(),H("del",Je,"NT$"+S(c.origin_price),1)):Z("",!0)])])])])]),_:2},1024))),128))]),_:1},8,["modules"])],64)}const tt=de(he,[["render",Ke]]);export{tt as default};
