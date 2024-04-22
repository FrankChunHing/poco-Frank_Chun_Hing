let birthYear = 1966;
let date = new Date()
let nextYear = date.getFullYear() + 1

ageNextYear = nextYear - birthYear


console.log(`I am born in ${birthYear}. I will be either ${ageNextYear - 1} or ${ageNextYear} in ${nextYear}`)