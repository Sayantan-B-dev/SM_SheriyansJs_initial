console.log("fry calling fn() function")
function limiter(fun,limit){
    let total=0
    return function(){
        if(total<limit){
        total++
        fun()
        }else{
            console.error("limit reached")
        }
    }
}
let fn=limiter(()=>console.log("ok"),5)
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()