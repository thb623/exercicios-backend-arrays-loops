const original = [5, 20, 13, 17, 26, 267, 118, 245];
const novoArray = []



for(let item of original){
    if(item >= 10 && item <= 20 || item >= 100){
        novoArray.push(item)
    }
}
console.log(novoArray)