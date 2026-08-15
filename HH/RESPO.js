import { vec } from "./VEC.js";

let alpha = 0;

export function respo(A, B){
    alpha += 0.33;
    if(alpha > 1) alpha = 0;

    return vec(
        A.x * (1 - alpha) + B.x * alpha,
        A.y * (1 - alpha) + B.y * alpha
    );
}
