// swiper settings
const swiper = new Swiper('.swiper-container', {
    lazy: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// смена фото в меню
const menuLink = document.querySelectorAll('.menu__link');
const menuImg = document.querySelector('.menu__img');

menuLink.forEach((item) => {
    item.addEventListener('mouseover', () => {
        menuImg.attributes.src.value = item.dataset.images;
        menuLink.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});