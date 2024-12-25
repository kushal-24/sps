//Modular way of programming
let turn = "user";
let userScore = 0;
let CompScore = 0;
const choices = document.querySelectorAll(".symbol");

//gen_userChoice
const playGame = (choiceId) => {
    console.log(choiceId, " was clicked");
    return choiceId;
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
}

const showWinner = () => {
    if (userWin === "true") {
        console.log("User won");

    }
    else if (userWin === "false") {
        console.log("comp won");
    }
}



//store every choice
choices.forEach((symbol) => {
    console.log(symbol);
    symbol.addEventListener("click", () => {
        const choiceId = symbol.getAttribute("id");
        playGame(choiceId);
        genComp();
        if (compChoice === choiceId) {
            draw();
        }
        else {
            let userWin = "true";
            if (choiceId === "Stone") {
                userWin = compChoice === "scissor";
            }
            else if (choiceId === "paper") {
                userWin = compChoice === "stone";
            }
            else if(choiceId=== "scissor"){
                userWin = compChoice === "paper";
            }
        }
        console.log("User win determination:", userWin);
        showWinner(userWin);
    });
});


