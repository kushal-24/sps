//Modular way of programming
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".symbol");
const indicator = document.querySelector(".start");
let myscore=document.querySelector(".you");
let compscore=document.querySelector(".comp");


//gen_userChoice
const playGame = (userChoice) => {
    console.log(userChoice, " was clicked");
    return userChoice;
};

//gen_compChoice
const genComp = () => {
    const options = ["stone", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    const compChoice = options[randomIdx];
    console.log(`${compChoice} was chosen by the computer`);
    return compChoice;
}

//draw function
const draw = () => {
    console.log("Game was draw");
    indicator.innerText = "Game was Draw. Play again.";
    indicator.style.backgroundColor="#007EA7";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        console.log("User won");
        myscore.innerText=userScore;
        indicator.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        indicator.style.backgroundColor="#157F1F";
        indicator.style.color="black";
    }
    else{
        console.log("comp won");
        compScore++;
        compscore.innerText= compScore;
        indicator.innerText = `You lost! Your ${userChoice} was beaten by ${compChoice}`;
        indicator.style.backgroundColor="red";
        indicator.style.color="black";      
    }
};




//store every choice
choices.forEach((symbol) => {
    console.log(symbol);
    symbol.addEventListener("click", () => {
        const userChoice = symbol.getAttribute("id");
        playGame(userChoice);
        const compChoice= genComp();
        if (compChoice === userChoice) {
            draw();
        }
        else {
            let userWin = true;
            if (userChoice === "stone") {
                userWin = compChoice === "paper"?false:true;
            }
            else if (userChoice === "paper") {
                userWin = compChoice === "scissor"?false:true;
            }
            else{//scissor
                userWin = compChoice === "stone"?false:true;
            }
            showWinner(userWin, userChoice, compChoice);
        };
    
    });
});


