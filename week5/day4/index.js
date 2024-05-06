let heading = document.querySelector('h3')

let list = document.createElement('ul')

heading.insertAdjacentElement('afterend', list);

// list.innerHTML = ` <li><a class="nav-link active" href="/">Home</a></li>
//  <li><a class="nav-link" href="/blog/">Blog</a></li>
//  <li><a class="nav-link" href="/projects/">Projects</a></li>
//  <li><a class="nav-link" href="/contact/">Contact</a></li>`

const groceries = ["milk", 'eggs', 'sugar', 'meat']
generateList()

function generateList(){
    groceries.forEach( (item) => {
        addList(item)
    })
}

function removeFirstList(){
    if (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function addList(input){
    let listItem = document.createElement('li')
    listItem.textContent = input;
    list.appendChild(listItem)
}

let input = document.querySelector("input");

// Add event listener to the input element
input.addEventListener('change', function() {
    // Call addList function passing the input element
    addList(input.value);
});


document.querySelector('button').addEventListener('click', () => {removeFirstList()})

// const genList = groceries.map((item) => 
//     `<li>${item}</li>`
// )
// list.innerHTML = genList.join("")




// heading.after(list);