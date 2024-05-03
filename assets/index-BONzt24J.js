function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TrailDrawer-BoIPUyyJ.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-85LqweV3.js";async function o(a,t=!0){const{TrailDrawer:r}=await i(()=>import("./TrailDrawer-BoIPUyyJ.js"),__vite__mapDeps([0,1,2]));await a.addEffect("trail",new r,t)}export{o as loadTrailEffect};
