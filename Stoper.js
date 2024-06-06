const stopwatch = document.getElementById("stopwatch");
let timer = null;
let startTime = 0;
let elapsTime = 0;
let isRuning = false;


function start(){
if(!isRuning){
    startTime = Date.now() - elapsTime;
    timer = setInterval(update, 10);
    isRuning = true;
}

}
   
function stop(){

}

function reset(){

}

function update(){
    const currentTime = Date.now();
    elapsTime = currentTime - startTime;

    let hours = Math.floor(elapsTime / (1000 * 60 * 60));
    let minut = Math.floor(elapsTime / (1000 * 60) % 60);
    let secound = Math.floor(elapsTime / (1000 % 60));
    let millisecounds = Math.floor(elapsTime % 1000) / 10;

    stopwatch.textContent = `${hours}:${minut}:${secound}:${millisecounds}`
}