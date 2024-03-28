function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPolygonShapeGenerator-DQYCGmn7.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css","assets/EmitterShapeBase-4KcS34Iy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CNoZ-G7i.js";async function _(e,r=!0){var t;const o=e,{EmittersPolygonShapeGenerator:a}=await i(()=>import("./EmittersPolygonShapeGenerator-DQYCGmn7.js"),__vite__mapDeps([0,1,2,3]));(t=o.addEmitterShapeGenerator)==null||t.call(o,"polygon",new a),await o.refresh(r)}export{_ as loadEmittersShapePolygon};
