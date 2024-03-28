function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArrowDrawer-CAzENmoc.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CNoZ-G7i.js";async function _(r,a=!0){const{ArrowDrawer:o}=await t(()=>import("./ArrowDrawer-CAzENmoc.js"),__vite__mapDeps([0,1,2]));await r.addShape("arrow",new o,a)}export{_ as loadArrowShape};
