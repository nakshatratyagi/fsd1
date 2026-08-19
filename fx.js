function multiply(a,b){
    return a*b;
}
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let result= multiply(a,b)
document.getElementById("result").innerHTML = "Result = " + result;
