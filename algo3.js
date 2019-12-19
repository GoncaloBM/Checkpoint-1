/*
Given a number that represents the position of the minute hand on a clock (number of minutes from 0 - 60) write a program that returns the angle that is formed by the minute hand and 12.

If the user enters a number that is above 60, your program should fail, and log a friendly message to the console, informing the user of their error. 
(Hint: Create an HTML UI to capture input and display the result of running you algorithm)
*/


function minuteAngle() {

    let minute = document.getElementById("minute").value;

    if (minute > 60) {
        alert('Put some decent minute, please :D');
    } else {

    let angulo = 0;
    let minuteMaior30 = minute-30;
    if (minute < 30) {
    angulo = ((minute/30)*(180));
    } else if (minute > 30) {
    angulo = ((minuteMaior30/30)*(180))+180;
    }

    let angulohora = ((angulo/360))*6;
    let anguloEntreMinutoEHora = angulo - angulohora;


        console.log(angulo);
        document.getElementById('answer0').innerHTML = `Your angle to 0 o'clock is ${angulo}º`;
        document.getElementById('answerclock').innerHTML = `Your angle between pointers is ${anguloEntreMinutoEHora}º`;
        return angulo;
}
    }

    // function getInputValue(){

    //     let inputVal = document.getElementById("myInput").value;
        
    //     minuteAngle(inputVal);
    //     alert(angulo);
    // }
    