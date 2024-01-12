//to target all the buttons
const buttonsEl = document.querySelectorAll("button")

//target inputfield with result id.
const inputFieldEl = document.getElementById("result")
//introduce event listner for every click in each button
//no need to make it one by one instead we can use for loop
for(let i= 0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click",()=>{
    const buttonValue = buttonsEl[i].textContent;
    if(buttonValue === "C"){
        clearResult()
    }else if(buttonValue === "="){
        calculateResult()
    }else{
        appendValue(buttonValue)
    }});
} 

function clearResult(){
    inputFieldEl.value = ""
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue){
    inputFieldEl.value += buttonValue
}