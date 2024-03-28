function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonPathGenerator-CCtqDdpe.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CNoZ-G7i.js";const n="polygonPathGenerator";async function P(o,t=!0){const{PolygonPathGenerator:a}=await e(()=>import("./PolygonPathGenerator-CCtqDdpe.js"),__vite__mapDeps([0,1,2]));await o.addPathGenerator(n,new a,t)}export{P as loadPolygonPath,n as polygonPathName};
