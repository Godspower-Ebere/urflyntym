function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SoundsPlugin-BoNVC7TT.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-D4bp8kzH.js";async function _(o,t=!0){const{SoundsPlugin:a}=await n(()=>import("./SoundsPlugin-BoNVC7TT.js").then(i=>i.S),__vite__mapDeps([0,1,2]));await o.addPlugin(new a(o),t)}export{_ as loadSoundsPlugin};
