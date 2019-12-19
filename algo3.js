/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/

function minuteAngle(minute) {

    let angulo = 0;
    let minuteMaior30 = minute-30;
    if (minute < 30) {
    angulo = ((minute/30)*(180));
    } else if (minute > 30) {
    angulo = ((minuteMaior30/30)*(180))+180;
    }
        console.log(angulo);
        return angulo;
    }
    
    minuteAngle(minute);
    