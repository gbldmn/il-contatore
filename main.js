// let motore = document.querySelector('.counter');
// let i = 0;

// function avvia(){
//     for(let i = 0; i < 100; i++){
//         console.log(i)
//     }
// }

let motore = document.querySelector('.counter');
let i = 0;
let intervalId; // Variabile per memorizzare l'ID dell'intervallo
let resetId;

function avvia(){
    // Verifica se il contatore è già in esecuzione
    if (!intervalId) {
        intervalId = setInterval(function() {
            i++; // Aumenta il contatore di 1 ogni secondo
            motore.textContent = i; // Aggiorna il testo nel div "counter"
        }, 1000); // Ogni 1000 millisecondi (1 secondo)
    }
}

function arresta(){
    // Interrompe il contatore
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
    motore.textContent = i;
    }
}