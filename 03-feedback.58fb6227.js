!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n=a("2eBHU"),o="feedback-form-state",l=document.querySelector(".feedback-form"),i=l.querySelector('input[name="email"]'),u=l.querySelector('textarea[name="message"]'),d=l.querySelector('button[type="submit"]');l.addEventListener("input",(0,n.default)((function(e){f[e.target.name]=e.target.value;var t=JSON.stringify(f);localStorage.setItem(o,t)}),500)),d.addEventListener("click",(function(e){e.preventDefault(),l.reset(),console.log(s),localStorage.removeItem(o)}));var f={};var c=localStorage.getItem(o),s={};null!==c&&(s=JSON.parse(c),i.value=s.email||"",u.value=s.message||"")}();
//# sourceMappingURL=03-feedback.58fb6227.js.map
