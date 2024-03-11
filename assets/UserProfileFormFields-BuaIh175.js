import{r as v,G as M,j as r}from"./index-C5PdjIHg.js";import{u as A,c as C}from"./useGetClassName-CwZW_X6q.js";Array.prototype.every||(Array.prototype.every=function(x,j){var y,p;if(this==null)throw new TypeError("this is null or not defined");var s=Object(this),b=s.length>>>0;if(typeof x!="function"&&Object.prototype.toString.call(x)!=="[object Function]")throw new TypeError;for(arguments.length>1&&(y=j),p=0;p<b;){var f;if(p in s){var h;if(f=s[p],y?h=x.call(y,f,p,s):h=x(f,p,s),!h)return!1}p++}return!0});const V=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;function S(x){const{kcContext:j,passwordValidators:y={},i18n:p}=x,s=v.useMemo(()=>j.passwordRequired?(()=>{const m=j.realm.registrationEmailAsUsername?"email":"username";return j.profile.attributes.reduce((a,o)=>[...a,...o.name!==m?[o]:[o,M({name:"password",displayName:M("${password}"),required:!0,readOnly:!1,validators:y,annotations:{},groupAnnotations:{},autocomplete:"new-password"}),M({name:"password-confirm",displayName:M("${passwordConfirm}"),required:!0,readOnly:!1,validators:{_compareToOther:{name:"password","ignore.empty.value":!0,shouldBe:"equal","error-message":M("${invalidPasswordConfirmMessage}")}},annotations:{},groupAnnotations:{},autocomplete:"new-password"})]],[])})():j.profile.attributes,[j,y]),{getErrors:b}=B({kcContext:{messagesPerField:j.messagesPerField,profile:{attributes:s}},i18n:p}),f=v.useMemo(()=>Object.fromEntries(s.map(m=>({attribute:m,errors:b({name:m.name,fieldValueByAttributeName:Object.fromEntries(s.map(({name:a,value:o})=>[a,{value:o??""}]))})})).map(({attribute:m,errors:a})=>{var o;return[m.name,{value:(o=m.value)!==null&&o!==void 0?o:"",errors:a,doDisplayPotentialErrorMessages:a.length!==0}]})),[s]),[h,N]=v.useReducer((m,a)=>Object.assign(Object.assign({},m),{[a.name]:Object.assign(Object.assign({},m[a.name]),(()=>{switch(a.action){case"focus lost":return{doDisplayPotentialErrorMessages:!0};case"update value":return{value:a.newValue,errors:b({name:a.name,fieldValueByAttributeName:Object.assign(Object.assign({},m),{[a.name]:{value:a.newValue}})})}}})())}),f);return{formValidationState:v.useMemo(()=>({fieldStateByAttributeName:Object.fromEntries(Object.entries(h).map(([m,{value:a,errors:o,doDisplayPotentialErrorMessages:k}])=>[m,{value:a,displayableErrors:k?o:[]}])),isFormSubmittable:Object.entries(h).every(([m,{value:a,errors:o}])=>o.length===0&&(a!==""||!s.find(k=>k.name===m).required))}),[h,s]),formValidationDispatch:N,attributesWithPassword:s}}function B(x){const{kcContext:j,i18n:y}=x,{messagesPerField:p,profile:{attributes:s}}=j,{msg:b,msgStr:f,advancedMsg:h,advancedMsgStr:N}=y;return{getErrors:A(m=>{var a;const{name:o,fieldValueByAttributeName:k}=m,{value:e}=k[o],{value:w,validators:O}=s.find(n=>n.name===o);e:{if((w??"")!==e)break e;let n;try{n=p.existsError(o)}catch{break e}if(!n)break e;const i=p.get(o);return[{validatorName:void 0,errorMessageStr:i,errorMessage:r.jsx("span",{children:i},0)}]}const t=[];e:{const n="length",i=O[n];if(i===void 0)break e;const{"ignore.empty.value":g=!1,max:l,min:u}=i;if(g&&e==="")break e;if(l!==void 0&&e.length>parseInt(l)){const d=["error-invalid-length-too-long",l];t.push({errorMessage:r.jsx(v.Fragment,{children:b(...d)},t.length),errorMessageStr:f(...d),validatorName:n})}if(u!==void 0&&e.length<parseInt(u)){const d=["error-invalid-length-too-short",u];t.push({errorMessage:r.jsx(v.Fragment,{children:b(...d)},t.length),errorMessageStr:f(...d),validatorName:n})}}e:{const n="_compareToOther",i=O[n];if(i===void 0)break e;const{"ignore.empty.value":g=!1,name:l,shouldBe:u,"error-message":d}=i;if(g&&e==="")break e;const{value:c}=k[l];if((()=>{switch(u){case"different":return c!==e;case"equal":return c===e}})())break e;const F=[d??M((()=>{switch(u){case"equal":return"shouldBeEqual";case"different":return"shouldBeDifferent"}})()),l,o,u];t.push({validatorName:n,errorMessage:r.jsx(v.Fragment,{children:h(...F)},t.length),errorMessageStr:N(...F)})}e:{const n="pattern",i=O[n];if(i===void 0)break e;const{"ignore.empty.value":g=!1,pattern:l,"error-message":u}=i;if(g&&e===""||new RegExp(l).test(e))break e;const d=[u??M("shouldMatchPattern"),l];t.push({validatorName:n,errorMessage:r.jsx(v.Fragment,{children:h(...d)},t.length),errorMessageStr:N(...d)})}e:{if(((a=[...t].reverse()[0])===null||a===void 0?void 0:a.validatorName)==="pattern")break e;const n="email",i=O[n];if(i===void 0)break e;const{"ignore.empty.value":g=!1}=i;if(g&&e===""||V.test(e))break e;const l=[M("invalidEmailMessage")];t.push({validatorName:n,errorMessage:r.jsx(v.Fragment,{children:b(...l)},t.length),errorMessageStr:f(...l)})}e:{const n="integer",i=O[n];if(i===void 0)break e;const{"ignore.empty.value":g=!1,max:l,min:u}=i;if(g&&e==="")break e;const d=parseInt(e);if(isNaN(d)){const c=["mustBeAnInteger"];t.push({validatorName:n,errorMessage:r.jsx(v.Fragment,{children:b(...c)},t.length),errorMessageStr:f(...c)});break e}if(l!==void 0&&d>parseInt(l)){const c=["error-number-out-of-range-too-big",l];t.push({validatorName:n,errorMessage:r.jsx(v.Fragment,{children:b(...c)},t.length),errorMessageStr:f(...c)});break e}if(u!==void 0&&d<parseInt(u)){const c=["error-number-out-of-range-too-small",u];t.push({validatorName:n,errorMessage:r.jsx(v.Fragment,{children:b(...c)},t.length),errorMessageStr:f(...c)});break e}}e:{const n="options",i=O[n];if(i===void 0||e===""||i.options.indexOf(e)>=0)break e;const g=[M("notAValidOption")];t.push({validatorName:n,errorMessage:r.jsx(v.Fragment,{children:h(...g)},t.length),errorMessageStr:N(...g)})}return t})}}function D(x){const{kcContext:j,onIsFormSubmittableValueChange:y,i18n:p,getClassName:s,BeforeField:b,AfterField:f}=x,{advancedMsg:h,msg:N}=p,{formValidationState:{fieldStateByAttributeName:E,isFormSubmittable:m},formValidationDispatch:a,attributesWithPassword:o}=S({kcContext:j,i18n:p});v.useEffect(()=>{y(m)},[m]);let k="";return r.jsx(r.Fragment,{children:o.map((e,w)=>{var O;const{group:t="",groupDisplayHeader:n="",groupDisplayDescription:i=""}=e,{value:g,displayableErrors:l}=E[e.name],u=C(s("kcFormGroupClass"),l.length!==0&&s("kcFormGroupErrorClass"));return r.jsxs(v.Fragment,{children:[t!==k&&(k=t)!==""&&r.jsxs("div",Object.assign({className:u},{children:[r.jsx("div",Object.assign({className:s("kcContentWrapperClass")},{children:r.jsx("label",Object.assign({id:`header-${t}`,className:s("kcFormGroupHeader")},{children:h(n)||k}))})),i!==""&&r.jsx("div",Object.assign({className:s("kcLabelWrapperClass")},{children:r.jsx("label",Object.assign({id:`description-${t}`,className:s("kcLabelClass")},{children:h(i)}))}))]})),b&&r.jsx(b,{attribute:e}),r.jsxs("div",Object.assign({className:u},{children:[r.jsxs("div",Object.assign({className:s("kcLabelWrapperClass")},{children:[r.jsx("label",Object.assign({htmlFor:e.name,className:s("kcLabelClass")},{children:h((O=e.displayName)!==null&&O!==void 0?O:"")})),e.required&&r.jsx(r.Fragment,{children:"*"})]})),r.jsxs("div",Object.assign({className:s("kcInputWrapperClass")},{children:[(()=>{const{options:d}=e.validators;return d!==void 0?r.jsx("select",Object.assign({id:e.name,name:e.name,onChange:c=>a({action:"update value",name:e.name,newValue:c.target.value}),onBlur:()=>a({action:"focus lost",name:e.name}),value:g},{children:r.jsxs(r.Fragment,{children:[r.jsx("option",Object.assign({value:"",selected:!0,disabled:!0,hidden:!0},{children:N("selectAnOption")})),d.options.map(c=>r.jsx("option",Object.assign({value:c},{children:c}),c))]})})):r.jsx("input",{type:(()=>{switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}})(),id:e.name,name:e.name,value:g,onChange:c=>a({action:"update value",name:e.name,newValue:c.target.value}),onBlur:()=>a({action:"focus lost",name:e.name}),className:s("kcInputClass"),"aria-invalid":l.length!==0,disabled:e.readOnly,autoComplete:e.autocomplete})})(),l.length!==0&&(()=>{const d=`input-error-${e.name}`;return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`#${d} > span: { display: block; }`}),r.jsx("span",Object.assign({id:d,className:s("kcInputErrorMessageClass"),style:{position:l.length===1?"absolute":void 0},"aria-live":"polite"},{children:l.map(({errorMessage:c})=>c)}))]})})()]}))]})),f&&r.jsx(f,{attribute:e})]},w)})})}export{D as U};
//# sourceMappingURL=UserProfileFormFields-BuaIh175.js.map