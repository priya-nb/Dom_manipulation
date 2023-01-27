//global variable

let count = 0;

const incrementCount=()=>{

    const countValue=document.getElementById("countValue");
    count=count+1;
    updateCount();

};


const decrementCount=()=>{
   const countValue=document.getElementById("countValue");
    count=count-1;
   updateCount();
};


const updateCount = () =>{

    countValue.innerText = `count: ${count} `;
};



const createCounter = () => {


//create the relevant HTML dom elements
const counterContainer=document.createElement("div");
const counterHeading=document.createElement("h1");
const counterValue=document.createElement("p");
const incrementButton=document.createElement("button");
const decrementButton=document.createElement("button");


//add some ids and  classes
counterContainer.classList.add("counterContainer");
counterHeading.classList.add("counterHeading");
counterValue.id="countValue";
incrementButton.id="increment";
decrementButton.id="decrement";

//adding style

const body=document.body;
body.classList.add("blue");




//add some text inside the element
counterHeading.innerText="Counter";
counterValue.innerText=`count:${count}`;
incrementButton.innerText="+";
decrementButton.innerText="-";


//adding event listener

incrementButton.onclick=incrementCount;
decrementButton.onclick=decrementCount;

//add a child element

counterContainer.appendChild(counterHeading);
counterContainer.appendChild(counterValue);
counterContainer.appendChild(incrementButton);
counterContainer.appendChild(decrementButton);
document.body.appendChild(counterContainer);

};

createCounter();



export {count,incrementCount,decrementCount,updateCount,createCounter};