function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-85LqweV3.js";async function _(a,t=!0){const{HeartDrawer:e}=await r(()=>import("./HeartDrawer-CArOYbE8.js"),__vite__mapDeps([]));await a.addShape("heart",new e,t)}export{_ as loadHeartShape};
