//JS chapter 10 to 14
//Java-script assignments chapter 10 to 14
//PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

//Second Assignment - Make a Percentage Calculator
//Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
//Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
//print output in alert.

var coursemarks=[];
var obtainedmarks,totalmarks;

totalmarks=500;
obtainedmarks=0;


for(var i=1;i<6;i++ ) {
    coursemarks.push(parseInt(prompt("enter course "+i+" Marks obtained")));
    obtainedmarks+= coursemarks.pop();
}

alert("Obtained Marks: "+ obtainedmarks +"\n"+"Total Marks: "+totalmarks+"\n"+"Marks Percentage %: "+(obtainedmarks/totalmarks*100));




 