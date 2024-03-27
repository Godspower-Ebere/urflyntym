function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportJSONPlugin-AeieOp8a.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Ckv2XMeu.js";async function _(t,o=!0){const{ExportJSONPlugin:a}=await i(()=>import("./ExportJSONPlugin-AeieOp8a.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new a(t),o)}export{_ as loadExportJSONPlugin};
