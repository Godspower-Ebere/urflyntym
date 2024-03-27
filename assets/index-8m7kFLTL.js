function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportImagePlugin-Dsg_d1EA.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Ckv2XMeu.js";async function _(t,a=!0){const{ExportImagePlugin:o}=await i(()=>import("./ExportImagePlugin-Dsg_d1EA.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new o(t),a)}export{_ as loadExportImagePlugin};
