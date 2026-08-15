let t = 0;

export function orbitTokio(){
    t += 0.0004; // Tokio Geschwindigkeit

    return {
        x: Math.cos(t) * 2268,
        y: Math.sin(t) * 2268
    };
}
