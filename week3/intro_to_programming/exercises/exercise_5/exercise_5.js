// const months = {
//     January: 1,
//     February: 2,
//     March: 3,
//     April: 4,
//     May: 5,
//     June: 6,
//     July: 7,
//     August: 8,
//     September: 9,
//     October: 10,
//     November: 11,
//     December: 12
// };

// let month = months.April
// let day = 23

// let referenceDay = new Date("2023-01-01");
// let calDay = new Date(`2023-${month}-${day}`)
// result = Math.floor((calDay - referenceDay)/60/60/24/1000)

// console.log(result)

document.getElementById("dateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the selected month and day values
    const selectedMonth = document.getElementById("month").value;
    const selectedDay = parseInt(document.getElementById("day").value);



    // Create Date objects for the reference day (January 1, 2023) and the selected day
    const referenceDay = new Date("2023-01-01");
    const calDay = new Date(`2023-${selectedMonth}-${selectedDay}`);

    // Calculate the number of days between the selected day and the reference day
    const result = Math.floor((calDay - referenceDay) / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById('result').textContent = result; })