const texto = 'Casa bonita é a casa amarela da esquina com a RUA ACASALA.'

const regex = /casa/gi
console.log(texto.match(regex))
console.log(texto.match(/a b/g))