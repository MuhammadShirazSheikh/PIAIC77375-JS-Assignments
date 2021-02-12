/*
 JS chapter 21 to 30
Java-script assignments chapter 21 to 30
PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

Second Assignment
input value from user in String var inputValue="cloUd naTive computinG"
Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
print value in console.log() console.log(inputValue) | check result in browser console

*/


let capitalizecase=[];
var words;

var wordcount;
var inputValue=prompt("Input string:");
var res = inputValue.split(" ");

   
   wordcount=res.length;
   
   console.log('\r\n');
  
   for (var i=0;i<res.length;i++)
   {
    capitalizecase.push(res[i].slice(0,1).toUpperCase()+res[i].substr(1, res[i].length).toLowerCase());    
   }

   words=capitalizecase.length;
   console.log(inputValue);
   var output=capitalizecase.join(" ");
   console.log(output);
   alert(output);
   
                 


