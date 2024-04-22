// Validate a telephone number, as if written on an input form. Telephone numbers can be written as ten digits, or with dashes, spaces, or dots between the three segments, or with the area code parenthesized; both the area code and any white space between segments are optional.


function check(inputStr){

    let regex = /^\(?|^\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
    if (regex.test(inputStr)){
        return true
    } else 
    return false
}

console.log(check("(415) 555-0132"))