// ======================================================
// UHRWERK.js · CONTINIUM Clockwork Engine
// ======================================================

export const UHRWERK = {

    // Haupttakt (Master Clock)
    tick(t){
        return {
            t,
            pulse: Math.sin(t * 2.0),
            beat: Math.cos(t * 1.5),
            gear: (Math.sin(t * 0.5) + Math.cos(t * 0.25)) * 0.5
        };
    },

    // Zahnrad 1: QUANT‑Impuls
    quantPulse(qsxi){
        return {
            tokio: qsxi.tokio.x + qsxi.tokio.y,
            corlu: qsxi.corlu.x - qsxi.corlu.y,
            hh:    qsxi.hh.x * qsxi.hh.y
        };
    },

    // Zahnrad 2: TMP‑Matrix‑Takt
    tmpGear(tmp){
        let sum = 0;
        for(const k in tmp){
            sum += tmp[k];
        }
        return sum / Object.keys(tmp).length;
    },

    // Zahnrad 3: Orbit‑Schwungrad
    orbitWheel(pos){
        return Math.sqrt(pos.x*pos.x + pos.y*pos.y + pos.z*pos.z);
    },

    // Zahnrad 4: Singularitäts‑Pendulum
    pendulum(singular){
        return singular.s.radius % 9;
    },

    // Uhrwerk‑Fusion
    fusion(scene){
        return {
            tick: this.tick(scene.t),
            quant: this.quantPulse(scene.qsxi),
            tmp: this.tmpGear(scene.tmp),
            orbit: this.orbitWheel(scene.orbit),
            pendulum: this.pendulum(scene.singular)
        };
    }
};
