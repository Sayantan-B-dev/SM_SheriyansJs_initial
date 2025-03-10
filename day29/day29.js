








function calculateCompoundInterest(P, r, t, n) {
    let a = P * Math.pow(1 + r / n, n * t);
    return (a - P).toFixed(2);
}
function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area.toFixed(2);
}
function calculateCircleProperties(r) {
    return [(2 * Math.PI * r).toFixed(2), (Math.PI * r * r).toFixed(2)];
}