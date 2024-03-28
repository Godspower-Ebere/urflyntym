function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SVGPathGenerator-Xd2wwO1F.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CNoZ-G7i.js";const r="svgPathGenerator";async function _(t,a=!0){const{SVGPathGenerator:e}=await o(()=>import("./SVGPathGenerator-Xd2wwO1F.js"),__vite__mapDeps([0,1,2]));await t.addPathGenerator(r,new e,a)}export{_ as loadSVGPath,r as svgPathName};
