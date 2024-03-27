function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPathShapeGenerator-C80Sux_9.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css","assets/EmitterShapeBase-4KcS34Iy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-D4bp8kzH.js";async function h(e,r=!0){var a;const t=e,{EmittersPathShapeGenerator:o}=await i(()=>import("./EmittersPathShapeGenerator-C80Sux_9.js"),__vite__mapDeps([0,1,2,3]));(a=t.addEmitterShapeGenerator)==null||a.call(t,"path",new o),await t.refresh(r)}export{h as loadEmittersShapePath};
