const backgroundContainer = document.getElementById('outer-container');
const rotateShape = document.getElementById("circle");

const btn = document.getElementById('btn');

const title = document.getElementById('inner-title');

let color_class = ['green-scheme', 'blue-scheme', 'yellow-scheme']
let title_list = [
    {title: 'Java', width: '42%'}, 
    {title: 'C++', width: '33%'}, 
    {title: 'Python', width: '62%'}
];
let ctr = 0;

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
})
