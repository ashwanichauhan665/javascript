let userscore = 1;
let computerscore = 1;

const choice = document.querySelectorAll(".game");
const msg = document.querySelector(".res");
let msgtext = document.querySelector(".res").innerText;
let msgcolor = document.querySelector(".res").style.backgroundColor;
let userScore = document.querySelector(".userrecord");
let computerScore = document.querySelector(".computerrecord");
let button = document.querySelector(".button");



const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

let showwinner = (userwin,userchoice,computerchoice) => {
    if(userwin){
        console.log("You win!");
        userScore.innerText = userscore++;
        msg.innerText = `You win! ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{ 
        console.log("You Lose!");
        computerScore.innerText = computerscore++;
        msg.innerText = `You Lose! ${computerchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const computerchoice = gencompchoice();
    console.log("computer choice = ",computerchoice);
    if(userchoice === computerchoice){
        console.log("Draw game!");
        msg.innerText = "Game Draw!"
        msg.style.backgroundColor = "yellow";
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoice === "paper"? false : true;
        }
        else if(userchoice === "paper"){
            userwin = computerchoice === "scissor"?false : true;
        }
        else {
            userwin = computerchoice === "rock"?false:true;
        }
        showwinner(userwin,userchoice,computerchoice);
        }
}
choice.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

button.addEventListener("click",() => {
    userscore = 1;
    userScore.innerText = 0;
    computerscore = 1;
    computerScore.innerText = 0;
    msg.innerText = msgtext;
    msg.innerHTML = msgcolor;
});
