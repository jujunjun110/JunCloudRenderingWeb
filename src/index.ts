import { AFrame } from "aframe";
import moduleFunction from "./modules/module";

console.log(moduleFunction("Hello World!"));
const scene = document.getElementsByTagName("a-scene")[0] as any;
const camera = scene.camera;
const area = document.getElementById("logger")!;

setInterval(() => {
  console.log(camera.position);
  const pos = camera.position;
  const txt = `x: ${pos.x}`;
  area.innerText = txt;
}, 1000);
