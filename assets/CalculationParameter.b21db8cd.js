import{_ as p,o as _,c as f}from"./index.ad1dc4b5.js";function y(n,a){for(var l=function(o){for(var i="",t=0;t<o.length;t++){var u=o[t]===null?"":o[t].toString();o[t]instanceof Date&&(u=o[t].toLocaleString());var c=u.replace(/"/g,'""');c.search(/("|,|\n)/g)>=0&&(c='"'+c+'"'),t>0&&(i+=","),i+=c}return i+`
`},d="",r=0;r<a.length;r++)d+=l(a[r]);var s=new Blob([d],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(s,n);else{var e=document.createElement("a");if(e.download!==void 0){var v=URL.createObjectURL(s);e.setAttribute("href",v),e.setAttribute("download",n),e.style.visibility="hidden",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}}const m={props:["modelValue"],emits:["update:modelValue"]},b=["value"];function g(n,a,l,d,r,s){return _(),f("input",{value:l.modelValue,onInput:a[0]||(a[0]=e=>n.$emit("update:modelValue",e.target.value))},null,40,b)}const C=p(m,[["render",g],["__scopeId","data-v-0d55c35c"]]);export{C,y as e};
