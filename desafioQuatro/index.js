acendendoAsLuzes = (interruptor, sala) => {

    if (interruptor == 1){

        if (sala === 3){
            console.log(`O interruptor ${interruptor} controla a lâmpada da sala ${sala}.`)
        } else {
            console.log(`O interruptor ${interruptor} NÃO controla a lâmpada da sala ${sala}.`)

        }


    };

    if (interruptor == 2){
        
        if (sala === 2){
            console.log(`O interruptor ${interruptor} controla a lâmpada da sala ${sala}.`)
        } else {
            console.log(`O interruptor ${interruptor} NÃO controla a lâmpada da sala ${sala}.`)

        }
    };

    if (interruptor == 3){

        if (sala === 1){
            console.log(`O interruptor ${interruptor} controla a lâmpada da sala ${sala}.`)
        } else {
            console.log(`O interruptor ${interruptor} NÃO controla a lâmpada da sala ${sala}.`)
        }
    };
}

acendendoAsLuzes(2,1)