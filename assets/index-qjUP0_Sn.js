function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportImagePlugin-DT5q42fv.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-85LqweV3.js";async function _(t,a=!0){const{ExportImagePlugin:o}=await i(()=>import("./ExportImagePlugin-DT5q42fv.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new o(t),a)}export{_ as loadExportImagePlugin};
