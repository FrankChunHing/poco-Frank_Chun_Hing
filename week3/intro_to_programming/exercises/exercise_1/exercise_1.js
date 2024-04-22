document.addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('number').value;

    // Call a function to handle the input value
    document.getElementById('result').textContent = sortInput(number); // using innerHTML can cause XSS
});

function sortInput(str) {
    return str.split("") //from number to array
                 .sort() 
                 .join("")
}