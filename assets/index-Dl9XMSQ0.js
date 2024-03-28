function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HsvColorManager-B3qfRSu9.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a,a as r}from"./index-CNoZ-G7i.js";async function t(){const{HsvColorManager:o}=await a(()=>import("./HsvColorManager-B3qfRSu9.js"),__vite__mapDeps([0,1,2]));r(new o)}export{t as loadHsvColorPlugin};
