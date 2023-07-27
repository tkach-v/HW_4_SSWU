const headerHeight = document.querySelector('.header__top').offsetHeight;
const newsBlock = document.querySelector('.latest-news');
const newsInner = newsBlock.querySelector('.latest-news__inner');
const newsBlockOffsetTop = newsBlock.offsetTop;
const newsBlockOffsetHeight = newsBlock.offsetHeight;
const screenHeight = screen.height;

let show = (document.documentElement.scrollTop + screenHeight) > newsBlockOffsetTop;

if (show) {
    newsInner.classList.add('show');
    newsInner.classList.remove('hide');
} else {
    newsInner.classList.add('hide');
    newsInner.classList.remove('show');
}

function handleScroll() {
    show = (document.documentElement.scrollTop + screenHeight) > newsBlockOffsetTop;

    if (show) {
        newsInner.classList.add('show');
        newsInner.classList.remove('hide');
    } else {
        newsInner.classList.add('hide');
        newsInner.classList.remove('show');
    }
}

document.addEventListener('scroll', handleScroll);
