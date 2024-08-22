let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {

    const options = ["rock ","paper","scissors"];
   const randidx = Math.floor(Math.random() * 3);
   return options[randidx];
};
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost!  ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }

}


const drawGame = () => {
    msg.innerText = "Game Was Draw Play Again";
    msg.style.backgroundColor = "#081b31"
};

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){

        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
         userWin =  compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});