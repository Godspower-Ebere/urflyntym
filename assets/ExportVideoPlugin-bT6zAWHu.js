function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ExportVideoInstance-BuJc_Ros.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CNoZ-G7i.js";class r{constructor(t){this.id="export-video",this._engine=t}async getPlugin(t){const{ExportVideoInstance:e}=await i(()=>import("./ExportVideoInstance-BuJc_Ros.js"),__vite__mapDeps([0,1,2]));return new e(t,this._engine)}loadOptions(){}needsPlugin(){return!0}}export{r as ExportVideoPlugin};
