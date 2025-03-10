console.info("There's few functions in this code..you have to pass right type of perimeter in it. you can also see the code just by simply writing the function without calling it")
console.warn("findGreatest(a, b) Expects 2 Integer")
console.warn("checkEvenOrOdd(num) Expects 1 Integer")
console.warn("checkVoterEligibility(name, age) Expects 1 String and 1 Integer")
console.warn("isLeapYear(year) Expects 1 Integer")
console.warn("calculateFinalAmount(amount) Expects 1 Integer")
console.warn("calculateElectricityBill(unit) Expects 1 Integer")


function findGreatest(a, b) {
    a==b?console.log("No Equal Value"):console.log(`${a>b?a:b} is larger`)
}
function checkEvenOrOdd(num) {
    console.log(`${num} is ${num%2==0?"Even":"Odd"}`)
}
function checkVoterEligibility(name, age) {
    age>=18?console.log(`${name} is a valid voter.`):console.log(`${name} is not a valid voter.`)
}
function isLeapYear(year) {
    console.log(year%400==0||(year%4==0&&year%100!=0)?"Leap Year":"Not a Leap Year")
}
function calculateFinalAmount(amount) {
    let dis=0
    if(amount>9000)dis=20
    else if(amount>7000&&amount<=9000)dis=10
    else if(amount>5000&&amount<=7000)dis=5
    else if(amount>=0&&amount<=5000)dis=0
    else dis=NaN
    console.log(`Final amount is ${amount-(amount*dis)/100}`)
}
function calculateElectricityBill(unit) {
    let price=0
    if(unit>400){
        price=(unit-400)*13
        unit=400
    }
    if(unit>200&&unit<=400){
        price=price+(unit-200)*8
        unit=200
    }
    if(unit>100&&unit<=400){
        price=price+(unit-100)*6
        unit=100
    }
    price=price+unit*4.2
    console.log(`Total bill is `+price.toFixed(1))
}