const texto = `
Lista telefônica:
    - (21) 12345-9878
    - (11) 62300-2234
    - 5578-77771
    - (1) 4321-1234
`

console.log(texto.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g))