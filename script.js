var timerVal = 60;
var score = 0;
var Hit = 0;

function CalScore(){
    score += 10;
    document.querySelector('#ScoreVal').textContent = score;
}

function HitValue(){
    Hit = Math.floor(Math.random()*10);
    document.querySelector('#HitVal').textContent = Hit;
}


function MakeBubble(){
var clutter="";

for(var i = 1; i <= 240; i++){
    let randomNumber = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
}
document.querySelector('.PanelBody').innerHTML = clutter;
}

function RunTimer(){
    var timer = setInterval(()=>{
        if(timerVal > 0){
        timerVal--;
        document.querySelector('#timer').textContent = timerVal;
    }else{

        document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1> <h1>${score}</h1>`;
        clearInterval(timer);
    }
    }, 1000)
}


document.querySelector('#pbtm').addEventListener('click', (dets)=>{
    var hitTarget = (Number(dets.target.textContent));
   if(hitTarget === Hit){
    CalScore();
    MakeBubble();  
    HitValue();

   }
})


// CalScore();
HitValue();
MakeBubble();   
RunTimer();
