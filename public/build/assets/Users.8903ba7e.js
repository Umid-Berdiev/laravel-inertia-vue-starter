import{_ as A,a as V,r as F,u as j,o as I,M,b as r,d as m,f as o,g as y,h as N,e,t as d,w as B,i as a,z as O,H as R,T as q,F as k,k as L,j as D,p as z,m as H}from"./app.8f1a4e68.js";import{b as T,w as G}from"./vue-dataset.es.ecd052ac.js";import{u as J}from"./useNotyf.d9892d78.js";import{_ as g}from"./Input.76c5081f.js";import{_ as K}from"./Button.ac1f6753.js";import"./moment.62d3fb0a.js";import{_ as f}from"./InputLabel.1c57481a.js";import{C as P}from"./ConfirmModal.754a5599.js";import{_ as p}from"./InputError.7f96e5c6.js";const b=u=>(z("data-v-1e5ac2a7"),u=u(),H(),u),Q={class:"content"},W=b(()=>e("div",{class:"d-flex justify-content-end"},[e("button",{type:"button",class:"btn btn-alt-primary push","data-bs-toggle":"modal","data-bs-target":"#userFormModal"},[e("i",{class:"si si-plus me-1"}),e("span",null,"Add")])],-1)),X={key:0,class:"text-center"},Y={class:"row"},Z={class:"col-md-12"},ee={class:"table-responsive"},se={class:"table table-striped mb-0"},te=b(()=>e("th",{scope:"col"},"#",-1)),ae={scope:"row"},le={class:"d-flex gap-2"},oe=["onClick"],ne=b(()=>e("i",{class:"si si-pencil"},null,-1)),de=[ne],re={class:"modal fade",id:"userFormModal",tabindex:"-1","aria-labelledby":"userFormModalLabel","aria-hidden":"true"},ie={class:"modal-dialog"},me={class:"modal-content"},ue={class:"modal-header"},ce={class:"modal-title",id:"userFormModalLabel"},_e=b(()=>e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),fe={class:"modal-body"},pe=["onSubmit"],be={class:"row"},he={class:"col-12 mb-3"},ve={class:"col-12 mb-3"},ye={class:"col-12 mb-3"},ge={key:0,class:"col-12 mb-3"},Ve={class:"col-12 mb-3"},Se=["disabled"],Ue=b(()=>e("option",{selected:"",disabled:"",value:null}," Select one ",-1)),Fe=["value"],Me={class:"col-auto ms-auto"},ke={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},Le={key:1},xe={__name:"Users",props:{users:{type:Array,default:()=>[]},roles:{type:Array,default:()=>[]}},setup(u){const x=u,c=J(),h=V(null),E=F([{name:"First name",field:"first_name"},{name:"Last name",field:"last_name"},{name:"Username",field:"username"},{name:"Email",field:"email"},{name:"Role",field:"roles"}]),v=F({username:"",first_name:"",last_name:"",email:"",role_id:null}),s=j({username:"",first_name:"",last_name:"",email:"",role_id:null}),_=V(!1),S=V(!1);I(()=>{h.value=new M("#userFormModal"),h.value._element.addEventListener("hidden.bs.modal",()=>{_.value=!1,s.reset()}),document.querySelectorAll("#datasetLength label").forEach(t=>{t.remove()});let l=document.querySelector("#datasetLength select");l&&(l.classList="",l.classList.add("form-select"))});async function w(){S.value=!0;try{_.value?s.put(route("users.update",v.id),{onSuccess:()=>{var l;c.success("User successfully updated!"),s.reset(),(l=h.value)==null||l.hide()}}):s.post(route("users.store"),{onSuccess:()=>{var l;c.success("User successfully updated!"),s.reset(),(l=h.value)==null||l.hide()}})}catch{c.error("Error while storing data!")}finally{S.value=!1}}function $(l){_.value=!0;const t=x.users.find(n=>n.id===l);Object.assign(v,t),s.role_id=v.role_id=t.roles[0].id,s.first_name=t.first_name,s.last_name=t.last_name,s.username=t.username,s.email=t.email}function C(){const l=M.getInstance("#modal-confirm");roleForm.delete(route("users.destroy",v.id),{onSuccess:()=>{c.success("User successfully removed!")},onError:t=>{c.error("Error while deleting user!")}}),l.hide()}return(l,t)=>(r(),m("div",Q,[W,o(N,{title:"Users table","content-full":""},{default:y(()=>{var n;return[((n=u.users)==null?void 0:n.length)==0?(r(),m("div",X,d(l.$t("No_data")),1)):(r(),D(a(G),{key:1,"ds-data":u.users},{default:y(()=>[e("div",Y,[e("div",Z,[e("div",ee,[e("table",se,[e("thead",null,[e("tr",null,[te,(r(!0),m(k,null,L(E,(i,U)=>(r(),m("th",{key:i.field},d(i.name),1))),128)),e("th",null,d(l.$t("Actions")),1)])]),o(a(T),{tag:"tbody",class:"fs-sm"},{default:y(({row:i,rowIndex:U})=>[e("tr",null,[e("th",ae,d(U+1),1),e("td",null,d(i.first_name),1),e("td",null,d(i.last_name),1),e("td",null,d(i.username),1),e("td",null,d(i.email),1),e("td",null,d(i.roles[0].name),1),e("td",le,[e("button",{type:"button",class:"btn btn-secondary w-auto","data-bs-toggle":"modal","data-bs-target":"#userFormModal",onClick:Ee=>$(i.id)},de,8,oe)])])]),_:1})])])])])]),_:1},8,["ds-data"]))]}),_:1}),e("div",re,[e("div",ie,[e("div",me,[e("div",ue,[e("h5",ce,d(_.value?"Edit user data":"Add user data"),1),_e]),e("div",fe,[e("form",{onSubmit:B(w,["prevent"])},[e("div",be,[e("div",he,[o(f,{value:"Username",for:"username"}),o(g,{id:"username",type:"text",modelValue:a(s).username,"onUpdate:modelValue":t[0]||(t[0]=n=>a(s).username=n)},null,8,["modelValue"]),o(p,{message:a(s).errors.username},null,8,["message"])]),e("div",ve,[o(f,{value:"First name",for:"first_name"}),o(g,{id:"first_name",type:"text",modelValue:a(s).first_name,"onUpdate:modelValue":t[1]||(t[1]=n=>a(s).first_name=n)},null,8,["modelValue"]),o(p,{message:a(s).errors.first_name},null,8,["message"])]),e("div",ye,[o(f,{value:"Last name",for:"last_name"}),o(g,{id:"last_name",type:"text",modelValue:a(s).last_name,"onUpdate:modelValue":t[2]||(t[2]=n=>a(s).last_name=n)},null,8,["modelValue"]),o(p,{message:a(s).errors.last_name},null,8,["message"])]),_.value?O("",!0):(r(),m("div",ge,[o(f,{value:"Email",for:"email"}),o(g,{id:"email",type:"text",modelValue:a(s).email,"onUpdate:modelValue":t[3]||(t[3]=n=>a(s).email=n)},null,8,["modelValue"]),o(p,{message:a(s).errors.email},null,8,["message"])])),e("div",Ve,[o(f,{value:"Role",for:"user_role"}),R(e("select",{id:"user_role",class:"form-select","aria-label":"Role select",disabled:a(s).role_id===1,"onUpdate:modelValue":t[4]||(t[4]=n=>a(s).role_id=n)},[Ue,(r(!0),m(k,null,L(u.roles,n=>(r(),m("option",{value:n.id},d(n.name),9,Fe))),256))],8,Se),[[q,a(s).role_id]]),o(p,{message:a(s).errors.role_id},null,8,["message"])]),e("div",Me,[o(K,{disabled:a(s).processing},{default:y(()=>[a(s).processing?(r(),m("span",ke)):(r(),m("span",Le,d(l.$t("Submit")),1))]),_:1},8,["disabled"])])])],40,pe)])])])]),o(P,{onConfirm:C})]))}},Re=A(xe,[["__scopeId","data-v-1e5ac2a7"]]);export{Re as default};
