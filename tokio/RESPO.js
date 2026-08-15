import { vec } from "./VEC.js";
import { orbitTokio } from "./Orb.js";

let alpha = 0;

export function respoTokio(Welt){
    alpha += 0.33;
    if(alpha > 1) alpha = 0;

    const Tokio = orbitTokio();

    return vec(
        Welt.x * (1 - alpha) + Tokio.x * alpha,
        Welt.y * (1 - alpha) + Tokio.y * alpha
    );
}
