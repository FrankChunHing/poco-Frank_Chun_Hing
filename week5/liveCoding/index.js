const credentials = [
    { 
        username: "Khalid",
        password: "test1234",
        email: "khalid@powercoders.org"
    },
    { 
        username: "Shakir",
        password: "test1234",
        email: "Shakir@powercoders.org"
    },
    { 
        username: "Dominic",
        password: "test1234",
        email: "dominic@powercoders.org"
    }
]


const login = document.getElementById('login');

login.addEventListener('submit', (e) => {
    e.preventDefault();
    // const email = document.getElementById('user').value;
    // const password = document.getElementById('password').value;

    const formData = new FormData(login)
    console.log(formData)
    const email = formData.get('user');
    const password = formData.get('password');

    const check = credentials.filter((cred) => (cred.email === email && cred.password === password))
    console.log(check)
    check.length > 0 ?
        console.log('Logging in') : 
        console.log('email or password not match')

    const result = credentials.find((cred) => {
        return (cred.email === email && cred.password === password )
    })
    console.log(result);
    result ? 
        console.log('Logging in') : 
        console.log('email or password not match')
})



const citySelect = document.getElementById('city');

// Add event listener to the select element
citySelect.addEventListener('change', function(event) {
  // Get the selected city
  const selectedCity = event.target.value;

  // Do something with the selected city, such as displaying it or sending it to a server
  console.log('Selected City:', selectedCity);

  // You can add your validation logic here
});

