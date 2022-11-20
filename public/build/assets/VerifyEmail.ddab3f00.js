import{u,c as f,b as a,j as _,g as s,f as i,i as e,U as p,d as g,z as h,e as o,l as n,q as y,S as b,w as v}from"./app.8f1a4e68.js";import{_ as k}from"./Button.ac1f6753.js";import{_ as x}from"./GuestLayout.c4d19431.js";const w=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],S={class:"mt-4 flex items-center justify-between"},L={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=u(),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(m,E)=>(a(),_(x,null,{default:s(()=>[i(e(p),{title:"Email Verification"}),w,e(l)?(a(),g("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),o("form",{onSubmit:v(d,["prevent"])},[o("div",S,[i(k,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),i(e(b),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{L as default};
