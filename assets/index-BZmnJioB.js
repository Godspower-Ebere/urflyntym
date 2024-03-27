function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SVGPathGenerator-CSNye579.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Ckv2XMeu.js";const r="svgPathGenerator";async function _(t,a=!0){const{SVGPathGenerator:e}=await o(()=>import("./SVGPathGenerator-CSNye579.js"),__vite__mapDeps([0,1,2]));await t.addPathGenerator(r,new e,a)}export{_ as loadSVGPath,r as svgPathName};
