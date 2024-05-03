function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/MotionPlugin-BnDQYKAq.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-85LqweV3.js";async function _(o,t=!0){const{MotionPlugin:i}=await a(()=>import("./MotionPlugin-BnDQYKAq.js"),__vite__mapDeps([0,1,2]));await o.addPlugin(new i(o),t)}export{_ as loadMotionPlugin};
