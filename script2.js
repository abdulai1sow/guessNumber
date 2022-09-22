const againBtn = document.querySelector('.again')
const checkBtn = document.querySelector('.check')
const guessField = document.querySelector('.guess')
let numField = document.querySelector('.number')
let msField = document.querySelector('.message')

const hightScore = document.querySelector('.highscore')

let scoreField = document.querySelector('.score')
let score = 20;

let trackScore = 0;

const randomNum = Math.floor(Math.random() * 20) + 1 
console.log(randomNum);


// console.log(guessField.value == randomNum);
const checkFunc = () => {
  if (!Number(guessField.value)) {
    msField.textContent = ('⛔️ must add a number to play')
  // console.log('add number');
  } else if (Number(guessField.value) > randomNum) {
    if (score > 1) {
      msField.textContent = ('📈 too high')
      score-- 
      scoreField.textContent = score
    } else {
      msField.textContent = ('you lost the game')
    }
    // console.log(scoreField);
  } else if (Number(guessField.value) < randomNum) {
    if (score > 1) {
      msField.textContent = ('📉 too low')
      score--
      scoreField.textContent = score
      // console.log('too low');
    } else {
      msField.textContent = ('you lost the game')
    }
  } else if (Number(guessField.value) === randomNum) {
    msField.textContent = ('💰 you win')
    numField.textContent = randomNum
    document.querySelector('body').style.backgroundColor = 'green'
    //get the score to compare trackscore
    if (score > trackScore) {
      trackScore = score
      hightScore.textContent = trackScore
    }
  } 
}

const againFunc = () => {
  location.reload()
}

//advent listeners
checkBtn.addEventListener('click', checkFunc)
againBtn.addEventListener('click', againFunc)
// guessField.addEventListener('click',guessFunc)