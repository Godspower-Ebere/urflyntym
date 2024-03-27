function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TrailDrawer-B1JI_U1E.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Ckv2XMeu.js";async function o(a,t=!0){const{TrailDrawer:r}=await i(()=>import("./TrailDrawer-B1JI_U1E.js"),__vite__mapDeps([0,1,2]));await a.addEffect("trail",new r,t)}export{o as loadTrailEffect};
