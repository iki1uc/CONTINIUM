// JS/engines/px.js
import { log, warn } from '../utils/log.js';

export function integratePX(frame){
  try {
    if (typeof PX_ENGINE?.trigger === 'function') {
      const px = PX_ENGINE.trigger(frame);
      log('PX‑Engine:', px);
      return px;
    }
    warn('PX_ENGINE not available, returning fallback');
    return { axis: 'PX', ok: false, info: 'fallback' };
  } catch (e) {
    warn('integratePX error', e);
    return { axis: 'PX', ok: false, info: String(e) };
  }
}

export function RUN_PX(frame){ return integratePX(frame); }
