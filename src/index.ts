import { Component } from "./lib/Component";
import { center } from "./lib/Transform";
import { Vector2 } from "./lib/Vector2";
import { mousePos } from "./lib/mouse";
import "./lib/loop";
import { onDraw } from "./lib/loop";
import { enableDebug } from "./lib/debug";
import "./lib/lib.scss";

enableDebug();

const c: Component<HTMLParagraphElement> = Component.create("p");
c.immediatePosition = new Vector2(0.5, 0.5);
c.el.innerText = "balls";

c.transform = center();

c.render();

onDraw((_: number) => {
    c.movementGoal = mousePos.copy;
});

c.onClick(() => {
    console.log("hi");
});