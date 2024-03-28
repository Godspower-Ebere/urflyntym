function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedPolygonDrawer-5pSeGDOL.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as d}from"./index-CNoZ-G7i.js";async function r(o,a=!0){const{RoundedPolygonDrawer:e}=await d(()=>import("./RoundedPolygonDrawer-5pSeGDOL.js"),__vite__mapDeps([0,1,2]));await o.addShape("rounded-polygon",new e,a)}export{r as loadRoundedPolygonShape};
