let heading = document.querySelector('h1')
let content = document.querySelector('p')
let link = document.querySelector('a')

for (let i=1; i<=2; i++){
    heading.textContent = `${i} ${heading.textContent}`
}

for (let i=1; i<=4; i++){
    content.textContent = `${content.textContent} ${i}`
}


for (let i=1; i<=7; i++){
    link.textContent = i;
}