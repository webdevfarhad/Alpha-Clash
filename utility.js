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
    // console.log(index);

    return(alpharray[index]);
};
function changeElementValueById(elementId, value){
    const element= document.getElementById(elementId);
    element.innerText= value;
}

function continueGame(){
    const randAlpha= randomAlphaGen()
    changeElementValueById('artboard-letter', randAlpha);
    setBgColorById(randAlpha);
}

function setBgColorById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-500')
}
