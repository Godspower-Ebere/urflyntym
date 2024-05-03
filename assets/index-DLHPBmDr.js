function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArrowDrawer-Br9q_XI3.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-85LqweV3.js";async function _(r,a=!0){const{ArrowDrawer:o}=await t(()=>import("./ArrowDrawer-Br9q_XI3.js"),__vite__mapDeps([0,1,2]));await r.addShape("arrow",new o,a)}export{_ as loadArrowShape};
