function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-CHTKXyMh.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css","assets/ValueWithRandom-DT4LTwNn.js","assets/AnimationOptions-BEsSC0Hd.js","assets/OptionsColor-DC-4w5Ss.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D4bp8kzH.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-CHTKXyMh.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
