var r,t,e;function n(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function o(r){return parseInt(r.slice(1).replace(/,/g,""))}r=document.querySelector("ul"),t=((function(r){if(Array.isArray(r))return n(r)})(e=document.querySelectorAll("li"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(r,t){if(r){if("string"==typeof r)return n(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(r,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(r,t){return o(t.dataset.salary)-o(r.dataset.salary)}),r.innerHTML=null,t.forEach(function(t){return r.append(t)});
//# sourceMappingURL=index.7d5bbacd.js.map
