let names = ['Haneen','Tia','Tala','Koke']
let ages = ['25 years old','2 years old','1 years old','25 years old']

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(name,ages)
{
    //elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');
    //content
    let head = document.createTextNode(name);
    let ageContent = document.createTextNode(ages);
    img.src ='images/img1.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);
    //style
    card.style.width = '200px' ;
    card.style.background = 'rgb(121 85 72 / 62%)';
    card.style.padding = '5px'
    card.style.margin = '2px'
    card.style.display ='inline-block'
    img.style.width = '100%'



    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);
}
for (let i = 0; i < 4; i++)
 {
    element(names[i],ages[i]) ;
}
