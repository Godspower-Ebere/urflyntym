function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bubbler-BT8Qu4sF.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/Ranges-CyhwC0sV.js","assets/OptionsColor-8A9h-hK8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{c as t,g as o,_ as c}from"./index-85LqweV3.js";import{O as u}from"./OptionsColor-8A9h-hK8.js";class n{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const s=t(this.color)?void 0:this.color;this.color=o(e.color,i=>u.create(s,i))}e.size!==void 0&&(this.size=e.size)}}}class l extends n{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class h extends n{load(e){super.load(e),e&&(this.divs=o(e.divs,s=>{const i=new l;return i.load(s),i}))}}async function p(r,e=!0){await r.addInteractor("externalBubble",async s=>{const{Bubbler:i}=await c(()=>import("./Bubbler-BT8Qu4sF.js"),__vite__mapDeps([0,1,2,3,4,5]));return new i(s)},e)}export{h as Bubble,n as BubbleBase,l as BubbleDiv,p as loadExternalBubbleInteraction};
