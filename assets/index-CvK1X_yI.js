function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SpiralDrawer-C9gtsE4n.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CNoZ-G7i.js";async function o(a,r=!0){const{SpiralDrawer:i}=await t(()=>import("./SpiralDrawer-C9gtsE4n.js"),__vite__mapDeps([0,1,2]));await a.addShape("spiral",new i,r)}export{o as loadSpiralShape};
