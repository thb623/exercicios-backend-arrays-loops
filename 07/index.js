const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = []


for(let item of nomes){
    if(item[0] === 'A' || item[0] === 'a'){
        nomesComA.push(item)
    }
}

console.log(nomesComA)