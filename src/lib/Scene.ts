import { Component } from "./Component";

export class Scene {
    private static nextId = 0;
    private static currentScene = -1;
    static renderedScenes: Scene[] = [];

    components: Component<HTMLElement>[] = [];
    rendered = false;
    readonly id: number;
    readonly styleNamespace: string;

    constructor(styleNamespace: string = "") {
        this.id = Scene.nextId++;
        this.styleNamespace = styleNamespace;
    }

    static switchScene(id: number) {
        Scene.currentScene = id;
    }

    update(delta: number): void {
        if (Scene.currentScene != this.id) {
            for (const i of this.components) i.unrender();
            return;
        }

        for (const i of this.components) {
            i.render();
            i.update(delta);
        }
    }
    
    render(): void {
        for (const i of this.components) {
            i.render();
            
            if (!i.el.classList.contains(`scene-${this.styleNamespace}`)) i.el.classList.add(`scene-${this.styleNamespace}`);
        }

        this.rendered = true;
        Scene.renderedScenes.push(this);
    }
}