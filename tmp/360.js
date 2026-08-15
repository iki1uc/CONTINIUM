export const MATRIX_360 = {

    A: {
        sign: "A◉",
        axis: 756,
        role: "Orbit‑Energie",
        wette: 0.91,
        slide: 0.22,
        calc(t){ return Math.sin(t) * this.axis; }
    },

    CORE: {
        sign: "CORE◆",
        axis: 81,
        role: "Operator‑Energie",
        wette: 0.66,
        slide: 0.11,
        calc(t){ return Math.cos(t) * this.axis; }
    },

    G: {
        sign: "G△",
        axis: 27,
        role: "Vector‑Ereignis",
        wette: 0.33,
        slide: 0.77,
        calc(t){ return Math.tan(t) * this.axis; }
    },

    H: {
        sign: "H◎",
        axis: 243,
        role: "Hyperframe‑Energie",
        wette: 0.72,
        slide: 0.18,
        calc(t){ return Math.sin(t*0.33) * this.axis; }
    },

    HH: {
        sign: "HH▣",
        axis: 3,
        role: "Resonanz‑Ereignis",
        wette: 0.09,
        slide: 0.55,
        calc(t){ return Math.cos(t*0.99) * this.axis; }
    },

    Q: {
        sign: "Q◉",
        axis: 9,
        role: "Quantum‑Ereignis",
        wette: 0.12,
        slide: 0.61,
        calc(t){ return Math.sin(t*0.66) * this.axis; }
    },

    R: {
        sign: "R↺",
        axis: 2268,
        role: "Orbit‑Physik‑Energie",
        wette: 1.00,
        slide: 0.14,
        calc(t){ return Math.cos(t*0.0099) * this.axis; }
    },

    S: {
        sign: "S◆",
        axis: 81,
        role: "Orbit‑Engine‑Energie",
        wette: 0.64,
        slide: 0.19,
        calc(t){ return Math.sin(t*1.01) * this.axis; }
    },

    UI: {
        sign: "UI◎",
        axis: 243,
        role: "Frame‑Energie",
        wette: 0.71,
        slide: 0.16,
        calc(t){ return Math.cos(t*0.33) * this.axis; }
    },

    Z: {
        sign: "Z◉",
        axis: 756,
        role: "Zone‑Ereignis",
        wette: 0.28,
        slide: 0.93,
        calc(t){ return Math.sin(t*0.22) * this.axis; }
    }
};
