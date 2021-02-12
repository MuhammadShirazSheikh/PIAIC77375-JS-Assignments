/* JS chapter 21 to 30
Java-script assignments chapter 21 to 30
PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

Take a input from user in number with decimal point user input is 3.4
Convert it into greater number Example: Math.ceil(3.4); to 4
Declear a variable of string and assign some text var text="This is my dummy text"
Slice the text into a new variable from 0 to the rounded number 0 to 4; 
Example: text.slice(0, 4) | sliceText = This
Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT
print value in alert "shiT"

Second Assignment
input value from user in String var inputValue="cloUd naTive computinG"
Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
print value in console.log() console.log(inputValue) | check result in browser console

*/

//math.import ();

var input, text;
let treverse=[];
let slicetext=[]; 


    input=prompt("enter decimal value :");
    //obtainedmarks+= coursemarks.pop();
var convertinput=Math.ceil(input);
alert("your input decimal number: " + input +  '\r\n'+ "Converstion to greater Number: " + convertinput);
text="This is my dummy text";

slicetext=text.slice(0,4);

for (i=slicetext.length-1;i>=0;i--)
{
    treverse+=slicetext[i];
      
}
alert(treverse);