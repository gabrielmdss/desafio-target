// 3) Descubra a lógica e complete o próximo elemento:



// a) 1, 3, 5, 7, ___


alternativaA = (arrayA) => {

    ultimoNumero = arrayA[arrayA.length - 1]
    proximoNumero = ultimoNumero + 2;
    
    console.log(`Resposta da alternativa A: ${proximoNumero}`)

};

alternativaA([ 1, 3, 5, 7])

// b) 2, 4, 8, 16, 32, 64, ____

alternativaB = (arrayB) => {

    ultimoNumero = arrayB[arrayB.length - 1]
    proximoNumero = ultimoNumero * 2;
    
    console.log(`Resposta da alternativa B: ${proximoNumero}`)

};

alternativaB([ 2, 4, 8, 16, 32, 64])

// c) 0, 1, 4, 9, 16, 25, 36, ____

alternativaC = (arrayC) => {

    ultimoNumero = arrayC.length
    proximoNumero = Math.pow(ultimoNumero, 2);
    
    console.log(`Resposta da alternativa C: ${proximoNumero}`)

};

alternativaC([ 0, 1, 4, 9, 16, 25, 36])

// d) 4, 16, 36, 64, ____

alternativaD = (arrayD) => {

    ultimoNumero = arrayD.length * 2;
    proximoNumero = Math.pow(ultimoNumero, 2);
    
    console.log(`Resposta da alternativa D: ${proximoNumero}`)

};

alternativaD([ 4, 16, 36, 64])

// e) 1, 1, 2, 3, 5, 8, ____

alternativaE = (arrayE) => {

    numero = arrayE.length + 3;
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
  
  

    console.log(`Resposta da alternativa E: ${arrayFibonacci}`)

};

alternativaE([ 1, 1, 2, 3, 5, 8])


// f) 2,10, 12, 16, 17, 18, 19, ____

alternativaF = (arrayF) => {
    
   primeiroNumero = arrayF[0];

   arrayDeNumeros = [];

   arrayDeNumeros.push(primeiroNumero);

   primeiroFator = 8;
   segundoFator = primeiroNumero; 
   terceiroFator = segundoFator * 2; 
   quartoFator = segundoFator / 2;

   numeroAtual = 0; 

   if (arrayF){

    numeroAtual = primeiroNumero + primeiroFator;
    arrayDeNumeros.push(numeroAtual);

    numeroAtual = numeroAtual + segundoFator;
    arrayDeNumeros.push(numeroAtual);

    numeroAtual = numeroAtual + terceiroFator;
    arrayDeNumeros.push(numeroAtual);

    numeroAtual = numeroAtual + quartoFator;
    arrayDeNumeros.push(numeroAtual);

   }

   for(let i = 0; i < (arrayF.length + 1) - 5; i++){

    numeroAtual = numeroAtual + quartoFator;
    arrayDeNumeros.push(numeroAtual);

   }

   console.log(`Resposta da alternativa F: ${arrayDeNumeros}`)

};


alternativaF([ 2,10, 12, 16, 17, 18, 19])