
const burgerMenu = document.querySelector('.burger-menu');
const navContainer = document.querySelector('.nav-container');
const body = document.querySelector('body');


burgerMenu.addEventListener('click', () => {

    body.classList.add('menu-open');
    if (navContainer.classList.contains('active')) {
        navContainer.style.display = '';

    } else {
        body.classList.remove('menu-open');
        navContainer.style.display = 'none';
    }

    burgerMenu.classList.toggle('active');
    navContainer.classList.toggle('active');
});

