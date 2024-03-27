function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZigZagPathGenerator-XkM-niuT.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D4bp8kzH.js";const r="zigZagPathGenerator";async function n(a,t=!0){const{ZigZagPathGenerator:e}=await o(()=>import("./ZigZagPathGenerator-XkM-niuT.js"),__vite__mapDeps([0,1,2]));await a.addPathGenerator(r,new e,t)}export{n as loadZigZagPath,r as zigZagPathName};
