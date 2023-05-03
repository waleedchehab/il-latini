let next = document.querySelector('.btn-right');
let prev = document.querySelector('.btn-left');
let closeBtn = document.querySelector('.close-btn');
let images = document.querySelectorAll('.lightbox');
let lightboxCont = document.querySelector('.lightbox-cont');
let preview = document.querySelector('.preview');


let imgIndex = 0;
//opening the lightbox 
images.forEach(img =>{
    img.addEventListener('click', function(e){
        lightboxCont.classList.add('active');
        preview.src = e.target.dataset.imagesrc

        let imgIndex = [...images].indexOf(img);
    })
})

closeBtn.addEventListener('click', function(){
    lightboxCont.classList.remove('active');
})


prev.addEventListener('click', function(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = images.length-1;
    }
    preview.src = images[imgIndex].src;
});

next.addEventListener('click', function(){
    imgIndex++;
    if(imgIndex > images.length-1){
        imgIndex = 0;
    }
    preview.src = images[imgIndex].src;
});



// layout gallery
let laynextBtn = document.querySelector('.lay-btn-right');
let layprevBtn = document.querySelector('.lay-btn-left');
let laycloseBtn = document.querySelector('.lay-close-btn')

let imagesLayout = document.querySelectorAll('.lay-lightbox');
let layLightboxCont = document.querySelector('.lay-lightbox-cont');
let layPreview = document.querySelector('.lay-preview');



let imgLayIndex = 0;
//opening the lightbox 
imagesLayout.forEach(img =>{
    img.addEventListener('click', function(e){
        layLightboxCont.classList.add('active');
        layPreview.src = e.target.dataset.imagesrc

        let imgLayIndex = [...imagesLayout].indexOf(img);
    })
})

laycloseBtn.addEventListener('click', function(){
    layLightboxCont.classList.remove('active');
})


layprevBtn.addEventListener('click', function(){
    imgLayIndex--;
    if(imgLayIndex < 0){
        imgLayIndex = imagesLayout.length-1;
    }
    layPreview.src = imagesLayout[imgLayIndex].src;
});

laynextBtn.addEventListener('click', function(){
    imgLayIndex++;
    if(imgLayIndex > imagesLayout.length-1){
        imgLayIndex = 0;
    }
    layPreview.src = imagesLayout[imgLayIndex].src;
});



// overlay details
let cards = document.querySelectorAll('.price-card');
let overlay = document.querySelectorAll('.overlay');

let smlImg = document.querySelectorAll('.sml-img');

let overlayImg = Array.from(document.querySelectorAll('.overlay .sml-img .pop'));
let closeDetailBtn = document.querySelectorAll('.overlay .close');
let nextBtn = document.querySelectorAll('.next')
let prevBtn = document.querySelectorAll('.prev')


for (let i = 0; i <= cards.length -1; i++){
    let currentImg = 0;
    cards[i].addEventListener('click', function () {
        overlay[i].classList.add('active');
        overlay[i].querySelectorAll('.sml-img .pop')[0].classList.add('active')
        
        closeDetailBtn[i].onclick = close
        nextBtn[i].onclick = nextSlide;
        prevBtn[i].onclick = prevSlide;
        
        function close() {
            overlay[i].classList.remove('active');
        }
        
        function nextSlide() {
            removeActive()
            if (currentImg < overlay[i].querySelectorAll('.sml-img .pop').length - 1) {
                currentImg++;
                overlay[i].querySelectorAll('.sml-img .pop')[currentImg].classList.add('active')
                
            } else {
                currentImg = 0;
                overlay[i].querySelectorAll('.sml-img .pop')[currentImg].classList.add('active')
            }
        }
        
        function prevSlide() {
            removeActive()
            if (currentImg == 0) {
                currentImg = overlay[i].querySelectorAll('.sml-img .pop').length - 1;
                overlay[i].querySelectorAll('.sml-img .pop')[currentImg].classList.add('active')
                
            } else {
                currentImg--
                overlay[i].querySelectorAll('.sml-img .pop')[currentImg].classList.add('active')
            }
        }
        
            function removeActive() {
            overlayImg.forEach(img => {
                img.classList.remove('active');
            })
        }
    })
    
}


