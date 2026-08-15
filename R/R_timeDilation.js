import { CORE_CONSTANTS } from "../CORE/CORE_constants.js";

export function timeDilation(mass, r){
    const rs = 2 * CORE_CONSTANTS.G * mass / CORE_CONSTANTS.c**2;
    return Math.sqrt(1 - rs / r);
}
