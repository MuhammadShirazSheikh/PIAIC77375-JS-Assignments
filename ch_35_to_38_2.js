
/*
JS chapter 35 to 38
Java-script assignments chapter 35 to 38
PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

Second Assignment
User input value in Number through prompt Example value=5
Factorialize a Number use Function
print value in console.log() console.log(value); the result is 120
Understand this logic
var value= multiply(4,3,6);
console.log("value", value); // The result is ?
function add(a, b){ var z= a+b; return z; };
function multiply(a, b, c){ var z= a* add(b, c); return z; };
console.log("course", course); // The result is ? console.log("z", z); // The result is ?
var course="cloud native computing";
*/
var inputValue=prompt("Factorial Input value!:");


if (isNaN(inputValue))
    { inputValue= prompt("invalid input Value:please enter integer" ,inputValue);}  

function factorial(num)
{
    if (num <=1)
       { return 1;} 
    else
    
    {return num * factorial(num-1);} 
    
}

console.log("Input Value:"+inputValue);
console.log(inputValue+"!: "+factorial(inputValue));