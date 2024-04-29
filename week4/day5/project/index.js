// import {studentsInZurich} from "./data.js"

const studentsInZurich = [
    {
        name: "Enes",
        photoLink: "/photos/Enes.jpg",
        age: "37",
        skills: [
            { name: "JavaScript", level: "intermediate" },
            { name: "React", level: "beginner" },
            { name: "Java", level: "advanced" }
        ]
    },
    {
        name: "Olena",
        photoLink: "photos/Olena.jpg",
        age: "28",
        skills: [
            { name: "HTML", level: "advanced" },
            { name: "CSS", level: "intermediate" }
        ]
    },
    {
        name: "Frank",
        photoLink: "photos/Frank.jpg",
        age: "28",
        skills: [
            { name: "React", level: "beginner" },
            { name: "Java", level: "intermediate" }
        ]
    },
    {
        name: "Juan",
        photoLink: "photos/Juan.jpg",
        age: "30",
        skills: [
            { name: "CSS", level: "advanced" },
            { name: "Java", level: "beginner" }
        ]
    },
    {
        name: "Yurii",
        photoLink: "photos/Jurii.jpg",
        age: "40",
        skills: [
            { name: "HTML", level: "beginner" },
            { name: "JavaScript", level: "advanced" }
        ]
    },
    {
        name: "Nizami",
        photoLink: "photos/Nizami.jpg",
        age: "36",
        skills: [
            { name: "React", level: "intermediate" },
            { name: "Java", level: "beginner" }
        ]
    },
    {
        name: "Kashif",
        photoLink: "photos/Kashif.jpg",
        age: "19",
        skills: [
            { name: "JavaScript", level: "advanced" },
            { name: "Java", level: "intermediate" }
        ]
    },
    {
        name: "Olha",
        photoLink: "photos/Olha.jpg",
        age: "28",
        skills: [
            { name: "HTML", level: "beginner" },
            { name: "CSS", level: "advanced" }
        ]
    },
    {
        name: "Tugba",
        photoLink: "photos/Tugba.jpg",
        age: "38",
        skills: [
            { name: "JavaScript", level: "intermediate" },
            { name: "React", level: "advanced" }
        ]
    },
    {
        name: "Violetta",
        photoLink: "photos/Violetta.jpg",
        age: "23",
        skills: [
            { name: "React", level: "advanced" },
            { name: "Java", level: "beginner" }
        ]
    },
    {
        name: "Shakir",
        photoLink: "photos/Shakir.jpg",
        age: "23",
        skills: [
            { name: "HTML", level: "intermediate" },
            { name: "CSS", level: "beginner" }
        ]
    },
    {
        name: "Sediq",
        photoLink: "photos/Sediq.jpg",
        age: "23",
        skills: [
            { name: "HTML", level: "advanced" },
            { name: "JavaScript", level: "beginner" }
        ]
    }
];


// let filtered;
let renderedHTML = document.getElementById('container') 
const input = document.getElementById("skills")

console.log("start")
renderedHTML.innerHTML = rendering(studentsInZurich)

select.addEventListener("change", function (event) {
    event.preventDefault();
    let inputValue = select.options[select.selectedIndex].value;
  
    const filtered = filtering(inputValue);
    console.log(filtered);
    renderedHTML = rendering(filtered);
  });



function filtering(input) {
    let filterArray = [];
    studentsInZurich.forEach(eachStudent => {
        let haveSkill = false;
        for (let i = 0; i < eachStudent.skills.length; i++){
            if (eachStudent.skills[i].name.indexOf(input) >= 0 ){
                 haveSkill = true;
                 break;
            }
        }
        if (haveSkill){
            filterArray.push(eachStudent);
        }
    });
    return filterArray; // Return the filtered array
}


function rendering(array){
    
    let studentsHTML = ''
    array.forEach((studentObject) => {
        console.log(studentsHTML)
        studentsHTML += `


        <li class="students-list__item">
            <div class="students-list__wrapper">
                <img src="${studentObject.photoLink}" alt="${studentObject.name}">
                <div class="students-list__skills">
                    <h3>Skills:</h3>
                    <ul>
                        ${studentObject.skills.map(({name}) => `<li>${name}</li>`).join("")}
                    </ul>
                </div>

            </div>
            <div class="students-list__description">
                <h2 class="students-list__name">
                ${studentObject.name}
                </h2>
                <p class="students-list__age">Age: ${studentObject.age}</p>
            </div>
        </li>

        `
})
    return studentsHTML;
}








