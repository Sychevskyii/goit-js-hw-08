!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var a=o("2eBHU"),n="feedback-form-state",l=document.querySelector(".feedback-form"),i=l[0],d=l[1],f=l[2];l.addEventListener("input",(0,a.default)((function(e){u[e.target.name]=e.target.value;var t=JSON.stringify(u);localStorage.setItem(n,t)}),500)),f.addEventListener("click",(function(e){e.preventDefault(),l.reset(),console.log(s),localStorage.removeItem(n)}));var u={};var c=localStorage.getItem(n),s=JSON.parse(c);null!==localStorage&&(i.value+=s.email,d.value+=s.message)}();
//# sourceMappingURL=03-feedback.c25de67f.js.map