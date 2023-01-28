const backgroundContainer = document.getElementById('outer-container');

const btn = document.getElementById('btn');

let color_class = ['green-scheme', 'blue-scheme', 'yellow-scheme']
let ctr = 0;

btn.addEventListener('click', () => {
    backgroundContainer.classList.remove(color_class[ctr%3]);
    ctr++;
    backgroundContainer.classList.add(color_class[ctr%3]);
})
