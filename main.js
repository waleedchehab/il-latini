
// to change header color on scroll
// let headEl = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) {
//         headEl.classList.add('head-scroll');
//     } else {
//         headEl.classList.remove('head-scroll');
//     }
// })


// menu appearance

let openMenu = document.querySelector('.menu-bar');
let closeMenu = document.querySelector('.close-menu');
let menu = document.querySelector('.main-nav');

openMenu.addEventListener('click', function () {
    menu.classList.add('active');
    closeMenu.classList.remove('hide');
    openMenu.classList.add('hide');

    if (menu && 'active') {
        closeMenu.addEventListener('click', function () {
            menu.classList.remove('active');
            closeMenu.classList.add('hide');
            openMenu.classList.remove('hide');
        })
        menu.addEventListener('click', function () {
            menu.classList.remove('active');
            closeMenu.classList.add('hide');
            openMenu.classList.remove('hide');
        })
    }
})


/*

// images gallery 
let smlImg = Array.from(document.querySelectorAll('.sml-img'));
let preview = document.querySelector('.preview');

smlImg.forEach(function (ele) {
    ele.addEventListener('click', function () {
        preview.src = this.src
    })
})


// carousel
let next = document.querySelector('.btn-right');
let prev = document.querySelector('.btn-left');
let photos = document.querySelector('.photos');

// let smlImg = Array.from(document.querySelectorAll('.sml-img'));
let imgWidth = smlImg[0].clientWidth ;

next.addEventListener('click', function () {
    photos.scrollLeft += imgWidth;
})

prev.addEventListener('click', function () {
    photos.scrollLeft -= imgWidth;
})

let pressed = false;
let startX;
let scrollLeft;
photos.addEventListener('mousedown', function (e) {
    pressed = true;
    startX = e.clientX
})

photos.addEventListener('mouseleave', function (e) {
    pressed = false;
})

photos.addEventListener('mouseup', function (e) {
    pressed = false;
})

photos.addEventListener('mousemove', function (e) {
    if (!pressed) {
        return
    }
    this.scrollLeft += startX - e.clientX;
})

*/
