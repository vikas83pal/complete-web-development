let num = prompt("Enter the Number");

let res = (num) =>{
    if(num == 0 || num == 1) return 1;
    else return num * res(num - 1);
}

alert("The Result is" + res(num));