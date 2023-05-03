

// images gallery 
let smlImg = document.querySelectorAll('.sml-img');
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


let imgWidth = smlImg[0].clientWidth + 10;

next.addEventListener('click', function () {
    photos.scrollLeft += imgWidth;
})

prev.addEventListener('click', function () {
    photos.scrollLeft -= imgWidth;
})

