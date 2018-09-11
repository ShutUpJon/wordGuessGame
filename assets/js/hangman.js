// Create an Array of Words //
const word = ['blue', 'orange', 'red', 'pink', 'black', 'grey', 'white'];
// Choose Word Randomly //
var randNum = Math.floor(Math.random() *word.length);
var choosenWord = word[randNum];
var numBlanks = [];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// Underscores Manipulation /
var docUnderScore = document.getElementsByClassName('underscore');
var docRightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');


// Main //
// ========================================================== //
// Create underscores based on length of word //



var generateUnderscore = () => {
    for(var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightGuess.join('');
    }
    return underScore;
}

// Get users guess // 
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
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

