/*JS chapter 15 16 17
Java-script assignments chapter 15 16 17
PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

Make a TODO
Create an empty array with the name is courses. ```example: var courses=[] ``
Get the 5-course name from the user,
example: var course1 =prompt("course 1", "computer")
and save all 5 value in "courses" array. example: courses.push(course1)
print courses array in alertexample: alert(courses)
print all full 5-course name one by one in prompt.
example: course1=prompt(course1, course1Value)
If the user edit any value (through prompt), then that value is edit in the array.
example: course1=prompt(course1, course1ValueEdit) 
use Array.splice() to replace and edit index in array
 print courses array in alertexample: alert(courses)
 */

let courses=[];
 var i=1;
var yesno=true;

while(yesno)
{
    if  (i>=1 && i<6) {
            courses.push((prompt("enter course "+i+" Name:")));
                i++;
    }  
     else
     { 
       yesno=false;     
     }   
    
}

alert(courses);
"\n\n\n";

   courses[0]= prompt(courses.splice[0] ,courses[0]);
   courses[1]= prompt(courses.splice[1] ,courses[1]);
   courses[2]= prompt(courses.splice[2] ,courses[2]);
   courses[3]= prompt(courses.splice[3] ,courses[3]);
   courses[4]= prompt(courses.splice[4] ,courses[4]);
   
alert(courses);

