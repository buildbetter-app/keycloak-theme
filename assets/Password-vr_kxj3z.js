import{j as s}from"./index-C5PdjIHg.js";import{c as d}from"./useGetClassName-CwZW_X6q.js";import{u as h}from"./useGetClassName-DDWftr6g.js";function N(t){const{kcContext:l,i18n:r,doUseDefaultCss:c,Template:m,classes:a}=t,{getClassName:o}=h({doUseDefaultCss:c,classes:{...a,kcBodyClass:d(a==null?void 0:a.kcBodyClass,"password")}}),{url:n,password:i,account:p,stateChecker:u}=l,{msg:e}=r;return s.jsxs(m,{kcContext:l,i18n:r,doUseDefaultCss:c,classes:a,active:"password",children:[s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-md-10",children:s.jsx("h2",{children:e("changePasswordHtmlTitle")})}),s.jsx("div",{className:"col-md-2 subtitle",children:s.jsx("span",{className:"subtitle",children:e("allFieldsRequired")})})]}),s.jsxs("form",{action:n.passwordUrl,className:"form-horizontal",method:"post",children:[s.jsx("input",{type:"text",id:"username",name:"username",value:p.username??"",autoComplete:"username",readOnly:!0,style:{display:"none"}}),i.passwordSet&&s.jsxs("div",{className:"form-group",children:[s.jsx("div",{className:"col-sm-2 col-md-2",children:s.jsx("label",{htmlFor:"password",className:"control-label",children:e("password")})}),s.jsx("div",{className:"col-sm-10 col-md-10",children:s.jsx("input",{type:"password",className:"form-control",id:"password",name:"password",autoFocus:!0,autoComplete:"current-password"})})]}),s.jsx("input",{type:"hidden",id:"stateChecker",name:"stateChecker",value:u}),s.jsxs("div",{className:"form-group",children:[s.jsx("div",{className:"col-sm-2 col-md-2",children:s.jsx("label",{htmlFor:"password-new",className:"control-label",children:e("passwordNew")})}),s.jsx("div",{className:"col-sm-10 col-md-10",children:s.jsx("input",{type:"password",className:"form-control",id:"password-new",name:"password-new",autoComplete:"new-password"})})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("div",{className:"col-sm-2 col-md-2",children:s.jsx("label",{htmlFor:"password-confirm",className:"control-label two-lines",children:e("passwordConfirm")})}),s.jsx("div",{className:"col-sm-10 col-md-10",children:s.jsx("input",{type:"password",className:"form-control",id:"password-confirm",name:"password-confirm",autoComplete:"new-password"})})]}),s.jsx("div",{className:"form-group",children:s.jsx("div",{id:"kc-form-buttons",className:"col-md-offset-2 col-md-10 submit",children:s.jsx("div",{children:s.jsx("button",{type:"submit",className:d(o("kcButtonClass"),o("kcButtonPrimaryClass"),o("kcButtonLargeClass")),name:"submitAction",value:"Save",children:e("doSave")})})})})]})]})}export{N as default};
//# sourceMappingURL=Password-vr_kxj3z.js.map
