const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÁ-ú]+(?=,)/gi))//lookahead positive

//negative lookahead

console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))