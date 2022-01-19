const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleLightDarkMode(isLight) {
  nav.style.backgroundColor = isLight ? 'rgb(255 255 255 / 80%)' : 'rgb(0 0 0 / 80%)';
  textBox.style.backgroundColor = isLight ? 'rgb(0 0 0 / 70%)' : 'rgb(255 255 255 / 70%)';
  toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
  isLight ? toggleIcon.children[1].classList.replace('fa-moon','fa-sun') : toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
  isLight ? imageMode('light') : imageMode('dark');
}

function switchTheme(event) {
  if(event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme','dark');
    toggleLightDarkMode(false);
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme','light');
    toggleLightDarkMode(true);
  }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check Local Storage For Theme
const currTheme = localStorage.getItem('theme');
if(currTheme) {
  document.documentElement.setAttribute('data-theme', currTheme);
  if(currTheme==='dark') {
    toggleSwitch.checked = true;
    toggleLightDarkMode(false);
  }
  else {
    toggleSwitch.checked = false;
    toggleLightDarkMode(true);
  }
}
