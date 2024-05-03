function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HsvColorManager-D7HzkHv3.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,a as r}from"./index-85LqweV3.js";async function t(){const{HsvColorManager:o}=await a(()=>import("./HsvColorManager-D7HzkHv3.js"),__vite__mapDeps([0,1,2]));r(new o)}export{t as loadHsvColorPlugin};
