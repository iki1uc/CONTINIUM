import { CORE_CONSTANTS } from "../CORE/CORE_constants.js";

export function orbitVelocity(mass, r){
    return Math.sqrt(CORE_CONSTANTS.G * mass / r);
}

