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


function operate(operator, num1, num2,) {
    if (operator == '+') {
        console.log(add(num1, num2));
    } else if (operator =='-') {
        console.log(sub(num1, num2));
    } else if (operator =='*') {
        console.log(mult(num1, num2));
    } else if (operator =='/') {
        console.log(div(num1, num2));
    } else {
        console.log("Please enter a valid operator")};
        
}


//check operator
//operate('*', 4, 2);

let result = document.getElementsByClassName("result"); 
let clear = document.getElementsByClassName("clear");
let operator = document.getElementsByClassName("operators");

btns = document.getElementsByClassName("numbers");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
        let x = e.target.textContent;         
        result[0].textContent += x;
        if (num1 = "undefined") {
            num1 = result[0].textContent; 
        } else { 
            num2 = result[0].textContent;
        }
    });    
}
for (var i = 0; i < clear.length; i++) {
    clear[i].addEventListener("click", function (e) {
        result[0].textContent = ''; 
    });
}
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {
       // num1 = result[0].textContent; 
        operator = e.target.textContent;
        console.log(num1);
        console.log(operator);
        result[0].textContent = '';
        //num 2 not populating
        
        console.log(num2);

    });
}

