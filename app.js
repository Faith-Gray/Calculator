let num1;
let num2;
let operation;
let answer;

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

function operate(operation, num1, num2) {
    if (operation == '+') {
       // console.log(add(num1, num2));
        answer = add(num1, num2);
        num1 = answer;
        num2 = null;
        operation = null;
        result[0].textContent = num1;
        console.log(num1);
        console.log(num2);
        return num2 && operation;
    } else if (operation == '-') {
        console.log(sub(num1, num2));
        result[0].textContent = sub(num1, num2);
    } else if (operation == '*') {
        console.log(mult(num1, num2));
        result[0].textContent = mult(num1, num2);
    } else if (operation == '/') {
        console.log(div(num1, num2));
        result[0].textContent = div(num1, num2);
    } else {
        console.log("Please enter a valid operator")};
        
}

let result = document.getElementsByClassName("result"); 
let clear = document.getElementsByClassName("clear");
let operator = document.getElementsByClassName("operators");
let equal = document.getElementsByClassName("equal");

btns = document.getElementsByClassName("numbers");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
        let x = e.target.textContent;         
        result[0].textContent += x;
        if (operation === undefined) {
            num1 = parseInt(result[0].textContent); 
        } else { 
            num2 = parseInt(result[0].textContent);
        }
    });   
}
for (var i = 0; i < clear.length; i++) {
    clear[i].addEventListener("click", function (e) {
        result[0].textContent = ''; 
        num1 = undefined;
        operation = undefined;
        num2 = undefined;
    });
}
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {
       // num1 = result[0].textContent;
       if (!num2) {
            operation = e.target.textContent;
            console.log(num1);
            console.log(operation);
            result[0].textContent = '';
       } else {
           operate(operation, num1, num2);
           console.log("operationg");
       }
        console.log(num2);
        //num 2 not populating
        //operate(operation, num1, num2);
    });
}
for (var i = 0; i < equal.length; i++) {
    equal[i].addEventListener("click", function (e){ 
        operate(operation, num1, num2);
    });
}
