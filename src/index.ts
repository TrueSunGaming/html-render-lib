import "./lib/loop";
import "./lib/lib.scss";
import { enableDebug } from "./lib/debug";
import { Scene } from "./lib/Scene";
import main from "./scenes/main";

enableDebug();

Scene.switchScene(main);