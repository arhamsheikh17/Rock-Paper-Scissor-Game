let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");




const genCompChoice = () =>{
    const options = ["rock","paper","scissors"]
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const drawGame = ()=>{
    // console.log("Game Draw");
    msg.innerHTML=" Game was Draw, Try again ";
    msg.style.backgroundColor = "#081b31";
}
const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin){
        // console.log(" You win ");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `You win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        // console.log("You lose");
        msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor ="Red";
    }

};
const playGame = (userChoice)=>{
    console.log("user choice =" , userChoice );
    // cpmuter choice
    const compChoice =genCompChoice();
    console.log("computer choice =" , compChoice );

    if( userChoice === compChoice ){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked" ,userChoice )
        playGame(userChoice);
    });
});