function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PathDrawer-CPvUHOUa.js","assets/index-CNoZ-G7i.js","assets/index-C7TG8F21.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-CNoZ-G7i.js";async function _(a,t=!0){const{PathDrawer:e}=await o(()=>import("./PathDrawer-CPvUHOUa.js"),__vite__mapDeps([0,1,2]));await a.addShape("path",new e,t)}export{_ as loadPathShape};
