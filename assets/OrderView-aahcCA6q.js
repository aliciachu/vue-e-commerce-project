import{a as h}from"./axios-nwi5g7Xq.js";import{M as C}from"./modal-Gmgw9uhE.js";import{_ as g,o as r,c as i,d as t,t as l,h as w,A as k,F as m,f as v,g as O,b as f,a as M,r as $,z as S}from"./index-tXcN0AzJ.js";const y={methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new C(this.$refs.modal)}},P={props:{order:{type:Object,default(){return{}}},formatTimestamp:{type:Function}},data(){return{modal:"",tempOrder:{},isPaid:!1}},mounted(){this.tempOrder=this.order},emits:["update-paid"],mixins:[y],watch:{order(){this.tempOrder=this.order}}},D={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},L={class:"modal-dialog modal-xl",role:"document"},T={class:"modal-content border-0"},V=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={key:0,class:"modal-body"},A={class:"container"},B={class:"row"},I={class:"col col-lg-5"},U={class:"table"},R=t("th",null,"訂單編號",-1),j=t("th",null,"訂購人",-1),z=t("th",null,"訂購人信箱",-1),F=t("th",null,"訂單金額",-1),N=t("th",null,"訂單日期",-1),H=t("th",null,"付款狀態",-1),q={class:"table mt-4"},Y=t("thead",null,[t("tr",null,[t("th",null,"品項"),t("th",null,"原價"),t("th",null,"售價"),t("th",null,"數量"),t("th",null,"小計")])],-1),G={class:"modal-footer"},J=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function K(s,e,n,u,o,c){return r(),i("div",D,[t("div",L,[t("div",T,[V,Object.keys(o.tempOrder).length>0?(r(),i("div",E,[t("div",A,[t("div",B,[t("div",I,[t("table",U,[t("tr",null,[R,t("td",null,l(o.tempOrder.id),1)]),t("tr",null,[j,t("td",null,l(o.tempOrder.user.name),1)]),t("tr",null,[z,t("td",null,l(o.tempOrder.user.email),1)]),t("tr",null,[F,t("td",null,l(o.tempOrder.total),1)]),t("tr",null,[N,t("td",null,l(n.formatTimestamp(o.tempOrder.create_at)),1)]),t("tr",null,[H,t("td",null,[w(t("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=d=>o.isPaid=d),onChange:e[1]||(e[1]=d=>o.tempOrder.is_paid=o.isPaid)},null,544),[[k,o.isPaid]]),t("label",null,l(o.tempOrder.is_paid?"已付款":"未付款"),1)])])])])])]),t("table",q,[Y,t("tbody",null,[(r(!0),i(m,null,v(o.tempOrder.products,d=>(r(),i("tr",{key:d.id},[t("td",null,l(d.product.title),1),t("td",null,l(d.product.origin_price),1),t("td",null,l(d.product.price),1),t("td",null,l(d.qty),1),t("td",null,l(d.final_total),1)]))),128))])]),t("div",G,[J,t("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=d=>s.$emit("update-paid",o.tempOrder))}," 修改付款狀態 ")])])):O("",!0)])])],512)}const Q=g(P,[["render",K]]),W={props:{item:Object},emits:["del-item"],mixins:[y]},X={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},Z={class:"modal-dialog",role:"document"},tt={class:"modal-content border-0"},et=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除訂單")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ot={class:"modal-body"},st={class:"text-danger"},lt={class:"modal-footer"},dt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function nt(s,e,n,u,o,c){return r(),i("div",X,[t("div",Z,[t("div",tt,[et,t("div",ot,[f(" 是否刪除 "),t("strong",st,l(n.item.id),1),f(" 訂單(刪除後將無法恢復)。 ")]),t("div",lt,[dt,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=d=>s.$emit("del-item"))},"確認刪除 ")])])])],512)}const at=g(W,[["render",nt]]);var rt={VITE_URL:"https://ec-course-api.hexschool.io",VITE_PATH:"amaaaa",BASE_URL:"/vue-e-commerce-project/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:b}=rt,it={data(){return{orders:{},tempOrder:{},currentPage:1}},components:{OrderModal:Q,DelModal:at},methods:{getOrders(s){const e=`${_}/v2/api/${b}/admin/orders?page=${s}`;h.get(e).then(n=>{this.orders=n.data.orders}).catch(n=>{alert(n.response.data.message)})},openModal(s){this.tempOrder={...s},this.$refs.orderModal.openModal()},updatePaid(s){const e=`${_}/v2/api/${b}/admin/order/${s.id}`,n={is_paid:s.is_paid};h.put(e,{data:n}).then(()=>{this.$refs.orderModal.hideModal(),this.getOrders(this.currentPage)}).catch(u=>{alert(u.response.data.message)})},openDelOrderModal(s){this.tempOrder={...s},this.$refs.delModal.openModal()},delOrder(){const s=`${_}/v2/api/${b}/admin/order/${this.tempOrder.id}`;h.delete(s).then(()=>{this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)}).catch(e=>{alert(e.response.data.message)})},formatTimestamp(s){const e=new Date(s*1e3),n=e.getFullYear(),u=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0"),c=e.getHours().toString().padStart(2,"0"),d=e.getMinutes().toString().padStart(2,"0"),p=e.getSeconds().toString().padStart(2,"0"),a=e.getMilliseconds().toString().padStart(3,"0");return`${n}-${u}-${o} ${c}:${d}:${p}.${a}`}},mounted(){this.getOrders(this.currentPage)}},ct=t("h2",null,"訂單列表",-1),ut={class:"table mt-4"},mt=t("thead",null,[t("tr",null,[t("th",null,"訂單編號"),t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),pt={key:0},ht=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle-fill",viewBox:"0 0 16 16"},[t("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})],-1),_t=[ht],bt={key:1},gt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle-fill",viewBox:"0 0 16 16"},[t("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"})],-1),ft=[gt],Mt={class:"btn-group"},$t=["onClick"],vt=["onClick"];function Ot(s,e,n,u,o,c){const d=$("OrderModal"),p=$("DelModal");return r(),i(m,null,[ct,t("table",ut,[mt,t("tbody",null,[(r(!0),i(m,null,v(o.orders,a=>(r(),i(m,{key:a.id},[o.orders.length?(r(),i("tr",{key:0,class:S({"text-secondary":!a.is_paid})},[t("td",null,l(a.id),1),t("td",null,l(c.formatTimestamp(a.create_at)),1),t("td",null,l(a.user.email),1),t("td",null,l(a.total),1),t("td",null,l(a.total),1),a.is_paid?(r(),i("td",pt,_t)):(r(),i("td",bt,ft)),t("td",null,[t("div",Mt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:x=>c.openModal(a)}," 檢視 ",8,$t),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:x=>c.openDelOrderModal(a)}," 刪除 ",8,vt)])])],2)):O("",!0)],64))),128))])]),M(d,{ref:"orderModal",order:o.tempOrder,onUpdatePaid:c.updatePaid,"format-timestamp":c.formatTimestamp},null,8,["order","onUpdatePaid","format-timestamp"]),M(p,{ref:"delModal",item:o.tempOrder,onDelItem:c.delOrder},null,8,["item","onDelItem"])],64)}const wt=g(it,[["render",Ot]]);export{wt as default};
