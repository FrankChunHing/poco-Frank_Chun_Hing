const num = Math.floor(Math.random()*21)



num === 21 ? num() :
    num % 2 === 1 ? console.log(`${num} is odd`) : 
        num === 0 ? console.log(`${num} is either even nor odd`) :
console.log(`${num} is even`)
