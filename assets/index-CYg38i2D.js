function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArrowDrawer-tR8PvWif.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Ckv2XMeu.js";async function _(r,a=!0){const{ArrowDrawer:o}=await t(()=>import("./ArrowDrawer-tR8PvWif.js"),__vite__mapDeps([0,1,2]));await r.addShape("arrow",new o,a)}export{_ as loadArrowShape};
