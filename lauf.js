// ==========================================
// LAUF.js · Bewegungs‑Kern für CONTINIUM
// ==========================================
//
// Ergänzt UM.js mit:
// - Lauf‑Achse
// - Lauf‑Vektor
// - Lauf‑Stabilität
// - Lauf‑Resonanz
// - Lauf‑Frame
//
// UM + LAUF = vollständige CONTINIUM‑Ebene
// ==========================================

export const LAUF = {

    // --------------------------------------
    // Grundlauf: 3‑6‑9 Bewegung
    // --------------------------------------
    grundlauf() {
        return {
            x: 3,
            y: 6,
            z: 9,
            frame: "LAUF‑GRUND"
        };
    },

    // --------------------------------------
    // Lauf‑Vektor erzeugen
    // --------------------------------------
    vektor({ x = 3, y = 6, z = 9 } = {}) {
        return {
            vx: x * 0.33,
            vy: y * 0.66,
            vz: z * 0.99,
            frame: "LAUF‑VEKTOR"
        };
    },

    // --------------------------------------
    // Lauf‑Stabilität berechnen
    // --------------------------------------
    stabil({ vx, vy, vz }) {
        const stab = (vx + vy + vz) / 3;
        return {
            stabil: stab,
            frame: "LAUF‑STABIL"
        };
    },

    // --------------------------------------
    // Lauf‑Resonanz erzeugen
    // --------------------------------------
    resonanz({ x = 3, y = 6, z = 9 } = {}) {
        return {
            reso: Math.sin(x) + Math.cos(y) + Math.tan(z / 9),
            frame: "LAUF‑RESONANZ"
        };
    },

    // --------------------------------------
    // Komplettlauf
    // --------------------------------------
    komplett() {
        const g = this.grundlauf();
        const v = this.vektor(g);
        const s = this.stabil(v);
        const r = this.resonanz(g);

        return {
            grund: g,
            vektor: v,
            stabil: s,
            resonanz: r,
            frame: "LAUF‑KOMPLETT"
        };
    }
};
