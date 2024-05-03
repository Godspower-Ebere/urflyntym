function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CurvesPathGenerator-B7yivIlW.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-85LqweV3.js";const o="curvesPathGenerator";async function s(t,a=!0){const{CurvesPathGenerator:e}=await r(()=>import("./CurvesPathGenerator-B7yivIlW.js"),__vite__mapDeps([0,1,2]));await t.addPathGenerator(o,new e,a)}export{o as curvesPathName,s as loadCurvesPath};
