function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CogDrawer-19bQeQ_m.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-85LqweV3.js";async function _(a,o=!0){const{CogDrawer:t}=await e(()=>import("./CogDrawer-19bQeQ_m.js"),__vite__mapDeps([0,1,2]));await a.addShape("cog",new t,o)}export{_ as loadCogShape};
