function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedRectDrawer-DKwu3F-P.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-85LqweV3.js";async function r(e,t=!0){const{RoundedRectDrawer:a}=await o(()=>import("./RoundedRectDrawer-DKwu3F-P.js"),__vite__mapDeps([0,1,2]));await e.addShape("rounded-rect",new a,t)}export{r as loadRoundedRectShape};
