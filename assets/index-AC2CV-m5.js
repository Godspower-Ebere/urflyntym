function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DRKuo-ZS.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CNoZ-G7i.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DRKuo-ZS.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};