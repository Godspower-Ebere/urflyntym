function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PerlinNoiseGenerator-D5uxl4r3.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-CNoZ-G7i.js";const i="perlinNoise";async function n(e,o=!0){const{PerlinNoiseGenerator:t}=await a(()=>import("./PerlinNoiseGenerator-D5uxl4r3.js"),__vite__mapDeps([0,1,2]));await e.addPathGenerator(i,new t,o)}export{n as loadPerlinNoisePath,i as perlinNoisePathName};
