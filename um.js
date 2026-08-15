import { orbitTick } from './lauf.js';
import * as CORE from './CORE/CORE_constants.js';
import * as Q from './Q/Q_PLANETS.js';
import * as HH from './HH/GEO.js';

export function initOrbit() {
    CORE.loadConstants();
    Q.loadPlanets();
    HH.loadGeo();
}

export function startOrbit() {
    initOrbit();
    let last = performance.now();

    function loop(now) {
        const dt = now - last;
        last = now;
        orbitTick(dt);
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
}
