/*
JS chapter 31 to 34
PIAIC StudentID# PIAIC77375 Name : Muhammad Sheraz

Java-script assignments chapter 31 to 34
input your name through prompt. for example name is "Ameen Alam"
input your DOB(date) through prompt. for example date is "24"
input your DOB(month) through prompt. for example month is "05"
input your DOB(year) through prompt. for example year is "1999"
print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"
print meassage in console.log() "Your DOB is {in pakistan standard time format}"
print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"
"Your Age in Days 7510"
print meassage in console.log() "How much time left in your next birthday? 
161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam. Today is Your 20th Birthday"
*/

var yourname,yourDOBday,yourDOBmonth,yourDOByear, myDOB

var today, someday, text;

today = new Date();
myentryday = new Date();


var theDay=today.getDay();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nameOfToday = dayNames[theDay];
var monthnames =["January","February","March","April","May","June","July","August","September","October","November","December"];
var currentMonth=today.getMonth();
var CurrentHrs=today.getHours();


yourname=prompt("Type your Name").toUpperCase();
yourDOBday=prompt("Type your DOB Day 1-31 (2digit) :");
yourDOBmonth=prompt("Type your DOB month 0-11 (2digit) :");
yourDOByear=prompt("Type your DOB year (4digit) :");

myentryday.setDate(yourDOBday);
myentryday.setMonth(yourDOBmonth);
myentryday.setFullYear(yourDOByear);
myentryday.setHours(00);
myentryday.setMinutes(01);
myentryday.setSeconds(01);
myentryday.setMilliseconds(01);

myDOB=myentryday;

function goodMAEN(Hrs)
{
    if (Hrs>=5 && Hrs<=12) 
       { return "Good Morning";} 
    if (Hrs>=12 && Hrs<=17) 
       { return "Good Aftrnoon";}
    if (Hrs>=17 && Hrs<=20) 
       { return "Good Evening";}
    if (Hrs>=20 && Hrs<=23) 
       { return "Good Night";}    
}


function total_years()
{
    var today=new Date();
    var birthdate=myDOB;
    var msToday=today.getTime();
    var msbirthdate=birthdate.getTime();
    var msDiff=msToday- msbirthdate;
    var dDiff=msDiff/(1000 * 60 * 60 *24);
    dDiff=Math.floor(dDiff);
    return Math.floor(dDiff/365);
}


function cal_months()

{
    var today=new Date();
    var birthdate=myDOB;
    var msToday=today.getTime();
    var msbirthdate=birthdate.getTime();
    var msDiff=msToday- msbirthdate;
    var dDiff=msDiff/(1000 * 60 * 60 *24);
    dDiff=Math.floor(dDiff);
    return Math.floor((dDiff - Math.floor(dDiff/365)*365)/30);
}



function cal_days()
{
    var today=new Date();
    var birthdate=myDOB;
    var msToday=today.getDate();
    var msbirthdate=birthdate.getDate();
    var msDiff=msToday- msbirthdate;
        
    return Math.abs(msDiff);
}



function cal_hours()
{
    var today=new Date();
    var birthdate=myDOB;
    var msToday=today.getHours();
    var msbirthdate=birthdate.getHours();
    var msDiff=msToday- msbirthdate;
        
    return Math.abs(msDiff);
}

function cal_minutes()
{
    var today=new Date();
    var birthdate=myDOB;
    var msToday=today.getMinutes();
    var msbirthdate=birthdate.getMinutes();
    var msDiff=msToday- msbirthdate;   
    return Math.abs(msDiff);
}
 
function cal_milliseconds()
{
    var today=new Date();
    var birthdate=myDOB;
    var msToday=today.getSeconds()
    var msbirthdate=birthdate.getSeconds();
    var msDiff=msToday- msbirthdate;   
    return Math.abs(msDiff);
}


function total_days()
{
    var today=new Date();
    var birthdate=myDOB;
    var msToday=today.getTime();
    var msbirthdate=birthdate.getTime();
    var msDiff=msToday- msbirthdate;
    var dDiff=msDiff/(1000 * 60 * 60 *24);
    dDiff=Math.floor(dDiff);
    return Math.floor(dDiff);
}






console.log("Hello "+ yourname +","+ goodMAEN(CurrentHrs));
console.log("Your DOB is "+myDOB);'\n\n';
console.log("Your are "+total_years() + " years "+ cal_months() + " months " + cal_days() + " days " + cal_hours() +" Hours "+ cal_minutes() +" minutes "+ cal_milliseconds() + "seconds");'\n\n';
console.log('Your age in days  '+ total_days());

