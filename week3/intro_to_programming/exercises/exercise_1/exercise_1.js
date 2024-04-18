document.addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('number').value;

    // Call a function to handle the input value
    document.getElementById('result').innerHTML = handleInput(number);
});

function handleInput(number) {
    return number.split("") //from number to array
                 .sort() 
                 .join("")
}