class toDoList {
    constructor(id, person, date, list){
        this.id = id;
        this.person = person;
        
        this.date = date;
        this.list = list
    }
}

const genList = [
    new toDoList('1',"Tom", "13-05-2024", ["Start a new IT project","Study javascript"]),
    new toDoList('2',"Tom", "12-05-2024", ["finish IT project","Study React"]),
    new toDoList('3',"John", "12-05-2024", ["prepare dinner","Study HTML"]),
    new toDoList('4',"Mary", "13-05-2024", ["exercise","phone parents"]),
]

function sorting() {   
    genList.sort((a, b) => {
        // Convert date strings to Date objects for comparison
        let dateA = new Date(a.date.split('-').reverse().join('-'));
        let dateB = new Date(b.date.split('-').reverse().join('-'));
        console.log(dateA)
        return dateA - dateB;
    });
}

sorting()
// console.log(genList)


document.getElementById('addList').addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let toDo = document.getElementById('toDo').value;
    genList.push(new toDoList(`${genList.length+1}`, name, date, [toDo]))
    sorting()
    console.log(genList)
    document.querySelector("main").innerHTML = renderHTML()
})



function renderHTML(){
    let compareDate = [];
    return( genList.map(element => {

        if (!compareDate.includes(element.date)) {
            compareDate.push(element.date);
            return (`
                <section>
                    <h3> date to do: ${element.date}</h3>
                    <p> person to do: ${element.person} </p>
                    <ul>
                        ${element.list.map(list => {
                            return `<li>${list}</li>`;
                        }).join('')}
                    </ul>
                    <input type="text" id=${element.id} 
                        placeholder="add to do list" >
                    <button id="${element.id}"> Finish task </button>
                </section>
            `);
        } else {
            return (`
                <div>
                    <p> person to do: ${element.person} </p>
                    <ul>
                        ${element.list.map(list => {
                            return `<li>${list}</li>`;
                        }).join('')}
                    </ul>
                    <input type="text" id=${element.id} 
                    placeholder="add to do list" >
                    <button id="${element.id}"> Finish task </button>
                </div>    
            `);
    }
}).join('')
    )};

document.querySelector("main").innerHTML = renderHTML()
dom()
// genList.forEach(list => {
//     document.getElementById(list.id).addEventListener("change", () => {
//         handleChange(list.id);
//         document.querySelector("main").innerHTML = renderHTML();
//     })
// })

function dom(){
document.querySelector("main").addEventListener("change", (event) => {
    const id = event.target.id;
    console.log(id)
    if (id) {
        handleChange(id);
        document.querySelector("main").innerHTML = renderHTML();
    }
});

document.querySelector("main").addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const id = event.target.id;
        if (id) {
            handleSubmit(id);
            document.querySelector("main").innerHTML = renderHTML();
        }
    }
});}



function handleChange(id){
    genList.forEach(list => {
        if (id === list.id) {
            list.list.push(document.getElementById(list.id).value);
            console.log(list)
        }
})
}


function handleSubmit(id){
    genList.forEach(list => {
        if (id === list.id) {
            list.list.shift();
            console.log(list)
        }
})
}




