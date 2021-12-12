const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> zero ou mais
const regex = /fogo*?/gi //* vai pegar 0 ou mais junto com ? vai pegar o minimo
console.log(texto1.match(regex))
console.log(texto2.match(regex))