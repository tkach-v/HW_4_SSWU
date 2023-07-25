function changeProgressBarWidth() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.header__top-progress-bar').style.width = scrolled + "%";
}

window.addEventListener('scroll', changeProgressBarWidth);

document.addEventListener('click', event => {
    const targetElement = event.target;

    if (targetElement.closest('.header__toggler')) {
        document.querySelector(".header__top").classList.toggle('header__top_open');
    }

    if (targetElement.closest('[data-goto]')) {
        if (document.querySelector(".header__top").classList.contains('header__top_open')) {
            document.querySelector(".header__top").classList.remove('header__top_open');
        }

        const goTo = targetElement.closest('[data-goto]').dataset.goto;
        const goToElement = document.querySelector(goTo);
        const headerHeight = document.querySelector('.header__top').offsetHeight;

        if (goToElement) {
            window.scrollTo({
                top: goToElement.offsetTop - headerHeight,
                behavior: "smooth"
            });
        }
        event.preventDefault();
    }
});



