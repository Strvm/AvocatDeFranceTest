
window.onresize = () =>{
    console.log(window.innerWidth)
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.nextArrow',
        prevEl: '.previousArrow',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        2000: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

