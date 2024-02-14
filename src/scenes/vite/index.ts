import { Component } from "../../lib/Component";
import { Scene } from "../../lib/Scene";
import { center } from "../../lib/Transform";
import { Vector2 } from "../../lib/Vector2";
import "./style.scss"

const scene: Scene = new Scene("vite");
export default scene.id;

const title: Component<HTMLParagraphElement> = Component.create("p", "title");
scene.components.push(title);

title.immediatePosition = new Vector2(0.5, 0.2);
title.el.innerText = "Hello, Vite!";
title.transform = center();

const viteLogo: Component<HTMLImageElement> = Component.create("img", "viteLogo");
scene.components.push(viteLogo);

viteLogo.el.src = "/vite.svg";
viteLogo.immediatePosition = new Vector2(0.5, 0.5);
viteLogo.transform = center();

scene.render();