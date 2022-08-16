const barraNav = document.querySelector('.navegacion');
const botonBurger = document.querySelector('.header__btn-toggle');
const body = document.querySelector('body');

botonBurger.addEventListener('click', () => {
    const visible = barraNav.getAttribute('data-visible');
    // console.log(visible);

    if(visible === 'true') {
        barraNav.setAttribute('data-visible', false);
        botonBurger.setAttribute('aria-expanded', false);
        body.setAttribute('data-noScroll', false);
    } else {
        barraNav.setAttribute('data-visible', true);
        botonBurger.setAttribute('aria-expanded', true);
        body.setAttribute('data-noScroll', true);
    }   
});