let computerNum = 0;

let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let chanceArea = document.getElementById("chance-area");
let chance = 5;
let gameOver= false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",()=>{userInput.value=""})

function pickRandomNum(params) {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

pickRandomNum();

function play() {

  let userValue = userInput.value;

  //유효성 검사
  if(userValue<1 || userValue>100){
    resultArea.textContent = "1과100사이 숫자를 입력해주세요";
    return;
  }

  if(history.includes(userValue)){
    resultArea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해주세요";
    return;
  }

  chance--;
  chanceArea.textContent=`남은 기회 ${chance}번`;

  if (userValue < computerNum) resultArea.textContent = "Up!!!";
  else if (userValue > computerNum) resultArea.textContent = "Down!!!";
  else {
    resultArea.textContent = "맞추셨습니다!!!";
    gameOver= true;
  }

  history.push(userValue);

  if(chance < 1){
    gameOver = true;
  }

  if(gameOver == true){
    playButton.disabled = true;
  }
}


function reset() {
    userInput.value = "";
    chance = 5;
    //새로운 넘버 생성
    pickRandomNum();

    resultArea.textContent = "결과값이 여기 나옵니다";
}
