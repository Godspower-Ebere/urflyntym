function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SoundsPlugin-DJ1q6sxM.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-CNoZ-G7i.js";async function _(o,t=!0){const{SoundsPlugin:a}=await n(()=>import("./SoundsPlugin-DJ1q6sxM.js").then(i=>i.S),__vite__mapDeps([0,1,2]));await o.addPlugin(new a(o),t)}export{_ as loadSoundsPlugin};
