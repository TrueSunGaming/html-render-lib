import { Component } from "./lib/Component";
import { center } from "./lib/Transform";
import { Vector2 } from "./lib/Vector2";
import "./lib/loop";
import { enableDebug } from "./lib/debug";
import "./lib/lib.scss";
import { Scene } from "./lib/Scene";

enableDebug();

const c1: Component<HTMLParagraphElement> = Component.create("p");
c1.immediatePosition = new Vector2(0.5, 0.5);
c1.el.innerText = "balls";
c1.transform = center();

const c2: Component<HTMLParagraphElement> = Component.create("p");
c2.immediatePosition = new Vector2(0.5, 0.5);
c2.el.innerText = "balls2";
c2.transform = center();

const s1: Scene = new Scene();
s1.components.push(c1);
s1.render();

const s2: Scene = new Scene();
s2.components.push(c2);
s2.render();

c1.onClick(() => Scene.switchScene(1));
c2.onClick(() => Scene.switchScene(0));

Scene.switchScene(1);