console.warn("Theres bunch of functions that are used for its dedicated solutions.(you can call just them to run, type function name to see the code or check js file)")
console.info("1. guessNumber() Explanation: guess a number ");
console.info("2. calculator() Explanation: simple +,_,*,/ calculator");

function guessNumber(){
    let num=Math.floor(Math.random()*100)+1
    let userInput;
    do{
        userInput=Number(prompt("Guess a number between 1-100"))
        if(isNaN(userInput)||userInput<0||userInput>100){
            alert("Invalid input")
        }
        if(userInput<num) console.log("too low")
        else if(userInput>num) console.log("too high")
        else console.log("Congrats!! the number was"+num)
    }while(userInput!==num);
}
function calculator(){
    let userInput;
    do{
        let num1=Number(prompt("Enter first number"))
        let num2=Number(prompt("Enter second number"))
        let operator=prompt("Choose a valid operator +,-,*,/")

        switch(operator){
            case '+':
                alert(`Addition of ${num1} and ${num2} is ${num1+num2}`)
                break
            case '-':
                alert(`Subtraction of ${num1} and ${num2} is ${num1-num2}`)
                break
            case '*':
                alert(`Multiplication of ${num1} and ${num2} is ${num1*num2}`)
                break
            case '/':
                if(num2==0) alert(Infinity)
                else alert(`Division of ${num1} and ${num2} is ${num1/num2}`)
                break
            default:
                alert("Enter a valid operator")
                break
        }
        userInput=prompt("Do you want to try the calculator again? (yes/no)").toLowerCase()
    }while(userInput==="yes");
}