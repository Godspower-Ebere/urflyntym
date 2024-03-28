function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportVideoPlugin-bT6zAWHu.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-CNoZ-G7i.js";async function _(o,t=!0){const{ExportVideoPlugin:i}=await a(()=>import("./ExportVideoPlugin-bT6zAWHu.js"),__vite__mapDeps([0,1,2]));await o.addPlugin(new i(o),t)}export{_ as loadExportVideoPlugin};
