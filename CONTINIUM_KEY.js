export const CONTINIUM_KEY = {
    A: 2268,
    B: 756,
    C: 243,
    D: 81,
    E: 9,
    F: 3,

    orbitTokio(t){ return { x: Math.cos(t)*this.A, y: Math.sin(t)*this.A }; },
    orbitCorlu(t){ return { x: Math.cos(t)*this.B, y: Math.sin(t)*this.B }; },
    orbitHH(t){ return { x: Math.cos(t)*this.C*1.01, y: Math.sin(t)*this.C*1.01 }; },

    laufGrund(){ return { x:this.F, y:this.E, z:this.D }; }
};
