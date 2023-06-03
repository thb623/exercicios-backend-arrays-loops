const original = [1, 4, 12, 21, 53, 88, 112];

let aux = 0
for(item of original){
    if(item % 2 == 0){
        aux = item
        console.log(item)
    }
}
