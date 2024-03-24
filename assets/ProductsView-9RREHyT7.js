import{a as h}from"./axios-nwi5g7Xq.js";import{_ as f,o as c,c as a,d as e,z as y,i as M,F as P,f as S,t as _,h as n,v as u,g as w,A as $,b as U,a as k,r as x,B as A}from"./index-tXcN0AzJ.js";import{M as C}from"./modal-Gmgw9uhE.js";const I={name:"PaginationComponent",props:["pages","getProduct"]},E={"aria-label":"Page navigation example"},L={class:"pagination"},T=e("span",{"aria-hidden":"true"},"«",-1),B=[T],D=["onClick"],N=e("span",{"aria-hidden":"true"},"»",-1),R=[N];function z(o,t,s,v,l,i){return c(),a("nav",E,[e("ul",L,[e("li",{class:y(["page-item",{disabled:!s.pages.has_pre}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=M(d=>s.getProduct(s.pages.current_page-1),["prevent"]))},B)],2),(c(!0),a(P,null,S(s.pages.total_pages,d=>(c(),a("li",{key:"page"+d,class:y(["page-item",{active:d===s.pages.current_page}])},[e("a",{class:"page-link",href:"#",onClick:M(m=>s.getProduct(d),["prevent"])},_(d),9,D)],2))),128)),e("li",{class:y(["page-item",{disabled:!s.pages.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=M(d=>s.getProduct(s.pages.current_page+1),["prevent"]))},R)],2)])])}const O=f(I,[["render",z]]),j={props:["selectedProduct","isActionAdd","addProduct","editProduct","deleteImage","addImage"],data(){return{productModal:null,editSelectedProduct:{}}},mounted(){this.productModal=new C(document.getElementById("productModal")),this.editSelectedProduct=this.selectedProduct},watch:{tempProduct(){this.editSelectedProduct=this.selectedProduct}},methods:{openModal(){this.productModal.show()},closeModal(){this.productModal.hide()}}},F={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},H={class:"modal-dialog modal-xl"},X={class:"modal-content border-0"},q={class:"modal-header bg-dark text-white"},G={id:"productModalLabel",class:"modal-title"},J={key:0},K={key:1},Q=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},ee={class:"mb-2"},te={class:"mb-3"},de=e("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),oe=["src","alt"],se=e("h3",{class:"mb-3"},"更多圖片",-1),le={class:"mb-3"},ce={for:"imageUrl",class:"form-label"},ae={style:{display:"flex"}},ie=["onUpdate:modelValue"],ne=["onClick"],re=["src","alt"],ue={class:"col-sm-8"},me={class:"mb-3"},_e=e("label",{for:"title",class:"form-label"},"標題",-1),he={class:"row"},pe={class:"mb-3 col-md-6"},be=e("label",{for:"category",class:"form-label"},"分類",-1),ge={class:"mb-3 col-md-6"},Pe=e("label",{for:"price",class:"form-label"},"單位",-1),fe={class:"row"},ve={class:"mb-3 col-md-6"},ye=e("label",{for:"origin_price",class:"form-label"},"原價",-1),Me={class:"mb-3 col-md-6"},ke=e("label",{for:"price",class:"form-label"},"售價",-1),xe=e("hr",null,null,-1),Se={class:"mb-3"},Ue=e("label",{for:"description",class:"form-label"},"產品描述",-1),Ae={class:"mb-3"},Ce=e("label",{for:"content",class:"form-label"},"說明內容",-1),Ve={class:"mb-3"},we={class:"form-check"},$e=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Ie={class:"modal-footer"},Ee=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Le(o,t,s,v,l,i){return c(),a("div",F,[e("div",H,[e("div",X,[e("div",q,[e("h5",G,[s.isActionAdd?(c(),a("span",J,"新增產品")):(c(),a("span",K,"編輯產品"))]),Q]),e("div",W,[e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[de,n(e("input",{"onUpdate:modelValue":t[0]||(t[0]=d=>l.editSelectedProduct.imageUrl=d),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[u,l.editSelectedProduct.imageUrl]])]),e("img",{class:"img-fluid",src:s.selectedProduct.imageUrl,alt:s.selectedProduct.title},null,8,oe)]),se,(c(!0),a(P,null,S(s.selectedProduct.imagesUrl,(d,m)=>(c(),a("div",{class:"mb-2",key:d},[e("div",le,[e("label",ce,"圖片 "+_(m+1),1),e("div",ae,[n(e("input",{"onUpdate:modelValue":b=>l.editSelectedProduct.imagesUrl[m]=b,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,ie),[[u,l.editSelectedProduct.imagesUrl[m]]]),e("button",{onClick:b=>s.deleteImage(m),class:"btn btn-danger btn-sm"},"X",8,ne)])]),d?(c(),a("img",{key:0,class:"img-fluid",src:d,alt:s.selectedProduct.title},null,8,re)):w("",!0)]))),128)),e("div",null,[e("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:t[1]||(t[1]=(...d)=>s.addImage&&s.addImage(...d))}," 新增圖片 ")])]),e("div",ue,[e("div",me,[_e,n(e("input",{"onUpdate:modelValue":t[2]||(t[2]=d=>l.editSelectedProduct.title=d),id:"title",type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[u,l.editSelectedProduct.title]])]),e("div",he,[e("div",pe,[be,n(e("input",{"onUpdate:modelValue":t[3]||(t[3]=d=>l.editSelectedProduct.category=d),id:"category",type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[u,l.editSelectedProduct.category]])]),e("div",ge,[Pe,n(e("input",{"onUpdate:modelValue":t[4]||(t[4]=d=>l.editSelectedProduct.unit=d),id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[u,l.editSelectedProduct.unit]])])]),e("div",fe,[e("div",ve,[ye,n(e("input",{"onUpdate:modelValue":t[5]||(t[5]=d=>l.editSelectedProduct.origin_price=d),id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[u,l.editSelectedProduct.origin_price,void 0,{number:!0}]])]),e("div",Me,[ke,n(e("input",{"onUpdate:modelValue":t[6]||(t[6]=d=>l.editSelectedProduct.price=d),id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[u,l.editSelectedProduct.price,void 0,{number:!0}]])])]),xe,e("div",Se,[Ue,n(e("textarea",{"onUpdate:modelValue":t[7]||(t[7]=d=>l.editSelectedProduct.description=d),id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
            `,512),[[u,l.editSelectedProduct.description]])]),e("div",Ae,[Ce,n(e("textarea",{"onUpdate:modelValue":t[8]||(t[8]=d=>l.editSelectedProduct.content=d),id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
            `,512),[[u,l.editSelectedProduct.content]])]),e("div",Ve,[e("div",we,[n(e("input",{"onUpdate:modelValue":t[9]||(t[9]=d=>l.editSelectedProduct.is_enabled=d),id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[$,l.editSelectedProduct.is_enabled]]),$e])])])])]),e("div",Ie,[Ee,s.isActionAdd?(c(),a("button",{key:0,type:"button",class:"btn btn-primary",onClick:t[10]||(t[10]=(...d)=>s.addProduct&&s.addProduct(...d))}," 確認 ")):(c(),a("button",{key:1,type:"button",class:"btn btn-primary",onClick:t[11]||(t[11]=(...d)=>s.editProduct&&s.editProduct(...d))}," 確認 "))])])])],512)}const Te=f(j,[["render",Le]]),Be={props:["selectedProduct","deleteProduct"],data(){return{delProductModal:null}},mounted(){this.delProductModal=new C(document.getElementById("delProductModal"))},methods:{openModal(){this.delProductModal.show()},closeModal(){this.delProductModal.hide()}}},De={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ne={class:"modal-dialog"},Re={class:"modal-content border-0"},ze=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除產品")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Oe={class:"modal-body"},je={class:"text-danger"},Fe={class:"modal-footer"},He=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Xe(o,t,s,v,l,i){return c(),a("div",De,[e("div",Ne,[e("div",Re,[ze,e("div",Oe,[U(" 是否刪除 "),e("strong",je,_(s.selectedProduct.title),1),U(" 商品(刪除後將無法恢復)。 ")]),e("div",Fe,[He,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...d)=>s.deleteProduct&&s.deleteProduct(...d))}," 確認刪除 ")])])])],512)}const qe=f(Be,[["render",Xe]]);var Ge={VITE_URL:"https://ec-course-api.hexschool.io",VITE_PATH:"amaaaa",BASE_URL:"/vue-e-commerce-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:p,VITE_PATH:g}=Ge,Je={data(){return{selectedProduct:{imagesUrl:[]},isActionAdd:!1,products:[],pages:{}}},methods:{checkLogin(){h.post(`${p}/v2/api/user/check`).then(o=>{this.getProduct()}).catch(o=>{console.log(o),this.$router.push("/login")})},getProduct(o=1){h.get(`${p}/v2/api/${g}/admin/products?page=${o}`).then(t=>{this.products=Object.values(t.data.products),this.pages=t.data.pagination,console.log(t)}).catch(t=>{console.log(t)})},openAddProductModal(){this.selectedProduct={imagesUrl:[]},this.isActionAdd=!0,this.$refs.productModal.openModal()},openEditProductModal(o){this.selectedProduct={...o},this.isActionAdd=!1,this.$refs.productModal.openModal()},openDeleteProductModal(o){this.selectedProduct=o,this.$refs.delProductModal.openModal()},addProduct(){h.post(`${p}/v2/api/${g}/admin/product`,{data:this.selectedProduct}).then(o=>{alert(o.data.message),this.$refs.productModal.closeModal(),this.getProduct()}).catch(o=>{alert(o.data.message)})},editProduct(){h.put(`${p}/v2/api/${g}/admin/product/${this.selectedProduct.id}`,{data:this.selectedProduct}).then(o=>{alert(o.data.message),this.$refs.productModal.closeModal(),this.getProduct()}).catch(o=>{alert(o.data.message)})},deleteProduct(){h.delete(`${p}/v2/api/${g}/admin/product/${this.selectedProduct.id}`).then(o=>{alert(o.data.message),this.$refs.delProductModal.closeModal(),this.getProduct()}).catch(o=>{alert(o.data.message)})},addImage(){this.selectedProduct.imagesUrl==null&&(this.selectedProduct.imagesUrl=[]),this.selectedProduct.imagesUrl.push("")},deleteImage(o){this.selectedProduct.imagesUrl.splice(o,1)}},mounted(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");h.defaults.headers.common.Authorization=o,this.checkLogin()},components:{pagination:O,productModal:Te,delProductModal:qe}},Ke=e("h2",null,"產品列表",-1),Qe={class:"container"},We={class:"text-end mt-4"},Ye={class:"table mt-4"},Ze=e("thead",null,[e("tr",null,[e("th",{width:"120"}," 分類 "),e("th",null,"產品名稱"),e("th",{width:"120"}," 原價 "),e("th",{width:"120"}," 售價 "),e("th",{width:"100"}," 是否啟用 "),e("th",{width:"120"}," 編輯 ")])],-1),et={class:"text-end"},tt={class:"text-end"},dt={class:"text-success"},ot={class:"btn-group"},st=["onClick"],lt=["onClick"];function ct(o,t,s,v,l,i){const d=x("pagination"),m=x("product-modal"),b=x("del-product-modal");return c(),a(P,null,[Ke,e("div",Qe,[e("div",We,[e("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=(...r)=>i.openAddProductModal&&i.openAddProductModal(...r))}," 建立新的產品 ")]),e("table",Ye,[Ze,e("tbody",null,[(c(!0),a(P,null,S(l.products,r=>(c(),a("tr",{key:r.id},[e("td",null,_(r.category),1),e("td",null,_(r.title),1),e("td",et,_(r.origin_price),1),e("td",tt,_(r.price),1),e("td",null,[n(e("span",dt,"啟用",512),[[A,r.is_enabled]]),n(e("span",null,"未啟用",512),[[A,!r.is_enabled]])]),e("td",null,[e("div",ot,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:V=>i.openEditProductModal(r)}," 編輯 ",8,st),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:V=>i.openDeleteProductModal(r)}," 刪除 ",8,lt)])])]))),128))])]),k(d,{pages:l.pages,"get-product":i.getProduct},null,8,["pages","get-product"])]),k(m,{"selected-product":l.selectedProduct,"add-product":i.addProduct,"edit-product":i.editProduct,"is-action-add":l.isActionAdd,"delete-image":i.deleteImage,"add-image":i.addImage,ref:"productModal"},null,8,["selected-product","add-product","edit-product","is-action-add","delete-image","add-image"]),k(b,{"selected-product":l.selectedProduct,"delete-product":i.deleteProduct,ref:"delProductModal"},null,8,["selected-product","delete-product"])],64)}const rt=f(Je,[["render",ct]]);export{rt as default};
