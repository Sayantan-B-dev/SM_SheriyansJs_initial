console.info("Theres three functions in this page try calling them with right perimeter")
console.info("1.calculateCompoundInterest(P, r, t, n)")
console.info("2.calculateTriangleArea(a, b, c)")
console.info("3.calculateCircleProperties(r)")
function calculateCompoundInterest(P, r, t, n) {
    let a = P * Math.pow(1 + r / n, n * t);
    console.log("Compound Interest by the following Information is: "+(a - P).toFixed(2));
}
function calculateTriangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Triangle area by the following Information is: "+area.toFixed(2));
}
function calculateCircleProperties(r) {
    console.log("circumference of the circle by the following Information is: "+((2 * Math.PI * r).toFixed(2)))
    console.log("area of the circle by the following Information is: "+(Math.PI * r * r).toFixed(2))
}