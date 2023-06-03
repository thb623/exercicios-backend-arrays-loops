const numeros = [3, 45, 10, 87, 7, 284];

let posicao = -1

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === 10){
        posicao = i
    } 
}

console.log(posicao)