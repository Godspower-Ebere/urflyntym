function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HsvColorManager-2acAy3u7.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,a as r}from"./index-Ckv2XMeu.js";async function t(){const{HsvColorManager:o}=await a(()=>import("./HsvColorManager-2acAy3u7.js"),__vite__mapDeps([0,1,2]));r(new o)}export{t as loadHsvColorPlugin};
