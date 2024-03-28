function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ZigZagPathGenerator-DDwX0f_v.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CNoZ-G7i.js";const r="zigZagPathGenerator";async function n(a,t=!0){const{ZigZagPathGenerator:e}=await o(()=>import("./ZigZagPathGenerator-DDwX0f_v.js"),__vite__mapDeps([0,1,2]));await a.addPathGenerator(r,new e,t)}export{n as loadZigZagPath,r as zigZagPathName};
