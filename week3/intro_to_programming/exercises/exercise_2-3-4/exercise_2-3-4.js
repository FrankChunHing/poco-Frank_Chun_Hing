document.getElementById('numberForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    const operation = event.submitter.id;

    (!number1 || !number2) ? 
    document.getElementById('result').innerHTML = "input both fields" :
    (operation === "add") ? 
    document.getElementById('result').innerHTML = add(number1, number2) :
    document.getElementById('result').innerHTML = substract(number1, number2)


});


function add(number1, number2) {
    return (number1 + number2) }


function substract(number1, number2) {
    return Math.abs(number1 - number2) }


// const number1 = document.getElementById('number1').value;
// const number2 = document.getElementById('number2').value;

// function add(number1, number2) {
//     return (number1 + number2) }


// function substract(number1, number2) {
//     return abs(number1 - number2) }


// document.getElementById("add").addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Call a function to handle the input value
//     (number1 && number2) ?
//     document.getElementById('result').innerHTML = add(number1, number2):
//     document.getElementById('result').innerHTML = "input both"
// });

// document.getElementById("substract").addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Call a function to handle the input value
//     document.getElementById('result').innerHTML = substract(number1, number2);
// });
