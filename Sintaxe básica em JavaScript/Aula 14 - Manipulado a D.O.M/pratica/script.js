
function changeMode(){
    changeClasse();
    changeText();
}

function changeClasse(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText(){
    const LightMode = 'light Mode';
    const darkMode = 'Dark Mode';
    if(button.classList.contains(darkModeClass)){
        button.innerHTML = LightMode;
        h1.innerHTML = darkMode + 'On';
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = LightMode + 'On';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log('body');

button.addEventListener('click', changeMode);