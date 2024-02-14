import { Vector2 } from "./Vector2";

export const mousePos: Vector2 = new Vector2();
export let mouseDown = false;

addEventListener("mousemove", (e) => {
    mousePos.x = e.clientX / window.innerWidth;
    mousePos.y = e.clientY / window.innerHeight;
});

addEventListener("mousedown", () => mouseDown = true);
addEventListener("mouseup", () => mouseDown = false);