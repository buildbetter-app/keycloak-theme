import{r,j as s}from"./index-C5PdjIHg.js";import{u as E}from"./useGetClassName-COq4TTx-.js";import{u as q}from"./useGetClassName-CwZW_X6q.js";import{H as A}from"./header-node-6kTK8y6y.js";import{P as D}from"./password-C_mGlUTT.js";import{I as i,S as x}from"./submit-input-C2Uh2Mp9.js";import{F as h}from"./chunk-VGESXGVT-DlzrV6G-.js";import"./KcApp-Jtyk8-3-.js";import"./usePrepareTemplate-SbXqsSyJ.js";function M(C){const{kcContext:d,i18n:l,doUseDefaultCss:c,Template:j,classes:m}=C,{getClassName:t}=E({doUseDefaultCss:c,classes:m}),{msg:g,msgStr:u}=l,{url:b,isAppInitiatedAction:p}=d,[o,k]=r.useState(""),[n,v]=r.useState(""),[a,N]=r.useState({}),[S,y]=r.useState(!1),P=()=>{if(o){if(o.length<8)return"Password must be at least 8 characters"}else return"Required";return""},F=()=>{if(n){if(o!==n)return"Passwords do not match"}else return"Required";return""},w=()=>{N({password:P(),passwordConfirm:F()})},I=q(e=>{e.preventDefault(),y(!0);const f=e.target;f.checkValidity()===!0?f.submit():w()});return r.useEffect(()=>{S&&w()},[o,n]),s.jsx(j,{kcContext:d,i18n:l,doUseDefaultCss:c,classes:m,headerNode:s.jsx(A,{title:"Set New Password",subtitle:"Create your new strong password",asset:s.jsx("div",{className:"flex justify-center",children:s.jsx(D,{w:"60px",h:"28px"})})}),children:s.jsxs("form",{id:"kc-passwd-up-form",className:"space-y-4",action:b.loginAction,method:"post",onSubmit:e=>{e.preventDefault(),e.stopPropagation(),I(e)},noValidate:!0,children:[s.jsx(i,{type:"password",id:"password",name:"password",autoComplete:"current-password",style:{display:"none"}}),s.jsx(i,{type:"password",id:"password-new",name:"password-new",placeholder:"New Password",autoFocus:!0,autoComplete:"new-password",className:t("kcInputClass"),onChange:e=>k(e.target.value),required:!0,minLength:8}),a.password?s.jsx(h,{children:a.password}):null,s.jsx(i,{type:"password",id:"password-confirm",name:"password-confirm",autoComplete:"new-password",placeholder:"Confirm Password",className:t("kcInputClass"),onChange:e=>v(e.target.value),required:!0,minLength:8}),a.passwordConfirm?s.jsx(h,{children:a.passwordConfirm}):null,s.jsxs("div",{className:t("kcFormGroupClass"),children:[s.jsx("div",{id:"kc-form-options",className:t("kcFormOptionsClass"),children:s.jsx("div",{className:t("kcFormOptionsWrapperClass"),children:p&&s.jsx("div",{className:"checkbox",children:s.jsxs("label",{children:[s.jsx("input",{type:"checkbox",id:"logout-sessions",name:"logout-sessions",value:"on",checked:!0}),u("logoutOtherSessions")]})})})}),s.jsx("div",{id:"kc-form-buttons",className:t("kcFormButtonsClass"),children:p?s.jsxs(s.Fragment,{children:[s.jsx(x,{type:"submit",defaultValue:u("doSubmit")}),s.jsx("button",{type:"submit",name:"cancel-aia",value:"true",children:g("doCancel")})]}):s.jsx(x,{type:"submit"})})]})]})})}export{M as default};
//# sourceMappingURL=LoginUpdatePassword-D95xboJn.js.map