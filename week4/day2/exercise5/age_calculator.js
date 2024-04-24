// let birthYear = 1966;
// let date = new Date()
// let nextYear = date.getFullYear() + 1

// ageNextYear = nextYear - birthYear


// console.log(`I am born in ${birthYear}. I will be either ${ageNextYear - 1} or ${ageNextYear} in ${nextYear}`)


document.getElementById("dateForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const year = document.getElementById("Year").value;
    const month = document.getElementById("month").value;
    const day = document.getElementById("day").value;

    let date = new Date()
    thisYear = date.getFullYear()
    const compare = new Date(`${thisYear}-${month}-${day}`)

    let result = thisYear - year

    


    compare - date >= 0 ? result = result : result -= 1;
    document.getElementById('result').textContent = `Your age is ${result}`;
})