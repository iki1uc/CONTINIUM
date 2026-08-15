// ==========================================
// CONST_QUANT.js · MIND‑Skala + QUANT‑Kernel
// ==========================================

export const QUANT = {

    // --------------------------------------
    // MIND‑Skala (3 → 9 → 27 → 81 → 243 → 756 → 2268)
    // --------------------------------------
    mind: {
        m3: 3,
        m9: 9,
        m27: 27,
        m81: 81,
        m243: 243,
        m756: 756,
        m2268: 2268
    },

    // --------------------------------------
    // ATOM‑Sequenz
    // --------------------------------------
    atom: {
        seq: ["◉","3","9","◎","81","◆","△","27","▣","3↺"],
        index: 0
    },

    // --------------------------------------
    // QS‑XI‑XTender Orbit‑Geometrie
    // --------------------------------------
    qsxi(){
        return {
            tokio:  { x: this.mind.m2268, y: this.mind.m2268 },
            corlu:  { x: this.mind.m756,  y: this.mind.m756  },
            hh:     { x: this.mind.m243,  y: this.mind.m243  }
        };
    },

    // --------------------------------------
    // Singularität (Schwarzes Loch)
    // --------------------------------------
    singular(pos){
        const r = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
        return {
            s: {
                radius: r * 0.33,
                core: "●",
                warp: r * 0.0099
            }
        };
    },

    // --------------------------------------
    // QUANT Drift / Sprung / Orbit
    // --------------------------------------
    drift(t){
        return Math.sin(t) * this.mind.m81;
    },

    sprung(t){
        return Math.cos(t) * this.mind.m27;
    },

    orbit(t){
        return {
            x: Math.cos(t) * this.mind.m2268,
            y: Math.sin(t) * this.mind.m2268
        };
    },

    // --------------------------------------
    // QUANT Start
    // --------------------------------------
    start(){
        console.log("QUANT.start() → MIND‑Skala geladen.");
        this.atom.index = 0;
    }
};
