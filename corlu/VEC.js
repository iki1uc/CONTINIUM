export function vec(x, y){
    return { x, y };
}

export function add(a, b){
    return vec(a.x + b.x, a.y + b.y);
}

export function sub(a, b){
    return vec(a.x - b.x, a.y - b.y);
}

export function mul(a, s){
    return vec(a.x * s, a.y * s);
}

export function len(a){
    return Math.hypot(a.x, a.y);
}
