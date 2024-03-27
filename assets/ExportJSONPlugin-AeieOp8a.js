function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Ckv2XMeu.js";class o{constructor(t){this.id="export-json",this._engine=t}async getPlugin(t){const{ExportJSONInstance:n}=await e(()=>import("./ExportJSONInstance-BectY4fs.js"),__vite__mapDeps([]));return new n(t,this._engine)}loadOptions(){}needsPlugin(){return!0}}export{o as ExportJSONPlugin};
