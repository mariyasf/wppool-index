var swiper = new Swiper(".swiper", {
    slidesPerView: 2.5,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2.5,
            spaceBetween: 20
        }
    }
});