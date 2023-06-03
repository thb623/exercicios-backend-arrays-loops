const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteFilaDentro = 5
const espacoLivre = limiteFilaDentro - filaDeDentro.length

for(let pessoa of filaDeFora){
    if(filaDeDentro.length < limiteFilaDentro){
        filaDeDentro.push(pessoa)
        filaDeFora.shift(pessoa)
    }
}

console.log(filaDeDentro)
console.log(filaDeFora)