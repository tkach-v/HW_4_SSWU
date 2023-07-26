const headerHeight = document.querySelector('.header__top').offsetHeight;
const newsBlock = document.querySelector('.latest-news');
const show = newsBlock.offsetTop + newsBlock.offsetHeight / 3;
let opened = false;

console.log(newsBlock.offsetTop)
console.log(document.documentElement.scrollTop)
console.log(screen.height)

document.addEventListener('scroll', event => {
    let prev = (document.documentElement.scrollTop + screen.height) < newsBlock.offsetTop;
    let next = document.documentElement.scrollTop > (newsBlock.offsetTop + newsBlock.offsetHeight - headerHeight);
    let now = !(prev) && !(next);

    console.log("prev: " + prev);
    console.log("now: " + now);
    console.log("next: " + next);

    // if (scrollNumber > show) {
    //     newsBlock.querySelector('.latest-news__inner').style.opacity = 0;
    //     opened = false
    //     console.log("Close it");
    // }
});
