function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonPathGenerator-BgZDU4mJ.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-85LqweV3.js";const n="polygonPathGenerator";async function P(o,t=!0){const{PolygonPathGenerator:a}=await e(()=>import("./PolygonPathGenerator-BgZDU4mJ.js"),__vite__mapDeps([0,1,2]));await o.addPathGenerator(n,new a,t)}export{P as loadPolygonPath,n as polygonPathName};
