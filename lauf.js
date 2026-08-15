import * as A from './A/A_756.js';
import * as CORE from './CORE/CORE_Operator.js';
import * as G from './G/G_vector.js';
import * as H from './H/H_hyperframe.js';
import * as HH from './HH/RESPO.js';
import * as Q from './Q/Q_CORE_XI.js';
import * as R from './R/R_orbitphysics.js';
import * as S from './S/S_orbitengine.js';
import * as UI from './UI/UI_Draw.js';
import * as Z from './Z/Z_Zone.js';

export function orbitTick(dt) {
    CORE.update(dt);
    G.transform(dt);
    H.perspective(dt);
    R.timeDilation(dt);
    S.orbitEngine(dt);
    UI.drawFrame();
    Z.updateZone(dt);
}
