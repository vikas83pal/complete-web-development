/* Create faulty calcultor that perform the wrong operation in most of the times */
let num = Math.random();

let num1 = prompt("Enter The Number");
let c = prompt("Enter The Operator");
let num2 = prompt("Enter The Number");

let obj = {
    "+":"-",
    "-":"*",
    "/":"%",
    "*":"%",
}
if(num > 0.1){
    alert(eval(num1 + " " + c + " " + num2));
}else{
    c = obj[c]
    alert(eval(num1 + " " + c + " " + num2));
}