/*
JS chapter 39 to 42
Java-script assignments chapter 39 to 42
PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

Make a Percentage Calculator
Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
Calculate the grade use switch case Grade A+ 90% to 100% , 
Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%
print output in alert.
*/
var coursemarks=[];
var obtainedmarks,totalmarks,result=0;
totalmarks=500;
obtainedmarks=0;

for(var i=1;i<6;i++ ) {
    coursemarks.push(parseInt(prompt("enter course "+i+" Marks obtained")));
    obtainedmarks+= coursemarks.pop();
}

console.log("Obtained Marks: "+ obtainedmarks +"\n"+"Total Marks: "+totalmarks+"\n"+"Marks Percentage %: "+(obtainedmarks/totalmarks*100));
result= obtainedmarks/totalmarks*100;


switch (true) {
    case result>= 90 && result<=100:
         console.log("Grade A+");
         break;
        
    case result>=75 && result<=89:
         console.log("Grade A");
         break;
    
    case result>=60 && result<=74:
         console.log("Grade B");
         break;
    case result>=45 && result<=60:
         console.log("Grade C");
         break;
    case result>=30 && result<=44:
            console.log("Grade D");
            break;
    default:
        console.log("Grade F");
        console.log(result);
        break;
}



