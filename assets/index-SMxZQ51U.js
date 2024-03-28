function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportJSONPlugin-C64bx0LY.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CNoZ-G7i.js";async function _(t,o=!0){const{ExportJSONPlugin:a}=await i(()=>import("./ExportJSONPlugin-C64bx0LY.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new a(t),o)}export{_ as loadExportJSONPlugin};
