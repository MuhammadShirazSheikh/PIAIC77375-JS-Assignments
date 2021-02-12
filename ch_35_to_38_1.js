/*
JS chapter 35 to 38
Java-script assignments chapter 35 to 38
PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

input value from user in String var inputValue="cloUd naTive computinG"
Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing" use Function
print value in console.log() console.log(inputValue) | check result in browser console
*/

let CapitalizeCase=[];
var words;

var counter;
var inputValue=prompt("Input string:");
var res = inputValue.split(" ");
counter=0;
         
   do {  CapitalizeCase += CamelCase(res[counter])+" "; 
         counter ++;
      }
   while (counter<res.length);
   
   console.log(inputValue);
   console.log(CapitalizeCase);
   
function CamelCase(receiverAction) {  
   return receiverAction.slice(0,1).toUpperCase()+receiverAction.substr(1, receiverAction.length).toLowerCase();
}
console.log(CapitalizeCase);