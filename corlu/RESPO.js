import { vec } from "./VEC.js";
import { orbitCorlu } from "./Orb.js";

let alpha = 0;

export function respoCorlu(Welt){
    alpha += 0.33;
    if(alpha > 1) alpha = 0;

    const Corlu = orbitCorlu();

    return vec(
        Welt.x * (1 - alpha) + Corlu.x * alpha,
        Welt.y * (1 - alpha) + Corlu.y * alpha
    );
}
