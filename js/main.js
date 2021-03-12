let body = document.body;
let nav_burger = document.querySelector('.mobile-nav__burger');


nav_burger.addEventListener('click', (e) => {
    if (!body.classList.contains('open-nav')) {
        body.classList.add('open-nav');
    } else {
        body.classList.remove('open-nav');
    }
});

TDC('#reviews-carousel', {
    items: 3,
    nav: true,
    loop: true,
    modNavElement: true,
    modNavNext: `<div class="td-carousel-mod-next td-next reviews-carousel-item-nav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 430" width="612" height="430" fill="currentColor">
            <path d="M412.61 6.81C404.28 -1.82 390.4 -1.82 381.77 6.81C373.43 15.15 373.43 29.02 381.77 37.34L538.16 193.73L22.09 193.73C10.06 193.75 0.5 203.31 0.5 215.34C0.5 227.37 10.06 237.25 22.09 237.25L538.16 237.25L381.77 393.35C373.43 401.98 373.43 415.87 381.77 424.19C390.4 432.82 404.3 432.82 412.61 424.19L606.03 230.78C614.66 222.44 614.66 208.56 606.03 200.24L412.61 6.81Z" />
        </svg>
    </div>`,
    modNavPrev: `<div class="td-carousel-mod-next td-prev reviews-carousel-item-nav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 430" width="612" height="430" fill="currentColor">
            <path d="m200.39 6.81c8.33-8.63 22.21-8.63 30.84 0 8.34 8.34 8.34 22.21 0 30.53l-156.39 156.39h516.07c12.03 0.02 21.59 9.58 21.59 21.61s-9.56 21.91-21.59 21.91h-516.07l156.39 156.1c8.34 8.63 8.34 22.52 0 30.84-8.63 8.63-22.53 8.63-30.84 0l-193.42-193.41c-8.63-8.34-8.63-22.22 0-30.54z"/>
        </svg>
    </div>`,
    responsive: {
        0: { items: 1 },
        600: { items: 2},
        921: { items: 3 }
    }
});
TDC('#partners-carousel', {
    items: 1,
    nav: true,
    loop: true,
    modNavElement: true,
    modNavNext: `<div class="td-carousel-mod-next td-next reviews-carousel-item-nav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 430" width="612" height="430" fill="currentColor">
            <path d="M412.61 6.81C404.28 -1.82 390.4 -1.82 381.77 6.81C373.43 15.15 373.43 29.02 381.77 37.34L538.16 193.73L22.09 193.73C10.06 193.75 0.5 203.31 0.5 215.34C0.5 227.37 10.06 237.25 22.09 237.25L538.16 237.25L381.77 393.35C373.43 401.98 373.43 415.87 381.77 424.19C390.4 432.82 404.3 432.82 412.61 424.19L606.03 230.78C614.66 222.44 614.66 208.56 606.03 200.24L412.61 6.81Z" />
        </svg>
    </div>`,
    modNavPrev: `<div class="td-carousel-mod-next td-prev reviews-carousel-item-nav">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 430" width="612" height="430" fill="currentColor">
            <path d="m200.39 6.81c8.33-8.63 22.21-8.63 30.84 0 8.34 8.34 8.34 22.21 0 30.53l-156.39 156.39h516.07c12.03 0.02 21.59 9.58 21.59 21.61s-9.56 21.91-21.59 21.91h-516.07l156.39 156.1c8.34 8.63 8.34 22.52 0 30.84-8.63 8.63-22.53 8.63-30.84 0l-193.42-193.41c-8.63-8.34-8.63-22.22 0-30.54z"/>
        </svg>
    </div>`,
    responsive: {
        0: { items: 1 },
        600: { items: 2},
        921: { items: 4 }
    }
});


let plansNav = document.querySelector('.plans-nav');
let plans = document.querySelector('.plans');
plansNav.addEventListener('click', (e) => {
    e.preventDefault();
    if (!e.target.classList.contains('active')) {
        for (var i = 0; i < plansNav.children.length; i++) {
            if (e.target.classList.contains('compare')) {
                plans.classList.add('compare')
            } else { plans.classList.remove('compare')}
            if (e.target == plansNav.children[i]) {
                plansNav.children[i].classList.add('active');
            } else {
                plansNav.children[i].classList.remove('active');
            }
        }
    }
});



let advantagesUseButton = document.querySelector('.advantages-use__button');
advantagesUseButton.addEventListener('click', (e) => {
    body.classList.add('open-modal');
    let modalAdvantages = document.querySelector('.modal-advantages');
    modalAdvantages.classList.add('open');
});

let modalContentCloses = document.querySelectorAll('.modal-content__close');
modalContentCloses.forEach((item) => {
    item.addEventListener('click', (e) => {
        let close = e.target.closest('.modal-content');
        close.classList.remove('open');
        body.classList.remove('open-modal');
    });
});

let reviewsCarouselItems = document.querySelectorAll('.reviews-carousel-item');
reviewsCarouselItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        body.classList.add('open-modal');
        let modalCarousel = document.querySelector('.modal-carousel');
        modalCarousel.classList.add('open');
    });
});


let callMe = document.querySelectorAll('.menu__call-me, .banner-content__btn');
callMe.forEach((item) => {
    item.addEventListener('click', (e) => {
        body.classList.add('open-modal');
        let modal = document.querySelector('.modal-call-me');
        modal.classList.add('open');
    });
});

let modalConsultation = document.querySelectorAll('.plan-btn');
modalConsultation.forEach((item) => {
    item.addEventListener('click', (e) => {
        body.classList.add('open-modal');
        let modal = document.querySelector('.modal-consultation');
        modal.classList.add('open');
    });
});
