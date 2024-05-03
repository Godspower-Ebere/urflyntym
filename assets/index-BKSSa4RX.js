function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedPolygonDrawer-BKck6Q_l.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as d}from"./index-85LqweV3.js";async function r(o,a=!0){const{RoundedPolygonDrawer:e}=await d(()=>import("./RoundedPolygonDrawer-BKck6Q_l.js"),__vite__mapDeps([0,1,2]));await o.addShape("rounded-polygon",new e,a)}export{r as loadRoundedPolygonShape};
