let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');

}

let navbar = document.querySelector('.itens-nav');

document.querySelector('#menu-hamburguer').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}



let nav = document.querySelector('nav');

window.addEventListener('scroll' , () => {
    nav.classList.toggle('shadow', window.scrollY > 0);
});