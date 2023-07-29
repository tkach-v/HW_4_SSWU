const newsBlock = document.querySelector('.latest-news');
const newsContent = newsBlock.querySelector('.latest-news__content');
const newsContentOffsetTop = newsBlock.offsetTop;
const screenHeight = screen.height;

let show = (document.documentElement.scrollTop + screenHeight) > newsContentOffsetTop;

if (show) {
    newsContent.classList.add('show');
    newsContent.classList.remove('hide');
} else {
    newsContent.classList.add('hide');
    newsContent.classList.remove('show');
}

function handleScroll() {
    show = (document.documentElement.scrollTop + screenHeight) > newsContentOffsetTop;

    if (show) {
        newsContent.classList.add('show');
        newsContent.classList.remove('hide');
    } else {
        newsContent.classList.add('hide');
        newsContent.classList.remove('show');
    }
}

document.addEventListener('scroll', handleScroll);
