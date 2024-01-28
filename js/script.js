// * burger menu
const burgerButton = document.querySelector(".burger_menu_button");
const burgerIcon = document.querySelector(".burger_menu_icon");
const menuMobile = document.querySelector(".nav_mobile_menu");

burgerButton.addEventListener("click", function(){
    burgerIcon.classList.toggle("burger_menu_icon_active")
    menuMobile.classList.toggle("open_menu")
})

// *slider
const sliderImages = document.querySelectorAll(".slider_image");
const buttonSliderPrev = document.querySelector(".button_prev");
const buttonSliderNext = document.querySelector(".button_next");
console.log(buttonSliderPrev);
console.log(buttonSliderNext);

sliderImages[0].classList.add("slider_image_active")
let currentSlide = 0;
buttonSliderPrev.addEventListener("click", function(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].classList.remove("slider_image_active");
    }
    currentSlide --;
    if(currentSlide < 0 ){
        currentSlide = sliderImages.length-1 ;
    }
    sliderImages[currentSlide].classList.add("slider_image_active");
});

buttonSliderNext.addEventListener("click", function(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].classList.remove("slider_image_active");
    }
    currentSlide ++;
    if(currentSlide >= sliderImages.length){
        currentSlide = 0;
    }
    sliderImages[currentSlide].classList.add("slider_image_active");
});
