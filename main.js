

let motore = document.querySelector('.counter');
let blocco = 0;
let i = 0;
let intervalId;
let resetId;
let rallentaId = true;
let avviaId = true;
let conteggioCrescente = true;


function avvia(){
    
    if (!intervalId) {
        intervalId = setInterval(function() {
            i++; 

            motore.innerHTML = `<div>
                                    <h1 class="boer">${i}</h1>
                                </div>`;
        }, 1000); 
    }
}

function velocizza() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
                        
            motore.innerHTML = `<h1 class="boer">${i}</h1>`;
            if (rallentaId == false){
            i--;
            }else {
            i++;
            }
        }, 500);
    }
}


function rallenta() {
    if (intervalId) {
        clearInterval(intervalId); 
        intervalId = setInterval(function () {
            
            motore.innerHTML = `<h1 class="boer">${i}</h1>`;
            if (rallentaId == false){
            i--;
            }else {
            i++;
            }

        }, 2000); 
    }
}
function inverti(){
    if (intervalId){
        clearInterval(intervalId);
    }
    intervalId = setInterval(function () {
        rallentaId = false
        if (conteggioCrescente) {
            i--;
        } else {
            i++;
            rallentaId = true
        }
        motore.innerHTML = `<h1 class="boer">${i}</h1>`;
    },1000);
    conteggioCrescente = !conteggioCrescente;
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
    motore.innerHTML = `<h1 class="boer">${i}</h1>`;
    }
}

function data(){
    const oggi = new Date();
    const giorno = oggi.getDate();
    const mese = oggi.getMonth() + 1;
    const anno = oggi.getFullYear();
    motore.innerHTML = `<h1 class="boer">${giorno}/ ${mese}/ ${anno}</h1> `;
    clearInterval(intervalId);
    intervalId = null;
    i = 0;
}
function ora(){
    const oraAttuale = new Date(); 
    const ore = oraAttuale.getHours();
    const minuti = oraAttuale.getMinutes();
    const secondi = oraAttuale.getSeconds();
    motore.innerHTML = `<h1 class="boer">${ore}:${minuti}</h1>`;
    clearInterval(intervalId);
    intervalId = null;
    i = 0;
}