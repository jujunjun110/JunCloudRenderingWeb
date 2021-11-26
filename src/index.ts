import { AFrame } from "aframe";
import moduleFunction from "./modules/module";

console.log(moduleFunction("Hello World!"));
const scene = document.getElementsByTagName("a-scene")[0] as any;
const camera = scene.camera;
const area = document.getElementById("logger")!;

setInterval(() => {
  try {
    console.log(camera.position);
    const pos = camera.position;
    const txt = `
        ${area}\n
        ${camera}\n
        x: ${pos.x}
    `;
    area.innerText = txt;
  } catch (e) {
    const _e = e as Error;
    area.innerText = _e.message;
  }
}, 1000);
