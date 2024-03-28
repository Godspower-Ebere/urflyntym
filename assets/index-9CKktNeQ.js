function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PoissonDiscPlugin-DOPiG40o.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-CNoZ-G7i.js";async function n(i,o=!0){const{PoissonDiscPlugin:t}=await a(()=>import("./PoissonDiscPlugin-DOPiG40o.js"),__vite__mapDeps([0,1,2]));await i.addPlugin(new t(i),o)}export{n as loadPoissonDiscPlugin};
