import{_ as A,c as R,r as z,u as k,a as S,o as B,b as d,d as c,e,t as s,f as r,g as $,w as O,h as _,F as x,j as C,k as T,p as q,l as U,M as W}from"./app.0f1c4cd3.js";import{u as D}from"./useNotyf.3d1e6336.js";import{_ as E}from"./Input.87eddb77.js";import{_ as G}from"./Button.558e3515.js";import{_ as J}from"./BaseBlock.af7f2dcc.js";import{_ as V}from"./InputLabel.c43cc25d.js";import{C as Q}from"./ConfirmModal.6e4e2e53.js";const H=[{name_uz:"Nukus",soato:173501},{name_uz:"Urganch",soato:173301},{name_uz:"Navoiy",soato:171201},{name_uz:"Buhoro",soato:170601},{name_uz:"Samarqand",soato:171801},{name_uz:"Termez",soato:172201},{name_uz:"Jizzah",soato:170801},{name_uz:"Guliston",soato:172401},{name_uz:"Andijon",soato:1703203},{name_uz:"Namangan",soato:1714212},{name_uz:"Farg'ona",soato:1730233},{name_uz:"Toshkent",soato:172701},{name_uz:"Qarshi",soato:171001}];const m=u=>(q("data-v-5e045698"),u=u(),U(),u),K={class:"content"},P={class:"d-flex justify-content-end"},X={type:"button",class:"btn btn-alt-primary","data-bs-toggle":"modal","data-bs-target":"#modal-confirm"},Y=m(()=>e("i",{class:"fa fa-download me-1"},null,-1)),Z=m(()=>e("br",null,null,-1)),ee={key:0,class:"text-center"},te={key:1,class:"row"},oe={class:"col-md-12"},se={class:"table-responsive"},ae={class:"table table-striped mb-0"},ne=m(()=>e("th",{scope:"col"},"#",-1)),ie={scope:"row"},le={class:"d-flex gap-2"},de=["onClick"],ce=m(()=>e("i",{class:"si si-eye"},null,-1)),re=[ce],ue=["onClick"],_e=m(()=>e("i",{class:"si si-pencil"},null,-1)),me=[_e],he={class:"modal fade",id:"regionFormModal",tabindex:"-1","aria-labelledby":"regionFormModalLabel","aria-hidden":"true"},fe={class:"modal-dialog modal-dialog-popout"},pe={class:"modal-content"},be={class:"modal-header"},ve={class:"modal-title",id:"regionFormModalLabel"},ge=m(()=>e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1)),ye={class:"modal-body"},ze=["onSubmit"],ke={class:"row"},Se={class:"col-12 mb-3"},$e={class:"invalid-feedback animated fadeIn"},xe={class:"col-12 mb-3"},Ce={class:"invalid-feedback animated fadeIn"},Ee={class:"col-auto ms-auto"},Ve={__name:"Regions",props:{regions:{type:Array,default:()=>[]}},setup(u){const F=u,v=D(),f=R(()=>W.getOrCreateInstance("#regionFormModal")),M=z([{name:"Viloyat soato kodi",field:"soato"},{name:"Viloyat nomi",field:"name_uz"},{name:"Shahar soato kodi",field:"city_soato"},{name:"Shahar nomi",field:"city_name_uz"}]),p=z({name_uz:"",name_ru:"",admincenter_uz:"",admincenter_ru:""}),o=k(p),b=S(!1),g=S([]);B(()=>{var a;(a=f.value)==null||a._element.addEventListener("hidden.bs.modal",i=>{o.reset(),o.clearErrors(),b.value=!1}),document.querySelectorAll("#datasetLength label").forEach(i=>{i.remove()});let t=document.querySelector("#datasetLength select");t&&(t.classList="",t.classList.add("form-select")),g.value=F.regions.map(i=>{const h=H.find(l=>String(l.soato).startsWith(i.soato));return{...i,city_name_uz:h.name_uz,city_soato:h.soato}})});async function L(){o.put(route("regions.update",p.id),{onSuccess:()=>{var t;v.success("Region successfully updated!"),o.reset(),o.clearErrors(),(t=f.value)==null||t.hide()},onError:t=>{v.error("Error while updating region!")}})}function N(t){var a;b.value=!0,Object.assign(p,t),o.name_uz=t.name_uz,o.name_ru=t.name_ru,o.admincenter_uz=t.admincenter_uz,o.admincenter_ru=t.admincenter_ru,(a=f.value)==null||a.toggle()}function I(t){k().get(route("districts.index",t))}function j(){location.href=route("regions.export")}return(t,a)=>{var i,h;return d(),c("div",K,[e("div",P,[e("button",X,[Y,e("span",null,s(t.$t("Export_to_excel")),1)])]),Z,r(J,{title:t.$t("Regions_table"),"content-full":""},{default:$(()=>{var l;return[((l=u.regions)==null?void 0:l.length)==0?(d(),c("div",ee,s(t.$t("No_data")),1)):(d(),c("div",te,[e("div",oe,[e("div",se,[e("table",ae,[e("thead",null,[e("tr",null,[ne,(d(!0),c(x,null,C(M,(n,y)=>(d(),c("th",{key:n.field},s(n.name),1))),128)),e("th",null,s(t.$t("Actions")),1)])]),e("tbody",null,[(d(!0),c(x,null,C(g.value,(n,y)=>(d(),c("tr",{key:n.id},[e("th",ie,s(y+1),1),e("td",null,s(n.soato),1),e("td",null,s(n.name_uz),1),e("td",null,s(n.city_soato),1),e("td",null,s(n.city_name_uz),1),e("td",le,[e("button",{type:"button",class:"btn btn-secondary w-auto",onClick:w=>I(n.id)},re,8,de),e("button",{type:"button",class:"btn btn-secondary w-auto",onClick:w=>N(n)},me,8,ue)])]))),128))])])])])]))]}),_:1},8,["title"]),e("div",he,[e("div",fe,[e("div",pe,[e("div",be,[e("h5",ve,s(b.value?t.$t("Edit_region_data"):t.$t("Add_region_data")),1),ge]),e("div",ye,[e("form",{onSubmit:O(L,["prevent"])},[e("div",ke,[e("div",Se,[r(V,{value:"Name uz"}),r(E,{type:"text",modelValue:_(o).name_uz,"onUpdate:modelValue":a[0]||(a[0]=l=>_(o).name_uz=l)},null,8,["modelValue"]),e("div",$e,s((i=_(o).errors)==null?void 0:i.name_uz),1)]),e("div",xe,[r(V,{value:"Admincenter uz"}),r(E,{type:"text",modelValue:_(o).admincenter_uz,"onUpdate:modelValue":a[1]||(a[1]=l=>_(o).admincenter_uz=l)},null,8,["modelValue"]),e("div",Ce,s((h=_(o).errors)==null?void 0:h.admincenter_uz),1)]),e("div",Ee,[r(G,null,{default:$(()=>[T(s(t.$t("Submit")),1)]),_:1})])])],40,ze)])])])]),r(Q,{onConfirm:j})])}}},Ae=A(Ve,[["__scopeId","data-v-5e045698"]]);export{Ae as default};
