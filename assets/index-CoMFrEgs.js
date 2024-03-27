function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedRectDrawer-CbEaMliB.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Ckv2XMeu.js";async function r(e,t=!0){const{RoundedRectDrawer:a}=await o(()=>import("./RoundedRectDrawer-CbEaMliB.js"),__vite__mapDeps([0,1,2]));await e.addShape("rounded-rect",new a,t)}export{r as loadRoundedRectShape};
