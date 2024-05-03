function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SpiralDrawer-Dv6esHSH.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-85LqweV3.js";async function o(a,r=!0){const{SpiralDrawer:i}=await t(()=>import("./SpiralDrawer-Dv6esHSH.js"),__vite__mapDeps([0,1,2]));await a.addShape("spiral",new i,r)}export{o as loadSpiralShape};
