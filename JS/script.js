const backgroundContainer = document.getElementById('outer-container');
const rotateShape = document.getElementById("shape");
const image = document.getElementById("image");

const btn = document.getElementById('btn');

const title = document.getElementById('inner-title');

let color_class = ['green-scheme', 'blue-scheme', 'yellow-scheme'];
let title_list = [
    {title: 'Java', width: '42%'}, 
    {title: 'C++', width: '33%'}, 
    {title: 'Python', width: '62%'}
];
let image_list = ['java.png', 'cpp.png', 'python.png'];
let image_class = ['java-image', 'cpp-image', 'python-image'];
let ctr = 0;
let PATH = './Images/'

btn.addEventListener('click', () => {
    // for shape and balls color
    backgroundContainer.classList.remove(color_class[ctr%3]);
    
    ctr++;
    backgroundContainer.classList.add(color_class[ctr%3]);
    

    // for rotating shape
    rotateShape.classList.add('rotate-animation');
    setTimeout(() => {
        rotateShape.classList.remove('rotate-animation');
    }, 2000)

    // for title of the main page
    title.innerHTML = title_list[ctr%3].title;
    title.style.width = title_list[ctr%3].width;

    // for changing image on rotating the shape
    setTimeout(() => {
        image.src = `${PATH}${image_list[ctr%3]}`;
        image.classList.remove(image_class[(ctr-1)%3]);
        image.classList.add(image_class[ctr%3]);
    }, 1000);
})
