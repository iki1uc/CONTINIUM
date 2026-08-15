export const CONTINIUM_KEY = {

    // ATOM‑Reaktions‑Achsen
    atom: {
        core: "◉",
        a3: 3,
        a9: 9,
        a81: 81,
        a27: 27,
        a756: 756,
        loop: "3↺"
    },

    // ORBIT‑Achsen (Canvas)
    orbit: {
        tokio: 2268,
        corlu: 756,
        hh: 243
    },

    // STABIL‑Achsen (UM + LAUF)
    stabil: {
        grund: 3,
        resonanz: 9,
        drift: 81
    },

    // ATOM‑Sequenz
    sequence(){
        return [
            "◉","3","9","◎","81","◆","△","27","▣","3↺"
        ];
    },

    // Orbit‑Funktionen
    orbitTokio(t){
        return {
            x: Math.cos(t)*this.orbit.tokio,
            y: Math.sin(t)*this.orbit.tokio
        };
    },

    orbitCorlu(t){
        return {
            x: Math.cos(t)*this.orbit.corlu,
            y: Math.sin(t)*this.orbit.corlu
        };
    },

    orbitHH(t){
        return {
            x: Math.cos(t)*this.orbit.hh*1.01,
            y: Math.sin(t)*this.orbit.hh*1.01
        };
    }
};
