function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CurvesPathGenerator-f03ECivH.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-D4bp8kzH.js";const o="curvesPathGenerator";async function s(t,a=!0){const{CurvesPathGenerator:e}=await r(()=>import("./CurvesPathGenerator-f03ECivH.js"),__vite__mapDeps([0,1,2]));await t.addPathGenerator(o,new e,a)}export{o as curvesPathName,s as loadCurvesPath};
