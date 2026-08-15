// JS/algorithms/fusion6.js
export function FUSION_6(scene){
  return {
    syn: scene.syn, quant: scene.quant, const: scene.const,
    tmp: scene.tmp, qsxi: scene.qsxi, orbit: scene.orbit
  };
}
export function DIM6_MATRIX(pos){ return { x:pos.x, y:pos.y, z:pos.z, drift:pos.x*0.33, slide:pos.y*0.66, sprung:pos.z*0.99 }; }
// ... weitere Funktionen exportiert ...
export function CONTINIUM_ALGORITOMAT(scene){
  const alg6 = FUSION_6(scene);
  const dim = DIM6_MATRIX(scene.pos);
  // composition as before...
  return { /* same output shape as current */ };
}
