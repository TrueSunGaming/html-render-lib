export const animatedValues: Map<string, [number, number, number]> = new Map();

export function animateValue(name: string, start: number, end: number, rate: number): void {
    animatedValues.set(name, [start, end, rate]);
}

export function getAnimatedValue(name: string): number | undefined {
    return animatedValues.get(name)?.[0];
}

