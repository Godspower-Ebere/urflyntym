function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportVideoInstance-BRnoeFnV.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D4bp8kzH.js";class r{constructor(t){this.id="export-video",this._engine=t}async getPlugin(t){const{ExportVideoInstance:e}=await i(()=>import("./ExportVideoInstance-BRnoeFnV.js"),__vite__mapDeps([0,1,2]));return new e(t,this._engine)}loadOptions(){}needsPlugin(){return!0}}export{r as ExportVideoPlugin};
