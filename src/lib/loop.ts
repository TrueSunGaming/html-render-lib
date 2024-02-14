import { Scene } from "./Scene";

let lastUpdate: number = Date.now();

const loopListen: ((delta: number) => void)[] = [];

function draw() {
    let delta: number = (Date.now() - lastUpdate) / 1000;

    for (const i of loopListen) i(delta);
    for (const i of Scene.renderedScenes) i.update(delta);

    lastUpdate = Date.now();

    requestAnimationFrame(draw);
}

draw();

export function onDraw(f: (delta: number) => void) {
    loopListen.push(f);
}