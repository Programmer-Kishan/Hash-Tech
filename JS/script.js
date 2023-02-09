
// main container elements
const backgroundContainer = document.getElementById('outer-container');
const rotateShape = document.getElementById("shape");
const image = document.getElementById("image");

const btn = document.getElementById('btn');

const main_title = document.getElementById('inner-title');

// trainer container elements
const trainerContainer = document.getElementById('trainer-container');
const trainerImage = document.getElementById("trainer-img");
const trainerCard = document.getElementById('trainer-card');
const trainerDetailContainer = document.getElementById('trainer-detail-box');
const profName = document.getElementById("prof-name");
const profQualification = document.getElementById('prof-qualification');
const profImage = document.getElementById("prof-image");

let color_class = ['green-scheme', 'blue-scheme', 'yellow-scheme'];
let title_list = [
    {title: 'Java', width: '42%'}, 
    {title: 'C++', width: '33%'}, 
    {title: 'Python', width: '64%'}
];
let image_list = ['java.png', 'cpp.png', 'python.png'];
let image_class = ['java-image', 'cpp-image', 'python-image'];
let ctr = 0;
let PATH = './Images/'

btn.addEventListener('click', () => {
    // for shape and balls color
    backgroundContainer.classList.remove(color_class[ctr%3]);
    trainerContainer.classList.remove(color_class[ctr%3]);
    ctr++;
    backgroundContainer.classList.add(color_class[ctr%3]);
    trainerContainer.classList.add(color_class[ctr%3]);
    

    // for rotating shape
    rotateShape.classList.add('rotate-animation');
    setTimeout(() => {
        rotateShape.classList.remove('rotate-animation');
    }, 2000)

    // for title of the main page
    main_title.innerHTML = title_list[ctr%3].title;
    main_title.style.width = title_list[ctr%3].width;

    // for changing image on rotating the shape
    setTimeout(() => {
        image.src = `${PATH}${image_list[ctr%3]}`;
        image.classList.remove(image_class[(ctr-1)%3]);
        image.classList.add(image_class[ctr%3]);
    }, 1000);
})

trainerImage.addEventListener('click', () => {
    trainerImage.classList.add('photo-rotate');
    setTimeout(() => {
        trainerCard.style.display = "none";
        trainerDetailContainer.style.display = "flex";
        setTimeout(() => {
            profName.style.visibility = "visible";
            profQualification.style.visibility = "visible";
            profImage.style.visibility = "visible";
        }, 1000)
    }, 1500)
})
