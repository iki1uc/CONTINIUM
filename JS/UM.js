// ==========================================
// UM.js · CONTINIUM‑Stabilisierungsachse
// ==========================================

import { LAUF } from "./lauf.js";

// ------------------------------------------
// GATE
// ------------------------------------------
export const GATE = {
    ram(){ return "GATE.RAM"; },
    cpu(){ return "GATE.CPU"; },
    gpu(){ return "GATE.GPU"; }
};

// ------------------------------------------
// WLOCH
// ------------------------------------------
export const WLOCH = {
    tmp(){ return "TMP.WLOCH"; },
    trans(){ return "TRANS.WLOCH"; },
    warb(){ return "WARB.WLOCH"; }
};

// ------------------------------------------
// WHIRL
// ------------------------------------------
export function WHIRL({ x, y, z }){
    return {
        x, y, z,
        drift: x * 0.33 + y * 0.66 + z * 0.99,
        frame: "WHIRL"
    };
}

// ------------------------------------------
// WHIRL Broadcast
// ------------------------------------------
export function WHIRL_BROADCAST(w){
    const nodes = document.querySelectorAll("html, body, head, *");
    nodes.forEach(el => {
        el.dataset.whirl = JSON.stringify(w);
    });
}

// ------------------------------------------
// ROM.boot
// ------------------------------------------
export const ROM_BOOT = {
    boot: "ROM.boot",
    state: "rdy",
    continum: "WLOCH.UNI.WELT",
    whirl: "WHIRL.tech"
};

// ------------------------------------------
// PIPELINE 3‑6
// ------------------------------------------
export function PIPELINE_3_6(){

    // GATE
    document.body.dataset.gate = [
        GATE.ram(),
        GATE.cpu(),
        GATE.gpu()
    ].join("::");

    // WLOCH
    document.body.dataset.wloch = [
        WLOCH.tmp(),
        WLOCH.trans(),
        WLOCH.warb()
    ].join("::");

    // WHIRL
    const w = WHIRL({ x: 9, y: 6, z: 3 });
    WHIRL_BROADCAST(w);

    // ROM.boot
    document.body.dataset.rom = JSON.stringify(ROM_BOOT);

    // ROM.build
    const ROM_BUILD = {
        wloch: document.body.dataset.wloch,
        continum: "CONTINIUM",
        whirl: "WHIRL.tech"
    };

    document.body.dataset.build = JSON.stringify(ROM_BUILD);

    return {
        gate: document.body.dataset.gate,
        wloch: document.body.dataset.wloch,
        whirl: w
