function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SoundsPlugin-D4CHzgDH.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-85LqweV3.js";async function _(o,t=!0){const{SoundsPlugin:a}=await n(()=>import("./SoundsPlugin-D4CHzgDH.js").then(i=>i.S),__vite__mapDeps([0,1,2]));await o.addPlugin(new a(o),t)}export{_ as loadSoundsPlugin};
