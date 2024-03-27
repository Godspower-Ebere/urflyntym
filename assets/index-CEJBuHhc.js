function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonPathGenerator-CwdNt0Mw.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Ckv2XMeu.js";const n="polygonPathGenerator";async function P(o,t=!0){const{PolygonPathGenerator:a}=await e(()=>import("./PolygonPathGenerator-CwdNt0Mw.js"),__vite__mapDeps([0,1,2]));await o.addPathGenerator(n,new a,t)}export{P as loadPolygonPath,n as polygonPathName};
