import{v as h}from"./index-D4bp8kzH.js";const f=["webm","ogg","mp4","x-matroska"],v=["vp9","vp9.0","vp8","vp8.0","avc1","av1","h265","h.265","h264","h.264","opus","pcm","aac","mpeg","mp4a"];function l(){const i=s=>MediaRecorder.isTypeSupported(s),t=[];return f.forEach(s=>{const e=`video/${s}`;v.forEach(o=>[`${e};codecs=${o}`,`${e};codecs=${o.toUpperCase()}`].forEach(p=>{i(p)&&t.push(p)})),i(e)&&t.push(e)}),t}class T{constructor(t,s){this._supportedTypes=[],this._exportVideo=async e=>{const o=this._container.canvas.element;if(o)return new Promise(p=>{const c=o.captureStream(e.fps??this._container.actualOptions.fpsLimit),d=0,n=e.mimeType??this._supportedTypes[d],r=new MediaRecorder(c,{mimeType:n}),a=[],u=5;r.addEventListener("dataavailable",m=>{a.push(m.data)}),r.addEventListener("stop",()=>{p(new Blob(a,{type:n}))}),r.start(),setTimeout(()=>{r.stop()},e.duration??u*h)})},this._container=t,this._engine=s,this._supportedTypes=l()}async export(t,s){const e={supported:!1};switch(t){case"video":e.supported=!0,e.blob=await this._exportVideo(s);break}return e}}export{T as ExportVideoInstance};
