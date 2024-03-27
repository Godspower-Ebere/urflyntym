function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-D4bp8kzH.js";class o{constructor(t){this.id="export-image",this._engine=t}async getPlugin(t){const{ExportImageInstance:e}=await n(()=>import("./ExportImageInstance-omIs5e7V.js"),__vite__mapDeps([]));return new e(t,this._engine)}loadOptions(){}needsPlugin(){return!0}}export{o as ExportImagePlugin};
