const menu = document.querySelector(".nav")
const burgermenu =document.querySelector(".burger_menu")
const menuClose =document.querySelector(".menu_close")
burgermenu.onclick =() =>{
    menu.classList.toggle("nav_show")

    if(menu.classList.contains("nav_show")){
        menuClose.style.display = "flex"
    }
    else{

        menuClose.style.display ="none"
    }
    
}
menuClose.onclick =()=>{
    menu.classList.remove("nav_show")
    menuClose.style.display = "none"
}
////////////////////

const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop:true,
    },
  });