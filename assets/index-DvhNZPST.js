function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedPolygonDrawer-C-le5dUW.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as d}from"./index-Ckv2XMeu.js";async function r(o,a=!0){const{RoundedPolygonDrawer:e}=await d(()=>import("./RoundedPolygonDrawer-C-le5dUW.js"),__vite__mapDeps([0,1,2]));await o.addShape("rounded-polygon",new e,a)}export{r as loadRoundedPolygonShape};
