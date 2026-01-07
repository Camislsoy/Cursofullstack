for (let i = 1; i<=100; i++){
    // quando for multiplo de 3 e de 5
    if (i % 3 == 0  && i % 5 == 0){
        console.log("FizzBuzz")
        // quando for multiplo de 3
    }else if (i % 3== 0){
        console.log("Buzz")
    }else if (i % 5==0){
        console.log("Buzz")
        //  quando nao for nenhuma das opções acima
    }else {
    console.log(i)
    }
}