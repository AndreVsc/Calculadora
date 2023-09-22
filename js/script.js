// elementos

const display = document.querySelector("#displayInput");
const botaoIgual = document.querySelector(".Igual");
const botaoPonto = document.querySelector(".Ponto");
const botaoApagar = document.querySelector(".Apagar");
const botoesNumeros = document.querySelectorAll(".Numeros");
const botoesOperadores = document.querySelectorAll(".Operador");

// Variáveis globais

let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções

function atualizarDisplay(){
    display.value = operacaoAtual;
}

function inserirNumero(event){
    if(calculando){
        operacaoAtual = event.target.textContent;
        calculando = false;
    }else{
        operacaoAtual += event.target.textContent;
    }   
    atualizarDisplay();
}

function inserirPonto(event){
    if(operacaoAtual.indexOf(".") === -1){
        operacaoAtual += "."; 
        atualizarDisplay();
    }  
}

function inserirOperador(event){
    if(operacaoAtual !== ""){
        if(!calculando) {
            if(operador !==null){
               calcula(); 
            }
            valorAnterior = operacaoAtual;
            operacaoAtual = "";
        }
        operador = event.target.textContent;
    }
}


function calcula(){
    let resultado = null;
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoAtual = parseFloat(operacaoAtual);

    switch(operador){
        case "+":
            resultado = operandoAnterior + operandoAtual;
        break;
        case "-":
            resultado = operandoAnterior - operandoAtual;
        break;
        case "*":
            resultado = operandoAnterior * operandoAtual;
        break;
        case "/":
            resultado = operandoAnterior / operandoAtual;
        break;
    }

    operacaoAtual = String(resultado);
    valorAnterior = operacaoAtual;
    calculando = true;
    atualizarDisplay();

}

function apagarDisplay(){
    operacaoAtual = "";
    operador = null;
    valorAnterior = "";
    calculando = false;
    atualizarDisplay();
}

// Eventos

botaoPonto.addEventListener("click",inserirPonto);
botoesNumeros.forEach((botao) => botao.addEventListener("click",inserirNumero));
botoesOperadores.forEach((botao) => botao.addEventListener("click",inserirOperador));
botaoIgual.addEventListener("click",calcula);
botaoApagar.addEventListener("click",apagarDisplay);