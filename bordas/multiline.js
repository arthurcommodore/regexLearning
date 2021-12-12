const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habid
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w)[\s\S]+\1$/gim))