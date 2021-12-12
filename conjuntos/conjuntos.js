const texto = '1,2,3,4,5,6,a.b c!d?e[f'

const regexPares = /[02046]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear de moto nao'
const regexAscento = /n[aã]/g
console.log(texto2.match(regexAscento))