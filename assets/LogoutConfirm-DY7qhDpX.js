import{j as s}from"./index-C5PdjIHg.js";import{c as g}from"./useGetClassName-CwZW_X6q.js";import{u as j}from"./useGetClassName-COq4TTx-.js";function k(m){const{kcContext:o,i18n:t,doUseDefaultCss:a,Template:d,classes:i}=m,{getClassName:e}=j({doUseDefaultCss:a,classes:i}),{url:u,client:n,logoutConfirm:c}=o,{msg:r,msgStr:l}=t;return s.jsx(d,Object.assign({},{kcContext:o,i18n:t,doUseDefaultCss:a,classes:i},{displayMessage:!1,headerNode:r("logoutConfirmTitle")},{children:s.jsxs("div",Object.assign({id:"kc-logout-confirm",className:"content-area"},{children:[s.jsx("p",Object.assign({className:"instruction"},{children:r("logoutConfirmHeader")})),s.jsxs("form",Object.assign({className:"form-actions",action:u.logoutConfirmAction,method:"POST"},{children:[s.jsx("input",{type:"hidden",name:"session_code",value:c.code}),s.jsxs("div",Object.assign({className:e("kcFormGroupClass")},{children:[s.jsx("div",Object.assign({id:"kc-form-options"},{children:s.jsx("div",{className:e("kcFormOptionsWrapperClass")})})),s.jsx("div",Object.assign({id:"kc-form-buttons",className:e("kcFormGroupClass")},{children:s.jsx("input",{tabIndex:4,className:g(e("kcButtonClass"),e("kcButtonPrimaryClass"),e("kcButtonBlockClass"),e("kcButtonLargeClass")),name:"confirmLogout",id:"kc-logout",type:"submit",value:l("doLogout")})}))]}))]})),s.jsx("div",Object.assign({id:"kc-info-message"},{children:!c.skipLink&&n.baseUrl&&s.jsx("p",{children:s.jsx("a",{href:n.baseUrl,dangerouslySetInnerHTML:{__html:l("backToApplication")}})})}))]}))}))}export{k as default};
//# sourceMappingURL=LogoutConfirm-DY7qhDpX.js.map
