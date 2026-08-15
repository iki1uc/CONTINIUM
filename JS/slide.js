// ==========================================
// SLIDE.js · CONTINIUM SlideFrame Modul
// ==========================================

import { CONTINIUM_KEY } from "./CONTINIUM_KEY.js";

export function SLIDE(t) {
    const pos = CONTINIUM_KEY.pos(t);
    const slide = CONTINIUM_KEY.slideFrame(pos);

    return {
        frame: "SLIDE",
        t,
        pos,
        slide
    };
}
