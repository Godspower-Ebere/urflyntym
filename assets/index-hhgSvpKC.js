function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HsvColorManager-CSy-Fylc.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,a as r}from"./index-D4bp8kzH.js";async function t(){const{HsvColorManager:o}=await a(()=>import("./HsvColorManager-CSy-Fylc.js"),__vite__mapDeps([0,1,2]));r(new o)}export{t as loadHsvColorPlugin};
