// function repeat(fn,time){
//     setInterval(fn,time*1000)
// }
// repeat(()=>console.log("ok"),1)


// function greet(Greeting){
//     return (name)=>{
//         console.log(`${Greeting},${name}`)
//     }
// }
// let g=greet("blah")
// g=greet("blah")
// g("sayan")
// g("ss")
// g=greet("meh")
// g("asdfasdsayan")
// g("asgfa")
// g("sayanasdgsayan")
// g=greet("ehhh")
// g("sayaasdfn")
// g("sayaasdfasdfn")

// function limiter(fun){
//     let executed=false
//     return function(){
//         if(!executed){
//         executed=true
//         fun()
//         }else{
//             console.error("limit reached")
//         }
//     }
// }
// let fn=limiter(()=>console.log("ok"))
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()
// fn()



// function throt(fun,delay){
//     let lasttime=0
//     return function(){
//         let current=Date.now()
//         if(current-lasttime>=delay){
//             lasttime=current
//             fun()
//         }
//     }
// }
// let fn=throt(()=>console.log("ok"),2000)
