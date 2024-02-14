import { Vector2 } from "./Vector2";

export class Rect2 {
    pos: Vector2;
    size: Vector2;

    constructor(pos: Vector2, size: Vector2) {
        this.pos = pos;
        this.size = size;
    }
}