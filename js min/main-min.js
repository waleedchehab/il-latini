let openMenu=document.querySelector(".menu-bar"),closeMenu=document.querySelector(".close-menu"),menu=document.querySelector(".main-nav");openMenu.addEventListener("click",(function(){menu.classList.add("active"),closeMenu.classList.remove("hide"),openMenu.classList.add("hide"),menu&&(closeMenu.addEventListener("click",(function(){menu.classList.remove("active"),closeMenu.classList.add("hide"),openMenu.classList.remove("hide")})),menu.addEventListener("click",(function(){menu.classList.remove("active"),closeMenu.classList.add("hide"),openMenu.classList.remove("hide")})))}));