function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportImagePlugin-8hmxRu-f.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CNoZ-G7i.js";async function _(t,a=!0){const{ExportImagePlugin:o}=await i(()=>import("./ExportImagePlugin-8hmxRu-f.js"),__vite__mapDeps([0,1,2]));await t.addPlugin(new o(t),a)}export{_ as loadExportImagePlugin};
