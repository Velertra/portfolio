(()=>{var e={144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,".top-container{min-width:100vh}.bg-top{background:linear-gradient(340deg, transparent 50%, #3498db 50%, #3498db);background-size:137% 121%;background-position:center center}.profile-photo-div{display:flex;flex-direction:column;align-items:flex-start}.name-container{z-index:1;margin-left:10vh;color:#3c2bc0;font-size:7.6vw;text-shadow:-1vw 0vw 0.8vw #000}.info-container{display:flex;flex-direction:column;align-items:center}.image-container-1,.image-container-2,.image-container-3{display:flex;flex-direction:column}.image-container-1 #display-project,.image-container-2 #display-project,.image-container-3 #display-project{box-shadow:5vw -2vw 30px 0.3vw #26134a;border:.3vw solid #000000;border-top:none}.img-link{display:flex;flex-direction:column;align-items:center}.project-info-1,.project-info-2,.project-info-3{display:flex;align-items:center;margin:11.5vw;margin-top:unset;border:.1vw solid #000000;border-top:none;padding:1vh;box-shadow:4vw -3vw 30px 1vw #26134a}.project-info-1 .project-text-1,.project-info-1 .project-text-2,.project-info-1 .project-text-3,.project-info-2 .project-text-1,.project-info-2 .project-text-2,.project-info-2 .project-text-3,.project-info-3 .project-text-1,.project-info-3 .project-text-2,.project-info-3 .project-text-3{padding:1.5vw}.github-btn,.website-btn{background-image:linear-gradient(to right, #7a50eb, #a385f5, #9282ef, #a698f3);box-shadow:4px -3px 15px 0 rgba(93,49,196,0.75);width:44vh;font-size:8vh;height:13vh;font-weight:600;color:#fff;cursor:pointer;margin:1vh;text-align:center;border:none;background-size:300% 100%;border-radius:50px;-moz-transition:all 1s ease-in-out;-webkit-transition:all 1s ease-in-out;-o-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.github-btn:focus,.website-btn:focus{outline:none}.github-btn:hover,.website-btn:hover{background-position:100% 0;-webkit-transition:all 1s ease-in-out;-o-transition:all 1s ease-in-out;-moz-transition:alls 1s ease-in-out;transition:all 1s ease-in-out}@media (max-width: 1000px){.github-btn,.website-btn{width:14vh;font-size:2vh;height:5vh}}footer{background-color:#aba1e8;margin-top:17vw;width:100%}footer .contact-container{display:flex;flex-direction:column;padding:4vw}footer .contact-container .social-media{display:flex;justify-content:center}footer .contact-container .social-media #facebook-icon,footer .contact-container .social-media #github-icon{min-height:13vw}#instagram-icon{max-width:14vw}.social-media>img{margin:2vw}#facebook-icon{filter:brightness(0)}.top-container{min-width:100vh}body{margin:0;background:#cdc7f2}.site-container{overflow-x:hidden}h1{display:flex;justify-content:center}h2{font-size:3vw;margin:unset;padding:1.5vw}\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),t.push(p))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],p=i[l]||0,u="".concat(l," ").concat(p);i[l]=p+1;var d=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:v,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var p=n(i[l]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},863:()=>{document.querySelectorAll('[id="display-project"]').forEach((e=>{e.addEventListener("mouseenter",(function(){"project-preview-1"==e.className?e.src="./public/watchnrategifstill.png":"project-preview-2"==e.className?e.src="./public/cvbss.png":"project-preview-3"==e.className&&(e.src="./public/ucss.png")})),e.addEventListener("mouseleave",(function(){"project-preview-1"==e.classList?e.src="./public/watchnrategif.gif":"project-preview-2"==e.classList?e.src="./public/cvbscreen.gif":"project-preview-3"==e.classList&&(e.src="./public/under.gif")}))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),l=n(216),p=n.n(l),u=n(589),d=n.n(u),f=n(144),v={};v.styleTagTransform=d(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=p(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,n(863),console.log("checker")})()})();