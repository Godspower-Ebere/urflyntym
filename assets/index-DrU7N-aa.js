function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CogDrawer-yzhoVzCC.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Ckv2XMeu.js";async function _(a,o=!0){const{CogDrawer:t}=await e(()=>import("./CogDrawer-yzhoVzCC.js"),__vite__mapDeps([0,1,2]));await a.addShape("cog",new t,o)}export{_ as loadCogShape};
