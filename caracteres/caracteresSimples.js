const text = '1,2,3,4,5,6,7,8,9,a.b c!d?e'

const regexVirgula = /,/
console.log(text.split(regexVirgula))

console.log(text.match(/,/g))
console.log(text.match(/A/i))

console.log(text.match(/b c!d/))