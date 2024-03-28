function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CogDrawer-vwrCICwR.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CNoZ-G7i.js";async function _(a,o=!0){const{CogDrawer:t}=await e(()=>import("./CogDrawer-vwrCICwR.js"),__vite__mapDeps([0,1,2]));await a.addShape("cog",new t,o)}export{_ as loadCogShape};
