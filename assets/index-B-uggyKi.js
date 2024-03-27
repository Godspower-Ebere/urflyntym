function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D4bp8kzH.js";async function _(e,t=!0){const{BubbleDrawer:a}=await o(()=>import("./BubbleDrawer-CU9R-l2v.js"),__vite__mapDeps([]));await e.addEffect("bubble",new a,t)}export{_ as loadBubbleEffect};
