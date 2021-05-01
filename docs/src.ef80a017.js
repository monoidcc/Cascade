parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ZXxV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n={};function t(n,t){if(!n)throw new Error(t)}function e(e){t("string"==typeof e,"The name should be a string"),t(!!n[e],"The coelement of the given name is not registered: "+e)}var o="readystatechange",r=document,u=new Promise(function(n){var t=function(){"complete"===r.readyState&&(n(),r.removeEventListener(o,t))};r.addEventListener(o,t),t()}),c=function(t,o){var u;t?(e(t),u=[t]):u=Object.keys(n),u.map(function(t){[].map.call((o||r).querySelectorAll(n[t].sel),n[t])})},i="C$",a="K$",s="N$",f="B$",l=function(n,t){var e=new n;e.el=t;var o=n[f];return Array.isArray(o)&&o.forEach(function(n){n(t,e)}),"function"==typeof e.__mount__&&e.__mount__(),e},p=function(n,t,e){n[t]=(n[t]||[]).concat(e)},m=function(n,t){p(n,f,t)},v=function(e,o){t("string"==typeof e,"`name` of a class component has to be a string."),t("function"==typeof o,"`Constructor` of a class component has to be a function"),o[s]=e;var r=e+"-💊";m(o,function(n,t){n[i+e]=t,n.classList.add(e,r)});var a=function(n){n.classList.contains(r)||l(o,n)};a.sel="."+e+":not(."+r+")",n[e]=a,u.then(function(){c(e)})},d=function(n,o){e(n);var r=o[i+n];return t(r,"no coelement named: "+n+", on the dom: "+o.tagName),r},y=function(t,o){return e(t),n[t](o),d(t,o)},h=function(n,t){var e=d(n,t);"function"==typeof e.__unmount__&&e.__unmount__(),t.classList.remove(n,n+"-💊"),(e[a]||[]).forEach(function(n){n.remove()}),delete t[i+n],delete e.el},_=function(n,e){t("function"==typeof n.install,"The given capsid module does not have `install` method. Please check the install call."),n.install(T,e||{})},b=function(n,e){var o=(void 0===e?{}:e).at;return function(e,r,u){var c=e.constructor;t(!!n,"Empty event handler is given: constructor="+c.name+" key="+r),m(c,function(t,e){var u=function(n){o&&![].some.call(t.querySelectorAll(o),function(t){return t===n.target||t.contains(n.target)})||e[r](n)};u.remove=function(){t.removeEventListener(n,u)},p(e,a,u),t.addEventListener(n,u)})}},g=function(n){b[n]=b(n),b[n].at=function(t){return b(n,{at:t})}},x=function(n,t,e,o){var r=function(o){n.forEach(function(n){n.dispatchEvent(new CustomEvent(t,{detail:o,bubbles:e}))})};o&&o.then?o.then(r):r(o)},E=function(n){return function(e,o,r){var u=r.value,c=e.constructor;t(!!n,"Unable to emits an empty event: constructor="+c.name+" key="+o),r.value=function(){var t=u.apply(this,arguments);return x([this.el],n,!0,t),t}}},L=function(n){return function(t,e){Object.defineProperty(t.constructor.prototype,e,{get:function(){return this.el.querySelector(n)},configurable:!1})}},k=function(n){return function(t,e){Object.defineProperty(t.constructor.prototype,e,{get:function(){return this.el.querySelectorAll(n)},configurable:!1})}};L.all=k;var w=function(n){return t("string"==typeof n&&!!n,"Component name must be a non-empty string"),function(t){v(n,t)}},H=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(t){m(t,function(t){var e;(e=t.classList).add.apply(e,n)})}},A=function(n){return function(t){m(t,function(t){t.innerHTML=n,c(null,t)})}},M=function(n,e){return function(o,r,u){var c=u.value,i=o.constructor;t(!!n,"Unable to publish empty event: constructor="+i.name+" key="+r);var a=e||".sub\\:"+n;u.value=function(){var t=c.apply(this,arguments);return x([].concat.apply([],document.querySelectorAll(a)),n,!1,t),t}}},S=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(t){H.apply(void 0,n.map(function(n){return"sub:"+n}))(t)}};b.useHandler=g,b.useHandler("click");var T=Object.freeze({def:v,prep:c,make:y,mount:l,unmount:h,get:d,install:_,on:b,emits:E,wired:L,component:w,is:H,innerHTML:A,pub:M,sub:S,addMountHook:m,__ccc__:n});exports.def=v,exports.prep=c,exports.make=y,exports.mount=l,exports.unmount=h,exports.get=d,exports.install=_,exports.on=b,exports.emits=E,exports.wired=L,exports.component=w,exports.is=H,exports.innerHTML=A,exports.pub=M,exports.sub=S,exports.addMountHook=m,exports.__ccc__=n;
},{}],"PhMa":[function(require,module,exports) {
module.exports=require("./dist/capsid-cjs");
},{"./dist/capsid-cjs":"ZXxV"}],"oUaq":[function(require,module,exports) {
var define;
var global = arguments[3];
var o,e=arguments[3];!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof o&&o.amd?o(n):e.capsidDebugPlugin=n()}(this,function(){"use strict";var o=function(o){return"color: "+o+"; font-weight: bold;"},n=function(e){var n=e.coel,t=e.e,c=e.module,l=e.color,r=t.type,s=function(o){var e=o.constructor;return""+(e.N$||e.name)}(n);console.groupCollapsed(c+"> %c"+r+"%c on %c"+s,o(l||"#f012be"),"",o("#1a80cc")),console.log(t),t.target&&console.log(t.target),n.el&&console.log(n.el),console.groupEnd()};return{install:function(){e.capsidDebugMessage=function(o){switch(o.type){case"event":n(o);break;default:console.log("Unknown message: "+JSON.stringify(o))}}}}});
},{}],"E8A2":[function(require,module,exports) {
module.exports=require("../dist/capsid-debug");
},{"../dist/capsid-debug":"oUaq"}],"kwH3":[function(require,module,exports) {
"use strict";function e(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function t(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.StyleSheet=void 0;var s=function(){function s(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var n=s.prototype;return n.insert=function(s){if(this.ctr%(this.isSpeedy?65e3:1)==0){var n,i=t(this);n=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(i,n),this.tags.push(i)}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=e(r);try{var h=105===s.charCodeAt(1)&&64===s.charCodeAt(0);o.insertRule(s,h?0:o.cssRules.length)}catch(c){0}}else r.appendChild(document.createTextNode(s));this.ctr++},n.flush=function(){this.tags.forEach(function(e){return e.parentNode.removeChild(e)}),this.tags=[],this.ctr=0},s}();exports.StyleSheet=s;
},{}],"gTWe":[function(require,module,exports) {
"use strict";function e(e){function r(e,r,t){var c=r.trim().split(d);r=c;var s=c.length,i=e.length;switch(i){case 0:case 1:var n=0;for(e=0===i?"":e[0]+" ";n<s;++n)r[n]=a(e,r[n],t).trim();break;default:var l=n=0;for(r=[];n<s;++n)for(var o=0;o<i;++o)r[l++]=a(e[o]+" ",c[n],t).trim()}return r}function a(e,r,a){var t=r.charCodeAt(0);switch(33>t&&(t=(r=r.trim()).charCodeAt(0)),t){case 38:return r.replace(k,"$1"+e.trim());case 58:return e.trim()+r.replace(k,"$1"+e.trim());default:if(0<1*a&&0<r.indexOf("\f"))return r.replace(k,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+r}function t(e,r,a,s){var i=e+";",n=2*r+3*a+4*s;if(944===n){e=i.indexOf(":",9)+1;var l=i.substring(e,i.length-1).trim();return l=i.substring(0,e).trim()+l+";",1===S||2===S&&c(l,1)?"-webkit-"+l+l:l}if(0===S||2===S&&!c(i,1))return i;switch(n){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i;case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i;case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i;case 1009:if(100!==i.charCodeAt(4))break;case 969:case 942:return"-webkit-"+i+i;case 978:return"-webkit-"+i+"-moz-"+i+i;case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i;case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i;if(0<i.indexOf("image-set(",11))return i.replace(O,"$1-webkit-$2")+i;break;case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i;case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i;case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i;case 964:return"-webkit-"+i+"-ms-flex-"+i+i;case 1023:if(99!==i.charCodeAt(8))break;return"-webkit-box-pack"+(l=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+l+i;case 1005:return h.test(i)?i.replace(b,":-webkit-")+i.replace(b,":-moz-")+i:i;case 1e3:switch(r=(l=i.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(r)){case 226:l=i.replace(A,"tb");break;case 232:l=i.replace(A,"tb-rl");break;case 220:l=i.replace(A,"lr");break;default:return i}return"-webkit-"+i+"-ms-"+l+i;case 1017:if(-1===i.indexOf("sticky",9))break;case 975:switch(r=(i=e).length-10,n=(l=(33===i.charCodeAt(r)?i.substring(0,r):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:i=i.replace(l,"-webkit-"+l)+";"+i;break;case 207:case 102:i=i.replace(l,"-webkit-"+(102<n?"inline-":"")+"box")+";"+i.replace(l,"-webkit-"+l)+";"+i.replace(l,"-ms-"+l+"box")+";"+i}return i+";";case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return l=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+l+"-ms-flex-"+l+i;case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(v,"")+i;default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(v,"")+i}break;case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break;case 931:case 953:if(!0===$.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?t(e.replace("stretch","fill-available"),r,a,s).replace(":fill-available",":stretch"):i.replace(l,"-webkit-"+l)+i.replace(l,"-moz-"+l.replace("fill-",""))+i;break;case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===a+s&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(u,"$1-webkit-$2")+i}return i}function c(e,r){var a=e.indexOf(1===r?":":"{"),t=e.substring(0,3!==r?a:10);return a=e.substring(a+1,e.length-1),q(2!==r?t:t.replace(x,"$1"),a,r)}function s(e,r){var a=t(r,r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2));return a!==r+";"?a.replace(m," or ($1)").substring(4):"("+r+")"}function i(e,r,a,t,c,s,i,n,o,f){for(var b,h=0,u=r;h<P;++h)switch(b=M[h].call(l,e,u,a,t,c,s,i,n,o,f)){case void 0:case!1:case!0:case null:break;default:u=b}if(u!==r)return u}function n(e){return void 0!==(e=e.prefix)&&(q=null,e?"function"!=typeof e?S=1:(S=2,q=e):S=0),n}function l(e,a){var n=e;if(33>n.charCodeAt(0)&&(n=n.trim()),n=[n],0<P){var l=i(-1,a,n,n,z,y,0,0,0,0);void 0!==l&&"string"==typeof l&&(a=l)}var b=function e(a,n,l,b,h){for(var u,d,k,A,m,v=0,x=0,$=0,O=0,M=0,q=0,D=k=u=0,E=0,F=0,G=0,H=0,I=l.length,J=I-1,K="",L="",N="",Q="";E<I;){if(d=l.charCodeAt(E),E===J&&0!==x+O+$+v&&(0!==x&&(d=47===x?10:47),O=$=v=0,I++,J++),0===x+O+$+v){if(E===J&&(0<F&&(K=K.replace(f,"")),0<K.trim().length)){switch(d){case 32:case 9:case 59:case 13:case 10:break;default:K+=l.charAt(E)}d=59}switch(d){case 123:for(u=(K=K.trim()).charCodeAt(0),k=1,H=++E;E<I;){switch(d=l.charCodeAt(E)){case 123:k++;break;case 125:k--;break;case 47:switch(d=l.charCodeAt(E+1)){case 42:case 47:e:{for(D=E+1;D<J;++D)switch(l.charCodeAt(D)){case 47:if(42===d&&42===l.charCodeAt(D-1)&&E+2!==D){E=D+1;break e}break;case 10:if(47===d){E=D+1;break e}}E=D}}break;case 91:d++;case 40:d++;case 34:case 39:for(;E++<J&&l.charCodeAt(E)!==d;);}if(0===k)break;E++}switch(k=l.substring(H,E),0===u&&(u=(K=K.replace(o,"").trim()).charCodeAt(0)),u){case 64:switch(0<F&&(K=K.replace(f,"")),d=K.charCodeAt(1)){case 100:case 109:case 115:case 45:F=n;break;default:F=_}if(H=(k=e(n,F,k,d,h+1)).length,0<P&&(m=i(3,k,F=r(_,K,G),n,z,y,H,d,h,b),K=F.join(""),void 0!==m&&0===(H=(k=m.trim()).length)&&(d=0,k="")),0<H)switch(d){case 115:K=K.replace(C,s);case 100:case 109:case 45:k=K+"{"+k+"}";break;case 107:k=(K=K.replace(w,"$1 $2"))+"{"+k+"}",k=1===S||2===S&&c("@"+k,3)?"@-webkit-"+k+"@"+k:"@"+k;break;default:k=K+k,112===b&&(L+=k,k="")}else k="";break;default:k=e(n,r(n,K,G),k,b,h+1)}N+=k,k=G=F=D=u=0,K="",d=l.charCodeAt(++E);break;case 125:case 59:if(1<(H=(K=(0<F?K.replace(f,""):K).trim()).length))switch(0===D&&(u=K.charCodeAt(0),45===u||96<u&&123>u)&&(H=(K=K.replace(" ",":")).length),0<P&&void 0!==(m=i(1,K,n,a,z,y,L.length,b,h,b))&&0===(H=(K=m.trim()).length)&&(K="\0\0"),u=K.charCodeAt(0),d=K.charCodeAt(1),u){case 0:break;case 64:if(105===d||99===d){Q+=K+l.charAt(E);break}default:58!==K.charCodeAt(H-1)&&(L+=t(K,u,d,K.charCodeAt(2)))}G=F=D=u=0,K="",d=l.charCodeAt(++E)}}switch(d){case 13:case 10:47===x?x=0:0===1+u&&107!==b&&0<K.length&&(F=1,K+="\0"),0<P*B&&i(0,K,n,a,z,y,L.length,b,h,b),y=1,z++;break;case 59:case 125:if(0===x+O+$+v){y++;break}default:switch(y++,A=l.charAt(E),d){case 9:case 32:if(0===O+v+x)switch(M){case 44:case 58:case 9:case 32:A="";break;default:32!==d&&(A=" ")}break;case 0:A="\\0";break;case 12:A="\\f";break;case 11:A="\\v";break;case 38:0===O+x+v&&(F=G=1,A="\f"+A);break;case 108:if(0===O+x+v+j&&0<D)switch(E-D){case 2:112===M&&58===l.charCodeAt(E-3)&&(j=M);case 8:111===q&&(j=q)}break;case 58:0===O+x+v&&(D=E);break;case 44:0===x+$+O+v&&(F=1,A+="\r");break;case 34:case 39:0===x&&(O=O===d?0:0===O?d:O);break;case 91:0===O+x+$&&v++;break;case 93:0===O+x+$&&v--;break;case 41:0===O+x+v&&$--;break;case 40:if(0===O+x+v){if(0===u)switch(2*M+3*q){case 533:break;default:u=1}$++}break;case 64:0===x+$+O+v+D+k&&(k=1);break;case 42:case 47:if(!(0<O+v+$))switch(x){case 0:switch(2*d+3*l.charCodeAt(E+1)){case 235:x=47;break;case 220:H=E,x=42}break;case 42:47===d&&42===M&&H+2!==E&&(33===l.charCodeAt(H+2)&&(L+=l.substring(H,E+1)),A="",x=0)}}0===x&&(K+=A)}q=M,M=d,E++}if(0<(H=L.length)){if(F=n,0<P&&void 0!==(m=i(2,L,F,a,z,y,H,b,h,b))&&0===(L=m).length)return Q+L+N;if(L=F.join(",")+"{"+L+"}",0!=S*j){switch(2!==S||c(L,2)||(j=0),j){case 111:L=L.replace(g,":-moz-$1")+L;break;case 112:L=L.replace(p,"::-webkit-input-$1")+L.replace(p,"::-moz-$1")+L.replace(p,":-ms-input-$1")+L}j=0}}return Q+L+N}(_,n,a,0,0);return 0<P&&(void 0!==(l=i(-2,b,n,n,z,y,b.length,0,0,0))&&(b=l)),"",j=0,y=z=1,b}var o=/^\0+/g,f=/[\0\r\f]/g,b=/: */g,h=/zoo|gra/,u=/([,: ])(transform)/g,d=/,\r+?/g,k=/([\t\r\n ])*\f?&/g,w=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,g=/:(read-only)/g,A=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,m=/([\s\S]*?);/g,v=/-self|flex-/g,x=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,O=/([^-])(image-set\()/,y=1,z=1,j=0,S=1,_=[],M=[],P=0,q=null,B=0;return l.use=function e(r){switch(r){case void 0:case null:P=M.length=0;break;default:if("function"==typeof r)M[P++]=r;else if("object"==typeof r)for(var a=0,t=r.length;a<t;++a)e(r[a]);else B=0|!!r}return e},l.set=n,void 0!==e&&n(e),l}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e;exports.default=r;
},{}],"oT3e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var u=e(r);return t.set(r,u),u}},t=e;exports.default=t;
},{}],"dqFm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("@emotion/sheet"),r=t(require("@emotion/stylis"));function t(e){return e&&e.__esModule?e:{default:e}}require("@emotion/weak-memoize");var n="/*|*/",i=n+"}";function o(e){e&&a.current.insert(e+"}")}var a={current:null},s=function(e,r,t,s,c,u,d,l,f,p){switch(e){case 1:switch(r.charCodeAt(0)){case 64:return a.current.insert(r+";"),"";case 108:if(98===r.charCodeAt(2))return""}break;case 2:if(0===l)return r+n;break;case 3:switch(l){case 102:case 112:return a.current.insert(t[0]+r),"";default:return r+(0===p?n:"")}case-2:r.split(i).forEach(o)}},c=function(t){void 0===t&&(t={});var n,i=t.key||"css";void 0!==t.prefix&&(n={prefix:t.prefix});var o=new r.default(n);var c,u={};c=t.container||document.head;var d,l=document.querySelectorAll("style[data-emotion-"+i+"]");Array.prototype.forEach.call(l,function(e){e.getAttribute("data-emotion-"+i).split(" ").forEach(function(e){u[e]=!0}),e.parentNode!==c&&c.appendChild(e)}),o.use(t.stylisPlugins)(s),d=function(e,r,t,n){var i=r.name;a.current=t,o(e,r.styles),n&&(f.inserted[i]=!0)};var f={key:i,sheet:new e.StyleSheet({key:i,container:c,nonce:t.nonce,speedy:t.speedy}),nonce:t.nonce,inserted:u,registered:{},insert:d};return f},u=c;exports.default=u;
},{"@emotion/sheet":"kwH3","@emotion/stylis":"gTWe","@emotion/weak-memoize":"oT3e"}],"Wn2h":[function(require,module,exports) {
"use strict";function e(e){for(var t,r=0,o=0,a=e.length;a>=4;++o,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(a){case 3:r^=(255&e.charCodeAt(o+2))<<16;case 2:r^=(255&e.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(o)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"RtcD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},e=o;exports.default=e;
},{}],"subt":[function(require,module,exports) {
"use strict";function e(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"WPNE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.serializeStyles=void 0;var e=r(require("@emotion/hash")),t=r(require("@emotion/unitless")),n=r(require("@emotion/memoize"));function r(e){return e&&e.__esModule?e:{default:e}}var a,o,i,s,l,u,c="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences",f="You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).",v=/[A-Z]|^ms/g,d=/_EMO_([^_]+?)_([^]*?)_EMO_/g,y=function(e){return 45===e.charCodeAt(1)},p=function(e){return null!=e&&"boolean"!=typeof e},m=(0,n.default)(function(e){return y(e)?e:e.replace(v,"-$&").toLowerCase()}),h=function(e,n){switch(e){case"animation":case"animationName":if("string"==typeof n)return n.replace(d,function(e,t,n){return S={name:t,styles:n,next:S},t})}return 1===t.default[e]||y(e)||"number"!=typeof n||0===n?n:n+"px"},_=!0;function g(e,t,n,r){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return S={name:n.name,styles:n.styles,next:S},n.name;if(void 0!==n.styles){var a=n.next;if(void 0!==a)for(;void 0!==a;)S={name:a.name,styles:a.styles,next:S},a=a.next;var o=n.styles+";";return o}return b(e,t,n);case"function":if(void 0!==e){var i=S,s=n(e);return S=i,g(e,t,s,r)}break;case"string":}if(null==t)return n;var l=t[n];return void 0===l||r?n:l}function b(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=g(e,t,n[a],!1);else for(var o in n){var i=n[o];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=o+"{"+t[i]+"}":p(i)&&(r+=m(o)+":"+h(o,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var s=g(e,t,i,!1);switch(o){case"animation":case"animationName":r+=m(o)+":"+s+";";break;default:r+=o+"{"+s+"}"}}else for(var l=0;l<i.length;l++)p(i[l])&&(r+=m(o)+":"+h(o,i[l])+";")}return r}var x,S,w=/label:\s*([^\s;\n{]+)\s*;/g;var A=function(t,n,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var a=!0,o="";S=void 0;var i=t[0];null==i||void 0===i.raw?(a=!1,o+=g(r,n,i,!1)):o+=i[0];for(var s=1;s<t.length;s++)o+=g(r,n,t[s],46===o.charCodeAt(o.length-1)),a&&(o+=i[s]);w.lastIndex=0;for(var l,u="";null!==(l=w.exec(o));)u+="-"+l[1];var c=(0,e.default)(o)+u;return{name:c,styles:o,next:S}};exports.serializeStyles=A;
},{"@emotion/hash":"Wn2h","@emotion/unitless":"RtcD","@emotion/memoize":"subt"}],"V9FQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRegisteredStyles=t,exports.insertStyles=void 0;var e=!0;function t(e,t,r){var s="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]):s+=r+" "}),s}var r=function(t,r,s){var i=t.key+"-"+r.name;if((!1===s||!1===e&&void 0!==t.compat)&&void 0===t.registered[i]&&(t.registered[i]=r.styles),void 0===t.inserted[r.name]){var o=r;do{t.insert("."+i,o,t.sheet,!0);o=o.next}while(void 0!==o)}};exports.insertStyles=r;
},{}],"Q2eU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("@emotion/cache")),r=require("@emotion/serialize"),t=require("@emotion/utils");function n(e){return e&&e.__esModule?e:{default:e}}function i(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function s(e,r,n){var i=[],s=(0,t.getRegisteredStyles)(e,i,n);return i.length<2?n:s+r(i)}var a=function(n){var a=(0,e.default)(n);a.sheet.speedy=function(e){this.isSpeedy=e},a.compat=!0;var l=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var s=(0,r.serializeStyles)(n,a.registered,void 0);return(0,t.insertStyles)(a,s,!1),a.key+"-"+s.name};return{css:l,cx:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return s(a.registered,l,o(r))},injectGlobal:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=(0,r.serializeStyles)(t,a.registered);i(a,s)},keyframes:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var s=(0,r.serializeStyles)(t,a.registered),o="animation-"+s.name;return i(a,{name:s.name,styles:"@keyframes "+o+"{"+s.styles+"}"}),o},hydrate:function(e){e.forEach(function(e){a.inserted[e]=!0})},flush:function(){a.registered={},a.inserted={},a.sheet.flush()},sheet:a.sheet,cache:a,getRegisteredStyles:t.getRegisteredStyles.bind(null,a.registered),merge:s.bind(null,a.registered,l)}},o=function e(r){for(var t="",n=0;n<r.length;n++){var i=r[n];if(null!=i){var s=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))s=e(i);else for(var a in s="",i)i[a]&&a&&(s&&(s+=" "),s+=a);break;default:s=i}s&&(t&&(t+=" "),t+=s)}}return t},l=a;exports.default=l;
},{"@emotion/cache":"dqFm","@emotion/serialize":"WPNE","@emotion/utils":"V9FQ"}],"TAuN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sheet=exports.merge=exports.keyframes=exports.injectGlobal=exports.hydrate=exports.getRegisteredStyles=exports.flush=exports.cx=exports.css=exports.cache=void 0;var e=t(require("create-emotion"));function t(e){return e&&e.__esModule?e:{default:e}}var s=(0,e.default)(),r=s.flush,o=s.hydrate,x=s.cx,p=s.merge,c=s.getRegisteredStyles,a=s.injectGlobal,l=s.keyframes,d=s.css,h=s.sheet,i=s.cache;exports.cache=i,exports.sheet=h,exports.css=d,exports.keyframes=l,exports.injectGlobal=a,exports.getRegisteredStyles=c,exports.merge=p,exports.cx=x,exports.hydrate=o,exports.flush=r;
},{"create-emotion":"Q2eU"}],"u0i0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defer=void 0,exports.defer=(e=>new Promise((r,t)=>{setTimeout(r,e)}));
},{}],"Ag15":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.create=exports.onLoadImage=exports.byId=exports.qs=void 0,exports.qs=(e=>document.querySelector(e)),exports.byId=(e=>document.getElementById(e)),exports.onLoadImage=(e=>{const r=new Image;return new Promise((t,o)=>{r.onload=(()=>t(r)),r.src=e})}),exports.create=(e=>{const r=document.createElement("div");if(r.innerHTML=e,0===r.children.length)throw new Error(`no valid element: ${e}`);return r.children[0]});
},{}],"QJCQ":[function(require,module,exports) {
module.exports="monoid-white.40316429.svg";
},{}],"FRpO":[function(require,module,exports) {
"use strict";var e,t="object"==typeof Reflect?Reflect:null,n=t&&"function"==typeof t.apply?t.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};function r(e){console&&console.warn&&console.warn(e)}e=t&&"function"==typeof t.ownKeys?t.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}module.exports=o,module.exports.once=m,o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function v(e,t,n,i){var o,s,v;if(u(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),v=s[t]),void 0===v)v=s[t]=n,++e._eventsCount;else if("function"==typeof v?v=s[t]=i?[n,v]:[v,n]:i?v.unshift(n):v.push(n),(o=f(e))>0&&v.length>o&&!v.warned){v.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+v.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=v.length,r(l)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function c(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=l.bind(r);return i.listener=n,r.wrapFn=i,i}function a(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?d(i):p(i,i.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function y(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}function d(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}function m(e,t){return new Promise(function(n,r){function i(){void 0!==o&&e.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==t&&(o=function(n){e.removeListener(t,i),r(n)},e.once("error",o)),e.once(t,i)})}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return f(this)},o.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var f=o[e];if(void 0===f)return!1;if("function"==typeof f)n(f,this,t);else{var v=f.length,l=p(f,v);for(r=0;r<v;++r)n(l[r],this,t)}return!0},o.prototype.addListener=function(e,t){return v(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return v(this,e,t,!0)},o.prototype.once=function(e,t){return u(t),this.on(e,c(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,c(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():y(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return a(this,e,!0)},o.prototype.rawListeners=function(e){return a(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},o.prototype.listenerCount=h,o.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]};
},{}],"uhJR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("events");let t=0;function s(){return t++}class n extends e.EventEmitter{constructor(){super(...arguments),this.resolverTable={}}recv(e){const t=e.type;switch(e.type){case"result":this.onResult(e);break;case"event":this.onEvent(e.message);break;default:throw new Error(`Unknown bridge payload type ${t}`)}}onEvent({type:e,payload:t}){this.emit(e,t)}onResult(e){const{id:t,message:s,error:n}=e,o=this.resolverTable[t];if(!o)return void console.error(`Resolver for id=${t} not found.`);delete this.resolverTable[t];const[r,i]=o;if(n)i(new Error(n.message));else{const{type:e,payload:t}=s;r(t)}}async sendMessage(e){const t=s();return window.ReactNativeWebView.postMessage(JSON.stringify({id:t,message:e})),new Promise((e,s)=>{this.resolverTable[t]=[e,s]})}}const o=new n;function r(e){return o.sendMessage(e)}function i(e,t){return o.on(e,t)}function a(e,t){return o.off(e,t)}function c(e=window){if(void 0===e.ReactNativeWebView)throw new Error("ReactNativeWebView is undefined. Did you set onMessage of WebView?")}exports.sendMessage=r,exports.on=i,exports.off=a,Object.assign(window,{LePont:o}),exports.checkEnvironment=c,setTimeout(c,300);
},{"events":"FRpO"}],"VcXU":[function(require,module,exports) {
module.exports=require("../dist/browser");
},{"../dist/browser":"uhJR"}],"n5I3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MAX_WAVE_COUNT=exports.PLATFORM=exports.devicePixelRatio=void 0,exports.devicePixelRatio=window.devicePixelRatio||1,exports.PLATFORM=void 0,exports.MAX_WAVE_COUNT=40;
},{}],"VeE4":[function(require,module,exports) {
"use strict";var e=this&&this.__decorate||function(e,t,o,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,o,a):r(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SplashScreen=void 0;const o=require("capsid"),i=require("emotion"),r=require("./util/async"),s=require("./util/dom"),a=t(require("./img/monoid-white.svg")),n=require("lepont/browser"),l=require("./const");let c=class{async __mount__(){await this.sequence(),this.startMain(),await this.fadeOut()}async fadeOut(){var e;const t=this.el;t.classList.add("hidden"),await r.defer(500),null===(e=t.parentElement)||void 0===e||e.removeChild(t)}async sequence(){return r.defer(100)}async showLogoHtml(e){await r.defer(500),this.el.innerHTML=e,await r.defer(50),this.logo.classList.remove("in"),await r.defer(1e3),this.logo.classList.add("out")}startMain(){}};e([o.wired(".logo")],c.prototype,"logo",void 0),e([o.pub("start-main")],c.prototype,"startMain",null),c=e([o.component("splash-screen"),o.is(i.css`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  &.ready {
    transition-duration: 500ms;
  }

  &.hidden {
    opacity: 0;
  }

  .logo {
    transition-duration: 500ms;
    opacity: 1;
  }
  .logo.is-monoid {
    max-width: 40%;
    filter: drop-shadow(0 0 20px white);
  }
  .logo.is-cascade {
    font-size: 60px;
    font-family: serif;
    font-weight: bold;
  }
  .logo.out {
    transform: translate(0, -10px);
    opacity: 0;
  }
  .logo.in {
    transform: translate(0, 10px);
    opacity: 0;
  }
`)],c),exports.SplashScreen=c;
},{"capsid":"PhMa","emotion":"TAuN","./util/async":"u0i0","./util/dom":"Ag15","./img/monoid-white.svg":"QJCQ","lepont/browser":"VcXU","./const":"n5I3"}],"kHgp":[function(require,module,exports) {
var r=4,n=.001,t=1e-7,u=10,e=11,o=1/(e-1),f="function"==typeof Float32Array;function i(r,n){return 1-3*n+3*r}function a(r,n){return 3*n-6*r}function c(r){return 3*r}function v(r,n,t){return((i(n,t)*r+a(n,t))*r+c(n))*r}function l(r,n,t){return 3*i(n,t)*r*r+2*a(n,t)*r+c(n)}function w(r,n,e,o,f){var i,a,c=0;do{(i=v(a=n+(e-n)/2,o,f)-r)>0?e=a:n=a}while(Math.abs(i)>t&&++c<u);return a}function s(n,t,u,e){for(var o=0;o<r;++o){var f=l(t,u,e);if(0===f)return t;t-=(v(t,u,e)-n)/f}return t}function y(r){return r}module.exports=function(r,t,u,i){if(!(0<=r&&r<=1&&0<=u&&u<=1))throw new Error("bezier x values must be in [0, 1] range");if(r===t&&u===i)return y;for(var a=f?new Float32Array(e):new Array(e),c=0;c<e;++c)a[c]=v(c*o,r,u);return function(f){return 0===f?0:1===f?1:v(function(t){for(var f=0,i=1,c=e-1;i!==c&&a[i]<=t;++i)f+=o;var v=f+(t-a[--i])/(a[i+1]-a[i])*o,y=l(v,r,u);return y>=n?s(t,v,r,u):0===y?v:w(t,f,f+o,r,u)}(f),t,i)}};
},{}],"zK55":[function(require,module,exports) {
"use strict";class e{constructor(e,s){this.step=(()=>{const e=+new Date;this.main();const s=+new Date,t=this.frame-(e-s);this.timer=setTimeout(this.step,t)}),this.main=e,this.frame=1e3/s}run(){return this.resolve?Promise.reject(new Error("The gameloop is already running.")):new Promise((e,s)=>{this.resolve=e,this.step()})}isRunning(){return null!=this.resolve}stop(){this.resolve?(this.resolve(),delete this.resolve,clearTimeout(this.timer)):console.warn("The gameloop isn't running.")}}module.exports=((s,t)=>new e(s,t));
},{}],"saRr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),t=new Uint8Array(16);function o(){if(!e)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(t)}
},{}],"WMtG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;for(var e=[],r=0;r<256;++r)e[r]=(r+256).toString(16).substr(1);function t(r,t){var o=t||0,s=e;return[s[r[o++]],s[r[o++]],s[r[o++]],s[r[o++]],"-",s[r[o++]],s[r[o++]],"-",s[r[o++]],s[r[o++]],"-",s[r[o++]],s[r[o++]],"-",s[r[o++]],s[r[o++]],s[r[o++]],s[r[o++]],s[r[o++]],s[r[o++]]].join("")}var o=t;exports.default=o;
},{}],"ds1e":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e,r,s=u(require("./rng.js")),o=u(require("./bytesToUuid.js"));function u(e){return e&&e.__esModule?e:{default:e}}var t=0,n=0;function a(u,a,d){var l=a&&d||0,i=a||[],c=(u=u||{}).node||e,v=void 0!==u.clockseq?u.clockseq:r;if(null==c||null==v){var f=u.random||(u.rng||s.default)();null==c&&(c=e=[1|f[0],f[1],f[2],f[3],f[4],f[5]]),null==v&&(v=r=16383&(f[6]<<8|f[7]))}var m=void 0!==u.msecs?u.msecs:(new Date).getTime(),q=void 0!==u.nsecs?u.nsecs:n+1,p=m-t+(q-n)/1e4;if(p<0&&void 0===u.clockseq&&(v=v+1&16383),(p<0||m>t)&&void 0===u.nsecs&&(q=0),q>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");t=m,n=q,r=v;var _=(1e4*(268435455&(m+=122192928e5))+q)%4294967296;i[l++]=_>>>24&255,i[l++]=_>>>16&255,i[l++]=_>>>8&255,i[l++]=255&_;var g=m/4294967296*1e4&268435455;i[l++]=g>>>8&255,i[l++]=255&g,i[l++]=g>>>24&15|16,i[l++]=g>>>16&255,i[l++]=v>>>8|128,i[l++]=255&v;for(var j=0;j<6;++j)i[l+j]=c[j];return a||(0,o.default)(i)}var d=a;exports.default=d;
},{"./rng.js":"saRr","./bytesToUuid.js":"WMtG"}],"jljL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u,exports.URL=exports.DNS=void 0;var r=e(require("./bytesToUuid.js"));function e(r){return r&&r.__esModule?r:{default:r}}function t(r){var e=[];return r.replace(/[a-fA-F0-9]{2}/g,function(r){e.push(parseInt(r,16))}),e}function a(r){r=unescape(encodeURIComponent(r));for(var e=new Array(r.length),t=0;t<r.length;t++)e[t]=r.charCodeAt(t);return e}var n="6ba7b810-9dad-11d1-80b4-00c04fd430c8";exports.DNS=n;var o="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function u(e,u,s){var f=function(e,n,o,f){var c=o&&f||0;if("string"==typeof e&&(e=a(e)),"string"==typeof n&&(n=t(n)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(n)||16!==n.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var i=s(n.concat(e));if(i[6]=15&i[6]|u,i[8]=63&i[8]|128,o)for(var d=0;d<16;++d)o[c+d]=i[d];return o||(0,r.default)(i)};try{f.name=e}catch(c){}return f.DNS=n,f.URL=o,f}exports.URL=o;
},{"./bytesToUuid.js":"WMtG"}],"z990":[function(require,module,exports) {
"use strict";function n(n){if("string"==typeof n){var u=unescape(encodeURIComponent(n));n=new Array(u.length);for(var o=0;o<u.length;o++)n[o]=u.charCodeAt(o)}return r(t(e(n),8*n.length))}function r(n){var r,t,e,u=[],o=32*n.length;for(r=0;r<o;r+=8)t=n[r>>5]>>>r%32&255,e=parseInt("0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t),16),u.push(e);return u}function t(n,r){var t,e,o,f,l;n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var v=1732584193,d=-271733879,s=-1732584194,g=271733878;for(t=0;t<n.length;t+=16)e=v,o=d,f=s,l=g,v=a(v,d,s,g,n[t],7,-680876936),g=a(g,v,d,s,n[t+1],12,-389564586),s=a(s,g,v,d,n[t+2],17,606105819),d=a(d,s,g,v,n[t+3],22,-1044525330),v=a(v,d,s,g,n[t+4],7,-176418897),g=a(g,v,d,s,n[t+5],12,1200080426),s=a(s,g,v,d,n[t+6],17,-1473231341),d=a(d,s,g,v,n[t+7],22,-45705983),v=a(v,d,s,g,n[t+8],7,1770035416),g=a(g,v,d,s,n[t+9],12,-1958414417),s=a(s,g,v,d,n[t+10],17,-42063),d=a(d,s,g,v,n[t+11],22,-1990404162),v=a(v,d,s,g,n[t+12],7,1804603682),g=a(g,v,d,s,n[t+13],12,-40341101),s=a(s,g,v,d,n[t+14],17,-1502002290),v=c(v,d=a(d,s,g,v,n[t+15],22,1236535329),s,g,n[t+1],5,-165796510),g=c(g,v,d,s,n[t+6],9,-1069501632),s=c(s,g,v,d,n[t+11],14,643717713),d=c(d,s,g,v,n[t],20,-373897302),v=c(v,d,s,g,n[t+5],5,-701558691),g=c(g,v,d,s,n[t+10],9,38016083),s=c(s,g,v,d,n[t+15],14,-660478335),d=c(d,s,g,v,n[t+4],20,-405537848),v=c(v,d,s,g,n[t+9],5,568446438),g=c(g,v,d,s,n[t+14],9,-1019803690),s=c(s,g,v,d,n[t+3],14,-187363961),d=c(d,s,g,v,n[t+8],20,1163531501),v=c(v,d,s,g,n[t+13],5,-1444681467),g=c(g,v,d,s,n[t+2],9,-51403784),s=c(s,g,v,d,n[t+7],14,1735328473),v=i(v,d=c(d,s,g,v,n[t+12],20,-1926607734),s,g,n[t+5],4,-378558),g=i(g,v,d,s,n[t+8],11,-2022574463),s=i(s,g,v,d,n[t+11],16,1839030562),d=i(d,s,g,v,n[t+14],23,-35309556),v=i(v,d,s,g,n[t+1],4,-1530992060),g=i(g,v,d,s,n[t+4],11,1272893353),s=i(s,g,v,d,n[t+7],16,-155497632),d=i(d,s,g,v,n[t+10],23,-1094730640),v=i(v,d,s,g,n[t+13],4,681279174),g=i(g,v,d,s,n[t],11,-358537222),s=i(s,g,v,d,n[t+3],16,-722521979),d=i(d,s,g,v,n[t+6],23,76029189),v=i(v,d,s,g,n[t+9],4,-640364487),g=i(g,v,d,s,n[t+12],11,-421815835),s=i(s,g,v,d,n[t+15],16,530742520),v=h(v,d=i(d,s,g,v,n[t+2],23,-995338651),s,g,n[t],6,-198630844),g=h(g,v,d,s,n[t+7],10,1126891415),s=h(s,g,v,d,n[t+14],15,-1416354905),d=h(d,s,g,v,n[t+5],21,-57434055),v=h(v,d,s,g,n[t+12],6,1700485571),g=h(g,v,d,s,n[t+3],10,-1894986606),s=h(s,g,v,d,n[t+10],15,-1051523),d=h(d,s,g,v,n[t+1],21,-2054922799),v=h(v,d,s,g,n[t+8],6,1873313359),g=h(g,v,d,s,n[t+15],10,-30611744),s=h(s,g,v,d,n[t+6],15,-1560198380),d=h(d,s,g,v,n[t+13],21,1309151649),v=h(v,d,s,g,n[t+4],6,-145523070),g=h(g,v,d,s,n[t+11],10,-1120210379),s=h(s,g,v,d,n[t+2],15,718787259),d=h(d,s,g,v,n[t+9],21,-343485551),v=u(v,e),d=u(d,o),s=u(s,f),g=u(g,l);return[v,d,s,g]}function e(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var e=8*n.length;for(r=0;r<e;r+=8)t[r>>5]|=(255&n[r/8])<<r%32;return t}function u(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function o(n,r){return n<<r|n>>>32-r}function f(n,r,t,e,f,a){return u(o(u(u(r,n),u(e,a)),f),t)}function a(n,r,t,e,u,o,a){return f(r&t|~r&e,n,r,u,o,a)}function c(n,r,t,e,u,o,a){return f(r&e|t&~e,n,r,u,o,a)}function i(n,r,t,e,u,o,a){return f(r^t^e,n,r,u,o,a)}function h(n,r,t,e,u,o,a){return f(t^(r|~e),n,r,u,o,a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var l=n;exports.default=l;
},{}],"Nc2A":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./v35.js")),r=t(require("./md5.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.default)("v3",48,r.default),d=u;exports.default=d;
},{"./v35.js":"jljL","./md5.js":"z990"}],"HQTZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./rng.js")),r=t(require("./bytesToUuid.js"));function t(e){return e&&e.__esModule?e:{default:e}}function u(t,u,n){var a=u&&n||0;"string"==typeof t&&(u="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||e.default)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,u)for(var l=0;l<16;++l)u[a+l]=o[l];return u||(0,r.default)(o)}var n=u;exports.default=n;
},{"./rng.js":"saRr","./bytesToUuid.js":"WMtG"}],"F2vf":[function(require,module,exports) {
"use strict";function r(r,e,t,n){switch(r){case 0:return e&t^~e&n;case 1:return e^t^n;case 2:return e&t^e&n^t&n;case 3:return e^t^n}}function e(r,e){return r<<e|r>>>32-e}function t(t){var n=[1518500249,1859775393,2400959708,3395469782],a=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var o=unescape(encodeURIComponent(t));t=new Array(o.length);for(var f=0;f<o.length;f++)t[f]=o.charCodeAt(f)}t.push(128);var u=t.length/4+2,c=Math.ceil(u/16),s=new Array(c);for(f=0;f<c;f++){s[f]=new Array(16);for(var h=0;h<16;h++)s[f][h]=t[64*f+4*h]<<24|t[64*f+4*h+1]<<16|t[64*f+4*h+2]<<8|t[64*f+4*h+3]}s[c-1][14]=8*(t.length-1)/Math.pow(2,32),s[c-1][14]=Math.floor(s[c-1][14]),s[c-1][15]=8*(t.length-1)&4294967295;for(f=0;f<c;f++){for(var l=new Array(80),v=0;v<16;v++)l[v]=s[f][v];for(v=16;v<80;v++)l[v]=e(l[v-3]^l[v-8]^l[v-14]^l[v-16],1);var i=a[0],p=a[1],d=a[2],g=a[3],w=a[4];for(v=0;v<80;v++){var y=Math.floor(v/20),A=e(i,5)+r(y,p,d,g)+w+n[y]+l[v]>>>0;w=g,g=d,d=e(p,30)>>>0,p=i,i=A}a[0]=a[0]+i>>>0,a[1]=a[1]+p>>>0,a[2]=a[2]+d>>>0,a[3]=a[3]+g>>>0,a[4]=a[4]+w>>>0}return[a[0]>>24&255,a[0]>>16&255,a[0]>>8&255,255&a[0],a[1]>>24&255,a[1]>>16&255,a[1]>>8&255,255&a[1],a[2]>>24&255,a[2]>>16&255,a[2]>>8&255,255&a[2],a[3]>>24&255,a[3]>>16&255,a[3]>>8&255,255&a[3],a[4]>>24&255,a[4]>>16&255,a[4]>>8&255,255&a[4]]}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=t;exports.default=n;
},{}],"oZbo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./v35.js")),r=t(require("./sha1.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=(0,e.default)("v5",80,r.default),s=u;exports.default=s;
},{"./v35.js":"jljL","./sha1.js":"F2vf"}],"D6fo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"v1",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(exports,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"v4",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"v5",{enumerable:!0,get:function(){return u.default}});var e=n(require("./v1.js")),r=n(require("./v3.js")),t=n(require("./v4.js")),u=n(require("./v5.js"));function n(e){return e&&e.__esModule?e:{default:e}}
},{"./v1.js":"ds1e","./v3.js":"Nc2A","./v4.js":"HQTZ","./v5.js":"oZbo"}],"d2k8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MSG_TYPE_SET_ITEM="@lepont/async-storage:setItem",exports.MSG_TYPE_GET_ITEM="@lepont/async-storage:getItem";
},{}],"WKUK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("lepont/browser"),t=require("./shared");async function s(s,a){await e.sendMessage({type:t.MSG_TYPE_SET_ITEM,payload:{key:s,value:a}})}async function a(s){return await e.sendMessage({type:t.MSG_TYPE_GET_ITEM,payload:{key:s}})}exports.setItem=s,exports.getItem=a;
},{"lepont/browser":"VcXU","./shared":"d2k8"}],"cBRO":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var n={};if(null!=r)for(var i in r)"default"!==i&&Object.hasOwnProperty.call(r,i)&&e(n,r,i);return t(n,r),n};async function n(){return await Promise.resolve().then(()=>r(require("@lepont/async-storage")))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStorage=void 0,exports.getStorage=n;
},{"@lepont/async-storage":"WKUK"}],"PLhr":[function(require,module,exports) {
"use strict";var t=this&&this.__createBinding||(Object.create?function(t,s,e,i){void 0===i&&(i=e),Object.defineProperty(t,i,{enumerable:!0,get:function(){return s[e]}})}:function(t,s,e,i){void 0===i&&(i=e),t[i]=s[e]}),s=this&&this.__setModuleDefault||(Object.create?function(t,s){Object.defineProperty(t,"default",{enumerable:!0,value:s})}:function(t,s){t.default=s}),e=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var i={};if(null!=e)for(var r in e)"default"!==r&&Object.hasOwnProperty.call(e,r)&&t(i,e,r);return s(i,e),i};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArtworkRepository=exports.ArtworkCollection=exports.createArtwork=exports.Artwork=exports.TextLabel=exports.Result=exports.Wave=exports.WaveRect=exports.Motion=exports.Rect=void 0;const i=e(require("uuid")),r=require("../util/storage"),o=require("../const");class n{constructor(t,s,e,i,r){this.x=t,this.y=s,this.width=e,this.height=i,this.color=r}clone(){return new n(this.x,this.y,this.width,this.height,this.color)}left(){return this.x-this.width/2}top(){return this.y-this.height/2}goto(t,s){this.x=t,this.y=s}scale(t=0,s=0){this.width+=t,this.height+=s}}exports.Rect=n;class h{constructor(t,s,e,i){this.frameMax=t,this.easing=s,this.x=e,this.y=i,this.frame=0,this.initX=0,this.initY=0}init(t,s){this.initX=t,this.initY=s}isFinished(){return this.frame>=this.frameMax}step(){this.isFinished()||this.frame++}get(){return{x:this.initX+this.x*this.easing(this.frame/this.frameMax),y:this.initY+this.y*this.easing(this.frame/this.frameMax)}}}exports.Motion=h;class a{constructor(t,s){this.rect=t,this.motion=s,this.initX=t.x,this.initY=t.y}step(){this.motion.step();const{x:t,y:s}=this.motion.get();this.rect.goto(t,s)}isFinished(){return this.motion.isFinished()}}exports.WaveRect=a;class c{constructor(){this.rects=[]}add(...t){this.rects.push(...t)}toArray(){return this.rects.map(t=>t.rect)}eject(){const t=this.toArray();return this.rects.splice(0,this.rects.length),t}step(){const t=[],s=[];return this.rects.forEach(e=>{e.step(),e.isFinished()?t.push(e):s.push(e)}),this.rects=s,t}}exports.Wave=c;class l{constructor(){this.rects=[]}add(...t){this.rects.push(...t)}clear(){this.rects.splice(0,this.rects.length)}}exports.Result=l;const d=['"Avenir Next"',"Arial","Verdana",'"Arial Black"',"AmericanTypewriter-Bold",'"Chalkboard SE"',"Copperplate-Bold","GillSans-UltraBold",'"DIN Condensed"'],u=["Arial","Baskerville","Casual","Courier","Cursive","Fantasy","Helvetica","monospace","sans-serif","sans-serif-black","sans-serif-condensed","sans-serif-condensed-light","sans-serif-light"];class f{constructor(t,s,e,i,r){this.body=t,this.size=e,this.color=i,this.shadowColor=r,this.fonts="android"===o.PLATFORM?u:d,this.sizeInverse=1/e,this.fontFamily=this.fonts[0],this.fonts.includes(s)&&this.rotateUntil(s)}isMaxSize(){return this.sizeInverse-1<=.01}sizeUp(){this.isMaxSize()||(this.sizeInverse-=1,this.size=1/this.sizeInverse)}sizeDown(){this.sizeInverse+=1,this.size=1/this.sizeInverse}rotateFonts(){this.fonts.push(this.fonts.shift()),this.fontFamily=this.fonts[0]}rotateUntil(t){for(const s of Array(this.fonts.length))if(this.rotateFonts(),this.fontFamily===t)break}font(t){return`bold ${t*this.size}px ${this.fontFamily}`}shadowBlur(t){return t*this.size/20}}exports.TextLabel=f;class p{constructor(t,s,e,i,r){this.id=t,this.boxes=s,this.text=e,this.backgroundColor=i,this.createdAt=r}}function x(t,s){return new p(i.v4(),t.rects,s,"white",Date.now())}exports.Artwork=p,p.MAX_ITEMS=70,exports.createArtwork=x;class w{constructor(t){this.artworks=t}upsert(t){const s=this.findIndexById(t.id);-1===s?this.artworks.unshift(t):this.artworks[s]=t}findIndexById(t){return this.artworks.findIndex(s=>s.id===t)}remove(t){this.removeById(t.id)}removeById(t){const s=this.findIndexById(t);if(-1===s)throw new Error(`Work not found: id=${t}`);this.artworks.splice(s,1)}get length(){return this.artworks.length}}exports.ArtworkCollection=w;const y="Cascade/artwork-collection";class g{async get(){const{getItem:t}=await r.getStorage(),s=await t(y)||[];return new w(s.map(g.dtoToArtwork))}async save(t){const s=await this.get();s.upsert(t),await this.saveAll(s)}async saveAll(t){const{setItem:s}=await r.getStorage();await s(y,t.artworks)}async remove(t){const s=await this.get();s.remove(t),await this.saveAll(s)}async isFull(){return(await this.get()).length>=p.MAX_ITEMS}static dtoToArtwork(t){return new p(t.id,t.boxes.map(g.dtoToRect),g.dtoToTextLabel(t.text),t.backgroundColor,t.createdAt)}static dtoToTextLabel(t){return new f(t.body,t.fontFamily,t.size,t.color,t.shadowColor)}static dtoToRect(t){return new n(t.x,t.y,t.width,t.height,t.color)}}exports.ArtworkRepository=g;
},{"uuid":"D6fo","../util/storage":"cBRO","../const":"n5I3"}],"qS7f":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ARTWORK_PERSISTED=exports.IS_FONT_SIZE_MAX=exports.RESET=exports.CHANGE_FONT_COLOR=exports.OPEN_MANUAL_DIALOG=exports.CLOSE_CONFIRM_DIALOG=exports.OPEN_CONFIRM_DIALOG=exports.TOAST=exports.LIST_DIALOG_REFRESH=exports.LIST_MODAL_OPEN=exports.INIT_CANVAS_CONTROLS=void 0,exports.INIT_CANVAS_CONTROLS="init-canvas-controls",exports.LIST_MODAL_OPEN="list-modal-open",exports.LIST_DIALOG_REFRESH="refresh-list-dialog",exports.TOAST="toast",exports.OPEN_CONFIRM_DIALOG="open-confirm-dialog",exports.CLOSE_CONFIRM_DIALOG="close-confirm-dialog",exports.OPEN_MANUAL_DIALOG="open-manual-dialog",exports.CHANGE_FONT_COLOR="change-font-color",exports.RESET="reset",exports.IS_FONT_SIZE_MAX="is-font-size-max",exports.ARTWORK_PERSISTED="artwork-persisted";
},{}],"G1UQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dice=void 0,exports.dice=(e=>Math.random()*e);
},{}],"MJDI":[function(require,module,exports) {
"use strict";function t(t,o,e,r){t.save(),t.font=o.font(r),t.fillStyle=o.color,t.shadowColor=o.shadowColor,t.shadowBlur=o.shadowBlur(r),t.shadowOffsetX=0,t.shadowOffsetY=0,t.textAlign="center",t.fillText(o.body,e/2,r/2+r*o.size/3),t.restore()}function o(t,o,e,r){o.forEach(o=>{t.fillStyle=o.color,t.fillRect(o.left()*e,o.top()*r,o.width*e,o.height*r)})}function e(e,r,l,s){e.fillStyle=r.backgroundColor,e.fillRect(0,0,l,s),o(e,r.boxes,l,s),t(e,r.text,l,s)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawArtwork=exports.drawRects=exports.drawText=void 0,exports.drawText=t,exports.drawRects=o,exports.drawArtwork=e;
},{}],"sqcB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VERY_SOFT_RED=exports.VERY_DARK_GRAY_ALPHA80=exports.VERY_DARK_GRAYISH_BLUE=exports.MOSTLY_BLACK=exports.LIGHT_GRAYISH_CYAN=exports.LIGHT_GRAYISH_LIME_GREEN=exports.LIGHT_GRAYISH_BLUE=exports.GRAYISH_BLUE_ALPHA80=void 0,exports.GRAYISH_BLUE_ALPHA80="hsla(220, 20%, 80%, 0.8)",exports.LIGHT_GRAYISH_BLUE="#ced4de",exports.LIGHT_GRAYISH_LIME_GREEN="#DFF2DC",exports.LIGHT_GRAYISH_CYAN="#DCF2F2",exports.MOSTLY_BLACK="#282828",exports.VERY_DARK_GRAYISH_BLUE="hsla(220, 20%, 30%, 1)",exports.VERY_DARK_GRAY_ALPHA80="#2A2A2A",exports.VERY_SOFT_RED="#DFB0B0";
},{}],"Wleo":[function(require,module,exports) {
"use strict";module.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};
},{}],"jl5Q":[function(require,module,exports) {
module.exports=function(r){return!(!r||"string"==typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))};
},{}],"zufu":[function(require,module,exports) {
"use strict";var r=require("is-arrayish"),t=Array.prototype.concat,e=Array.prototype.slice,a=module.exports=function(a){for(var n=[],o=0,u=a.length;o<u;o++){var c=a[o];r(c)?n=t.call(n,e.call(c)):n.push(c)}return n};a.wrap=function(r){return function(){return r(a(arguments))}};
},{"is-arrayish":"jl5Q"}],"bWbw":[function(require,module,exports) {
var r=require("color-name"),t=require("simple-swizzle"),a={};for(var e in r)r.hasOwnProperty(e)&&(a[r[e]]=e);var n=module.exports={to:{},get:{}};function s(r,t,a){return Math.min(Math.max(t,r),a)}function o(r){var t=r.toString(16).toUpperCase();return t.length<2?"0"+t:t}n.get=function(r){var t,a;switch(r.substring(0,3).toLowerCase()){case"hsl":t=n.get.hsl(r),a="hsl";break;case"hwb":t=n.get.hwb(r),a="hwb";break;default:t=n.get.rgb(r),a="rgb"}return t?{model:a,value:t}:null},n.get.rgb=function(t){if(!t)return null;var a,e,n,o=[0,0,0,1];if(a=t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(n=a[2],a=a[1],e=0;e<3;e++){var u=2*e;o[e]=parseInt(a.slice(u,u+2),16)}n&&(o[3]=Math.round(parseInt(n,16)/255*100)/100)}else if(a=t.match(/^#([a-f0-9]{3,4})$/i)){for(n=(a=a[1])[3],e=0;e<3;e++)o[e]=parseInt(a[e]+a[e],16);n&&(o[3]=Math.round(parseInt(n+n,16)/255*100)/100)}else if(a=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(e=0;e<3;e++)o[e]=parseInt(a[e+1],0);a[4]&&(o[3]=parseFloat(a[4]))}else{if(!(a=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(a=t.match(/(\D+)/))?"transparent"===a[1]?[0,0,0,0]:(o=r[a[1]])?(o[3]=1,o):null:null;for(e=0;e<3;e++)o[e]=Math.round(2.55*parseFloat(a[e+1]));a[4]&&(o[3]=parseFloat(a[4]))}for(e=0;e<3;e++)o[e]=s(o[e],0,255);return o[3]=s(o[3],0,1),o},n.get.hsl=function(r){if(!r)return null;var t=r.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var a=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,s(parseFloat(t[2]),0,100),s(parseFloat(t[3]),0,100),s(isNaN(a)?1:a,0,1)]}return null},n.get.hwb=function(r){if(!r)return null;var t=r.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var a=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,s(parseFloat(t[2]),0,100),s(parseFloat(t[3]),0,100),s(isNaN(a)?1:a,0,1)]}return null},n.to.hex=function(){var r=t(arguments);return"#"+o(r[0])+o(r[1])+o(r[2])+(r[3]<1?o(Math.round(255*r[3])):"")},n.to.rgb=function(){var r=t(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},n.to.rgb.percent=function(){var r=t(arguments),a=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),n=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+a+"%, "+e+"%, "+n+"%)":"rgba("+a+"%, "+e+"%, "+n+"%, "+r[3]+")"},n.to.hsl=function(){var r=t(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},n.to.hwb=function(){var r=t(arguments),a="";return r.length>=4&&1!==r[3]&&(a=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+a+")"},n.to.keyword=function(r){return a[r.slice(0,3)]};
},{"color-name":"Wleo","simple-swizzle":"zufu"}],"v4cc":[function(require,module,exports) {
var r=require("color-name"),n={};for(var a in r)r.hasOwnProperty(a)&&(n[r[a]]=a);var t=module.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var e in t)if(t.hasOwnProperty(e)){if(!("channels"in t[e]))throw new Error("missing channels property: "+e);if(!("labels"in t[e]))throw new Error("missing channel labels property: "+e);if(t[e].labels.length!==t[e].channels)throw new Error("channel and label counts mismatch: "+e);var h=t[e].channels,u=t[e].labels;delete t[e].channels,delete t[e].labels,Object.defineProperty(t[e],"channels",{value:h}),Object.defineProperty(t[e],"labels",{value:u})}function o(r,n){return Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2)+Math.pow(r[2]-n[2],2)}t.rgb.hsl=function(r){var n,a,t=r[0]/255,e=r[1]/255,h=r[2]/255,u=Math.min(t,e,h),o=Math.max(t,e,h),c=o-u;return o===u?n=0:t===o?n=(e-h)/c:e===o?n=2+(h-t)/c:h===o&&(n=4+(t-e)/c),(n=Math.min(60*n,360))<0&&(n+=360),a=(u+o)/2,[n,100*(o===u?0:a<=.5?c/(o+u):c/(2-o-u)),100*a]},t.rgb.hsv=function(r){var n,a,t,e,h,u=r[0]/255,o=r[1]/255,c=r[2]/255,s=Math.max(u,o,c),l=s-Math.min(u,o,c),i=function(r){return(s-r)/6/l+.5};return 0===l?e=h=0:(h=l/s,n=i(u),a=i(o),t=i(c),u===s?e=t-a:o===s?e=1/3+n-t:c===s&&(e=2/3+a-n),e<0?e+=1:e>1&&(e-=1)),[360*e,100*h,100*s]},t.rgb.hwb=function(r){var n=r[0],a=r[1],e=r[2];return[t.rgb.hsl(r)[0],100*(1/255*Math.min(n,Math.min(a,e))),100*(e=1-1/255*Math.max(n,Math.max(a,e)))]},t.rgb.cmyk=function(r){var n,a=r[0]/255,t=r[1]/255,e=r[2]/255;return[100*((1-a-(n=Math.min(1-a,1-t,1-e)))/(1-n)||0),100*((1-t-n)/(1-n)||0),100*((1-e-n)/(1-n)||0),100*n]},t.rgb.keyword=function(a){var t=n[a];if(t)return t;var e,h=1/0;for(var u in r)if(r.hasOwnProperty(u)){var c=o(a,r[u]);c<h&&(h=c,e=u)}return e},t.keyword.rgb=function(n){return r[n]},t.rgb.xyz=function(r){var n=r[0]/255,a=r[1]/255,t=r[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92)+.1805*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)),100*(.2126*n+.7152*a+.0722*t),100*(.0193*n+.1192*a+.9505*t)]},t.rgb.lab=function(r){var n=t.rgb.xyz(r),a=n[0],e=n[1],h=n[2];return e/=100,h/=108.883,a=(a/=95.047)>.008856?Math.pow(a,1/3):7.787*a+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(a-e),200*(e-(h=h>.008856?Math.pow(h,1/3):7.787*h+16/116))]},t.hsl.rgb=function(r){var n,a,t,e,h,u=r[0]/360,o=r[1]/100,c=r[2]/100;if(0===o)return[h=255*c,h,h];n=2*c-(a=c<.5?c*(1+o):c+o-c*o),e=[0,0,0];for(var s=0;s<3;s++)(t=u+1/3*-(s-1))<0&&t++,t>1&&t--,h=6*t<1?n+6*(a-n)*t:2*t<1?a:3*t<2?n+(a-n)*(2/3-t)*6:n,e[s]=255*h;return e},t.hsl.hsv=function(r){var n=r[0],a=r[1]/100,t=r[2]/100,e=a,h=Math.max(t,.01);return a*=(t*=2)<=1?t:2-t,e*=h<=1?h:2-h,[n,100*(0===t?2*e/(h+e):2*a/(t+a)),100*((t+a)/2)]},t.hsv.rgb=function(r){var n=r[0]/60,a=r[1]/100,t=r[2]/100,e=Math.floor(n)%6,h=n-Math.floor(n),u=255*t*(1-a),o=255*t*(1-a*h),c=255*t*(1-a*(1-h));switch(t*=255,e){case 0:return[t,c,u];case 1:return[o,t,u];case 2:return[u,t,c];case 3:return[u,o,t];case 4:return[c,u,t];case 5:return[t,u,o]}},t.hsv.hsl=function(r){var n,a,t,e=r[0],h=r[1]/100,u=r[2]/100,o=Math.max(u,.01);return t=(2-h)*u,a=h*o,[e,100*(a=(a/=(n=(2-h)*o)<=1?n:2-n)||0),100*(t/=2)]},t.hwb.rgb=function(r){var n,a,t,e,h,u,o,c=r[0]/360,s=r[1]/100,l=r[2]/100,i=s+l;switch(i>1&&(s/=i,l/=i),t=6*c-(n=Math.floor(6*c)),0!=(1&n)&&(t=1-t),e=s+t*((a=1-l)-s),n){default:case 6:case 0:h=a,u=e,o=s;break;case 1:h=e,u=a,o=s;break;case 2:h=s,u=a,o=e;break;case 3:h=s,u=e,o=a;break;case 4:h=e,u=s,o=a;break;case 5:h=a,u=s,o=e}return[255*h,255*u,255*o]},t.cmyk.rgb=function(r){var n=r[0]/100,a=r[1]/100,t=r[2]/100,e=r[3]/100;return[255*(1-Math.min(1,n*(1-e)+e)),255*(1-Math.min(1,a*(1-e)+e)),255*(1-Math.min(1,t*(1-e)+e))]},t.xyz.rgb=function(r){var n,a,t,e=r[0]/100,h=r[1]/100,u=r[2]/100;return a=-.9689*e+1.8758*h+.0415*u,t=.0557*e+-.204*h+1.057*u,n=(n=3.2406*e+-1.5372*h+-.4986*u)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,[255*(n=Math.min(Math.max(0,n),1)),255*(a=Math.min(Math.max(0,a),1)),255*(t=Math.min(Math.max(0,t),1))]},t.xyz.lab=function(r){var n=r[0],a=r[1],t=r[2];return a/=100,t/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116)-16,500*(n-a),200*(a-(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116))]},t.lab.xyz=function(r){var n,a,t,e=r[0];n=r[1]/500+(a=(e+16)/116),t=a-r[2]/200;var h=Math.pow(a,3),u=Math.pow(n,3),o=Math.pow(t,3);return a=h>.008856?h:(a-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,[n*=95.047,a*=100,t*=108.883]},t.lab.lch=function(r){var n,a=r[0],t=r[1],e=r[2];return(n=360*Math.atan2(e,t)/2/Math.PI)<0&&(n+=360),[a,Math.sqrt(t*t+e*e),n]},t.lch.lab=function(r){var n,a=r[0],t=r[1];return n=r[2]/360*2*Math.PI,[a,t*Math.cos(n),t*Math.sin(n)]},t.rgb.ansi16=function(r){var n=r[0],a=r[1],e=r[2],h=1 in arguments?arguments[1]:t.rgb.hsv(r)[2];if(0===(h=Math.round(h/50)))return 30;var u=30+(Math.round(e/255)<<2|Math.round(a/255)<<1|Math.round(n/255));return 2===h&&(u+=60),u},t.hsv.ansi16=function(r){return t.rgb.ansi16(t.hsv.rgb(r),r[2])},t.rgb.ansi256=function(r){var n=r[0],a=r[1],t=r[2];return n===a&&a===t?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(a/255*5)+Math.round(t/255*5)},t.ansi16.rgb=function(r){var n=r%10;if(0===n||7===n)return r>50&&(n+=3.5),[n=n/10.5*255,n,n];var a=.5*(1+~~(r>50));return[(1&n)*a*255,(n>>1&1)*a*255,(n>>2&1)*a*255]},t.ansi256.rgb=function(r){if(r>=232){var n=10*(r-232)+8;return[n,n,n]}var a;return r-=16,[Math.floor(r/36)/5*255,Math.floor((a=r%36)/6)/5*255,a%6/5*255]},t.rgb.hex=function(r){var n=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},t.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var a=n[0];3===n[0].length&&(a=a.split("").map(function(r){return r+r}).join(""));var t=parseInt(a,16);return[t>>16&255,t>>8&255,255&t]},t.rgb.hcg=function(r){var n,a=r[0]/255,t=r[1]/255,e=r[2]/255,h=Math.max(Math.max(a,t),e),u=Math.min(Math.min(a,t),e),o=h-u;return n=o<=0?0:h===a?(t-e)/o%6:h===t?2+(e-a)/o:4+(a-t)/o+4,n/=6,[360*(n%=1),100*o,100*(o<1?u/(1-o):0)]},t.hsl.hcg=function(r){var n=r[1]/100,a=r[2]/100,t=1,e=0;return(t=a<.5?2*n*a:2*n*(1-a))<1&&(e=(a-.5*t)/(1-t)),[r[0],100*t,100*e]},t.hsv.hcg=function(r){var n=r[1]/100,a=r[2]/100,t=n*a,e=0;return t<1&&(e=(a-t)/(1-t)),[r[0],100*t,100*e]},t.hcg.rgb=function(r){var n=r[0]/360,a=r[1]/100,t=r[2]/100;if(0===a)return[255*t,255*t,255*t];var e,h=[0,0,0],u=n%1*6,o=u%1,c=1-o;switch(Math.floor(u)){case 0:h[0]=1,h[1]=o,h[2]=0;break;case 1:h[0]=c,h[1]=1,h[2]=0;break;case 2:h[0]=0,h[1]=1,h[2]=o;break;case 3:h[0]=0,h[1]=c,h[2]=1;break;case 4:h[0]=o,h[1]=0,h[2]=1;break;default:h[0]=1,h[1]=0,h[2]=c}return e=(1-a)*t,[255*(a*h[0]+e),255*(a*h[1]+e),255*(a*h[2]+e)]},t.hcg.hsv=function(r){var n=r[1]/100,a=n+r[2]/100*(1-n),t=0;return a>0&&(t=n/a),[r[0],100*t,100*a]},t.hcg.hsl=function(r){var n=r[1]/100,a=r[2]/100*(1-n)+.5*n,t=0;return a>0&&a<.5?t=n/(2*a):a>=.5&&a<1&&(t=n/(2*(1-a))),[r[0],100*t,100*a]},t.hcg.hwb=function(r){var n=r[1]/100,a=n+r[2]/100*(1-n);return[r[0],100*(a-n),100*(1-a)]},t.hwb.hcg=function(r){var n=r[1]/100,a=1-r[2]/100,t=a-n,e=0;return t<1&&(e=(a-t)/(1-t)),[r[0],100*t,100*e]},t.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},t.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},t.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},t.gray.hsl=t.gray.hsv=function(r){return[0,0,r[0]]},t.gray.hwb=function(r){return[0,100,r[0]]},t.gray.cmyk=function(r){return[0,0,0,r[0]]},t.gray.lab=function(r){return[r[0],0,0]},t.gray.hex=function(r){var n=255&Math.round(r[0]/100*255),a=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(a.length)+a},t.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]};
},{"color-name":"Wleo"}],"ZMFB":[function(require,module,exports) {
var n=require("./conversions");function r(){for(var r={},e=Object.keys(n),t=e.length,a=0;a<t;a++)r[e[a]]={distance:-1,parent:null};return r}function e(e){var t=r(),a=[e];for(t[e].distance=0;a.length;)for(var o=a.pop(),u=Object.keys(n[o]),c=u.length,i=0;i<c;i++){var s=u[i],f=t[s];-1===f.distance&&(f.distance=t[o].distance+1,f.parent=o,a.unshift(s))}return t}function t(n,r){return function(e){return r(n(e))}}function a(r,e){for(var a=[e[r].parent,r],o=n[e[r].parent][r],u=e[r].parent;e[u].parent;)a.unshift(e[u].parent),o=t(n[e[u].parent][u],o),u=e[u].parent;return o.conversion=a,o}module.exports=function(n){for(var r=e(n),t={},o=Object.keys(r),u=o.length,c=0;c<u;c++){var i=o[c];null!==r[i].parent&&(t[i]=a(i,r))}return t};
},{"./conversions":"v4cc"}],"rLkC":[function(require,module,exports) {
var e=require("./conversions"),n=require("./route"),r={},o=Object.keys(e);function t(e){var n=function(n){return null==n?n:(arguments.length>1&&(n=Array.prototype.slice.call(arguments)),e(n))};return"conversion"in e&&(n.conversion=e.conversion),n}function c(e){var n=function(n){if(null==n)return n;arguments.length>1&&(n=Array.prototype.slice.call(arguments));var r=e(n);if("object"==typeof r)for(var o=r.length,t=0;t<o;t++)r[t]=Math.round(r[t]);return r};return"conversion"in e&&(n.conversion=e.conversion),n}o.forEach(function(o){r[o]={},Object.defineProperty(r[o],"channels",{value:e[o].channels}),Object.defineProperty(r[o],"labels",{value:e[o].labels});var i=n(o);Object.keys(i).forEach(function(e){var n=i[e];r[o][e]=c(n),r[o][e].raw=t(n)})}),module.exports=r;
},{"./conversions":"v4cc","./route":"ZMFB"}],"oOZe":[function(require,module,exports) {
"use strict";var r=require("color-string"),t=require("color-convert"),o=[].slice,n=["keyword","gray","hex"],e={};Object.keys(t).forEach(function(r){e[o.call(t[r].labels).sort().join("")]=r});var i={};function a(h,l){if(!(this instanceof a))return new a(h,l);if(l&&l in n&&(l=null),l&&!(l in t))throw new Error("Unknown model: "+l);var s,c;if(null==h)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(h instanceof a)this.model=h.model,this.color=h.color.slice(),this.valpha=h.valpha;else if("string"==typeof h){var u=r.get(h);if(null===u)throw new Error("Unable to parse color from string: "+h);this.model=u.model,c=t[this.model].channels,this.color=u.value.slice(0,c),this.valpha="number"==typeof u.value[c]?u.value[c]:1}else if(h.length){this.model=l||"rgb",c=t[this.model].channels;var v=o.call(h,0,c);this.color=f(v,c),this.valpha="number"==typeof h[c]?h[c]:1}else if("number"==typeof h)h&=16777215,this.model="rgb",this.color=[h>>16&255,h>>8&255,255&h],this.valpha=1;else{this.valpha=1;var p=Object.keys(h);"alpha"in h&&(p.splice(p.indexOf("alpha"),1),this.valpha="number"==typeof h.alpha?h.alpha:0);var b=p.sort().join("");if(!(b in e))throw new Error("Unable to parse color from object: "+JSON.stringify(h));this.model=e[b];var m=t[this.model].labels,g=[];for(s=0;s<m.length;s++)g.push(h[m[s]]);this.color=f(g)}if(i[this.model])for(c=t[this.model].channels,s=0;s<c;s++){var d=i[this.model][s];d&&(this.color[s]=d(this.color[s]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function h(r,t){return Number(r.toFixed(t))}function l(r){return function(t){return h(t,r)}}function s(r,t,o){return(r=Array.isArray(r)?r:[r]).forEach(function(r){(i[r]||(i[r]=[]))[t]=o}),r=r[0],function(n){var e;return arguments.length?(o&&(n=o(n)),(e=this[r]()).color[t]=n,e):(e=this[r]().color[t],o&&(e=o(e)),e)}}function c(r){return function(t){return Math.max(0,Math.min(r,t))}}function u(r){return Array.isArray(r)?r:[r]}function f(r,t){for(var o=0;o<t;o++)"number"!=typeof r[o]&&(r[o]=0);return r}a.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(t){var o=this.model in r.to?this:this.rgb(),n=1===(o=o.round("number"==typeof t?t:1)).valpha?o.color:o.color.concat(this.valpha);return r.to[o.model](n)},percentString:function(t){var o=this.rgb().round("number"==typeof t?t:1),n=1===o.valpha?o.color:o.color.concat(this.valpha);return r.to.rgb.percent(n)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},o=t[this.model].channels,n=t[this.model].labels,e=0;e<o;e++)r[n[e]]=this.color[e];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new a(this.color.map(l(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new a(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:s("rgb",0,c(255)),green:s("rgb",1,c(255)),blue:s("rgb",2,c(255)),hue:s(["hsl","hsv","hsl","hwb","hcg"],0,function(r){return(r%360+360)%360}),saturationl:s("hsl",1,c(100)),lightness:s("hsl",2,c(100)),saturationv:s("hsv",1,c(100)),value:s("hsv",2,c(100)),chroma:s("hcg",1,c(100)),gray:s("hcg",2,c(100)),white:s("hwb",1,c(100)),wblack:s("hwb",2,c(100)),cyan:s("cmyk",0,c(100)),magenta:s("cmyk",1,c(100)),yellow:s("cmyk",2,c(100)),black:s("cmyk",3,c(100)),x:s("xyz",0,c(100)),y:s("xyz",1,c(100)),z:s("xyz",2,c(100)),l:s("lab",0,c(100)),a:s("lab",1),b:s("lab",2),keyword:function(r){return arguments.length?new a(r):t[this.model].keyword(this.color)},hex:function(t){return arguments.length?new a(t):r.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,t=[],o=0;o<r.length;o++){var n=r[o]/255;t[o]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var t=this.luminosity(),o=r.luminosity();return t>o?(t+.05)/(o+.05):(o+.05)/(t+.05)},level:function(r){var t=this.contrast(r);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten:function(r){var t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken:function(r){var t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate:function(r){var t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate:function(r){var t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten:function(r){var t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken:function(r){var t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale:function(){var r=this.rgb().color,t=.3*r[0]+.59*r[1]+.11*r[2];return a.rgb(t,t,t)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var t=this.hsl(),o=t.color[0];return o=(o=(o+r)%360)<0?360+o:o,t.color[0]=o,t},mix:function(r,t){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var o=r.rgb(),n=this.rgb(),e=void 0===t?.5:t,i=2*e-1,h=o.alpha()-n.alpha(),l=((i*h==-1?i:(i+h)/(1+i*h))+1)/2,s=1-l;return a.rgb(l*o.red()+s*n.red(),l*o.green()+s*n.green(),l*o.blue()+s*n.blue(),o.alpha()*e+n.alpha()*(1-e))}},Object.keys(t).forEach(function(r){if(-1===n.indexOf(r)){var e=t[r].channels;a.prototype[r]=function(){if(this.model===r)return new a(this);if(arguments.length)return new a(arguments,r);var o="number"==typeof arguments[e]?e:this.valpha;return new a(u(t[this.model][r].raw(this.color)).concat(o),r)},a[r]=function(t){return"number"==typeof t&&(t=f(o.call(arguments),e)),new a(t,r)}}}),module.exports=a;
},{"color-string":"bWbw","color-convert":"rLkC"}],"zONe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const o=require("emotion"),r=require("./const/color");exports.default=o.css`
  height: 40px;
  background-color: #fcfcfc;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${r.GRAYISH_BLUE_ALPHA80};
  border-style: solid;
  padding-left: 12px;
  padding-right: 12px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.01) inset;
  font-weight: 900;
  color: ${r.VERY_DARK_GRAYISH_BLUE};
  outline: none;

  &:active {
    opacity: 0.65;
  }

  &.is-danger {
    border-width: 0;
    background-color: ${r.VERY_SOFT_RED};
    color: ${r.VERY_DARK_GRAY_ALPHA80};
  }

  &.is-success {
    border-width: 0;
    background-color: ${r.LIGHT_GRAYISH_LIME_GREEN};
    color: ${r.VERY_DARK_GRAY_ALPHA80};
  }

  &.is-info {
    border-width: 0;
    background-color: ${r.LIGHT_GRAYISH_CYAN};
    color: ${r.VERY_DARK_GRAY_ALPHA80};
  }

  svg {
    height: 21px;
    width: 21px;
  }
`;
},{"emotion":"TAuN","./const/color":"sqcB"}],"u9CS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.KEY_TEXT_FONT_SIZE=exports.KEY_TEXT_FONT=exports.KEY_TEXT=void 0,exports.KEY_TEXT="tententen-current-text",exports.KEY_TEXT_FONT="tententen-current-text-font",exports.KEY_TEXT_FONT_SIZE="tententen-current-text-font-size";
},{}],"pWO5":[function(require,module,exports) {
"use strict";var t=this&&this.__createBinding||(Object.create?function(t,e,o,n){void 0===n&&(n=o),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[o]}})}:function(t,e,o,n){void 0===n&&(n=o),t[n]=e[o]}),e=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__decorate||function(t,e,o,n){var i,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,o,r):i(e,o))||r);return s>3&&r&&Object.defineProperty(e,o,r),r},n=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var n={};if(null!=o)for(var i in o)"default"!==i&&Object.hasOwnProperty.call(o,i)&&t(n,o,i);return e(n,o),n},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MainFooterControls=exports.MainMiddleControls=exports.MainHeaderControls=exports.MainCanvas=exports.WaveCounter=exports.Main=void 0;const s=require("emotion"),r=i(require("bezier-easing")),a=i(require("gameloopjs")),l=require("./const"),c=require("./domain/models"),u=n(require("./const/event")),p=require("./util/random"),h=require("capsid"),d=require("./adapters/canvas"),_=require("./const/color"),b=require("./util/async"),w=i(require("color")),x=i(require("./button")),m=require("./const/ls-key"),g="tententen-main-decrement-wave-count";let v=class{start(){const t=this.el;t.classList.remove("hidden"),t.innerHTML='\n      <div class="main__header-controls"></div>\n      <div class="main__canvas-wrapper">\n        <canvas class="main__canvas" width="1" height="1"></canvas>\n        <div class="main__wave-counter"></div>\n      </div>\n      <div class="main__middle-controls"></div>\n      <div class="main__footer-controls"></div>\n    ',h.prep()}};o([h.on("start-main"),h.pub(u.INIT_CANVAS_CONTROLS)],v.prototype,"start",null),v=o([h.component("main-screen"),h.sub("start-main"),h.is(s.css`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  .main__canvas-wrapper {
    flex-grow: 1;
    width: 100%;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${_.GRAYISH_BLUE_ALPHA80};

    canvas {
      background-color: white;
    }
  }
`)],v),exports.Main=v;let f=class{constructor(){this.remaining=l.MAX_WAVE_COUNT}__mount__(){this.remaining=l.MAX_WAVE_COUNT,this.setRemaining()}setRemaining(){this.counter.innerHTML=`remaining ${this.remaining}`}decrement(){this.remaining--,this.setRemaining()}};o([h.wired(".main__wave-counter__counter")],f.prototype,"counter",void 0),o([h.on(u.RESET)],f.prototype,"__mount__",null),o([h.on(g)],f.prototype,"decrement",null),f=o([h.component("main__wave-counter"),h.sub(g,u.RESET),h.innerHTML('<span class="main__wave-counter__counter"></span>'),h.is(s.css("\n  position: absolute;\n  right: 5;\n  top: 5;\n  height: auto;\n  width: auto;\n  text-align: right;\n  text-shadow: 0 0 2px white;\n"))],f),exports.WaveCounter=f;let y=class{constructor(){this.width=0,this.height=0,this.easing0=r.default(.42,0,.58,1),this.textColors=[],this.colors=[],this.remaining=l.MAX_WAVE_COUNT,this.main=(()=>{const t=this.wave.step();t&&this.result.add(...t.map(t=>t.rect));const e=this.ctx,{width:o,height:n}=this.el;e.clearRect(0,0,o,n),d.drawRects(e,this.result.rects,o,n),d.drawRects(e,this.wave.toArray(),o,n),d.drawText(e,this.text,o,n)});const t=localStorage[m.KEY_TEXT_FONT_SIZE];this.wave=new c.Wave,this.result=new c.Result,this.text=new c.TextLabel("",localStorage[m.KEY_TEXT_FONT],t?+t:1/6,"#fff","#fff"),this.resetColors(),this.loop=a.default(this.main,60)}resetColors(){const t=this.baseColors();this.colors=[...t],this.textColors=t.map(t=>t.alpha(1)),this.text.color=this.colors[0].alpha(1).toString(),this.text.shadowColor=this.colors[1].alpha(1).toString()}randomColor(){return w.default().hue(p.dice(360)).saturationl(p.dice(100)).lightness(p.dice(100)).alpha(.35)}baseColors(){return[this.randomColor(),this.randomColor(),this.randomColor(),this.randomColor()]}async __mount__(){const t=this.el,e=t.parentElement;this.ctx=t.getContext("2d"),await b.defer(0);const o=Math.min(e.clientWidth,e.clientHeight);t.width=this.width=o*l.devicePixelRatio,t.height=this.height=o*l.devicePixelRatio,t.style.width=`${o}px`,t.style.height=`${o}px`,this.loop.run()}rotateColors(){this.colors.push(this.colors.shift())}rotateTextColors(){this.textColors.push(this.textColors.shift()),this.text.color=this.textColors[0].string(),this.text.shadowColor=this.textColors[1].string()}newWave(t){if(this.remaining<=0)return;this.decrementRemaining(),this.rotateColors();const e=(t.clientY-this.el.offsetTop)*l.devicePixelRatio,o=(t.clientX-this.el.offsetLeft)*l.devicePixelRatio/this.width,n=(this.height-e)/this.height,i=1/3*p.dice(1)+1/6,s=i/2,r=o,a=o,u=n,h=this.colors[0].alpha(u).toString(),d=this.colors[1].alpha(u).toString(),_=this.colors[2].alpha(u).toString(),b=this.colors[3].alpha(u).toString(),w=new c.Rect(0-s,a,i,i,h),x=new c.Rect(1-r,-s,i,i,d),m=new c.Rect(1+s,1-a,i,i,_),g=new c.Rect(r,1+s,i,i,b),v=new c.Motion(60,this.easing0,i,0),f=new c.Motion(60,this.easing0,0,i),y=new c.Motion(60,this.easing0,-i,0),A=new c.Motion(60,this.easing0,0,-i);v.init(w.x,w.y),f.init(x.x,x.y),y.init(m.x,m.y),A.init(g.x,g.y),this.wave.add(new c.WaveRect(w,v)),this.wave.add(new c.WaveRect(x,f)),this.wave.add(new c.WaveRect(m,y)),this.wave.add(new c.WaveRect(g,A))}decrementRemaining(){this.remaining--}onText({detail:t}){this.text.body=t}font(){this.text.rotateFonts(),localStorage[m.KEY_TEXT_FONT]=this.text.fontFamily}up(){return this.text.sizeUp(),localStorage[m.KEY_TEXT_FONT_SIZE]=this.text.size,this.text.isMaxSize()}down(){return this.text.sizeDown(),localStorage[m.KEY_TEXT_FONT_SIZE]=this.text.size,this.text.isMaxSize()}a(){this.rotateTextColors()}async b(){this.remaining=l.MAX_WAVE_COUNT,this.wave.eject(),this.result.clear(),this.resetColors()}async save(){await(new c.ArtworkRepository).isFull()?this.toast({message:"Maximum number (70) of items are saved. You need to delete some artworks to save new one.",variant:"danger"}):this.saveSucess()}async saveSucess(){const t=c.createArtwork(this.result,this.text);return await(new c.ArtworkRepository).save(t),this.toast({message:"Successfully saved the image!",variant:"success"}),t}toast(t){return t}};o([h.on("mouseup")],y.prototype,"newWave",null),o([h.pub(g)],y.prototype,"decrementRemaining",null),o([h.on("text")],y.prototype,"onText",null),o([h.on("font")],y.prototype,"font",null),o([h.on("up"),h.pub(u.IS_FONT_SIZE_MAX)],y.prototype,"up",null),o([h.on("down"),h.pub(u.IS_FONT_SIZE_MAX)],y.prototype,"down",null),o([h.on(u.CHANGE_FONT_COLOR)],y.prototype,"a",null),o([h.on(u.RESET)],y.prototype,"b",null),o([h.on("save")],y.prototype,"save",null),o([h.pub("open-edit-modal"),h.pub(u.ARTWORK_PERSISTED)],y.prototype,"saveSucess",null),o([h.pub(u.TOAST)],y.prototype,"toast",null),y=o([h.component("main__canvas"),h.sub(u.CHANGE_FONT_COLOR,u.RESET,"down","up","font","text","save","list")],y),exports.MainCanvas=y;let A=class{init(){this.textInput.value=localStorage[m.KEY_TEXT]||"Tap here",this.text()}isFontSizeMax({detail:t}){this.upBtn.disabled=!!t}text(){return localStorage[m.KEY_TEXT]=this.textInput.value}down(){}up(){}};o([h.wired(".text-input")],A.prototype,"textInput",void 0),o([h.wired(".up-btn")],A.prototype,"upBtn",void 0),o([h.on(u.INIT_CANVAS_CONTROLS)],A.prototype,"init",null),o([h.on(u.IS_FONT_SIZE_MAX)],A.prototype,"isFontSizeMax",null),o([h.on("input",{at:".text-input"}),h.pub("text")],A.prototype,"text",null),o([h.on.click.at(".down-btn"),h.pub("down")],A.prototype,"down",null),o([h.on.click.at(".up-btn"),h.pub("up")],A.prototype,"up",null),A=o([h.component("main__header-controls"),h.sub(u.INIT_CANVAS_CONTROLS,u.IS_FONT_SIZE_MAX),h.is(s.css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 62px;
  flex-shrink: 0;

  border-bottom-width: 1px;
  border-bottom-color: ${_.GRAYISH_BLUE_ALPHA80};
  border-bottom-style: solid;

  input {
    text-align: center;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${_.GRAYISH_BLUE_ALPHA80};
    color: ${_.VERY_DARK_GRAYISH_BLUE};
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    opacity: 50%;
    cursor: default;
  }
`),h.innerHTML(`\n  <button class="${x.default} down-btn">\n    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />\n    </svg>\n  </button>\n  <input class="text-input" />\n  <button class="${x.default} up-btn">\n    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />\n    </svg>\n  </button>\n`)],A),exports.MainHeaderControls=A;let T=class{changeFontColor(){}reset(){}font(){}};o([h.on.click.at(".change-font-color-btn"),h.pub(u.CHANGE_FONT_COLOR)],T.prototype,"changeFontColor",null),o([h.on.click.at(".reset-btn"),h.pub(u.RESET)],T.prototype,"reset",null),o([h.on.click.at(".font-btn"),h.pub("font")],T.prototype,"font",null),T=o([h.component("main__middle-controls"),h.sub(u.INIT_CANVAS_CONTROLS),h.is(s.css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  height: 82px;
  width: 100%;
  flex-shrink: 0;

  border-top-width: 1px;
  border-top-color: ${_.GRAYISH_BLUE_ALPHA80};
  border-top-style: solid;
`),h.innerHTML(`\n  <button class="${x.default} font-btn">♻ FONT</button>\n  <button class="${x.default} change-font-color-btn">♻ COLOR</button>\n  <button class="${x.default} reset-btn">♻ RESET</button>\n`)],T),exports.MainMiddleControls=T;let S=class{__mount__(){this.update()}async update(){const t=await(new c.ArtworkRepository).get(),e=t.length>=c.Artwork.MAX_ITEMS;this.saveBtn.classList.toggle("disabled",e),this.saveBtn.disabled=e,this.itemCounter.textContent=`${t.length}/${c.Artwork.MAX_ITEMS}`}save(){}openManulDialog(){}list(){}};o([h.wired(".save-btn")],S.prototype,"saveBtn",void 0),o([h.wired(".item-counter")],S.prototype,"itemCounter",void 0),o([h.on(u.ARTWORK_PERSISTED)],S.prototype,"update",null),o([h.on.click.at(".save-btn"),h.pub("save")],S.prototype,"save",null),o([h.on.click.at(".help-btn"),h.pub(u.OPEN_MANUAL_DIALOG)],S.prototype,"openManulDialog",null),o([h.on.click.at(".list-btn"),h.pub(u.LIST_MODAL_OPEN)],S.prototype,"list",null),S=o([h.component("main__footer-controls"),h.innerHTML('\n  <button class="list-btn">LIST</button>\n  <button class="help-btn">(?)</button>\n  <button class="save-btn">\n    <span class="save-label">SAVE</span>\n    <br>\n    <span class="item-counter"></span>\n  </button>\n'),h.is(s.css`
  height: 52px;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  border-top-width: 0.5px;
  border-top-color: ${_.GRAYISH_BLUE_ALPHA80};
  border-top-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${_.GRAYISH_BLUE_ALPHA80};
  border-bottom-style: solid;

  button {
    width: 100px;
    height: 52px;
    border-width: 0;
    font-weight: bold;
    color: ${_.VERY_DARK_GRAYISH_BLUE};
    background-color: transparent;
    cursor: pointer;
  }

  .list-btn {
    border-right-width: 0.5px;
    border-right-color: ${_.GRAYISH_BLUE_ALPHA80};
    border-right-style: solid;
  }

  .save-btn {
    border-left-width: 0.5px;
    border-left-color: ${_.GRAYISH_BLUE_ALPHA80};
    border-left-style: solid;

    .item-counter {
      font-size: 12px;
    }

    &.disabled {
      background-color: ${_.GRAYISH_BLUE_ALPHA80};
      cursor: not-allowed;

      .save-label {
        text-decoration: line-through;
      }
    }
  }
`),h.sub(u.INIT_CANVAS_CONTROLS,u.ARTWORK_PERSISTED)],S),exports.MainFooterControls=S;
},{"emotion":"TAuN","bezier-easing":"kHgp","gameloopjs":"zK55","./const":"n5I3","./domain/models":"PLhr","./const/event":"qS7f","./util/random":"G1UQ","capsid":"PhMa","./adapters/canvas":"MJDI","./const/color":"sqcB","./util/async":"u0i0","color":"oOZe","./button":"zONe","./const/ls-key":"u9CS"}],"JH4Y":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,o,r){void 0===r&&(r=o),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,r){void 0===r&&(r=o),e[r]=t[o]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__decorate||function(e,t,o,r){var s,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(i<3?s(n):i>3?s(t,o,n):s(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n},r=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var r={};if(null!=o)for(var s in o)"default"!==s&&Object.hasOwnProperty.call(o,s)&&e(r,o,s);return t(r,o),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Toast=exports.ToastProvider=void 0;const s=require("capsid"),i=require("emotion"),n=require("./const/color"),a=r(require("./const/event")),c=require("./util/async");let l=class{onToast(e){this.removeChildren();const t=document.createElement("div");t.classList.add("toast"),t.textContent=e.detail.message,"success"===e.detail.variant?t.classList.add("is-success"):"danger"===e.detail.variant&&t.classList.add("is-danger"),this.el.appendChild(t),s.prep("toast",this.el)}removeChildren(){this.el.querySelectorAll(".toast").forEach(e=>{e.click()})}};o([s.on(a.TOAST)],l.prototype,"onToast",null),l=o([s.component("toast-provider"),s.sub(a.TOAST),s.is(i.css`
  pointer-events: none;
`)],l),exports.ToastProvider=l;let d=class{async __mount__(){await c.defer(100),this.el.classList.add("show"),await c.defer(5e3),await this.remove()}async remove(){var e,t,o;null===(e=this.el)||void 0===e||e.classList.remove("show"),await c.defer(600),null===(o=null===(t=this.el)||void 0===t?void 0:t.parentElement)||void 0===o||o.removeChild(this.el)}};o([s.on.click],d.prototype,"remove",null),d=o([s.component("toast"),s.is(i.css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  bottom: 134px; /* 52 + 82 */
  height: 52px;
  opacity: 0;
  transition-property: opacity transform;
  transition-duration: 500ms;
  text-align: center;
  background-color: ${n.MOSTLY_BLACK};
  color: rgba(0, 0, 0, 0.7);
  padding: 8px;
  pointer-events: auto;
  transform: translateY(10px);

  &.show {
    opacity: 0.9;
    transform: translateY(0);
  }

  &.is-success {
    background-color: ${n.LIGHT_GRAYISH_LIME_GREEN};
  }

  &.is-danger {
    background-color: ${n.VERY_SOFT_RED}
  }
`)],d),exports.Toast=d;
},{"capsid":"PhMa","emotion":"TAuN","./const/color":"sqcB","./const/event":"qS7f","./util/async":"u0i0"}],"SIKs":[function(require,module,exports) {
module.exports="mono.e281a2cf.svg";
},{}],"rkH8":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[i]}})}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__decorate||function(e,t,i,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(n<3?r(s):n>3?r(t,i,s):r(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s},o=this&&this.__importStar||function(i){if(i&&i.__esModule)return i;var o={};if(null!=i)for(var r in i)"default"!==r&&Object.hasOwnProperty.call(i,r)&&e(o,i,r);return t(o,i),o},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ListItem=exports.ListModal=void 0;const n=require("capsid"),s=require("emotion"),a=require("../domain/models"),l=require("../adapters/canvas"),d=require("../const/color"),c=o(require("../const/event")),p=r(require("../img/mono.svg")),h=4;let u=class{async artworkSave({detail:e}){await(new a.ArtworkRepository).save(e),this.open()}async open(){await this.refresh(),this.el.classList.add("show")}close(){this.el.classList.remove("show")}async refresh(){this.listArea.innerHTML="";const e=await(new a.ArtworkRepository).get();let t=3;if(window.innerHeight<window.innerWidth){const e=window.innerHeight/3;t=Math.ceil(window.innerWidth/e)}const i=(window.innerWidth-4*(t-1))/t;0===e.length&&(this.listArea.innerHTML=`\n        <div class="no-items">\n          <img class="mono" src="${p.default}" />\n          <p>No items. Let's create one in the <span class="close-button" href="">main canvas</span>!</p>\n        </div>\n      `),this.headerTitle.innerHTML=`Artworks (${e.length}/${a.Artwork.MAX_ITEMS})`,e.artworks.map(e=>[e,this.el.querySelector(`[dataset-key="${e.id}"]`)||document.createElement("div")]).forEach(([e,t])=>{n.make("list-item",t).update(e,i),this.listArea.appendChild(t)})}};i([n.wired(".list-dialog__header__title")],u.prototype,"headerTitle",void 0),i([n.wired(".list-dialog__list-area")],u.prototype,"listArea",void 0),i([n.on("artwork-save")],u.prototype,"artworkSave",null),i([n.on(c.LIST_MODAL_OPEN)],u.prototype,"open",null),i([n.on.click,n.on.click.at(".close-button")],u.prototype,"close",null),i([n.on(c.LIST_DIALOG_REFRESH)],u.prototype,"refresh",null),u=i([n.component("list-dialog"),n.sub("artwork-save",c.LIST_MODAL_OPEN,c.LIST_DIALOG_REFRESH),n.innerHTML('\n  <header class="list-dialog__header">\n    <svg class="done-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">\n      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />\n    </svg>\n    <span class="list-dialog__header__title"></span>\n    <span style="width: 21px; mrgin-right: 12px;">&nbsp;</span>\n  </header>\n  <main class="list-dialog__list-area"></main>\n'),n.is(s.css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  overflow: scroll;

  .list-dialog__header {
    flex-shrink: 0;
    border-style: solid;
    border-width: 0 0 1px;
    border-bottom-color: ${d.GRAYISH_BLUE_ALPHA80};
    height: 62px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    svg {
      margin-left: 12px;
      width: 21px;
      height: 21px;
      cursor: pointer;
    }

    .list-dialog__header__title {
      font-weight: bold;
    }
  }

  .list-dialog__list-area {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: ${4}px;
    overflow-y: scroll;

    padding-top: ${4}px;

    .no-items {
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 300px;

      img {
        width: 57px;
      }

      p {
        color: #888;

        .close-button {
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`)],u),exports.ListModal=u;let w=class{update(e,t){this.el.dataset.key=e.id,this.artwork=e,this.el.style.width=`${t}px`,this.el.style.height=`${t}px`,this.canvas.width=t,this.canvas.height=t,this.draw()}draw(){l.drawArtwork(this.canvas.getContext("2d"),this.artwork,this.canvas.width,this.canvas.height)}onClick(e){return e.stopPropagation(),this.artwork}};i([n.wired("canvas")],w.prototype,"canvas",void 0),i([n.on.click,n.pub("open-edit-modal")],w.prototype,"onClick",null),w=i([n.component("list-item"),n.innerHTML("<canvas></canvas>")],w),exports.ListItem=w;
},{"capsid":"PhMa","emotion":"TAuN","../domain/models":"PLhr","../adapters/canvas":"MJDI","../const/color":"sqcB","../const/event":"qS7f","../img/mono.svg":"SIKs"}],"TwHk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RESULTS=exports.PERMISSIONS=exports.TYPE_REQUEST_MULTIPLE=exports.TYPE_CHECK=exports.TYPE_REQUEST=void 0,exports.TYPE_REQUEST="@lepont/permissions-android:request",exports.TYPE_CHECK="@lepont/permissions-android:check",exports.TYPE_REQUEST_MULTIPLE="@lepont/permissions-android:requestMultiple",exports.PERMISSIONS={READ_CALENDAR:"android.permission.READ_CALENDAR",WRITE_CALENDAR:"android.permission.WRITE_CALENDAR",CAMERA:"android.permission.CAMERA",READ_CONTACTS:"android.permission.READ_CONTACTS",WRITE_CONTACTS:"android.permission.WRITE_CONTACTS",GET_ACCOUNTS:"android.permission.GET_ACCOUNTS",ACCESS_FINE_LOCATION:"android.permission.ACCESS_FINE_LOCATION",ACCESS_COARSE_LOCATION:"android.permission.ACCESS_COARSE_LOCATION",ACCESS_BACKGROUND_LOCATION:"android.permission.ACCESS_BACKGROUND_LOCATION",RECORD_AUDIO:"android.permission.RECORD_AUDIO",READ_PHONE_STATE:"android.permission.READ_PHONE_STATE",CALL_PHONE:"android.permission.CALL_PHONE",READ_CALL_LOG:"android.permission.READ_CALL_LOG",WRITE_CALL_LOG:"android.permission.WRITE_CALL_LOG",ADD_VOICEMAIL:"com.android.voicemail.permission.ADD_VOICEMAIL",USE_SIP:"android.permission.USE_SIP",PROCESS_OUTGOING_CALLS:"android.permission.PROCESS_OUTGOING_CALLS",BODY_SENSORS:"android.permission.BODY_SENSORS",SEND_SMS:"android.permission.SEND_SMS",RECEIVE_SMS:"android.permission.RECEIVE_SMS",READ_SMS:"android.permission.READ_SMS",RECEIVE_WAP_PUSH:"android.permission.RECEIVE_WAP_PUSH",RECEIVE_MMS:"android.permission.RECEIVE_MMS",READ_EXTERNAL_STORAGE:"android.permission.READ_EXTERNAL_STORAGE",WRITE_EXTERNAL_STORAGE:"android.permission.WRITE_EXTERNAL_STORAGE"},exports.RESULTS={GRANTED:"granted",DENIED:"denied",NEVER_ASK_AGAIN:"never_ask_again"};
},{}],"i4kg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PermissionsAndroid=void 0;const e=require("lepont/browser"),s=require("./shared"),r=(r,o)=>e.sendMessage({type:s.TYPE_REQUEST,payload:{permission:r,rationale:o}}),o=async r=>e.sendMessage({type:s.TYPE_CHECK,payload:{permission:r}}),i=async r=>e.sendMessage({type:s.TYPE_REQUEST_MULTIPLE,payload:{permissions:r}});exports.PermissionsAndroid={PERMISSIONS:s.PERMISSIONS,RESULTS:s.RESULTS,request:r,check:o,requestMultiple:i};
},{"lepont/browser":"VcXU","./shared":"TwHk"}],"Lg4V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MSG_TYPE_SHARE="@lepont/share/share";
},{}],"Qzr9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("./shared"),r=require("lepont/browser");async function s(s){await r.sendMessage({type:e.MSG_TYPE_SHARE,payload:s})}exports.share=s;
},{"./shared":"Lg4V","lepont/browser":"VcXU"}],"Efu2":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,o,i){void 0===i&&(i=o),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,i){void 0===i&&(i=o),e[i]=t[o]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__decorate||function(e,t,o,i){var n,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(s<3?n(a):s>3?n(t,o,a):n(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a},i=this&&this.__importStar||function(o){if(o&&o.__esModule)return o;var i={};if(null!=o)for(var n in o)"default"!==n&&Object.hasOwnProperty.call(o,n)&&e(i,o,n);return t(i,o),i},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.EditModal=void 0;const s=require("capsid"),a=require("emotion"),r=require("../domain/models"),d=require("../adapters/canvas"),l=require("lepont/browser"),c=require("@lepont/permissions-android"),u=require("@lepont/share"),p=n(require("../button")),h=require("../const"),f=require("../const/color"),g=i(require("../const/event"));let b=class{open({detail:e}){const t=document.body.offsetWidth,o=this.main.offsetHeight,i=.9*Math.min(t,o),n=i*window.devicePixelRatio,s=this.canvas;s.width=n,s.height=n,s.style.width=`${i}px`,s.style.height=`${i}px`;const a=s.getContext("2d");this.artwork=e,d.drawArtwork(a,e,n,n),this.el.classList.add("show")}hide(){this.el.classList.remove("show")}delete(){return{message:"Are you sure to delete this image?",confirmLabel:"Delete",confirmVariant:"danger",onConfirm:()=>{this.onDelete()}}}async onDelete(){const e=new r.ArtworkRepository;await e.remove(this.artwork),this.hide()}toastDanger(e){return{message:e,variant:"danger"}}toastSuccess(e){return{message:e,variant:"success"}}async share(){var e;const t=this.canvas.toDataURL();if("web"!==h.PLATFORM)try{if("android"===h.PLATFORM){if(await c.PermissionsAndroid.request(c.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{title:"Cascade Storage Permission",message:"Cascade needs access to your storage so you can save awesome pictures.",buttonNeutral:"Ask Me Later",buttonNegative:"Cancel",buttonPositive:"OK"})!==c.PermissionsAndroid.RESULTS.GRANTED)return void this.toastDanger("Permission Denied")}u.share({message:`${null===(e=this.artwork)||void 0===e?void 0:e.text.body} #cascadeapp`,urls:[t]})}catch(o){this.toastDanger(o)}else this.toastDanger("Share is not supported on web")}async download(){const e=this.canvas.toDataURL().substr(22);if("web"!==h.PLATFORM)try{if("android"===h.PLATFORM){if(await c.PermissionsAndroid.request(c.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{title:"Cascade Storage Permission",message:"Cascade needs access to your storage so you can save awesome pictures.",buttonNeutral:"Ask Me Later",buttonNegative:"Cancel",buttonPositive:"OK"})!==c.PermissionsAndroid.RESULTS.GRANTED)return void this.toastDanger("Permission denied")}const o=await l.sendMessage({type:"write-tmp-image",payload:{content:e,filename:"tmp.png",encode:"base64"}});await l.sendMessage({type:"cameraroll:save",payload:{tag:o,type:"photo",album:"Cascade"}}),this.toastSuccess("Saved the picture to the album")}catch(t){this.toastDanger(t)}else this.toastDanger("Download is not supported on web")}};o([s.wired("canvas")],b.prototype,"canvas",void 0),o([s.wired(".edit-dialog__main")],b.prototype,"main",void 0),o([s.on("open-edit-modal")],b.prototype,"open",null),o([s.on.click.at(".done-btn"),s.on("hide-edit-modal")],b.prototype,"hide",null),o([s.on.click.at(".delete-btn"),s.pub(g.OPEN_CONFIRM_DIALOG)],b.prototype,"delete",null),o([s.pub(g.LIST_DIALOG_REFRESH),s.pub(g.ARTWORK_PERSISTED)],b.prototype,"onDelete",null),o([s.pub(g.TOAST)],b.prototype,"toastDanger",null),o([s.pub(g.TOAST)],b.prototype,"toastSuccess",null),o([s.on.click.at(".share-btn")],b.prototype,"share",null),o([s.on.click.at(".download-btn")],b.prototype,"download",null),b=o([s.component("edit-dialog"),s.sub("open-edit-modal"),s.is(a.css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;

  .edit-dialog__header {
    border-style: solid;
    border-width: 0 0 1px;
    border-bottom-color: ${f.GRAYISH_BLUE_ALPHA80};
    height: 62px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;

    svg {
      margin-left: 12px;
      width: 21px;
      height: 21px;
      cursor: pointer;
    }
  }

  .edit-dialog__main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .edit-dialog__controls {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    height: 134px;

    border-style: solid;
    border-width: 1px 0 0;
    border-top-color: ${f.GRAYISH_BLUE_ALPHA80};

    background-color: #fcfcfc;
  }

  .edit-dialog__controls > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 40px;

  }

  .edit-dialog__controls > div:first-child {
  }
`),s.innerHTML(`\n  <header class="edit-dialog__header">\n    <svg class="done-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">\n      <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />\n    </svg>\n  </header>\n  <div class="edit-dialog__main">\n    <canvas class="edit-canvas" width="50" height="50"></canvas>\n  </div>\n  <div class="edit-dialog__controls">\n    <div>\n      <button class="${p.default} is-info share-btn">SHARE</button>\n      <button class="${p.default} is-info download-btn">DOWNLOAD</button>\n    </div>\n    <div>\n      <button class="${p.default} is-danger delete-btn">DELETE</button>\n      <button class="${p.default} done-btn">DONE</button>\n    </div>\n  </div>\n`)],b),exports.EditModal=b;
},{"capsid":"PhMa","emotion":"TAuN","../domain/models":"PLhr","../adapters/canvas":"MJDI","lepont/browser":"VcXU","@lepont/permissions-android":"i4kg","@lepont/share":"Qzr9","../button":"zONe","../const":"n5I3","../const/color":"sqcB","../const/event":"qS7f"}],"BhmH":[function(require,module,exports) {
"use strict";var o=this&&this.__createBinding||(Object.create?function(o,t,n,e){void 0===e&&(e=n),Object.defineProperty(o,e,{enumerable:!0,get:function(){return t[n]}})}:function(o,t,n,e){void 0===e&&(e=n),o[e]=t[n]}),t=this&&this.__setModuleDefault||(Object.create?function(o,t){Object.defineProperty(o,"default",{enumerable:!0,value:t})}:function(o,t){o.default=t}),n=this&&this.__decorate||function(o,t,n,e){var i,r=arguments.length,c=r<3?t:null===e?e=Object.getOwnPropertyDescriptor(t,n):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,n,e);else for(var l=o.length-1;l>=0;l--)(i=o[l])&&(c=(r<3?i(c):r>3?i(t,n,c):i(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},e=this&&this.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(null!=n)for(var i in n)"default"!==i&&Object.hasOwnProperty.call(n,i)&&o(e,n,i);return t(e,n),e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConfirmDialog=exports.ConfirmDialogProvider=void 0;const i=require("capsid"),r=require("emotion"),c=e(require("../const/event")),l=require("../const/color");let s=class{__mount__(){}open(){this.el.classList.add("show")}close(){this.el.classList.remove("show")}};n([i.on(c.OPEN_CONFIRM_DIALOG)],s.prototype,"open",null),n([i.on.click,i.on(c.CLOSE_CONFIRM_DIALOG)],s.prototype,"close",null),s=n([i.component("confirm-dialog-provider"),i.sub(c.OPEN_CONFIRM_DIALOG),i.sub(c.CLOSE_CONFIRM_DIALOG),i.is(r.css`
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`),i.innerHTML('<div class="confirm-dialog"></div>')],s),exports.ConfirmDialogProvider=s;let a=class{onClick(o){o.stopPropagation()}onOpen(o){const t=o.detail;this.content.textContent=t.message,this.confirmButton.textContent=t.confirmLabel||"OK","danger"===t.confirmVariant?this.confirmButton.classList.add("is-danger"):"success"===t.confirmVariant&&this.confirmButton.classList.add("is-success"),this.onConfirm=o.detail.onConfirm}async onOk(){var o;await(null===(o=this.onConfirm)||void 0===o?void 0:o.call(this))}onCancel(){}};n([i.wired(".confirm-dialog__content")],a.prototype,"content",void 0),n([i.wired(".confirm-dialog__actions")],a.prototype,"actions",void 0),n([i.wired(".confirm-dialog__confirm")],a.prototype,"confirmButton",void 0),n([i.on.click],a.prototype,"onClick",null),n([i.on(c.OPEN_CONFIRM_DIALOG)],a.prototype,"onOpen",null),n([i.on.click.at(".confirm-dialog__confirm"),i.pub(c.CLOSE_CONFIRM_DIALOG)],a.prototype,"onOk",null),n([i.on.click.at(".confirm-dialog__cancel"),i.pub(c.CLOSE_CONFIRM_DIALOG)],a.prototype,"onCancel",null),a=n([i.component("confirm-dialog"),i.sub(c.OPEN_CONFIRM_DIALOG),i.is(r.css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 80%;
  background-color: white;
  border-radius: 8px;
  line-height: 1.6;

  .confirm-dialog__content {
    padding: 16px;
    flex-grow: 1;
  }

  .confirm-dialog__actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;
    padding: 16px;

    button {
      height: 40px;
      background-color: #fcfcfc;
      border-radius: 8px;
      border-width: 1px;
      border-color: ${l.GRAYISH_BLUE_ALPHA80};
      border-style: solid;
      padding-left: 12px;
      padding-right: 12px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.01) inset;
      font-weight: 900;
    }

    button.is-danger {
      border-width: 0;
      background-color: ${l.VERY_SOFT_RED};
      color: ${l.VERY_DARK_GRAY_ALPHA80};
    }

    button.is-success {
      border-width: 0;
      background-color: ${l.LIGHT_GRAYISH_LIME_GREEN};
      color: ${l.VERY_DARK_GRAY_ALPHA80};
    }
  }
`),i.innerHTML('\n  <div class="confirm-dialog__content"></div>\n  <div class="confirm-dialog__actions">\n    <button class="confirm-dialog__cancel">Cancel</button>\n    <button class="confirm-dialog__confirm"></button>\n  </div>\n')],a),exports.ConfirmDialog=a;
},{"capsid":"PhMa","emotion":"TAuN","../const/event":"qS7f","../const/color":"sqcB"}],"dnVm":[function(require,module,exports) {
module.exports="sample0.11730794.png";
},{}],"RHlA":[function(require,module,exports) {
module.exports="sample1.72ed24ac.png";
},{}],"Dn7o":[function(require,module,exports) {
module.exports="sample2.f2528095.png";
},{}],"uc5P":[function(require,module,exports) {
module.exports="sample3.8d938441.png";
},{}],"B7GU":[function(require,module,exports) {
module.exports="textbox.cb95378a.png";
},{}],"dBNP":[function(require,module,exports) {
module.exports="edit-dialog.1e9b32fd.png";
},{}],"sDkc":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,a,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return a[t]}})}:function(e,a,t,n){void 0===n&&(n=t),e[n]=a[t]}),a=this&&this.__setModuleDefault||(Object.create?function(e,a){Object.defineProperty(e,"default",{enumerable:!0,value:a})}:function(e,a){e.default=a}),t=this&&this.__decorate||function(e,a,t,n){var r,o=arguments.length,i=o<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,a,t,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(a,t,i):r(a,t))||i);return o>3&&i&&Object.defineProperty(a,t,i),i},n=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)"default"!==r&&Object.hasOwnProperty.call(t,r)&&e(n,t,r);return a(n,t),n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ManualDialogProvider=void 0;const o=require("capsid"),i=require("emotion"),s=n(require("../const/event")),l=r(require("../img/doc/sample0.png")),c=r(require("../img/doc/sample1.png")),p=r(require("../img/doc/sample2.png")),d=r(require("../img/doc/sample3.png")),u=r(require("../img/doc/textbox.png")),h=r(require("../img/doc/edit-dialog.png")),m=r(require("../img/mono.svg")),g=require("../domain/models");let f=class{onOpen(){var e;null===(e=this.el)||void 0===e||e.classList.add("show")}onClick(){var e;null===(e=this.el)||void 0===e||e.classList.remove("show")}};t([o.on(s.OPEN_MANUAL_DIALOG)],f.prototype,"onOpen",null),t([o.on.click],f.prototype,"onClick",null),f=t([o.component("manual-dialog__provider"),o.sub(s.OPEN_MANUAL_DIALOG),o.innerHTML(`\n  <div class="manual-dialog">\n    <h2>Cascade User Guide</h2>\n    <p>Cascade is a generative art app. You can create images like the below with this app. Let's start!</p>\n    <p class="manual-dialog__sample-images">\n      <img class="half-image" src="${l.default}" />\n      <img class="half-image" src="${c.default}" />\n    </p>\n    <hr />\n    <p>You can change the text at the center of the Canvas by changing it in the text box at the top of the screen. You can also change the size of the text with the up (larger) and down (smaller) arrows.</p>\n    <p class="manual-dialog__sample-images">\n      <img class="full-image" src="${u.default}" />\n    </p>\n    <hr />\n    <p>Tap in the Canvas and 4 boxes apear from the 4 sides. They have some rules and some randomness. Tap in the canvas in various ways and guess what the rules are.</p>\n    <p class="manual-dialog__sample-images">\n      <img class="half-image" src="${p.default}" />\n      <img class="half-image" src="${d.default}" />\n    </p>\n    <p>Hint: The higher position you tap, the more opaque boxes appear. The lower position you tap, the more transparent boxes appear.</p>\n    <hr/>\n    <p>You can save the artworks by pressing Save button. You can save up to ${g.Artwork.MAX_ITEMS} items. You can also download them to the Album or share them via other Apps.</p>\n    <p class="manual-dialog__sample-images">\n      <img class="half-image" src="${h.default}" />\n    </p>\n    <p class="center">Have fun!</p>\n    <p class="center"><img src="${m.default}" width="40"></p>\n  </div>\n`),o.is(i.css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.45);

  .manual-dialog {
    height: calc(100vh - 45px);
    width: calc(100vw - 30px);
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    overflow: scroll;
    padding: 15px;

    background-color: white;
    transform: translateY(100vh);
    transition-duration: 500ms;

    color: #555;

    p {
      line-height: 1.6;
    }

    .center {
      text-align: center;
    }

    hr {
      border-style: solid;
      border-bottom-width: 1px;
      border-top-width: 0;
      border-color: #ddd;
      margin: 30px 0;
    }
  }

  .manual-dialog__sample-images {
    display: flex;
    justify-content: space-around;

    .half-image {
      width: 45%;
    }

    .full-image {
      width: 90%;
    }
  }

  &.show .manual-dialog {
    transform: translateY(0);
  }
`)],f),exports.ManualDialogProvider=f;
},{"capsid":"PhMa","emotion":"TAuN","../const/event":"qS7f","../img/doc/sample0.png":"dnVm","../img/doc/sample1.png":"RHlA","../img/doc/sample2.png":"Dn7o","../img/doc/sample3.png":"uc5P","../img/doc/textbox.png":"B7GU","../img/doc/edit-dialog.png":"dBNP","../img/mono.svg":"SIKs","../domain/models":"PLhr"}],"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const i=require("capsid"),r=e(require("capsid/debug"));i.install(r.default),require("./splash-screen"),require("./main-screen"),require("./toast"),require("./dialogs/list-dialog"),require("./dialogs/edit-dialog"),require("./dialogs/confirm-dialog"),require("./dialogs/manual-dialog");
},{"capsid":"PhMa","capsid/debug":"E8A2","./splash-screen":"VeE4","./main-screen":"pWO5","./toast":"JH4Y","./dialogs/list-dialog":"rkH8","./dialogs/edit-dialog":"Efu2","./dialogs/confirm-dialog":"BhmH","./dialogs/manual-dialog":"sDkc"}]},{},["QCba"], null)
//# sourceMappingURL=src.ef80a017.js.map