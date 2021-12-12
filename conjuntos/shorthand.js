const texto = `1,2,3,4,5,6,a.b c!d?e    
- f_g`

console.log(texto.match(/\d/g)) //numeros
console.log(texto.match(/\D/g)) //não numeros
console.log(texto.match(/\w/g)) //caracteres [a-zA-Z0-9]
console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9]
console.log(texto.match(/\s/g)) // espaços vazios
console.log(texto.match(/\S/g)) // !espaços vazios
