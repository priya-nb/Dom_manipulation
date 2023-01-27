

let count1=0;
let minutes=0;
let seconds=0;
let miliseconds=0;
let timerRunning=false;
let interval;


let startTimer=()=>{
    
    count1=count1+1;


    minutes=Math.floor((count1/100)/60);
    seconds=Math.floor((count1/100)-(minutes*60));
    miliseconds=Math.floor(count1-(seconds*100)-(minutes*6000));


    document.getElementById("minutes").innerText=returnData(minutes)+":";
    document.getElementById("seconds").innerText=returnData(seconds)+":";
    document.getElementById("miliseconds").innerText=returnData(miliseconds);

};

function returnData(time){

    return time >=10 ? time : `0${time}`
}


//click on start button

let startButton=()=>{

  
     if(!timerRunning){
     //setinterval is predefined it will call starttimer continuosly for every 10 interval
      interval=setInterval(startTimer,10);   
   
       timerRunning=true;

    }

};


//click on pause button


let pauseButton=()=>{

    clearInterval(interval); 
};


//click on reset button

let resetButton=()=>{

clearInterval(interval);

 count1=0;
 minutes=0;
 seconds=0;
 miliseconds=0;
 timerRunning=false;

document.getElementById("minutes").innerText=returnData(minutes)+":";
document.getElementById("seconds").innerText=returnData(seconds)+":";
document.getElementById("miliseconds").innerText=returnData(miliseconds);



};



const createTimer=()=>{

//create the relevant HTML dom elements

const timerContainer=document.createElement("div");
const card_heading=document.createElement("h1");
const display_time=document.createElement("h1");
const Minutes=document.createElement("span");
const Seconds=document.createElement("span");
const Miliseconds=document.createElement("span");
const srtButton=document.createElement("button");
const pseButton=document.createElement("button");
const rstButton=document.createElement("button");


//add some ids and  classes

 timerContainer.classList.add("timerContainer");
 card_heading.classList.add("card_heading");
 display_time.classList.add("display_time");
 Minutes.id="minutes";
 Seconds.id="seconds";
 Miliseconds.id="miliseconds";
 srtButton.id="start";
 pseButton.id="pause";
 rstButton.id="reset";
 const body=document.body;
 body.classList.add("green");


//add some text inside the element

card_heading.innerText="Timer";
Minutes.innerText="00:";
Seconds.innerText="00:";
Miliseconds.innerText="00";

srtButton.innerText="START";
pseButton.innerText="PAUSE";
rstButton.innerText="RESET";


//adding event listener

srtButton.onclick=startButton;
pseButton.onclick=pauseButton;
rstButton.onclick=resetButton;


//add a child element


timerContainer.appendChild(card_heading);

timerContainer.appendChild(display_time);
display_time.appendChild(Minutes);
display_time.appendChild(Seconds);
display_time.appendChild(Miliseconds);
timerContainer.appendChild(srtButton);
timerContainer.appendChild(pseButton);
timerContainer.appendChild(rstButton);



document.body.appendChild(timerContainer);

};



createTimer();

//exporting variables and functions
export {count1,minutes,seconds,miliseconds,timerRunning,interval,startTimer,returnData,startButton,pauseButton,resetButton,createTimer};