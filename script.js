const inputBox = document.querySelector(".numberInput");
const checkButton = document.querySelector(".checkBtn");
const errorMsg = document.querySelector(".error");
const randomNumber = document.querySelector(".randomNumber");

// won/lost defination
let totalWon = 0;
let totalLost = 0;
let reminingAttempts = 5;
let attempts = 0;
const totalWonText = document.querySelector(".won-result")
const totalLostText = document.querySelector(".lost-result")
const attemptLeft = document.querySelector(".attemptLeft")


checkButton.addEventListener("click", () => {
     const RandomNumber = Math.floor((Math.random() * 5 )+ 1);
     inputValue = parseInt(inputBox.value);
     remainingAttempt()
     attempts++
     if (attempts > 4) {
          checkButton.disabled = true;
     }

     if (RandomNumber === inputValue){
          errorMsg.innerHTML = "Your Have Won!";
          totalWon++;
          totalWonText.innerHTML = `Won:- ${totalWon}`;
     }else{
          errorMsg.innerHTML = "Your Have Lost!"
          totalLost++;
          totalLostText.innerHTML = `Lost:- ${totalLost}`
     }
     randomNumber.innerHTML = `Random Number Was ${RandomNumber}`;
     inputBox.value = "";
})


const remainingAttempt = () => {
     reminingAttempts--;  
     attemptLeft.innerHTML = `You Have ${reminingAttempts} Times to play!`;
}


















// How to play section

const question = document.querySelector(".question");
const arrow = document.querySelector(".arrow");
const howToPlayText = document.querySelector(".howToPlayText")

question.addEventListener("click", () => {
     howToPlayText.classList.toggle("show__text");
     arrow.classList.toggle("arrow_click");
     
})