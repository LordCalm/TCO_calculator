import{_ as p,o as _,c as f}from"./index.418eba00.js";function y(n,a){for(var c=function(o){for(var i="",t=0;t<o.length;t++){var u=o[t]===null?"":o[t].toString();o[t]instanceof Date&&(u=o[t].toLocaleString());var l=u.replace(/"/g,'""');l.search(/("|,|\n)/g)>=0&&(l='"'+l+'"'),t>0&&(i+=","),i+=l}return i+`
`},s="",r=0;r<a.length;r++)s+=c(a[r]);var d=new Blob([s],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(d,n);else{var e=document.createElement("a");if(e.download!==void 0){var v=URL.createObjectURL(d);e.setAttribute("href",v),e.setAttribute("download",n),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}}const m={props:["modelValue"],emits:["update:modelValue"]},b=["value"];function g(n,a,c,s,r,d){return _(),f("textarea",{value:c.modelValue,onInput:a[0]||(a[0]=e=>n.$emit("update:modelValue",e.target.value)),rows:"1"},null,40,b)}const x=p(m,[["render",g],["__scopeId","data-v-70404a98"]]);export{x as C,y as e};
