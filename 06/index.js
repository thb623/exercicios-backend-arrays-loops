const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let aux = 0
for(item of numeros){
    if(item % 2 == 0){
        aux += item
    }
}
console.log(aux)