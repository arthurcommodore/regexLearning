const texto1 = 'O Jos=e Simão é muito engraçado... hehehehehehe'
console.log(texto1.match(/(he)+/g))

const texto = 'http://www.site.indo www.escola.ninja.br google.com.ag'
console.log(texto.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))