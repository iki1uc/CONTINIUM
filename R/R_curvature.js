import { CORE_CONSTANTS } from "../CORE/CORE_constants.js";

export function curvature(mass, r){
    return (2 * CORE_CONSTANTS.G * mass) / (CORE_CONSTANTS.c**2 * r**3);
}
