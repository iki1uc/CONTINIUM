import { len, sub } from "./VEC.js";

export function distance(a, b){
    return len(sub(a, b));
}

export function triangle(A, B, C){
    return {
        AB: distance(A, B),
        BC: distance(B, C),
        CA: distance(C, A)
    };
}
