function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportJSONPlugin-Bl2yxBZk.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-85LqweV3.js";async function _(t,o=!0){const{ExportJSONPlugin:a}=await i(()=>import("./ExportJSONPlugin-Bl2yxBZk.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new a(t),o)}export{_ as loadExportJSONPlugin};
