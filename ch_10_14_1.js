//JS chapter 10 to 14
//Java-script assignments chapter 10 to 14
//PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

//Make a Calculator
//input a value from user for example num1 is 7
//input a second value from user for example num2 is 3
//input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
//print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1

var num1,num2, result, opt;

num1=prompt("Input a first value");
num2=prompt("Input a second value");
opt=prompt("Enter operation sign +, -, *, /, % ");
result=0;

switch (opt) {
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;
        break;
    case '/':
        result=num1/num2;
        break;
    case '*':
        result=num1*num2;
        break;
    case '%':
        result=num1%num2;
        break;
    default:
        alert("sorry invalid operation sign :"+ opt);
        break;
}
if ( opt === '+' || opt === '-' || opt === '/'|| opt === '*'|| opt === '%' ) {
    alert(num1+" "+opt+" "+num2 +" ="+ result);
 }


 