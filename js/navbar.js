const navBtn = document.querySelector('.navbar-icon-menu');
const showNav = document.querySelector('.nav-wrap');
const navLinks = document.querySelector('.navbar-links');
const hoverLinks = document.querySelector('.link-home');
const showLinks = document.querySelector('.nav-home');

navBtn.addEventListener('click', function(){
    showNav.classList.toggle('navbar-show');
    showNav.classList.toggle('hide-links')
})
hoverLinks.addEventListener('click', function(){
    showLinks.classList.toggle('hide');
})

