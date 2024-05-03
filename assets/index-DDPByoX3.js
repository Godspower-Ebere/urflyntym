function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersCanvasShapeGenerator-CcwazpvW.js","assets/index-85LqweV3.js","assets/index-C0U-C8Ti.css","assets/EmitterShapeBase-4KcS34Iy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-85LqweV3.js";async function s(e,r=!0){var t;const a=e,{EmittersCanvasShapeGenerator:o}=await i(()=>import("./EmittersCanvasShapeGenerator-CcwazpvW.js"),__vite__mapDeps([0,1,2,3]));(t=a.addEmitterShapeGenerator)==null||t.call(a,"canvas",new o),await a.refresh(r)}export{s as loadEmittersShapeCanvas};
