const texto = `
123456
cod3r
QUASE123!
#OpA1
#eesaSenhaEGrande123456

#OpA1?
Foi123!
`

console.log(texto.match(/^.{6,20}$/gm)) 
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm))
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z]).+/gm))