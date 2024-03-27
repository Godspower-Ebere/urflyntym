function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonMaskInstance-DEeVdKIv.js","assets/index-D4bp8kzH.js","assets/index-Bb1n9Jwh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as o,a1 as l,d as h,_ as r}from"./index-D4bp8kzH.js";import{O as t}from"./OptionsColor-DC-4w5Ss.js";class f{constructor(){this.color=new t,this.width=.5,this.opacity=1}load(e){e&&(this.color=t.create(this.color,e.color),o(this.color.value)&&(this.opacity=l(this.color.value)??this.opacity),e.opacity!==void 0&&(this.opacity=e.opacity),e.width!==void 0&&(this.width=e.width))}}class u{constructor(){this.enable=!1,this.stroke=new f}load(e){if(!e)return;e.enable!==void 0&&(this.enable=e.enable);const i=e.stroke;this.stroke.load(i)}}class d{constructor(){this.arrangement="one-per-point"}load(e){e&&e.arrangement!==void 0&&(this.arrangement=e.arrangement)}}class c{constructor(){this.path=[],this.size={height:0,width:0}}load(e){e&&(e.path!==void 0&&(this.path=e.path),e.size!==void 0&&(e.size.width!==void 0&&(this.size.width=e.size.width),e.size.height!==void 0&&(this.size.height=e.size.height)))}}class g{constructor(){this.radius=10,this.type="path"}load(e){e&&(e.radius!==void 0&&(this.radius=e.radius),e.type!==void 0&&(this.type=e.type))}}class y{constructor(){this.draw=new u,this.enable=!1,this.inline=new d,this.move=new g,this.scale=1,this.type="none"}load(e){e&&(this.draw.load(e.draw),this.inline.load(e.inline),this.move.load(e.move),e.scale!==void 0&&(this.scale=e.scale),e.type!==void 0&&(this.type=e.type),e.enable!==void 0?this.enable=e.enable:this.enable=this.type!=="none",e.url!==void 0&&(this.url=e.url),e.data!==void 0&&(o(e.data)?this.data=e.data:(this.data=new c,this.data.load(e.data))),e.position!==void 0&&(this.position=h({},e.position)))}}class w{constructor(e){this.id="polygonMask",this._engine=e}async getPlugin(e){const{PolygonMaskInstance:i}=await r(()=>import("./PolygonMaskInstance-DEeVdKIv.js"),__vite__mapDeps([0,1,2]));return new i(e,this._engine)}loadOptions(e,i){if(!this.needsPlugin(e)&&!this.needsPlugin(i))return;let n=e.polygon;(n==null?void 0:n.load)===void 0&&(e.polygon=n=new y),n.load(i==null?void 0:i.polygon)}needsPlugin(e){var i,n;return((i=e==null?void 0:e.polygon)==null?void 0:i.enable)??(((n=e==null?void 0:e.polygon)==null?void 0:n.type)!==void 0&&e.polygon.type!=="none")}}export{w as PolygonMaskPlugin};
