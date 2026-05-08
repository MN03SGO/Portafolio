const menuIcono = document.querySelector('#menu-icon');
const navEnlaces = document.querySelector('.nav_enlaces');


menuIcono.onclick = () => {
    navEnlaces.classList.toggle('active');
}