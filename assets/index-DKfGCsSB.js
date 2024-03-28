function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TrailDrawer-FdlsNn5i.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CNoZ-G7i.js";async function o(a,t=!0){const{TrailDrawer:r}=await i(()=>import("./TrailDrawer-FdlsNn5i.js"),__vite__mapDeps([0,1,2]));await a.addEffect("trail",new r,t)}export{o as loadTrailEffect};
