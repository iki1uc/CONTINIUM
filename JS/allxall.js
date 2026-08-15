// JS/allxall.js
import { RUN_PX } from './engines/px.js';
import { RUN_ON3 } from './engines/on3.js';
import { RUN_PIPELINE } from './engines/pipeline.js';
import { RUN_ORBIT } from './engines/orbit.js';
import { RUN_243, RUN_STAGE } from './runners/runners.js';
import { CONTINIUM_ALGORITOMAT } from './algorithms/fusion6.js';

export async function RUN_ALL(t, frame){
  const px = RUN_PX(frame);
  const on3 = RUN_ON3(frame);
  const pipe = await RUN_PIPELINE(frame);
  const orbit = RUN_ORBIT(t);
  const quant243 = RUN_243(t);
  const stage = RUN_STAGE(t);
  return { px, on3, pipe, orbit, quant243, stage, fusion: 'ALL-X-ALL', time: t };
}

export { CONTINIUM_ALGORITOMAT };
// ... minimal exports only
