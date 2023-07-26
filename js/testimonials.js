const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.testimonials__swiper-button-next',
        prevEl: '.testimonials__swiper-button-prev'
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        996: {
            slidesPerView: 2,
            slidesPerGroup: 2
        }
    }
});