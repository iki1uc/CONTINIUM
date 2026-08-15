import { curvature } from "../R/R_curvature.js";
import { timeDilation } from "../R/R_timeDilation.js";
import { orbitVelocity } from "../R/R_orbitphysics.js";

export function realMeasure(mass, r){
    return {
        curvature: curvature(mass, r),
        velocity: orbitVelocity(mass, r),
        timedilation: timeDilation(mass, r)
    };
}
