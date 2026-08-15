// PX‑Integration
function integratePX(frame){
    const px = PX_ENGINE.trigger(frame);
    log("PX‑Engine:", JSON.stringify(px));
    return px;
}
// // ON3‑Integration
function integrateON3(frame){
    const on3 = ON3_ENGINE.execute(frame);
    log("ON3‑Engine:", JSON.stringify(on3));
    return on3;
}
 // // Pipeline‑Integration
async function integratePipeline(frame){
    const pipe = await PIPELINE_ENGINE.run(frame);
    log("Pipeline‑Engine:", JSON.stringify(pipe));
    return pipe;
}
// // Orbit‑Integration
function integrateOrbit(t){
    const orbit = TRI_HEXA_ORBIT.render(t);
    log("Orbit‑Engine:", JSON.stringify(orbit));
    return orbit;
}
// btnPx.onclick = () => integratePX(frame);
btnOn3.onclick = () => integrateON3(frame);
btnPipeline.onclick = () => integratePipeline(frame);
btnToggle.onclick = () => frame.state = frame.state === "ACTIVE" ? "IDLE" : "ACTIVE";
btnHelp.onclick = () => log("HELP:", frame.help);
btnClear.onclick = () => out.textContent = "Console output…";
// function LOOP(){
    const t = performance.now() * 0.002;
    const orbit = integrateOrbit(t);

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Pac‑Man
    ctx.fillStyle = "#0f0";
    ctx.beginPath();
    ctx.arc(250 + orbit.pacman.x, 250 + orbit.pacman.y, 12, 0, Math.PI*2);
    ctx.fill();

    // Strichmännchen
    ctx.fillStyle = "#6cf";
    ctx.fillRect(orbit.stickman.x, orbit.stickman.y, 10, 10);

    // Lemminge
    ctx.fillStyle = "#f0f";
    orbit.lemmings.forEach(l => {
        ctx.beginPath();
        ctx.arc(250 + l.x, 250 + l.y, 6, 0, Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(LOOP);
}
LOOP();
function RUN_PX(frame){
    return PX_ENGINE.trigger(frame);
}
function RUN_ON3(frame){
    return ON3_ENGINE.execute(frame);
}
async function RUN_PIPELINE(frame){
    return await PIPELINE_ENGINE.run(frame);
}
function RUN_ORBIT(t){
    return TRI_HEXA_ORBIT.render(t);
}
function RUN_243(t){
    return {
        pos: CONTINIUM_KEY.pos(t),
        atom: QUANT.atom.seq[Math.floor((t*10)%QUANT.atom.seq.length)],
        qsxi: QUANT.qsxi(),
        singular: QUANT.singular(CONTINIUM_KEY.pos(t)),
        tmp: Object.fromEntries(Object.entries(TMP_MATRIX).map(([k,v])=>[k,v.calc(t)]))
    };
}
function RUN_STAGE(t){
    const A = CONTINIUM_KEY.pos(t);
    const X = SLIDE(A).vec;
    let E = 0;
    for(const k in TMP_MATRIX) E += Math.abs(TMP_MATRIX[k].calc(t));
    return { arg:A, xarg:X, arg3te:E/1200 };
}
function RUN_ALLXALL(t){
    return {
        px: RUN_PX(frame),
        on3: RUN_ON3(frame),
        pipeline: "WAITING",
        orbit: RUN_ORBIT(t),
        quant243: RUN_243(t),
        stage: RUN_STAGE(t),
        truth: CONTINIUM_TRUTH(),
        whirl: WHIRL({x:9,y:6,z:3}),
        skills: CONTINIUM_KEY.skills
    };
}
async function RUN_ALL(t){
    const px = RUN_PX(frame);
    const on3 = RUN_ON3(frame);
    const pipe = await RUN_PIPELINE(frame);
    const orbit = RUN_ORBIT(t);
    const quant243 = RUN_243(t);
    const stage = RUN_STAGE(t);

    return {
        px, on3, pipe, orbit, quant243, stage,
        fusion: "ALL‑X‑ALL",
        time: t
    };
}
export function FUSION_6(scene){
    return {
        syn: scene.syn,
        quant: scene.quant,
        const: scene.const,
        tmp: scene.tmp,
        qsxi: scene.qsxi,
        orbit: scene.orbit
    };
}
export function DIM6_MATRIX(pos){
    return {
        x: pos.x,
        y: pos.y,
        z: pos.z,
        drift: pos.x * 0.33,
        slide: pos.y * 0.66,
        sprung: pos.z * 0.99
    };
}
export function MAP6_ROOMS(qsxi, singular, tmp){
    return {
        tokio: qsxi.tokio,
        corlu: qsxi.corlu,
        hh: qsxi.hh,
        orbit: singular.s.radius,
        singular: singular.s,
        tmpEnergy: tmp
    };
}
export function AXIS6_FACTORS(scene){
    return {
        atom: scene.atom,
        qsxi: scene.qsxi,
        singular: scene.singular,
        tmpEnergy: scene.tmpEnergy,
        arg3te: scene.arg3te,
        xarg: scene.xarg
    };
}
export function ALGORITOMAT_6(scene){
    return {
        ebene: FUSION_6(scene),
        dimension: DIM6_MATRIX(scene.pos),
        raum: MAP6_ROOMS(scene.qsxi, scene.singular, scene.tmpEnergy),
        faktor: AXIS6_FACTORS(scene)
    };
}
export function FUSION_6_TO_3(alg){
    return {
        A: alg.dimension,   // Bewegung
        B: alg.faktor,      // Energie
        C: alg.raum         // Geometrie
    };
}
export function FUSION_3_TO_1(f3){
    return {
        unity: {
            move: f3.A,
            energy: f3.B,
            geo: f3.C
        }
    };
}
export function FUSION_1_TO_0(f1){
    return {
        zeroPoint: true,
        all: f1.unity
    };
}
export function FUSION_0_TO_ALL(zero){
    return {
        ALL: zero.all,
        state: "CONTINIUM-UNIFIED"
    };
}
export function CONTINIUM_ALGORITOMAT(scene){
    const alg6 = ALGORITOMAT_6(scene);
    const f3 = FUSION_6_TO_3(alg6);
    const f1 = FUSION_3_TO_1(f3);
    const f0 = FUSION_1_TO_0(f1);
    return FUSION_0_TO_ALL(f0);
}
