//Selecting DOM elements

const time = document.getElementById("time");
const greeting=document.getElementById("greeting");
const name=document.getElementById("name");
const focus = document.getElementById("focus");

//function to show the time
function showTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let sec = today.getSeconds();

    //Set AM /PM
    const ampm =  hours >= 12 ? 'PM':'AM';

    //12hour format
    hours = hours%12 || 12;

    //Display
    time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000)
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0': '') + n;
}

//set background 
function setBackground(){
    let today = new Date();
    let hour = today.getHours();
    if(hour<12){
     document.body.style.backgroundImage="url('../img/Golden_Gate_Sunrise.jpg')";
     greeting.textContent="Good Morning"
    } else if(hour<18){
     document.body.style.backgroundImage="url('../img/afternoon.jpg')";
     greeting.textContent="Good Afternoon";
    } else {
     document.body.style.backgroundImage="url('../img/night.jpg')";
     greeting.textContent="Good Evening";
     document.body.style.color="white";
}
}

//getName 
function getName(){
    if(localStorage.getItem('name') === null){
    name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//getFocus
function getFocus(){
    if(localStorage.getFocus('focus') === null){
        focus.textContent = "[Enter task]";
    } else {
        focus.textContent=localStorage.getFocus('focus');
    }
}

function setName(e){
    if(e.type === 'keypress'){
     if(e.which ==13 || e.keyCode ==13){
         localStorage.setItem('name',e.target.innerText);
         name.blur();
     }
    } else {
        localStorage.setItem('name',e.target.innerText)
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which ==13 || e.keyCode ==13){
            localStorage.setItem('name',e.target.innerText);
            focus.blur();
        }
       } else {
           localStorage.setItem('name',e.target.innerText)
       }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur',setName)
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur',setFocus)


//run
showTime();
setBackground();
getName();
getFocus();