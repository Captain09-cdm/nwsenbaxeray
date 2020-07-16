window.addEventListener('load', init);
let time = 7;
let score = 0;
let isPlaying;



const currentWord = document.querySelector('#current-word');
const wordInput = document.getElementById('word-input');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const message = document.querySelector('#message');

const words = [
    "parachute",
    "suburb",
    "mihraban",
    "method",
    "miro",
    "snapchat",
    "cover",
    "praise",
    "pace",
    "beard",
    "shadow",
    "boat",
    "weight",
    "gloom",
    "invisible",
    "book",
    "hole",
    "tight",
    "pill",
    "photography",
    "civilization",
    "flight",
    "shiver",
    "teach",
    "cluster",
    "throat",
    "glue",
    "surprise",
    "concrete",
    "council",
    "trouser",
    "survivor",
    "excuse"
];


function init(){
    showWord(words);

    wordInput.addEventListener('input', startGame);

    setInterval(countDown, 1000);

    setInterval(checkStatus, 50);


}


function startGame(){
    if (matchword()){
        isPlaying = true;
        time = 7;
        showWord(words);
        wordInput.value = '';
        score++;
    }

    if (score === -1){
        scoreDisplay.innerHTML = 0;
    }else{
        scoreDisplay.innerHTML = score;
    }

}


function matchword(){
    if (wordInput.value === currentWord.innerHTML){
        message.innerHTML ='زۆرجاکە';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}


function showWord(words){
    const randIndex = Math.floor(Math.random()*words.length);
    currentWord.innerHTML = words[randIndex];
}
function countDown(){
    if (time > 0){
        time--;
    }else if (time === 0){
        isPlaying = false;
    }

    timeDisplay.innerHTML = time;
}

function checkStatus(){
    if (time === 0 && isPlaying === false){
        message.innerHTML = 'ببوورە کاتت تەواوبوو';
        score = 1;
    }
}
