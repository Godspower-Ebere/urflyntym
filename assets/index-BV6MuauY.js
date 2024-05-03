function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PathDrawer-B1nfTL37.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-85LqweV3.js";async function _(a,t=!0){const{PathDrawer:e}=await o(()=>import("./PathDrawer-B1nfTL37.js"),__vite__mapDeps([0,1,2]));await a.addShape("path",new e,t)}export{_ as loadPathShape};
