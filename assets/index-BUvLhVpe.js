function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SpiralDrawer-DfsgrqUK.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Ckv2XMeu.js";async function o(a,r=!0){const{SpiralDrawer:i}=await t(()=>import("./SpiralDrawer-DfsgrqUK.js"),__vite__mapDeps([0,1,2]));await a.addShape("spiral",new i,r)}export{o as loadSpiralShape};
