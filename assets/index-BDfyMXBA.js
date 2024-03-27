function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CanvasMaskPlugin-CZ8darT2.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Ckv2XMeu.js";async function _(a,i=!0){const{CanvasMaskPlugin:n}=await t(()=>import("./CanvasMaskPlugin-CZ8darT2.js"),__vite__mapDeps([0,1,2]));await a.addPlugin(new n,i)}export{_ as loadCanvasMaskPlugin};
