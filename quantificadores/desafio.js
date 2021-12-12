const cpfs = `
    - 600.597.890-12
    - 765.998.245-23
`

const listaTelefonica = `
    - (11) 98756-1212
    -98765-4321
    -72662-1234
    72662 1234  
`

const emails = `
    fulano@gmail.com
    cesar@devmedia.com.br
    xico@hotmal.com.us
    maca@gmail.com
    21398ariel@gmail.com
    arthur.maruticio@gmail.com
`

console.log(cpfs.match(/\d{3}\.?\d{3}\.?\d{3}/g))

console.log(listaTelefonica.match(/\(?\d{0,2}\)?\d{5,}(\s|-)?\d{4,}/gi))

console.log(emails.match(/[\w.]+@\w+\.\w{2,4}(\.\w{0,2})?/g))