import{a as n}from"./axios-nwi5g7Xq.js";import{_ as w,c as a,d as t,a as g,w as f,F as h,f as v,e as C,r as k,o,b as l,t as i,g as y}from"./index-tXcN0AzJ.js";var $={VITE_URL:"https://ec-course-api.hexschool.io",VITE_PATH:"amaaaa",BASE_URL:"/vue-e-commerce-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p,VITE_PATH:u}=$,L={data(){return{products:[],tempProduct:{},status:{addCartLoading:"",cartQtyLoading:"",delCartLoading:""},carts:{},form:{user:{name:"",email:"",tel:"",address:""},message:""},categories:["中藥材","藥膳包"]}},methods:{getProducts(){const{category:s=""}=this.$route.query;n.get(`${p}/v2/api/${u}/products?category=${s}`).then(d=>{this.products=d.data.products})},openProductDetail(s){this.$router.push(`/product/${s.id}`)},addToCart(s,d=1){const r={product_id:s,qty:d};this.status.addCartLoading=s,n.post(`${p}/v2/api/${u}/cart`,{data:r}).then(m=>{this.status.addCartLoading="",this.getCart()})},getCart(){n.get(`${p}/v2/api/${u}/cart`).then(s=>{console.log(s),this.carts=s.data.data})},changeCartQty(s,d=1){const r={product_id:s.product_id,qty:d};this.status.cartQtyLoading=s.id,n.put(`${p}/v2/api/${u}/cart/${s.id}`,{data:r}).then(m=>{this.status.cartQtyLoading="",this.getCart()})}},components:{},mounted(){this.getProducts(),this.getCart()},watch:{"$route.query":{handler(){this.getProducts()},deep:!0}}},D=C('<div class="position-relative d-flex align-items-center justify-content-center" style="min-height:400px;"><div class="position-absolute" style="top:0;bottom:0;left:0;right:0;background-image:url(https://images.unsplash.com/photo-1550826679-1b8ba79f1c18?q=80&amp;w=1770&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;w=1950&amp;q=80https://images.unsplash.com/photo-1583466478015-2dce6bf2f551?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGl0aW9uYWwlMjBDaGluZXNlJTIwbWVkaWNpbmV8ZW58MHx8MHx8fDA%3D&amp;w=1950&amp;q=80);background-position:center center;opacity:0.3;"></div><h2 class="fw-bold">朱記中藥行</h2></div><div class="row justify-content-center my-auto"><div class="col-md-4 text-center"><h2>產品列表</h2></div></div>',2),V={class:"container mt-md-5 mt-3 mb-7"},T={class:"row"},M={class:"col-md-4"},E={class:"accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3",id:"accordionExample"},N={class:"card border-0"},P=t("div",{class:"card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0",id:"headingOne","data-bs-toggle":"collapse","data-bs-target":"#collapseOne"},[t("div",{class:"d-flex justify-content-between align-items-center pe-1"},[t("h4",{class:"mb-0"}," 分類 "),t("i",{class:"fas fa-chevron-down"})])],-1),H={id:"collapseOne",class:"collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},j={class:"card-body py-0"},B={class:"list-unstyled"},A={class:"col-md-8"},R={class:"row"},W={class:"card border-0 mb-4 position-relative position-relative"},q=["src","alt","onClick"],O={class:"card-body p-0"},S={class:"mb-0 mt-3"},G={key:0,class:"text-muted mt-3"},I={class:"card-text mb-0"},Q={class:"text-muted"},U={class:"btn-group btn-group-sm"},Z=["disabled","onClick"],F={key:0,class:"fas fa-spinner fa-pulse"};function Y(s,d,r,m,c,_){const b=k("RouterLink");return o(),a(h,null,[D,t("div",V,[t("div",T,[t("div",M,[t("div",E,[t("div",N,[P,t("div",H,[t("div",j,[t("ul",B,[t("li",null,[g(b,{to:"/products",class:"py-2 d-block text-muted"},{default:f(()=>[l("全部")]),_:1})]),(o(!0),a(h,null,v(c.categories,e=>(o(),a("li",{key:e},[g(b,{to:`/products?category=${e}`,class:"py-2 d-block text-muted"},{default:f(()=>[l(i(e),1)]),_:2},1032,["to"])]))),128))])])])])])]),t("div",A,[t("div",R,[(o(!0),a(h,null,v(c.products,e=>(o(),a("div",{class:"col-md-6",key:e.key},[t("div",W,[t("img",{src:e.imageUrl,class:"card-img-top rounded-0",alt:e.title,style:{"object-fit":"cover",height:"300"},onClick:x=>_.openProductDetail(e)},null,8,q),t("div",O,[t("h4",S,i(e.title),1),e.origin_price===e.price?(o(),a("p",G,"NT$ "+i(e.price),1)):y("",!0),t("p",I,[t("span",Q,[t("del",null,"NT$ "+i(e.origin_price),1)]),l(" NT$ "+i(e.price),1)]),t("div",U,[t("button",{type:"button",class:"btn btn-outline-danger",disabled:c.status.addCartLoading===e.id,onClick:x=>_.addToCart(e.id)},[c.status.addCartLoading===e.id?(o(),a("i",F)):y("",!0),l(" 加入購物車 ")],8,Z)])])])]))),128))])])])])],64)}const X=w(L,[["render",Y]]);export{X as default};
