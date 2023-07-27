// const headerHeight = document.querySelector('.header__top').offsetHeight;
// const newsBlock = document.querySelector('.latest-news');
//
//
// document.addEventListener('scroll', event => {
//     let prev = (document.documentElement.scrollTop + screen.height) < (newsBlock.offsetTop + newsBlock.offsetHeight / 3);
//     let next = document.documentElement.scrollTop > (newsBlock.offsetTop + newsBlock.offsetHeight - headerHeight);
//     let show = !(prev) && !(next);
//
//     if (show) {
//         newsBlock.querySelector('.latest-news__inner').style.opacity = "1";
//     } else {
//         newsBlock.querySelector('.latest-news__inner').style.opacity = "0";
//     }
// });


const headerHeight = document.querySelector('.header__top').offsetHeight;
const newsBlock = document.querySelector('.latest-news');
const newsInner = newsBlock.querySelector('.latest-news__inner');
const newsBlockOffsetTop = newsBlock.offsetTop;
const newsBlockOffsetHeight = newsBlock.offsetHeight;
const screenHeight = screen.height;

let prev = (document.documentElement.scrollTop + screenHeight) < newsBlockOffsetTop;
let next = document.documentElement.scrollTop > (newsBlockOffsetTop + newsBlockOffsetHeight - headerHeight);
let show = !(prev) && !(next);

if (show) {
    newsInner.classList.add('show');
    newsInner.classList.remove('hide');
} else {
    newsInner.classList.add('hide');
    newsInner.classList.remove('show');
}

function handleScroll() {
    let prev = (document.documentElement.scrollTop + screenHeight) < newsBlockOffsetTop;
    let next = document.documentElement.scrollTop > (newsBlockOffsetTop + newsBlockOffsetHeight - headerHeight);
    let show = !(prev) && !(next);

    if (show) {
        newsInner.classList.add('show');
        newsInner.classList.remove('hide');
    } else {
        newsInner.classList.add('hide');
        newsInner.classList.remove('show');
    }
}

document.addEventListener('scroll', handleScroll);
