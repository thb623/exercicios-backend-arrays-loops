const disjuntores = [false, false, true, false, false, true, false, false];

let aux = 0

for(item of disjuntores){
    if(item === true){
        console.log(aux)
    }
    aux++
}
