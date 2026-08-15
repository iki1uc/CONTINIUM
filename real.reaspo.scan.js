/* ======================================================
   RUN 8 — Digitaler Kaltstart
   ====================================================== */
function RUN8(){

    // Orbit-Reset
    CONTINIUM_KEY.t = 0;

    // QUANT-Reset
    QUANT.atom.index = 0;

    // Singularität-Reset
    QUANT.singularRadius = 0;

    // Lauf-Reset
    LAUF.reset();

    // Pipeline-Reset
    PIPELINE_3_6().state = "RUN8";

    // Ehrlicher Frame
    console.log("RUN 8 → Digitaler Kaltstart aktiviert.");
}
