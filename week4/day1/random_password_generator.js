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


console.log(shuffleString(password))
// let total = passwordLength - 10

// let x = 0;
// let y = 0;
// let z = 0;

// function random(number){
//     return Math.floor(Math.random()*number)
// }

// while (x + y + z !== total){
//     y = random(total)
//     x = random(total)
//     z = random(total)
// }

// let charactersNumber = x + 8
// let digitNumber = y + 1
// let specialCharNumber = z + 1


// if (isNaN(passwordLength) || passwordLength < 10) {
//     console.log("Invalid input. Please enter a number greater than or equal to 10.");
// } else {
//     let password = ""
//     for (let i = 0; i < charactersNumber; i++){
//         password += charactersSet[random(charactersSet.length)]
//     }
//     for (let i = 0; i < digitNumber; i++){
//         password += digitSet[random(digitSet.length)]
//     }
//     for (let i = 0; i < specialCharNumber; i++){
//         password += specialCharSet[random(specialCharSet.length)]
//     }
//     console.log(shuffleString(password))
// }  

function shuffleString(str) {
    let array = str.split("");
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}
