import{a as u,o as s,b as n,d as r,q as m}from"./app.8f1a4e68.js";const f=["value"],i={__name:"Input",props:{modelValue:"",small:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(l){const e=u(null);return s(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),(t,a)=>(n(),r("input",{class:m(["form-control",l.small&&"form-control-sm"]),value:l.modelValue,onInput:a[0]||(a[0]=o=>t.$emit("update:modelValue",o.target.value)),ref_key:"input",ref:e},null,42,f))}};export{i as _};
