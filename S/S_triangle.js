export function triangle(A, B, C){
    return {
        AB: Math.hypot(A.x - B.x, A.y - B.y),
        BC: Math.hypot(B.x - C.x, B.y - C.y),
        CA: Math.hypot(C.x - A.x, C.y - A.y)
    };
}
