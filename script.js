(function () {
    let dotMenu = document.querySelector('.dot-menu');
    let nav = document.querySelector('.nav');
    let main = document.querySelector('.main');

    dotMenu.addEventListener('click', () => {
        nav.classList.toggle('nav__show');
        main.classList.toggle('main__after-nav');
    })
})();