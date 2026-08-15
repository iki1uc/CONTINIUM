let t = 0;

export function orbit(r, speed){
    t += speed;
    return {
        x: Math.cos(t) * r,
        y: Math.sin(t) * r
    };
}
