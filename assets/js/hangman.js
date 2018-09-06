// GLobal Variables //
// ========================================================= //
// Create an Array of Words //
const word = ['blue', 'orange', 'red', 'pink', 'black', 'grey', 'white'];
// Choose Word Randomly //
let randNum = Math.floor(Math.random() *word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// Underscores Manipulation /
let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');


// Main //
// ========================================================== //
// Create underscores based on length of word //
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightGuess.join('');
    }
    return underScore;
}

// Get users guess //
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
// if Users Guess is right 
    if(choosenWord.indexOf(keyword) > -1) {
    // add to right words array //
    rightWord.push(keyword);
    
    // replace udnerscore with thwe correct letter //
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord;
   // Check to see if user word matches guess //
    if(underScore.join('') == choosenWord) {
        alert('You Win');
    }

    }
    else {
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
        
    }
        
        
});



// If right push to right array //
// If wrong push to wrong array //
