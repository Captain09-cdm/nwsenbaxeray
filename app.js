window.addEventListener('load', init);
let time = 60;
let score = 0;
let isPlaying;



const currentWord = document.querySelector('#current-word');
const wordInput = document.getElementById('word-input');
const timeDisplay = document.querySelector('#time');
const scoreDisplay = document.querySelector('#score');
const message = document.querySelector('#message');

const words = [
    "parachute and the faint of hair Is the problem with this script and the platform for the first was the faint hearted and the platform of the dark squad of the dark dark clouds and dark clouds of clouds and dark dark clouds and dark lights dark clouds and dark clouds to the faint of heart and the faint hearted and the faint clouds and dark dark clouds and dark clouds to the faint of water and the faint hearted and dark clouds to the ",
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
        time = 60;
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
