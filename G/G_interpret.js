import { G_transform } from "./G_transform.js";

export function G_interpret(real){
    return {
        curvature: G_transform(real.curvature),
        velocity: G_transform(real.velocity),
        timedilation: G_transform(real.timedilation)
    };
}
