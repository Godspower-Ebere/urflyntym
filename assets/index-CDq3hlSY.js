function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CanvasMaskPlugin-BeBXXlXI.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-85LqweV3.js";async function _(a,i=!0){const{CanvasMaskPlugin:n}=await t(()=>import("./CanvasMaskPlugin-BeBXXlXI.js"),__vite__mapDeps([0,1,2]));await a.addPlugin(new n,i)}export{_ as loadCanvasMaskPlugin};
