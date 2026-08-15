let t = 0;

export function orbitCorlu(){
    t += 0.0008; // Corlu Geschwindigkeit

    return {
        x: Math.cos(t) * 756,
        y: Math.sin(t) * 756
    };
}
