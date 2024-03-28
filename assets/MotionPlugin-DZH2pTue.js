function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MotionInstance-2twpAAHU.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CNoZ-G7i.js";class r{constructor(){this.factor=4,this.value=!0}load(e){e&&(e.factor!==void 0&&(this.factor=e.factor),e.value!==void 0&&(this.value=e.value))}}class s{constructor(){this.disable=!1,this.reduce=new r}load(e){e&&(e.disable!==void 0&&(this.disable=e.disable),this.reduce.load(e.reduce))}}class u{constructor(e){this.id="motion",this._engine=e}async getPlugin(e){const{MotionInstance:i}=await o(()=>import("./MotionInstance-2twpAAHU.js"),__vite__mapDeps([0,1,2]));return new i(e,this._engine)}loadOptions(e,i){if(!this.needsPlugin())return;let t=e.motion;t!=null&&t.load||(e.motion=t=new s),t.load(i==null?void 0:i.motion)}needsPlugin(){return!0}}export{u as MotionPlugin};
