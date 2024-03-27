function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonPathGenerator-D3hr6QRp.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-D4bp8kzH.js";const n="polygonPathGenerator";async function P(o,t=!0){const{PolygonPathGenerator:a}=await e(()=>import("./PolygonPathGenerator-D3hr6QRp.js"),__vite__mapDeps([0,1,2]));await o.addPathGenerator(n,new a,t)}export{P as loadPolygonPath,n as polygonPathName};
