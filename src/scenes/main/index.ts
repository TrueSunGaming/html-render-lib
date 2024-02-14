import { Component } from "../../lib/Component";
import { Scene } from "../../lib/Scene";
import { center } from "../../lib/Transform";
import { Vector2 } from "../../lib/Vector2";
import vite from "../vite";
import "./style.scss";

const scene: Scene = new Scene("main");
export default scene.id;

const title: Component<HTMLParagraphElement> = Component.create("p", "title");
scene.components.push(title);

title.immediatePosition = new Vector2(0.5, 0.2);
title.el.innerText = "Hello, world!";
title.transform = center();

const switchButton: Component<HTMLParagraphElement> = Component.create("p", "switchButton");
scene.components.push(switchButton);

switchButton.immediatePosition = new Vector2(0.5, 0.5);
switchButton.el.innerText = "click me!!!!!";
switchButton.transform = center();
switchButton.onClick(() => Scene.switchScene(vite));

scene.render();
