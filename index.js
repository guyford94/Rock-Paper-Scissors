var userScore=0;
var computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBord_div = document.querySelector("score-borde")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const Scissors_div = document.getElementById("s")

function getComputerChoices() {
   const computerChoices = ['r','p','s']
   const randomNumber = Math.floor(Math.random()*3);
    return computerChoices[randomNumber];
}
function convertToWords(letter) {
   if(letter == "r") return "Rock"
   if(letter == "p") return "Paper"
   if(letter == "s") return "Scissors"
}


function win(userChoise , computerChoices) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWords(userChoise)}${smallUser} beats ${convertToWords(computerChoices)}${smallComputer} . You win!  `;
    document.getElementById(userChoise).classList.add('green-glow');
    setTimeout( () =>document.getElementById(userChoise).classList.remove('green-glow') ,300)
        
}
function lose(userChoise , computerChoices) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "computer".fontsize(3).sub();
    result_p.innerHTML = `${convertToWords(computerChoices)} ${smallComputer} beats ${convertToWords(userChoise)}${smallUser}. You lose!`;
    document.getElementById(userChoise).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoise).classList.remove('red-glow') ,300)
}
function draw(userChoise , computerChoices) {
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "computer".fontsize(3).sub();
    result_p.innerHTML = `You chose ${convertToWords(userChoise)}${smallUser} computer choose ${convertToWords(computerChoices)}${smallComputer}. draw`;
    document.getElementById(userChoise).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoise).classList.remove('gray-glow') ,300)
}

function Game(userChoise) {
   const computerChoices = getComputerChoices();
  switch(userChoise + computerChoices){
    case "rs":
    case "pr":
    case "sp":
        win(userChoise , computerChoices);
        break;
    case "rp":
    case "sr":
    case "ps":
        lose(userChoise , computerChoices);
        break;
    case "pp":
    case "rr":
    case "ss":
        draw(userChoise , computerChoices)
        break;
    
  }

}



function main() {
 
rock_div.addEventListener("click",()=> Game("r"))
paper_div.addEventListener("click",()=>Game("p"))
Scissors_div.addEventListener("click",()=>Game("s"))  
}

main();




