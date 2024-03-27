function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportVideoInstance-lcTvU8um.js","assets/index-Ckv2XMeu.js","assets/index-DACz3SJR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Ckv2XMeu.js";class r{constructor(t){this.id="export-video",this._engine=t}async getPlugin(t){const{ExportVideoInstance:e}=await i(()=>import("./ExportVideoInstance-lcTvU8um.js"),__vite__mapDeps([0,1,2]));return new e(t,this._engine)}loadOptions(){}needsPlugin(){return!0}}export{r as ExportVideoPlugin};
