(()=>{var e={144:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),c=n.n(i)()(o());c.push([e.id,".top-container{min-width:100vh}.bg-top{background:linear-gradient(340deg, transparent 50%, #3498db 50%, #3498db);background-size:137% 121%;background-position:center center}#main-header{margin:auto}.profile-photo-div{display:flex;flex-direction:column;align-items:flex-start}.name-container{z-index:1;margin-left:10vw;color:#3c2bc0;font-size:7.6vw;text-shadow:-1vw 0vw 0.8vw #000}.info-container{display:flex;flex-direction:column;align-items:center}.project-section{display:flex;flex-direction:column;align-items:center}.project-1,.project-2,.project-3,.project-4{width:calc(134px + 48vw);margin-bottom:10vw}.image-container-1,.image-container-2,.image-container-3,.image-container-4{display:flex;flex-direction:column}.image-container-1 #display-project,.image-container-2 #display-project,.image-container-3 #display-project,.image-container-4 #display-project{width:calc(147px + 42vw);box-shadow:5vw -2vw 30px 0.3vw #26134a;border:.3vw solid #000000;border-top:none}.img-link{display:flex;flex-direction:column;align-items:center}.project-info-1,.project-info-2,.project-info-3,.project-info-4{display:flex;align-items:center;border:.1vw solid #000000;box-shadow:4vw -3vw 30px 1vw #26134a}.project-info-1 .project-text-1,.project-info-1 .project-text-2,.project-info-1 .project-text-3,.project-info-1 .project-text-4,.project-info-2 .project-text-1,.project-info-2 .project-text-2,.project-info-2 .project-text-3,.project-info-2 .project-text-4,.project-info-3 .project-text-1,.project-info-3 .project-text-2,.project-info-3 .project-text-3,.project-info-3 .project-text-4,.project-info-4 .project-text-1,.project-info-4 .project-text-2,.project-info-4 .project-text-3,.project-info-4 .project-text-4{padding:1.5vw}.github-btn,.website-btn{background-image:linear-gradient(to right, #7a50eb, #a385f5, #9282ef, #a698f3);box-shadow:4px -3px 15px 0 rgba(93,49,196,0.75);text-align:center;width:calc(23px + 7.5rem);font-weight:600;color:#fff;cursor:pointer;margin:.5vh;height:calc(13px + 2rem);text-align:center;border:none;background-size:300% 100%;border-radius:50px;-moz-transition:all 1s ease-in-out;-webkit-transition:all 1s ease-in-out;-o-transition:all 1s ease-in-out;transition:all 1s ease-in-out}.github-btn:focus,.website-btn:focus{outline:none}.github-btn:hover,.website-btn:hover{background-position:100% 0;-webkit-transition:all 1s ease-in-out;-o-transition:all 1s ease-in-out;-moz-transition:alls 1s ease-in-out;transition:all 1s ease-in-out}footer{background-color:#aba1e8;margin-top:17vw;width:100%}footer .contact-container{display:flex;flex-direction:column;padding:4vw}footer .contact-container .social-media{display:flex;justify-content:center}footer .contact-container .social-media #facebook-icon,footer .contact-container .social-media #github-icon{min-height:13vw}#instagram-icon{max-width:14vw}.social-media>img{margin:2vw}#facebook-icon{filter:brightness(0)}.top-container{min-width:100vh}body{margin:0;background:#cdc7f2}.site-container{overflow-x:hidden}h1{display:flex;justify-content:center}h2{font-size:3vw;margin:unset;padding:1.5vw}\n",""]);const a=c},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],a=0;a<e.length;a++){var s=e[a],p=r.base?s[0]+r.base:s[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var d=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:v,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var a=n(i[c]);t[a].references--}for(var s=r(e,o),p=0;p<i.length;p++){var l=n(i[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},863:()=>{document.querySelectorAll('[id="display-project"]').forEach((e=>{e.addEventListener("mouseenter",(function(){"project-preview-1"==e.className?e.src="./public/watchnrategifstill.png":"project-preview-2"==e.className?e.src="./public/cardmemoryss.png":"project-preview-3"==e.className?e.src="./public/ucss.png":"project-preview-4"==e.classList&&(e.src="./public/cvbss.png")})),e.addEventListener("mouseleave",(function(){"project-preview-1"==e.classList?e.src="./public/watchnrategif.gif":"project-preview-2"==e.classList?e.src="./public/card_memory_screen.gif":"project-preview-3"==e.classList?e.src="./public/under.gif":"project-preview-4"==e.classList&&(e.src="./public/cvbscreen.gif")}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),c=n.n(i),a=n(565),s=n.n(a),p=n(216),l=n.n(p),u=n(589),d=n.n(u),f=n(144),v={};v.styleTagTransform=d(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals,n(863),console.log("checker")})()})();