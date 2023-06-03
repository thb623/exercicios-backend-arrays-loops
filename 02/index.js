const letras = ["A", "e", "e", "C", "e", "z"];
let contador = 0;

for (const letra of letras) {
  if (letra === "e" || letra === "E") {
    contador++;
  }
}

if (contador === 0) {
  console.log("Não foram encontradas letras 'E' ou 'e' no array.");
} else if (contador === 1) {
  console.log("Foi encontrada 1 letra 'E' ou 'e' no array.");
} else {
  console.log(`Foram encontradas ${contador} letras 'E' ou 'e' no array.`);
}
