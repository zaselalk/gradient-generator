const button = document.getElementById('click');
const container = document.getElementById('container');
const textSelector = document.getElementById('color-code');

// Trigger when Refresh button click
button.addEventListener('click',changeColor)
textSelector.addEventListener('click',copyToClipBoard)

//trigger when space click
document.body.onkeypress = function(e){
    if(e.keyCode == 32 || e.code =='Space'){
        button.click() 
    }
}
function changeColor(){
    let randomColorText = `linear-gradient(to right, ${randomHex()}, ${randomHex()})`
    container.style.background = randomColorText
    textSelector.innerText = randomColorText
    document.getElementById("tooltip").innerText="Click to Copy";
}

function randomHex(){
    let values = "0123456789abcdef";
    let colorcode ="#";
    for(let i=1;i<=6;i++){
        colorcode += values.charAt(Math.floor(Math.random()*16));
    }
    return colorcode
}

function copyToClipBoard(){
    let colorCode= document.getElementById('color-code').textContent;
    navigator.clipboard.writeText(colorCode);
    document.getElementById("tooltip").innerText="Copied";
}

