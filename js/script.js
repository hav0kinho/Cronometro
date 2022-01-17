//===============CONSTANTES==========================-
//Variáveis
let minuto = 0;
let segundo = 0;
let milisegundo = 0;
let intervaloTimer = undefined;

//Textos
const minutoSpan = document.getElementById('minuto');
const segundoSpan = document.getElementById('segundo');
const milisegundoSpan = document.getElementById('milisegundo');

//Botões
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnReset = document.getElementById('btn-reset');

//Funções
const startTimer = () => {
    intervaloTimer = setInterval(timer, 10);
    console.log('Iniciando Timer');
}

const stopTimer = () => {
    clearInterval(intervaloTimer);
    console.log('Parando Timer');
}

const resetTimer = () => {
    minuto = 0;
    segundo = 0;
    milisegundo = 0;
    atualizaHTML()
    stopTimer();
}

const timer = () => {
    if(milisegundo >= 1000){
        milisegundo = 0;
        segundo++;
    }
    if(segundo >= 60){
        segundo = 0;
        minuto++;
    }
    if(minuto >= 99){
        console.log('Limite quase atingido')
    }
    milisegundo += 10;
    
    atualizaHTML();
}

const atualizaHTML = () => {
    milisegundoSpan.innerHTML = milisegundo;
    segundoSpan.innerHTML = segundo;
    minutoSpan.innerHTML = minuto;
}
//=======================================================


//Event Listeners
btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);