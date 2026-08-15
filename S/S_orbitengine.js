export function orbit(p){
    return {
        x: Math.cos(p.r) * p.r,
        y: Math.sin(p.r) * p.r
    };
}
