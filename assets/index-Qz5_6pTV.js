function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportVideoPlugin-CfAUNu2W.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-Ckv2XMeu.js";async function _(o,t=!0){const{ExportVideoPlugin:i}=await a(()=>import("./ExportVideoPlugin-CfAUNu2W.js"),__vite__mapDeps([0,1,2]));await o.addPlugin(new i(o),t)}export{_ as loadExportVideoPlugin};
