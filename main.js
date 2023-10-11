

let motore = document.querySelector('.counter');
let i = 0;
let intervalId;
let resetId;
let velocizzaId;
let rallentaId;

function avvia(){
    
    if (!intervalId) {
        intervalId = setInterval(function() {
            i++; 
            motore.innerHTML = `<h1>${i}</h1>`;
            if( i == 2){
                motore.innerHTML = `<img src="img/images.jpg">`;
            }
        }, 1000); 
    }
}
function velocizza() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
            i++;
            motore.innerHTML = `<h1>${i}</h1>`;
        }, 500); 
    }
}

function rallenta() {
    if (intervalId) {
        clearInterval(intervalId); 
        intervalId = setInterval(function () {
            i++;
            motore.innerHTML = `<h1>${i}</h1>`;
        }, 2000); 
    }
}
function inverti() {
    if (intervalId) {
        clearInterval(intervalId); 
        intervalId = setInterval(function () {
            i--;
            motore.innerHTML = `<h1>${i}</h1>`;
        }, 1000); 
    }
}


function arresta(){
    
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}
function reset(){
    if(!resetId) {
    clearInterval(intervalId);
    intervalId = null;
    i = 0;
    motore.innerHTML = `<h1>${i}</h1>`;
    }
}

function data(){
    const oggi = new Date();
    const giorno = oggi.getDate();
    const mese = oggi.getMonth() + 1;
    const anno = oggi.getFullYear();
    motore.innerHTML = `${giorno}/ ${mese}/ ${anno} `;
    clearInterval(intervalId);
    intervalId = null;
    i = 0;
}
function ora(){
    const oraAttuale = new Date(); 
    const ore = oraAttuale.getHours();
    const minuti = oraAttuale.getMinutes();
    const secondi = oraAttuale.getSeconds();
    motore.innerHTML = `${ore}:${minuti}`;
    clearInterval(intervalId);
    intervalId = null;
    i = 0;
}