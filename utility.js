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
    const alpharray= alphabets.split('');

    // random index gen
    const randnum= Math.random()*25;
    const index= Math.round(randnum);

    return alpharray[index];
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

// Keyboard Event 
document.addEventListener('keyup', keyboardEventHandler)

function keyboardEventHandler(event){
    const keyPressed= event.key;
    const currentKey= document.getElementById('current-letter');
    const currentKey1 = currentKey.innerText;
    const expectedKey= currentKey1.toLowerCase();
    console.log('player pressed', keyPressed, 'Expected Key', expectedKey)
};