import { Vector2 } from "./Vector2";
import type { Transform } from "./Transform";
import { type Easing, EasingType } from "./Easing";
import { debug } from "./debug";

export class Component<T extends HTMLElement> {
    static renderedComponents: Component<HTMLElement>[] = [];
    private static nextId = 0;

    el: T;
    transform: Transform = (_: HTMLElement) => {};
    movementGoal: Vector2;
    movementEasing: Easing = {
        type: EasingType.Lerp,
        rate: 0.9
    };

    private clickable = false;
    private rendered = false;
    private realPosition: Vector2;
    private clickListeners: (() => void)[] = [];
    readonly id: number;

    constructor(el: T, position: Vector2) {
        this.el = el.cloneNode(false) as T;
        this.realPosition = position;
        this.movementGoal = position;
        this.id = Component.nextId++;
        
        this.el.addEventListener("click", () => {
            for (const listener of this.clickListeners) {
                listener();
            }    
        });
    }

    set immediatePosition(pos: Vector2) {
        this.realPosition = pos;
        this.movementGoal = pos;
    }

    get position(): Vector2 {
        return this.realPosition.copy;
    }

    set easingRate(rate: number) {
        this.movementEasing.rate = rate;
    }

    set easingType(type: EasingType) {
        this.movementEasing.type = type;
    }

    update(delta: number): void {
        this.realPosition.easeToAssign({
            type: this.movementEasing.type,
            rate: 1 - ((1 - this.movementEasing.rate) ** delta)
        }, this.movementGoal);

        this.el.style.userSelect = "none";
        this.el.draggable = false;
        this.el.style.top = `${this.realPosition.y * 100}vh`;
        this.el.style.left = `${this.realPosition.x * 100}vw`;
        this.el.style.cursor = this.clickable ? "pointer" : "default";
        this.el.style.outline = debug ? "1px solid blue" : "";
        this.el.style.margin = "0";
        
        this.applyTransform();
    }
    
    applyTransform(): void {
        this.el.style.transform = "";
        this.transform(this.el);
	}

    render(): void {
        if (this.rendered) return;

        this.el.style.position = "fixed";
        this.update(0);

        document.body.appendChild(this.el);
        this.rendered = true;
        Component.renderedComponents.push(this);
    }

    unrender(): void {
        if (!this.rendered) return;

        this.el.remove();

        const index: number = Component.renderedComponents.findIndex((v) => v.id == this.id);
        Component.renderedComponents.splice(index, 1);
        this.rendered = false;
    }

    onClick(f: () => void): void {
        this.clickListeners.push(f);
        this.clickable = true;
    }

    static create<T extends keyof HTMLElementTagNameMap>(type: T): Component<HTMLElementTagNameMap[T]> {
        return new Component(document.createElement(type), new Vector2());
    }
}