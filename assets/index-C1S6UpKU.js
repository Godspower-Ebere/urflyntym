function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SVGPathGenerator-BV3basVQ.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-D4bp8kzH.js";const r="svgPathGenerator";async function _(t,a=!0){const{SVGPathGenerator:e}=await o(()=>import("./SVGPathGenerator-BV3basVQ.js"),__vite__mapDeps([0,1,2]));await t.addPathGenerator(r,new e,a)}export{_ as loadSVGPath,r as svgPathName};
