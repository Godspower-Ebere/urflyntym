import{s}from"./index-CNoZ-G7i.js";class i{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){e&&(e.count!==void 0&&(this.count=s(e.count)),e.enable!==void 0&&(this.enable=e.enable),e.speed!==void 0&&(this.speed=s(e.speed)),e.decay!==void 0&&(this.decay=s(e.decay)),e.delay!==void 0&&(this.delay=s(e.delay)),e.sync!==void 0&&(this.sync=e.sync))}}class o extends i{constructor(){super(),this.mode="auto",this.startValue="random"}load(e){super.load(e),e&&(e.mode!==void 0&&(this.mode=e.mode),e.startValue!==void 0&&(this.startValue=e.startValue))}}export{i as A,o as R};
