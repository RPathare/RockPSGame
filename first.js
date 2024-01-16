let userScore=0;
let compScore=0;

const images=document.querySelectorAll(".img");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#computer");


const genCompImg = () => {
   const option = ["rock","paper","scissors"];
   const ranIdx= Math.floor(Math.random() * 3);
   return option[ranIdx];
};

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor ="black";
};

const showWinner = (userWin, imgId, compImg) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your ${imgId} beats ${compImg}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You Lose");
        msg.innerText = `You lose! ${compImg} beats Your ${imgId}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame = (imgId) =>  {
    console.log("user img =",imgId);
    const compImg = genCompImg();
    console.log("comp img =",compImg);

    if(imgId === compImg){
       drawGame();
    }else{
        let userWin = true;
        if(imgId === "rock"){
          userWin = compImg === "paper" ? false : true;
        }else if(imgId === "paper"){

           userWin = compImg === "scissors" ? false : true; 
        }else{
           userWin = compImg === "rock" ? false : true;
        }
        showWinner(userWin, imgId, compImg);
    }
};


images.forEach((img) => {   
    img.addEventListener("click", () => {
    const imgId = img.getAttribute("id");
    // console.log("img was clicked",imgId);
    playGame(imgId);
    });

});