let tabs=document.querySelectorAll(".tab-link"),content=document.querySelectorAll(".tab-content");tabs.forEach((e=>{e.onclick=function(e){tabs.forEach((function(e){e.classList.remove("active")})),e.currentTarget.classList.add("active"),content.forEach((function(e){e.classList.remove("active")})),document.querySelector(e.currentTarget.dataset.cont).classList.add("active")}}));let next=document.querySelector(".btn-right"),prev=document.querySelector(".btn-left"),closeBtn=document.querySelector(".close-btn"),images=document.querySelectorAll(".lightbox"),lightboxCont=document.querySelector(".lightbox-cont"),preview=document.querySelector(".preview"),imgIndex=0;images.forEach((e=>{e.addEventListener("click",(function(t){lightboxCont.classList.add("active"),preview.src=t.target.dataset.imagesrc;[...images].indexOf(e)}))})),closeBtn.addEventListener("click",(function(){lightboxCont.classList.remove("active")})),prev.addEventListener("click",(function(){imgIndex--,imgIndex<0&&(imgIndex=images.length-1),preview.src=images[imgIndex].src})),next.addEventListener("click",(function(){imgIndex++,imgIndex>images.length-1&&(imgIndex=0),preview.src=images[imgIndex].src}));let laynextBtn=document.querySelector(".lay-btn-right"),layprevBtn=document.querySelector(".lay-btn-left"),laycloseBtn=document.querySelector(".lay-close-btn"),imagesLayout=document.querySelectorAll(".lay-lightbox"),layLightboxCont=document.querySelector(".lay-lightbox-cont"),layPreview=document.querySelector(".lay-preview"),imgLayIndex=0;imagesLayout.forEach((e=>{e.addEventListener("click",(function(t){layLightboxCont.classList.add("active"),layPreview.src=t.target.dataset.imagesrc;[...imagesLayout].indexOf(e)}))})),laycloseBtn.addEventListener("click",(function(){layLightboxCont.classList.remove("active")})),layprevBtn.addEventListener("click",(function(){imgLayIndex--,imgLayIndex<0&&(imgLayIndex=imagesLayout.length-1),layPreview.src=imagesLayout[imgLayIndex].src})),laynextBtn.addEventListener("click",(function(){imgLayIndex++,imgLayIndex>imagesLayout.length-1&&(imgLayIndex=0),layPreview.src=imagesLayout[imgLayIndex].src}));let cards=document.querySelectorAll(".price-card"),overlay=document.querySelectorAll(".overlay"),smlImg=document.querySelectorAll(".sml-img"),overlayImg=Array.from(document.querySelectorAll(".overlay .sml-img .pop")),closeDetailBtn=document.querySelectorAll(".overlay .close"),nextBtn=document.querySelectorAll(".next"),prevBtn=document.querySelectorAll(".prev");for(let e=0;e<=cards.length-1;e++){let t=0;cards[e].addEventListener("click",(function(){function l(){overlayImg.forEach((e=>{e.classList.remove("active")}))}overlay[e].classList.add("active"),overlay[e].querySelectorAll(".sml-img .pop")[0].classList.add("active"),closeDetailBtn[e].onclick=function(){overlay[e].classList.remove("active")},nextBtn[e].onclick=function(){l(),t<overlay[e].querySelectorAll(".sml-img .pop").length-1?(t++,overlay[e].querySelectorAll(".sml-img .pop")[t].classList.add("active")):(t=0,overlay[e].querySelectorAll(".sml-img .pop")[t].classList.add("active"))},prevBtn[e].onclick=function(){l(),0==t?(t=overlay[e].querySelectorAll(".sml-img .pop").length-1,overlay[e].querySelectorAll(".sml-img .pop")[t].classList.add("active")):(t--,overlay[e].querySelectorAll(".sml-img .pop")[t].classList.add("active"))}}))}