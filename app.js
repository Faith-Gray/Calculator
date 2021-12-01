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
operate('*', 4, 2);

let result = document.getElementsByClassName("result"); 
let clear = document.getElementsByClassName("clear");
let sum = document.getElementsByClassName("add");

btns = document.getElementsByClassName("numbers");


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
        let x = e.target.textContent;

        //check x
        console.log(x);         
        result[0].textContent += x;
        

        for (var i = 0; i < clear.length; i++) {
            clear[i].addEventListener("click", function (e) {
                result[0].textContent = ''; 
            });
        }

        for (var i = 0; i < clear.length; i++) {
            sum[i].addEventListener("click", function (e) {
                num1 = result[0].textContent; 
                let sum = e.target.textContent;
                let operator = sum;
                
            });
        }
        
    });    

}



