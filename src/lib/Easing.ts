export enum EasingType {
    Linear,
    Lerp
}

export interface Easing {
    type: EasingType;
    rate: number;
}