// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 
//e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa 
//na linguagem que desejar onde, informado um número, ele calcule a 
//sequência de Fibonacci e retorne uma mensagem avisando se o número 
//informado pertence ou não a sequência.


// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua 
//preferência ou pode ser previamente definido no código;

 calcularFibonacci = (numero) => {
 
    numeroUm = 1;

    arrayFibonacci = [0,1]
    arrayDePosicoes = []

    for (let i = 0;  i < numero; i++){
        arrayDePosicoes.push(i+1)
    }


  for (let i = 0;  i < arrayDePosicoes.length; i++){ 

    fibonacci = arrayFibonacci[i] + arrayFibonacci[i+1]

    arrayFibonacci.push(fibonacci)

  }

  if (arrayFibonacci){

    let numeroProcurado = arrayFibonacci.find((numeroP)=> numeroP == numero)

    if(numeroProcurado != undefined){
        return console.log('Esse número pertence a sequência Fibonacci')
    } else {
        return console.log('Esse número não pertence a sequência Fibonacci')
    }

 }
};

 calcularFibonacci(987)