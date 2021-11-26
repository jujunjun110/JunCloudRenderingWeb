import { AFrame } from "aframe";
import moduleFunction from "./modules/module";
function main() {
  const area = document.getElementById("logger")!;
  console.log("v12");
  try {
    console.log(moduleFunction("Hello World!"));

    const scene = document.getElementsByTagName("a-scene")[0] as any;
    const camera = scene.camera;

    setInterval(() => {
      console.log(camera.position);
      const pos = camera.position;
      const txt = `
        ${area}\n
        ${camera}\n
        x: ${pos.x}
    `;
      area.innerText = txt;
      area.innerText +=
        document.getElementsByTagName("a-scene")[0].camera.position!;
    }, 1000);
  } catch (e) {
    const _e = e as Error;
  }
}
main();
