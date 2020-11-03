(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CLOSE_CONFIRM_DIALOG=exports.OPEN_CONFIRM_DIALOG=exports.TOAST=exports.LIST_MODAL_OPEN=exports.INIT_CANVAS_CONTROLS=void 0,exports.INIT_CANVAS_CONTROLS="init-canvas-controls",exports.LIST_MODAL_OPEN="list-modal-open",exports.TOAST="toast",exports.OPEN_CONFIRM_DIALOG="open-confirm-dialog",exports.CLOSE_CONFIRM_DIALOG="close-confirm-dialog"},1458:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(57),_clientLogger=__webpack_require__(38),_configFilename=__webpack_require__(1459);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1459:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1460);var emotion__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(97),capsid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(73);const globalStyle=emotion__WEBPACK_IMPORTED_MODULE_1__.css`
.fixed-fill-content {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.fade-in-opacity {
  opacity: 0;
  pointer-events: none;

  transition-property: opacity visibility;
  transition-duration: 500ms;
  visibility: hidden;
}

.fade-in-opacity.show {
  pointer-events: auto;
  opacity: 1.0;
  visibility: visible;
}
`;document.body.classList.add(globalStyle);new MutationObserver(()=>Object(capsid__WEBPACK_IMPORTED_MODULE_2__.prep)()).observe(document.body,{childList:!0,subtree:!0});const parameters={layout:"fullscreen",actions:{argTypesRegex:"^on[A-Z].*"}}},1460:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const capsid_1=__webpack_require__(73),debug_1=__importDefault(__webpack_require__(1462));capsid_1.install(debug_1.default),__webpack_require__(1464),__webpack_require__(1466),__webpack_require__(1484),__webpack_require__(1485),__webpack_require__(1486),__webpack_require__(1493)},1464:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SplashScreen=void 0;const capsid_1=__webpack_require__(73),emotion_1=__webpack_require__(97),async_1=__webpack_require__(319),dom_1=__webpack_require__(203),monoid_white_svg_1=__importDefault(__webpack_require__(1465));let SplashScreen=class SplashScreen{async __mount__(){await this.sequence(),this.startMain(),await this.fadeOut()}async fadeOut(){var _a;const el=this.el;el.classList.add("hidden"),await async_1.defer(500),null===(_a=el.parentElement)||void 0===_a||_a.removeChild(el)}async sequence(){if(!Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).SPLASH_SCREEN)return async_1.defer(100);const el=this.el;await async_1.defer(50),el.classList.add("ready");const img=await dom_1.onLoadImage(monoid_white_svg_1.default);img.classList.add("logo","in","is-monoid"),el.appendChild(img),await async_1.defer(50),this.logo.classList.remove("in"),await async_1.defer(1e3),this.logo.classList.add("out"),await this.showLogoHtml('<span class="logo in is-tententen">Tententen</span>')}async showLogoHtml(html){await async_1.defer(500),this.el.innerHTML=html,await async_1.defer(50),this.logo.classList.remove("in"),await async_1.defer(1e3),this.logo.classList.add("out")}startMain(){}};__decorate([capsid_1.wired(".logo")],SplashScreen.prototype,"logo",void 0),__decorate([capsid_1.pub("start-main")],SplashScreen.prototype,"startMain",null),SplashScreen=__decorate([capsid_1.component("splash-screen"),capsid_1.is(emotion_1.css`
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
  .logo.is-tententen {
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
`)],SplashScreen),exports.SplashScreen=SplashScreen},1465:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/monoid-white.1ec99c72.svg"},1466:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MainFooterControls=exports.MainMiddleControls=exports.MainHeaderControls=exports.MainCanvas=exports.Main=void 0;const emotion_1=__webpack_require__(97),bezier_easing_1=__importDefault(__webpack_require__(1467)),gameloopjs_1=__importDefault(__webpack_require__(1468)),const_1=__webpack_require__(1469),models_1=__webpack_require__(495),Event=__importStar(__webpack_require__(130)),random_1=__webpack_require__(1475),capsid_1=__webpack_require__(73),canvas_1=__webpack_require__(320),color_1=__webpack_require__(204),async_1=__webpack_require__(319),color_2=__importDefault(__webpack_require__(1476)),button_1=__importDefault(__webpack_require__(205));let Main=class Main{start(){const el=this.el;el.classList.remove("hidden"),el.innerHTML='\n      <div class="main__header-controls"></div>\n      <div class="main__canvas-wrapper">\n        <canvas class="main__canvas" width="1" height="1"></canvas>\n      </div>\n      <div class="main__middle-controls"></div>\n      <div class="main__footer-controls"></div>\n    ',capsid_1.prep()}};__decorate([capsid_1.on("start-main"),capsid_1.pub(Event.INIT_CANVAS_CONTROLS)],Main.prototype,"start",null),Main=__decorate([capsid_1.component("main-screen"),capsid_1.sub("start-main"),capsid_1.is(emotion_1.css`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;

  .main__canvas-wrapper {
    flex-grow: 1;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color_1.GRAYISH_BLUE_ALPHA80};

    canvas {
      background-color: white;
    }
  }
`)],Main),exports.Main=Main;let MainCanvas=class MainCanvas{constructor(){this.width=0,this.height=0,this.easing0=bezier_easing_1.default(.42,0,.58,1),this.textColors=[],this.colors=[],this.main=()=>{const finished=this.wave.step();finished&&this.result.add(...finished.map(wr=>wr.rect));const ctx=this.ctx,{width:width,height:height}=this.el;ctx.clearRect(0,0,width,height),canvas_1.drawRects(ctx,this.result.rects,width,height),canvas_1.drawRects(ctx,this.wave.toArray(),width,height),canvas_1.drawText(ctx,this.text,width,height)},this.wave=new models_1.Wave,this.result=new models_1.Result,this.text=new models_1.TextLabel("","Avenir Next",1/6,"#fff","#fff"),this.resetColors(),this.loop=gameloopjs_1.default(this.main,60)}resetColors(){const baseColors=this.baseColors();this.colors=[...baseColors],this.textColors=baseColors.map(c=>c.alpha(1)),this.text.color=this.colors[0].alpha(1).toString(),this.text.shadowColor=this.colors[1].alpha(1).toString()}randomColor(){return color_2.default().hue(random_1.dice(360)).saturationl(random_1.dice(100)).lightness(random_1.dice(100)).alpha(.35)}baseColors(){return[this.randomColor(),this.randomColor(),this.randomColor(),this.randomColor()]}async __mount__(){const el=this.el,wrapper=el.parentElement;this.ctx=el.getContext("2d"),await async_1.defer(0);const canvasSize=Math.min(wrapper.clientWidth,wrapper.clientHeight);el.width=this.width=canvasSize*const_1.devicePixelRatio,el.height=this.height=canvasSize*const_1.devicePixelRatio,el.style.width=canvasSize+"px",el.style.height=canvasSize+"px",this.loop.run()}rotateColors(){this.colors.push(this.colors.shift())}rotateTextColors(){this.textColors.push(this.textColors.shift()),this.text.color=this.textColors[0].string(),this.text.shadowColor=this.textColors[1].string()}newWave(e){this.rotateColors();const canvasY=(e.clientY-this.el.offsetTop)*const_1.devicePixelRatio,ratioX=(e.clientX-this.el.offsetLeft)*const_1.devicePixelRatio/this.width,ratioA=(this.height-canvasY)/this.height,w=1/3*random_1.dice(1)+1/6,hw=w/2,dw=ratioX,dh=ratioX,alpha=ratioA,c0=this.colors[0].alpha(alpha).toString(),c1=this.colors[1].alpha(alpha).toString(),c2=this.colors[2].alpha(alpha).toString(),c3=this.colors[3].alpha(alpha).toString(),r0=new models_1.Rect(0-hw,dh,w,w,c0),r1=new models_1.Rect(1-dw,-hw,w,w,c1),r2=new models_1.Rect(1+hw,1-dh,w,w,c2),r3=new models_1.Rect(dw,1+hw,w,w,c3),m0=new models_1.Motion(60,this.easing0,w,0),m1=new models_1.Motion(60,this.easing0,0,w),m2=new models_1.Motion(60,this.easing0,-w,0),m3=new models_1.Motion(60,this.easing0,0,-w);m0.init(r0.x,r0.y),m1.init(r1.x,r1.y),m2.init(r2.x,r2.y),m3.init(r3.x,r3.y),this.wave.add(new models_1.WaveRect(r0,m0)),this.wave.add(new models_1.WaveRect(r1,m1)),this.wave.add(new models_1.WaveRect(r2,m2)),this.wave.add(new models_1.WaveRect(r3,m3))}onText({detail:detail}){this.text.body=detail}mouseup(e){this.newWave(e)}font(){this.text.rotateFonts()}up(){this.text.sizeUp()}down(){this.text.sizeDown()}a(){this.rotateTextColors()}async b(){this.wave.eject(),this.result.clear(),this.resetColors()}async save(){const artwork=models_1.createArtwork(this.result,this.text);return await(new models_1.ArtworkRepository).save(artwork),artwork}};__decorate([capsid_1.on("text")],MainCanvas.prototype,"onText",null),__decorate([capsid_1.on("mouseup")],MainCanvas.prototype,"mouseup",null),__decorate([capsid_1.on("font")],MainCanvas.prototype,"font",null),__decorate([capsid_1.on("up")],MainCanvas.prototype,"up",null),__decorate([capsid_1.on("down")],MainCanvas.prototype,"down",null),__decorate([capsid_1.on("a")],MainCanvas.prototype,"a",null),__decorate([capsid_1.on("b")],MainCanvas.prototype,"b",null),__decorate([capsid_1.on("save"),capsid_1.pub("open-edit-modal")],MainCanvas.prototype,"save",null),MainCanvas=__decorate([capsid_1.component("main__canvas"),capsid_1.sub("a","b","down","up","font","text","save","list")],MainCanvas),exports.MainCanvas=MainCanvas;let MainHeaderControls=class MainHeaderControls{init(){this.textInput.value=localStorage["tententen-current-text"]||"Tententen",this.text()}text(){return localStorage["tententen-current-text"]=this.textInput.value}down(){}up(){}};__decorate([capsid_1.wired(".text-input")],MainHeaderControls.prototype,"textInput",void 0),__decorate([capsid_1.on(Event.INIT_CANVAS_CONTROLS)],MainHeaderControls.prototype,"init",null),__decorate([capsid_1.on("input",{at:".text-input"}),capsid_1.pub("text")],MainHeaderControls.prototype,"text",null),__decorate([capsid_1.on.click.at(".down-btn"),capsid_1.pub("down")],MainHeaderControls.prototype,"down",null),__decorate([capsid_1.on.click.at(".up-btn"),capsid_1.pub("up")],MainHeaderControls.prototype,"up",null),MainHeaderControls=__decorate([capsid_1.component("main__header-controls"),capsid_1.sub(Event.INIT_CANVAS_CONTROLS),capsid_1.is(emotion_1.css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 62px;
  flex-shrink: 0;

  border-bottom-width: 1px;
  border-bottom-color: ${color_1.GRAYISH_BLUE_ALPHA80};
  border-bottom-style: solid;

  input {
    text-align: center;
    height: 40px;
    border-radius: 8px;
    border: solid 1px ${color_1.GRAYISH_BLUE_ALPHA80};
    color: ${color_1.VERY_DARK_GRAYISH_BLUE};
  }
`),capsid_1.innerHTML(`\n  <button class="${button_1.default} down-btn">\n    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />\n    </svg>\n  </button>\n  <input class="text-input" />\n  <button class="${button_1.default} up-btn">\n    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />\n    </svg>\n  </button>\n`)],MainHeaderControls),exports.MainHeaderControls=MainHeaderControls;let MainMiddleControls=class MainMiddleControls{a(){}b(){}font(){}};__decorate([capsid_1.on.click.at(".a-btn"),capsid_1.pub("a")],MainMiddleControls.prototype,"a",null),__decorate([capsid_1.on.click.at(".b-btn"),capsid_1.pub("b")],MainMiddleControls.prototype,"b",null),__decorate([capsid_1.on.click.at(".font-btn"),capsid_1.pub("font")],MainMiddleControls.prototype,"font",null),MainMiddleControls=__decorate([capsid_1.component("main__middle-controls"),capsid_1.sub(Event.INIT_CANVAS_CONTROLS),capsid_1.is(emotion_1.css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  height: 82px;
  width: 100%;
  flex-shrink: 0;

  border-top-width: 1px;
  border-top-color: ${color_1.GRAYISH_BLUE_ALPHA80};
  border-top-style: solid;
`),capsid_1.innerHTML(`\n  <button class="${button_1.default} font-btn">♻ FONT</button>\n  <button class="${button_1.default} a-btn">♻ COLOR</button>\n  <button class="${button_1.default} b-btn">♻ RESET</button>\n`)],MainMiddleControls),exports.MainMiddleControls=MainMiddleControls;let MainFooterControls=class MainFooterControls{save(){}list(){return{message:"Are you sure to delete this image?",confirmLabel:"DELETE",confirmVariant:"danger",onConfirm:()=>alert("deleting")}}};__decorate([capsid_1.on.click.at(".save-btn"),capsid_1.pub("save")],MainFooterControls.prototype,"save",null),__decorate([capsid_1.on.click.at(".list-btn"),capsid_1.pub(Event.OPEN_CONFIRM_DIALOG)],MainFooterControls.prototype,"list",null),MainFooterControls=__decorate([capsid_1.component("main__footer-controls"),capsid_1.innerHTML('\n  <button class="list-btn">LIST</button>\n  <button class="help-btn">?</button>\n  <button class="save-btn">SAVE</button>\n'),capsid_1.is(emotion_1.css`
  height: 52px;
  flex-shrink: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  border-top-width: 1px;
  border-top-color: ${color_1.GRAYISH_BLUE_ALPHA80};
  border-top-style: solid;
  background-color: #fcfcfc;

  button {
    width: 100px;
    height: 52px;
    background-color: white;
    border-width: 0;
    font-weight: bold;
    color: ${color_1.VERY_DARK_GRAYISH_BLUE};
    color: #868686;
    background-color: transparent;
  }
`),capsid_1.sub(Event.INIT_CANVAS_CONTROLS)],MainFooterControls),exports.MainFooterControls=MainFooterControls},1469:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.devicePixelRatio=void 0,exports.devicePixelRatio=window.devicePixelRatio||1},1470:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStorage=void 0,exports.getStorage=async function getStorage(){return await Promise.resolve().then(()=>__importStar(__webpack_require__(1471)))}},1475:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dice=void 0,exports.dice=n=>Math.random()*n},1484:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Toast=exports.ToastProvider=void 0;const capsid_1=__webpack_require__(73),emotion_1=__webpack_require__(97),color_1=__webpack_require__(204),Event=__importStar(__webpack_require__(130)),async_1=__webpack_require__(319);let ToastProvider=class ToastProvider{onToast(e){const toast=document.createElement("div");toast.classList.add("toast"),toast.textContent=e.detail.message,"success"===e.detail.variant?toast.classList.add("is-success"):"danger"===e.detail.variant&&toast.classList.add("is-danger"),this.el.appendChild(toast),capsid_1.prep("toast",this.el)}};__decorate([capsid_1.on(Event.TOAST)],ToastProvider.prototype,"onToast",null),ToastProvider=__decorate([capsid_1.component("toast-provider"),capsid_1.sub(Event.TOAST),capsid_1.is(emotion_1.css`
  pointer-events: none;
`)],ToastProvider),exports.ToastProvider=ToastProvider;let Toast=class Toast{async __mount__(){await async_1.defer(100),this.el.classList.add("show"),await async_1.defer(5e3),await this.remove()}async remove(){var _a,_b,_c;null===(_a=this.el)||void 0===_a||_a.classList.remove("show"),await async_1.defer(600),null===(_c=null===(_b=this.el)||void 0===_b?void 0:_b.parentElement)||void 0===_c||_c.removeChild(this.el)}};__decorate([capsid_1.on.click],Toast.prototype,"remove",null),Toast=__decorate([capsid_1.component("toast"),capsid_1.is(emotion_1.css`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  bottom: 52px;
  height: 82px;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 500ms;
  text-align: center;
  background-color: ${color_1.MOSTLY_BLACK};
  color: rgba(0, 0, 0, 0.7);
  padding: 8px;

  &.show {
    opacity: 0.9;
  }

  &.is-success {
    background-color: ${color_1.LIGHT_GRAYISH_LIME_GREEN};
  }

  &.is-danger {
    background-color: ${color_1.VERY_SOFT_RED}
  }
`)],Toast),exports.Toast=Toast},1485:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ListItem=exports.ListModal=void 0;const capsid_1=__webpack_require__(73),emotion_1=__webpack_require__(97),models_1=__webpack_require__(495),canvas_1=__webpack_require__(320),Events=__importStar(__webpack_require__(130));let ListModal=class ListModal{async artworkSave({detail:artwork}){await(new models_1.ArtworkRepository).save(artwork),this.open()}async open(){this.listArea.innerHTML="";(await(new models_1.ArtworkRepository).get()).artworks.map(artwork=>[artwork,this.el.querySelector(`[dataset-key="${artwork.id}"]`)||document.createElement("div")]).forEach(([artwork,div])=>{capsid_1.make("list-item",div).update(artwork),this.listArea.appendChild(div)}),this.el.classList.add("show")}close(){this.el.classList.remove("show")}};__decorate([capsid_1.wired(".list-area")],ListModal.prototype,"listArea",void 0),__decorate([capsid_1.on("artwork-save")],ListModal.prototype,"artworkSave",null),__decorate([capsid_1.on(Events.LIST_MODAL_OPEN)],ListModal.prototype,"open",null),__decorate([capsid_1.on.click,capsid_1.on.click.at(".close-button")],ListModal.prototype,"close",null),ListModal=__decorate([capsid_1.component("list-dialog"),capsid_1.sub("artwork-save",Events.LIST_MODAL_OPEN),capsid_1.innerHTML('\n  <div class="list-area"></div>\n  <div class="list-controls">\n    <button class="close-button">CLOSE</button>\n  </div>\n'),capsid_1.is(emotion_1.css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.9);
  overflow: scroll;

  .list-controls {
    display: flex;
    justify-content: center;
    align-items: center;

    .close-button {
      width: 150px;
      height: 36px;
    }
  }
`)],ListModal),exports.ListModal=ListModal;let ListItem=class ListItem{__mount__(){this.canvas.width=150,this.canvas.height=150}update(artwork){this.el.dataset.key=artwork.id,this.artwork=artwork,this.draw()}draw(){canvas_1.drawArtwork(this.canvas.getContext("2d"),this.artwork,this.canvas.width,this.canvas.height)}onClick(e){return e.stopPropagation(),this.artwork}};__decorate([capsid_1.wired("canvas")],ListItem.prototype,"canvas",void 0),__decorate([capsid_1.on.click,capsid_1.pub("open-edit-modal")],ListItem.prototype,"onClick",null),ListItem=__decorate([capsid_1.component("list-item"),capsid_1.is(emotion_1.css`
  display: inline-box;
  position: relative;
  width: min(25vw, 25vh);
  height: min(25vw, 25vh);

  canvas {
    width: 100%;
    height: 100%;
  }
`),capsid_1.innerHTML("<canvas></canvas>")],ListItem),exports.ListItem=ListItem},1486:function(module,exports,__webpack_require__){"use strict";var __decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.EditModal=void 0;const capsid_1=__webpack_require__(73),emotion_1=__webpack_require__(97),canvas_1=__webpack_require__(320),browser_1=__webpack_require__(159),permissions_android_1=__webpack_require__(1487),platform_1=__webpack_require__(1489),share_1=__webpack_require__(1491);let EditModal=class EditModal{open({detail:artwork}){const canvas=this.canvas,{width:width,height:height}=canvas,ctx=canvas.getContext("2d");this.artwork=artwork,canvas_1.drawArtwork(ctx,artwork,width,height),this.el.classList.add("show")}hide(){this.el.classList.remove("show")}delete(){alert("not impletemented!")}async share(){var _a;const base64Content=this.canvas.toDataURL();try{if("android"===await platform_1.getOS()){if(await permissions_android_1.PermissionsAndroid.request(permissions_android_1.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{title:"Tententen Storage Permission",message:"Tententen needs access to your storage so you can save awesome pictures.",buttonNeutral:"Ask Me Later",buttonNegative:"Cancel",buttonPositive:"OK"})!==permissions_android_1.PermissionsAndroid.RESULTS.GRANTED)return void alert("permission denied")}share_1.share({message:(null===(_a=this.artwork)||void 0===_a?void 0:_a.text.body)+" #tententenapp",urls:[base64Content]})}catch(e){alert(e),alert(e.stack)}}async download(){const base64Content=this.canvas.toDataURL().substr(22);try{if("android"===await platform_1.getOS()){if(await permissions_android_1.PermissionsAndroid.request(permissions_android_1.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{title:"Tententen Storage Permission",message:"Tententen needs access to your storage so you can save awesome pictures.",buttonNeutral:"Ask Me Later",buttonNegative:"Cancel",buttonPositive:"OK"})!==permissions_android_1.PermissionsAndroid.RESULTS.GRANTED)return void alert("permission denied")}const savedPath=await browser_1.sendMessage({type:"write-tmp-image",payload:{content:base64Content,filename:"tmp.png",encode:"base64"}});await browser_1.sendMessage({type:"cameraroll:save",payload:{tag:savedPath,type:"photo",album:"Tententen"}}),alert("Saved the picture to the album")}catch(e){alert(e),alert(e.stack)}}};__decorate([capsid_1.wired("canvas")],EditModal.prototype,"canvas",void 0),__decorate([capsid_1.on("open-edit-modal")],EditModal.prototype,"open",null),__decorate([capsid_1.on.click.at(".cancel-btn"),capsid_1.on("hide-edit-modal")],EditModal.prototype,"hide",null),__decorate([capsid_1.on.click.at(".delete-btn")],EditModal.prototype,"delete",null),__decorate([capsid_1.on.click.at(".share-btn")],EditModal.prototype,"share",null),__decorate([capsid_1.on.click.at(".download-btn"),capsid_1.emits("hide-edit-modal")],EditModal.prototype,"download",null),EditModal=__decorate([capsid_1.component("edit-dialog"),capsid_1.sub("open-edit-modal"),capsid_1.innerHTML('\n  <canvas class="edit-canvas" width="50" height="50"></canvas>\n  <div class="edit-controls">\n    <button class="delete-btn">DELETE</button>\n    <button class="share-btn">SHARE</button>\n    <button class="download-btn">DOWNLOAD</button>\n    <button class="cancel-btn">CANCEL</button>\n  </div>\n'),capsid_1.is(emotion_1.css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
`)],EditModal),exports.EditModal=EditModal},1493:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ConfirmDialog=exports.ConfirmDialogProvider=void 0;const capsid_1=__webpack_require__(73),emotion_1=__webpack_require__(97),color_1=__webpack_require__(204),Event=__importStar(__webpack_require__(130));let ConfirmDialogProvider=class ConfirmDialogProvider{__mount__(){}open(){this.el.classList.add("show")}close(){this.el.classList.remove("show")}};__decorate([capsid_1.on(Event.OPEN_CONFIRM_DIALOG)],ConfirmDialogProvider.prototype,"open",null),__decorate([capsid_1.on.click,capsid_1.on(Event.CLOSE_CONFIRM_DIALOG)],ConfirmDialogProvider.prototype,"close",null),ConfirmDialogProvider=__decorate([capsid_1.component("confirm-dialog-provider"),capsid_1.sub(Event.OPEN_CONFIRM_DIALOG),capsid_1.sub(Event.CLOSE_CONFIRM_DIALOG),capsid_1.is(emotion_1.css`
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`),capsid_1.innerHTML('<div class="confirm-dialog"></div>')],ConfirmDialogProvider),exports.ConfirmDialogProvider=ConfirmDialogProvider;let ConfirmDialog=class ConfirmDialog{onClick(e){e.stopPropagation()}onOpen(e){const msg=e.detail;this.content.textContent=msg.message,this.confirmButton.textContent=msg.confirmLabel||"OK","danger"===msg.confirmVariant?this.confirmButton.classList.add("is-danger"):"success"===msg.confirmVariant&&this.confirmButton.classList.add("is-success"),this.onConfirm=e.detail.onConfirm}async onOk(){var _a;await(null===(_a=this.onConfirm)||void 0===_a?void 0:_a.call(this))}onCancel(){}};__decorate([capsid_1.wired(".confirm-dialog__content")],ConfirmDialog.prototype,"content",void 0),__decorate([capsid_1.wired(".confirm-dialog__actions")],ConfirmDialog.prototype,"actions",void 0),__decorate([capsid_1.wired(".confirm-dialog__confirm")],ConfirmDialog.prototype,"confirmButton",void 0),__decorate([capsid_1.on.click],ConfirmDialog.prototype,"onClick",null),__decorate([capsid_1.on(Event.OPEN_CONFIRM_DIALOG)],ConfirmDialog.prototype,"onOpen",null),__decorate([capsid_1.on.click.at(".confirm-dialog__confirm"),capsid_1.pub(Event.CLOSE_CONFIRM_DIALOG)],ConfirmDialog.prototype,"onOk",null),__decorate([capsid_1.on.click.at(".confirm-dialog__cancel"),capsid_1.pub(Event.CLOSE_CONFIRM_DIALOG)],ConfirmDialog.prototype,"onCancel",null),ConfirmDialog=__decorate([capsid_1.component("confirm-dialog"),capsid_1.sub(Event.OPEN_CONFIRM_DIALOG),capsid_1.is(emotion_1.css`
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
      border-color: ${color_1.GRAYISH_BLUE_ALPHA80};
      border-style: solid;
      padding-left: 12px;
      padding-right: 12px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.01) inset;
      font-weight: 900;
    }

    button.is-danger {
      border-color: transparent;
      background-color: #dfb0b0;
    }
  }
`),capsid_1.innerHTML('\n  <div class="confirm-dialog__content"></div>\n  <div class="confirm-dialog__actions">\n    <button class="confirm-dialog__cancel">Cancel</button>\n    <button class="confirm-dialog__confirm"></button>\n  </div>\n')],ConfirmDialog),exports.ConfirmDialog=ConfirmDialog},1494:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(370).configure)([__webpack_require__(1495)],module,!1)}).call(this,__webpack_require__(111)(module))},1495:function(module,exports,__webpack_require__){var map={"./button.stories.ts":1496,"./dialogs/confirm-dialog.stories.ts":1497,"./toast.stories.ts":1498};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1495},1496:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.buttons=void 0;const button_1=__importDefault(__webpack_require__(205)),dom_1=__webpack_require__(203);exports.default={title:"Button"},exports.buttons=()=>dom_1.create(`\n  <div style="padding: 30px;">\n    <p><button class="${button_1.default}">Default button</button></p>\n    <p><button class="${button_1.default} is-danger">Danger button</button></p>\n    <p><button class="${button_1.default} is-success">Success button</button></p>\n    <p><button class="${button_1.default} is-info">Info button</button></p>\n  </div>\n`),exports.buttons.parameters=Object.assign({storySource:{source:'() => create(`\n  <div style="padding: 30px;">\n    <p><button class="${button}">Default button</button></p>\n    <p><button class="${button} is-danger">Danger button</button></p>\n    <p><button class="${button} is-success">Success button</button></p>\n    <p><button class="${button} is-info">Info button</button></p>\n  </div>\n`)'}},exports.buttons.parameters)},1497:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.normal=void 0;const Event=__importStar(__webpack_require__(130)),dom_1=__webpack_require__(203),button_1=__importDefault(__webpack_require__(205)),capsid_1=__webpack_require__(73);exports.default={title:"confirm-dialog"};let ConfirmDialogOpener=class ConfirmDialogOpener{onClick(){return{message:this.el.dataset.message,onConfirm:()=>{}}}};__decorate([capsid_1.on.click,capsid_1.pub(Event.OPEN_CONFIRM_DIALOG)],ConfirmDialogOpener.prototype,"onClick",null),ConfirmDialogOpener=__decorate([capsid_1.component("confirm-dialog-opener")],ConfirmDialogOpener),exports.normal=()=>dom_1.create(`\n  <div style="padding: 30px;">\n    <div class="confirm-dialog-provider fixed-fill-content fade-in-opacity"></div>\n    <button\n      class="${button_1.default} confirm-dialog-opener"\n      data-message="Confirm dialog message lorem ipsum"\n    >\n      open ConfirmDialog\n    </button>\n  </div>\n`),exports.normal.parameters=Object.assign({storySource:{source:'() =>\n  create(`\n  <div style="padding: 30px;">\n    <div class="confirm-dialog-provider fixed-fill-content fade-in-opacity"></div>\n    <button\n      class="${button} confirm-dialog-opener"\n      data-message="Confirm dialog message lorem ipsum"\n    >\n      open ConfirmDialog\n    </button>\n  </div>\n`)'}},exports.normal.parameters)},1498:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.danger=exports.success=void 0;const Event=__importStar(__webpack_require__(130)),dom_1=__webpack_require__(203),capsid_1=__webpack_require__(73),button_1=__importDefault(__webpack_require__(205));exports.default={title:"Toast"};let ToastOpener=class ToastOpener{onClick(){const{message:message,variant:variant}=this.el.dataset;return{message:message,variant:variant}}};__decorate([capsid_1.on.click,capsid_1.pub(Event.TOAST)],ToastOpener.prototype,"onClick",null),ToastOpener=__decorate([capsid_1.component("toast-opener")],ToastOpener),exports.success=()=>dom_1.create(`\n  <div style="padding: 30px;">\n    <div class="toast-provider fixed-fill-content"></div>\n    <button\n      class="${button_1.default} toast-opener"\n      data-message="Toast message lorem ipsum"\n      data-variant="success"\n    >\n      open Toast\n    </button>\n  </div>\n`),exports.danger=()=>dom_1.create(`\n  <div style="padding: 30px;">\n    <div class="toast-provider fixed-fill-content"></div>\n    <button\n      class="${button_1.default} toast-opener"\n      data-message="Toast message lorem ipsum"\n      data-variant="danger"\n    >\n      open Toast\n    </button>\n  </div>\n`),exports.success.parameters=Object.assign({storySource:{source:'() => create(`\n  <div style="padding: 30px;">\n    <div class="toast-provider fixed-fill-content"></div>\n    <button\n      class="${button} toast-opener"\n      data-message="Toast message lorem ipsum"\n      data-variant="success"\n    >\n      open Toast\n    </button>\n  </div>\n`)'}},exports.success.parameters),exports.danger.parameters=Object.assign({storySource:{source:'() => create(`\n  <div style="padding: 30px;">\n    <div class="toast-provider fixed-fill-content"></div>\n    <button\n      class="${button} toast-opener"\n      data-message="Toast message lorem ipsum"\n      data-variant="danger"\n    >\n      open Toast\n    </button>\n  </div>\n`)'}},exports.danger.parameters)},203:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.create=exports.onLoadImage=exports.byId=exports.qs=void 0,exports.qs=q=>document.querySelector(q),exports.byId=id=>document.getElementById(id),exports.onLoadImage=src=>{const img=new Image;return new Promise((resolve,_)=>{img.onload=()=>resolve(img),img.src=src})},exports.create=html=>{const div=document.createElement("div");if(div.innerHTML=html,0===div.children.length)throw new Error("no valid element: "+html);return div.children[0]}},204:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.VERY_SOFT_RED=exports.VERY_DARK_GRAY_ALPHA80=exports.VERY_DARK_GRAYISH_BLUE=exports.MOSTLY_BLACK=exports.LIGHT_GRAYISH_CYAN=exports.LIGHT_GRAYISH_LIME_GREEN=exports.GRAYISH_BLUE_ALPHA80=void 0,exports.GRAYISH_BLUE_ALPHA80="hsla(220, 20%, 80%, 0.8)",exports.LIGHT_GRAYISH_LIME_GREEN="#DFF2DC",exports.LIGHT_GRAYISH_CYAN="#DCF2F2",exports.MOSTLY_BLACK="#282828",exports.VERY_DARK_GRAYISH_BLUE="hsla(220, 20%, 30%, 1)",exports.VERY_DARK_GRAY_ALPHA80="#2A2A2A",exports.VERY_SOFT_RED="#DFB0B0"},205:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const emotion_1=__webpack_require__(97),color_1=__webpack_require__(204);exports.default=emotion_1.css`
  height: 40px;
  background-color: #fcfcfc;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${color_1.GRAYISH_BLUE_ALPHA80};
  border-style: solid;
  padding-left: 12px;
  padding-right: 12px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.01) inset;
  font-weight: 900;
  color: ${color_1.VERY_DARK_GRAYISH_BLUE};
  outline: none;

  &:active {
    opacity: 0.65;
  }

  &.is-danger {
    border-width: 0;
    background-color: ${color_1.VERY_SOFT_RED};
    color: ${color_1.VERY_DARK_GRAY_ALPHA80};
  }

  &.is-success {
    border-width: 0;
    background-color: ${color_1.LIGHT_GRAYISH_LIME_GREEN};
    color: ${color_1.VERY_DARK_GRAY_ALPHA80};
  }

  &.is-info {
    border-width: 0;
    background-color: ${color_1.LIGHT_GRAYISH_CYAN};
    color: ${color_1.VERY_DARK_GRAY_ALPHA80};
  }

  svg {
    height: 21px;
    width: 21px;
  }
`},319:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defer=void 0,exports.defer=n=>new Promise((resolve,_)=>{setTimeout(resolve,n)})},320:function(module,exports,__webpack_require__){"use strict";function drawText(ctx,text,width,height){ctx.save(),ctx.font=text.font(height),ctx.fillStyle=text.color,ctx.shadowColor=text.shadowColor,ctx.shadowBlur=text.shadowBlur(height),ctx.shadowOffsetX=0,ctx.shadowOffsetY=0,ctx.textAlign="center",ctx.fillText(text.body,width/2,height/2+height*text.size/3),ctx.restore()}function drawRects(ctx,rects,width,height){rects.forEach(rect=>{ctx.fillStyle=rect.color,ctx.fillRect(rect.left()*width,rect.top()*height,rect.width*width,rect.height*height)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.drawArtwork=exports.drawRects=exports.drawText=void 0,exports.drawText=drawText,exports.drawRects=drawRects,exports.drawArtwork=function drawArtwork(ctx,artwork,width,height){ctx.fillStyle=artwork.backgroundColor,ctx.fillRect(0,0,width,height),drawRects(ctx,artwork.boxes,width,height),drawText(ctx,artwork.text,width,height)}},495:function(module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k),Object.defineProperty(o,k2,{enumerable:!0,get:function(){return m[k]}})}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ArtworkRepository=exports.ArtworkCollection=exports.createArtwork=exports.Artwork=exports.TextLabel=exports.Result=exports.Wave=exports.WaveRect=exports.Motion=exports.Rect=void 0;const uuid=__importStar(__webpack_require__(1502)),storage_1=__webpack_require__(1470);class Rect{constructor(x,y,width,height,color){this.x=x,this.y=y,this.width=width,this.height=height,this.color=color}clone(){return new Rect(this.x,this.y,this.width,this.height,this.color)}left(){return this.x-this.width/2}top(){return this.y-this.height/2}goto(x,y){this.x=x,this.y=y}scale(width=0,height=0){this.width+=width,this.height+=height}}exports.Rect=Rect;exports.Motion=class Motion{constructor(frameMax,easing,x,y){this.frameMax=frameMax,this.easing=easing,this.x=x,this.y=y,this.frame=0,this.initX=0,this.initY=0}init(x,y){this.initX=x,this.initY=y}isFinished(){return this.frame>=this.frameMax}step(){this.isFinished()||this.frame++}get(){return{x:this.initX+this.x*this.easing(this.frame/this.frameMax),y:this.initY+this.y*this.easing(this.frame/this.frameMax)}}};exports.WaveRect=class WaveRect{constructor(rect,motion){this.rect=rect,this.motion=motion,this.initX=rect.x,this.initY=rect.y}step(){this.motion.step();const{x:x,y:y}=this.motion.get();this.rect.goto(x,y)}isFinished(){return this.motion.isFinished()}};exports.Wave=class Wave{constructor(){this.rects=[]}add(...wr){this.rects.push(...wr)}toArray(){return this.rects.map(wr=>wr.rect)}eject(){const arr=this.toArray();return this.rects.splice(0,this.rects.length),arr}step(){const finished=[],wip=[];return this.rects.forEach(wr=>{wr.step(),wr.isFinished()?finished.push(wr):wip.push(wr)}),this.rects=wip,finished}};exports.Result=class Result{constructor(){this.rects=[]}add(...r){this.rects.push(...r)}clear(){this.rects.splice(0,this.rects.length)}};const fontsForIos=['"Avenir Next"',"Arial","Verdana",'"Arial Black"',"AmericanTypewriter-Bold",'"Chalkboard SE"',"Copperplate-Bold","GillSans-UltraBold",'"DIN Condensed"'],fontsForAndroid=["Arial","Baskerville","Casual","Courier","Cursive","Fantasy","Helvetica","monospace","sans-serif","sans-serif-black","sans-serif-condensed","sans-serif-condensed-light","sans-serif-light"];class TextLabel{constructor(body,fontFamily,size,color,shadowColor){this.body=body,this.fontFamily=fontFamily,this.size=size,this.color=color,this.shadowColor=shadowColor,this.fonts="android"===Object({NODE_ENV:"production",NODE_PATH:"",PUBLIC_URL:"."}).PLATFORM?fontsForAndroid:fontsForIos,this.sizeInverse=1/size}sizeUp(){this.sizeInverse-=1,this.size=1/this.sizeInverse}sizeDown(){this.sizeInverse+=1,this.size=1/this.sizeInverse}rotateFonts(){this.fonts.push(this.fonts.shift()),this.fontFamily=this.fonts[0]}font(height){return`bold ${height*this.size}px ${this.fontFamily}`}shadowBlur(height){return height*this.size/20}}exports.TextLabel=TextLabel;class Artwork{constructor(id,boxes,text,backgroundColor,createdAt){this.id=id,this.boxes=boxes,this.text=text,this.backgroundColor=backgroundColor,this.createdAt=createdAt}}exports.Artwork=Artwork,exports.createArtwork=function createArtwork(result,text){return new Artwork(uuid.v4(),result.rects,text,"white",Date.now())};class ArtworkCollection{constructor(artworks){this.artworks=artworks}upsert(artwork){const i=this.findIndexById(artwork.id);-1===i?this.artworks.unshift(artwork):this.artworks[i]=artwork}findIndexById(id){return this.artworks.findIndex(artwork=>artwork.id===id)}remove(artwork){this.removeById(artwork.id)}removeById(id){const i=this.findIndexById(id);if(-1===i)throw new Error("Work not found: id="+id);this.artworks.splice(i,1)}}exports.ArtworkCollection=ArtworkCollection;class ArtworkRepository{async get(){const{getItem:getItem}=await storage_1.getStorage(),arr=await getItem("Tententen/artwork-collection")||[];return new ArtworkCollection(arr.map(ArtworkRepository.dtoToArtwork))}async save(artwork){const artworks=await this.get();artworks.upsert(artwork),await this.saveAll(artworks)}async saveAll(artworks){const{setItem:setItem}=await storage_1.getStorage();await setItem("Tententen/artwork-collection",artworks.artworks)}async remove(artwork){const artworks=await this.get();artworks.remove(artwork),await this.saveAll(artworks)}static dtoToArtwork(dto){return new Artwork(dto.id,dto.boxes.map(ArtworkRepository.dtoToRect),ArtworkRepository.dtoToTextLabel(dto.text),dto.backgroundColor,dto.createdAt)}static dtoToTextLabel(dto){return new TextLabel(dto.body,dto.fontFamily,dto.size,dto.color,dto.shadowColor)}static dtoToRect(dto){return new Rect(dto.x,dto.y,dto.width,dto.height,dto.color)}}exports.ArtworkRepository=ArtworkRepository},510:function(module,exports,__webpack_require__){__webpack_require__(511),__webpack_require__(670),__webpack_require__(671),__webpack_require__(822),__webpack_require__(1435),__webpack_require__(1437),__webpack_require__(1442),__webpack_require__(1454),__webpack_require__(1456),__webpack_require__(1458),module.exports=__webpack_require__(1494)},582:function(module,exports){},671:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(370)}},[[510,1,2]]]);
//# sourceMappingURL=main.b6853fac31f241635296.bundle.js.map