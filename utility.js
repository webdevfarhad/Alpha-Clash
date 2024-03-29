function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}

function randomAlphaGen(){
    // array of alphabet 
    const alphabets= "abcdefghijklmnopqrstuvwxyz";
    const alphaArray= alphabets.split('');

    // random index gen
    const randnum= Math.random()*25;
    const index= Math.round(randnum);

    return alphaArray[index];
};
function changeElementValueById(elementId, value){
    const element= document.getElementById(elementId);
    element.innerText= value;
}


// Continue Game
function continueGame(){
    const randAlpha= randomAlphaGen()
    changeElementValueById('current-letter', randAlpha);
    setBgColorById(randAlpha);
}

function setBgColorById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}


function removeBgColorById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('bg-orange-500')
}
// Keyboard Event 
document.addEventListener('keyup', keyboardEventHandler)

function keyboardEventHandler(event){
    // player pressed
    const keyPressed= event.key;
    // On display key
    const currentKey= document.getElementById('current-letter');
    const currentKey1 = currentKey.innerText;
    const expectedKey= currentKey1.toLowerCase();
    // console.log('player pressed', keyPressed, 'Expected Key', expectedKey)

    if(keyPressed === expectedKey){
        currentKey.innerText= keyPressed;
        setBgColorById(keyPressed);
        removeBgColorById(expectedKey);
        const playerScore= document.getElementById('player-score'); 
        const updatedPlayerScore= parseInt(playerScore.innerText) + 5;
        changeElementValueById('player-score', updatedPlayerScore)
        continueGame();

    }
    else if(keyPressed === 'Escape'){
        gameOver();
    }
    else{   
        const lifeScore= document.getElementById('life-score');
        const updatedLifeScore= parseInt(lifeScore.innerText)-1;
        changeElementValueById('life-score', updatedLifeScore)
        if(updatedLifeScore<1){
            gameOver();
        }
    }
};

function gameOver(){
    hideElementById('playground');
    showElementById('score');
    const playerScore= document.getElementById('player-score');
    const updatedPlayerScore= parseInt(playerScore.innerText);
    changeElementValueById('last-score', updatedPlayerScore);
    const currentKey= document.getElementById('current-letter');
    const playAgain = document.getElementById('play-again').addEventListener('click',function(){
        hideElementById('score');
        showElementById('playground');
        changeElementValueById('life-score', 5);
        changeElementValueById('player-score', 0);
        removeBgColorById(currentKey);
        continueGame()
        
    });


    // hideElementById('playground');
    // showElementById('score');
    // const endScore= document.getElementById('end-score');
    // changeElementValueById('end-score', updatedLifeScore)
    // const playAgain= document.getElementById('play-again')
    // function play_again(){
    //     hideElementById('score');
    //     showElementById('playground');
    //     removeBgColorById(expectedKey);
    //     continueGame()
    // }
}
