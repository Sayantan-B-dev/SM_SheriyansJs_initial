console.warn("Enter q1,q2,q3,q4.....q12 to check the code..and call them by q1(),q2(),q3()....q12() to check the answers")
const q1 = () => {
    let i = 11; 
    i = i++ + ++i; 
    console.log(i);
}

const q2 = () => {
    let a = 11, b = 22, c; 
    c = a + b + a++ + b++ + ++a + ++b; 
    console.log("a=" + a); 
    console.log("b=" + b); 
    console.log("c=" + c);
}

const q3 = () => {
    let i = 0; 
    i = i++ - --i + ++i - i--; 
    console.log(i);
}

const q4 = () => {
    let b = true; 
    b++; 
    console.log(b);
}

const q5 = () => {
    let i = 1, j = 2, k = 3; 
    let m = i-- - j-- - k--; 
    console.log("i=" + i); 
    console.log("j=" + j); 
    console.log("k=" + k); 
    console.log("m=" + m);
}

const q6 = () => {
    let a = 1, b = 2; 
    console.log(--b - ++a + ++b - --a);
}

const q7 = () => {
    let i = 19, j = 29, k; 
    k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++; 
    console.log("i=" + i); 
    console.log("j=" + j); 
    console.log("k=" + k);
}

const q8 = () => {
    //let i = 11; 
    //let j = --(i++);
    console.error("this will give error")
}

const q9 = () => {
    let m = 0, n = 0; 
    let p = --m * --n * n-- * m--; 
    console.log(p);
}

const q10 = () => {
    let a = 1; 
    a = a++ + ++a * --a - a--; 
    console.log(a);
}

const q11 = () => {
    //let a = 11++; 
    //console.log(a);
    console.log("this will give error")
}

const q12 = () => {
    let i = 0, j = 0; 
    console.log(--i * i++ * ++j * j++);
}
