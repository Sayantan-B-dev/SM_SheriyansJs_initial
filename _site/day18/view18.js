console.warn('Advanced Functions in JavaScript')
console.log("Try these functions in different ways in online compilers or in a node project")
console.log("theres a function named test...try testing test.case1() and case2()")
const test=(function(){
    return {
        case1: function(){
            console.log("yey this is case1");
        },
        case2: function(){
            console.log("omg this is case2")
        },
    }
})()
console.log("test2 is a HOFs..try test2()()()");
const test2=function(){
    return function(){
        return function(){
            console.log("omg")
        }
    }
}
console.log("We can treat function as values..see test3,try console.log(t3)")
let t3 = "const test3=function(val){ return val } test3((function(b){ console.log('WTF '+b) })('crazy'))";
const test3=function(val){
    return val
}
test3((function(b){
    console.log("WTF "+b)
})("crazy"))