export function drawValues(ctx, real, golem){
    ctx.fillStyle = "white";
    ctx.fillText("Real Krümmung: " + real.curvature, 20, 20);
    ctx.fillText("Golem Krümmung: " + golem.curvature, 20, 40);
}
