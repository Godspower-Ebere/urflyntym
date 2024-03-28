function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RoundedRectDrawer-BUyntrDQ.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CNoZ-G7i.js";async function r(e,t=!0){const{RoundedRectDrawer:a}=await o(()=>import("./RoundedRectDrawer-BUyntrDQ.js"),__vite__mapDeps([0,1,2]));await e.addShape("rounded-rect",new a,t)}export{r as loadRoundedRectShape};
