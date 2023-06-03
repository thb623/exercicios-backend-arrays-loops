const numeros = [8, 15, 4, 1];

let maiorDiff = 0

for(let num1 of numeros){
    for(let num2 of numeros){
        const diferenca = num1 - num2
        if(diferenca > maiorDiff){
            maiorDiff = diferenca
        }
    }
}

console.log(maiorDiff)