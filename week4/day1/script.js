const global = 123;

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// let array = ["one", "two", "three"]
// for (const iterator of object) {
//     // one, two, three
// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         // 0, 1, 2
//     }
// }

let a = 10;
var b = 20;
const c = 30;

console.log(window)

// prompt(`give me a number`)


// for (let index = 0; index < 100; index++) {
//     if (index === 20){
//         debugger
//     }
//     console.log(index)
    
// }

// let x = prompt(`give me a number`)

// console.log(x, x.length)

// let Author = prompt("input the Author name");

// let Quote = prompt("input the Quote content");

// console.log(`${Author} says, "${Quote}"`)


// let fortune = {
//     "children":3,
//     "partnerName":"Someone good",
//     "location":"Zurich",
//     "jobTitle":"IT developer"
// }

// console.log(`You will be a ${fortune.jobTitle} in ${fortune.location}, and married to ${fortune.partnerName} with ${fortune.children} kids.`)


// let birthYear = 1966;
// let date = new Date()
// let nextYear = date.getFullYear() + 1

// ageNextYear = nextYear - birthYear


// console.log(`I am born in ${birthYear}. I will be either ${ageNextYear - 1} or ${ageNextYear} in ${nextYear}`)


// Create a random password generator. 
// The password has to have a length of at least 8 characters, 
// at least 1 digit and 1 special char (_ or -).

// while password < user password length input
// do {password += randomly generated charactor }
// password.filter

// let charactersSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let digitSet = "0123456789"
// let specialCharSet = "_-"

// let passwordLengthStr = prompt("password length? (number>=10)")
// let passwordLength = Number(passwordLengthStr)

// console.log(typeof(passwordLength))

// let total = passwordLength - 10

// let x = 0;
// let y = 0;
// let z = 0;

// while (x + y + z !== total){
//     y = Math.floor(Math.random()*total)
//     x = Math.floor(Math.random()*total)
//     z = Math.floor(Math.random()*total)
// }

// let charactersNumber = x + 8
// let digitNumber = y + 1
// let specialCharNumber = z + 1


// if (isNaN(passwordLength) || passwordLength < 10) {
//     console.log("Invalid input. Please enter a number greater than or equal to 10.");
// } else {
//     let password = ""
//     for (let i = 0; i < charactersNumber; i++){
//         password += charactersSet[Math.floor(Math.random()*charactersSet.length)]
//     }
//     for (let i = 0; i < digitNumber; i++){
//         password += digitSet[Math.floor(Math.random()*digitSet.length)]
//     }
//     for (let i = 0; i < specialCharNumber; i++){
//         password += specialCharSet[Math.floor(Math.random()*specialCharSet.length)]
//     }
//     console.log(shuffleString(password))
// }  

// function shuffleString(str) {
//     let array = str.split("");
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array.join("");
// }


let charactersSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let digitSet = "0123456789"
let specialCharSet = "_-"
let all = charactersSet + digitSet + specialCharSet


let passwordLengthStr = prompt("password length? (number>=10)")
let passwordLength = Number(passwordLengthStr)

function random(number){
    return Math.floor(Math.random()*number)
}

let password = digitSet[random(digitSet.length)] + specialCharSet[random(specialCharSet.length)]


for (let i = 0; i < passwordLength -2; i++){
    password += all[random(all.length)]
}

function shuffleString(str) {
    let array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}

console.log(shuffleString(password))