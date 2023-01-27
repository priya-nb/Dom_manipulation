

const createappjs=()=>{

const totalContainer=document.createElement("div")

const labell=document.createElement("label");
const input1_counter=document.createElement("input");
const labellc=document.createElement("label");
const input2_timer=document.createElement("input");
const labellt=document.createElement("label");

const paragraph=document.createElement("p");



//add some ids and  classes
totalContainer.classList.add("totalContainer");


input1_counter.id="Counter";
input2_timer.id="Timer";
paragraph.id="result";
const body=document.body;
body.classList.add("body_color");


//adding labels
var ct=document.createTextNode("To access");
var ct1=document.createTextNode("Counter");
var tc1=document.createTextNode("Timer");


input1_counter.setAttribute("type", "checkbox");
input2_timer.setAttribute("type", "checkbox");
labell.setAttribute("for","Counter_Timer");
labellc.setAttribute("for","Counter_");
labellt.setAttribute("for","Timer_");


labell.appendChild(ct);
labellc.appendChild(ct1);
labellt.appendChild(tc1);
input1_counter.innerText="COUNTER";
input2_timer.innerText="TIMER";

//adding event listener


//append child to body


document.body.appendChild(totalContainer);

totalContainer.appendChild(labell);
totalContainer.appendChild(input1_counter);
totalContainer.appendChild(labellc);
totalContainer.appendChild(input2_timer);
totalContainer.appendChild(labellt);
totalContainer.appendChild(paragraph);


};






createappjs();

  //integrating the applications
/*
let value1=false;
let value2=false;

    let result = document.querySelector('#result');

        document.body.addEventListener('change', function (e) {
         
            let target = e.target;
            let message;
           

            
              
            switch (target.id) {
                
                 
              
                case 'Counter':
                   
                      if(!value1){
                     message=createCounter();

                     value1=true;}

                    break;

                      
              
                case 'Timer':
                    if(value1){
                    message = createTimer();
                    value1=false;}
                              break;
            
                    }
           result.textContent = message;

                               
        });

    */ 

// import the variables and function from counter.js

import {count1,minutes,seconds,miliseconds,timerRunning,interval,startTimer,returnData,startButton,pauseButton,resetButton,createTimer} from "./src/timer/timer.js" ;
import { count,incrementCount,decrementCount,updateCount,createCounter } from "./src/counter/counter.js" ;