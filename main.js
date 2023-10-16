

let motore = document.querySelector('.counter');
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
            motore.innerHTML = `<h1>${i}</h1>`;
        }, 1000); 
    }
}
function velocizza() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = setInterval(function () {
                        
            motore.innerHTML = `<h1>${i}</h1>`;
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
            
            motore.innerHTML = `<h1>${i}</h1>`;
            if (rallentaId == false){
            i--;
            }else {
            i++;
            }

        }, 2000); 
    }
}
// function inverti() {
//     if (intervalId) {
//         clearInterval(intervalId);
//         intervalId = setInterval(function () {
//             rallentaId = false
//             if (conteggioCrescente){
//             i--;
//             conteggioCrescente = false;
//             console.log(conteggioCrescente)
//             }else if (conteggioCrescente == false) {
//             i++;
//             }
//             motore.innerHTML = `<h1>${i}</h1>`;
//         }, 1000);
//     }
// }
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
        motore.innerHTML = `<h1>${i}</h1>`;
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