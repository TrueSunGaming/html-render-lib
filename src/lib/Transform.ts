import type { Point } from "./Vector2";

export type Transform = (e: HTMLElement) => void;

export function mergeTransform(...transforms: Transform[]): Transform {
    return (e: HTMLElement) => {
        for (const i of transforms) i(e);
    }
}

export function transform(property: string, ...value: string[]): Transform {
    return (e: HTMLElement) => e.style.transform += `${property}(${value.join(", ")})`;
}

export function translate(by: Point): Transform {
    return transform("translate", `${by.x}px`, `${by.y}px`);
}

export function rotateRad(rad: number, axis?: "x" | "y" | "z"): Transform {
    return transform(`rotate${axis?.toUpperCase() ?? ""}`, `${rad}rad`);
}

export function rotateDeg(deg: number, axis: "x" | "y" | "z" = "z"): Transform {
    return transform(`rotate${axis?.toUpperCase() ?? ""}`, `${deg}deg`);
}

export function center(): Transform {
    return transform("translate", "-50%", "-50%");
}