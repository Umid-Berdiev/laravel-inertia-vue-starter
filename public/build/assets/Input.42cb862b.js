import{a as u,o as n,b as s,d as r,n as m}from"./app.06c1aca3.js";const f=["value"],i={__name:"Input",props:{modelValue:"",small:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l){const e=u(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(t,a)=>(s(),r("input",{class:m(["form-control",l.small&&"form-control-sm"]),value:l.modelValue,onInput:a[0]||(a[0]=o=>t.$emit("update:modelValue",o.target.value)),ref_key:"input",ref:e},null,42,f))}};export{i as _};
