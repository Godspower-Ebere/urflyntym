function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CanvasMaskPlugin-BD-prgiB.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CNoZ-G7i.js";async function _(a,i=!0){const{CanvasMaskPlugin:n}=await t(()=>import("./CanvasMaskPlugin-BD-prgiB.js"),__vite__mapDeps([0,1,2]));await a.addPlugin(new n,i)}export{_ as loadCanvasMaskPlugin};
