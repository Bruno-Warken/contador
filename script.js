let resultadoHoras = document.querySelector('p#resultadoHoras');
let resultadoMinutos = document.querySelector('p#resultadoMinutos');
let resultadoSegundos = document.querySelector('p#resultadoSegundos');
let intervalo;
let estaPausado;
let valorDigitado;

// Converte o tempo digitado pelo usuário e começa o contador
function converter() {

    clearInterval(intervalo);

    let totalSegundos = ((Number(document.querySelector('input#minutos').value)) * 60);

    valorDigitado = totalSegundos;

    let horas = Math.floor(totalSegundos / 3600);
    let minutos = Math.floor((totalSegundos % 3600) / 60);
    let segundos = Math.floor(totalSegundos % 60);

    // Chama a função "contador", passando como valor(parametro) a variável "totalSegundos"
    contador(totalSegundos);

    // Chama a função "display", passando como valor(parametro) as variaveis "horas, minutos, segundos"
    display(horas, minutos, segundos);

    if(estaPausado == true){
        document.querySelector('input#btnPausa').value = 'Pausar';
        document.querySelector('input#btnPausa').onclick = pausar;
    }
}

// Função que mostra na tela o valor convertido pela função "contar"
function display (hh, mm, ss){

    if (hh < 10) {
        hh = `0${hh}`;
    }

    if (mm < 10) {
        mm = `0${mm}`;
    }

    if (ss < 10) {
        ss = `0${ss}`;
    }

    resultadoHoras.textContent = `${hh}`;
    resultadoMinutos.textContent = `${mm}`;
    resultadoSegundos.textContent = `${ss}`;
}

// Função que faz o tempo correr de forma decrescente ao ser chamada pela função "contar"
function contador (timer){

    intervalo = setInterval(function(){

        if(timer <= 0){
            clearInterval(intervalo)
        }else{
            timer--;
        }

        let horas = Math.floor(timer / 3600);
        let minutos = Math.floor((timer % 3600) / 60);
        let segundos = Math.floor(timer % 60);

        display(horas, minutos, segundos);

    },1000)
}

// Função que pausa o contador e altera o valor do botão "pausar" para "continuar". Após isso, atribui a função "continuar" para o click
function pausar (){
    clearInterval(intervalo);
    document.querySelector('input#btnPausa').value = 'Continuar';
    document.querySelector('input#btnPausa').onclick = continuar;
    estaPausado = true;
}

// Função que resume o contador e altera o valor do botão de volta para "pausar". Após isso, reatribui a função "pausar" para o click
function continuar(){
    let tempoRestante = getTempoRestante();
    contador(tempoRestante);
    document.querySelector('input#btnPausa').value = 'Pausar';
    document.querySelector('input#btnPausa').onclick = pausar;
    estaPausado = false;
}

// Função que recebe, calcula e retorna o tempo restante no timer
function getTempoRestante(){
    let horas = Number (resultadoHoras.textContent);
    let minutos = Number (resultadoMinutos.textContent);
    let segundos = Number (resultadoSegundos.textContent);

    return horas * 3600 + minutos * 60 + segundos;
}

//Função que para o timer, retorna ele para o valor inicial digitado pelo usuário
function resetar(){

    pausar()

    let horas = Math.floor(valorDigitado / 3600);
    let minutos = Math.floor((valorDigitado % 3600) / 60);
    let segundos = Math.floor(valorDigitado % 60);
    
    display(horas, minutos, segundos);
}

function cancelar (){
    clearInterval(intervalo);
    valorDigitado = 0;
    display (0,0,0);
    document.querySelector('input#minutos').value = '';
}

















    
/* function converter(){

    let totalSegundos = ((Number(document.querySelector('input#minutos').value)) * 60);

    let intervalo = setInterval(function () {

        if (totalSegundos <= 0) {
            clearInterval(intervalo);
        } else {

            totalSegundos--;

            let horas = Math.floor(totalSegundos / 3600);
            let minutos = Math.floor((totalSegundos % 3600) / 60);
            let segundos = Math.floor(totalSegundos % 60);

            if (horas < 10) {
                horas = `0${horas}`;
            }

            if (minutos < 10) {
                minutos = `0${minutos}`;
            }

            if (segundos < 10) {
                segundos = `0${segundos}`;
            }

            resultadoHoras.textContent = `${horas}`;
            resultadoMinutos.textContent = `${minutos}`;
            resultadoSegundos.textContent = `${segundos}`;

        }
    }, 1000);
} */