function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PathDrawer-DFKc0UHD.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Ckv2XMeu.js";async function _(a,t=!0){const{PathDrawer:e}=await o(()=>import("./PathDrawer-DFKc0UHD.js"),__vite__mapDeps([0,1,2]));await a.addShape("path",new e,t)}export{_ as loadPathShape};
