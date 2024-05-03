function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZigZagPathGenerator-Jc71brj_.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-85LqweV3.js";const r="zigZagPathGenerator";async function n(a,t=!0){const{ZigZagPathGenerator:e}=await o(()=>import("./ZigZagPathGenerator-Jc71brj_.js"),__vite__mapDeps([0,1,2]));await a.addPathGenerator(r,new e,t)}export{n as loadZigZagPath,r as zigZagPathName};
