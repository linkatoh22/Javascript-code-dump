const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializieSlider();
document.addEventListener("DOMContentLoaded",initializieSlider())
function initializieSlider(){
    if(slides.length>0)
        {
            slides[slideIndex].classList.add("displaySlide");
            intervalId = setInterval(nextSlide,5000);
        }
    
    
}
function showSlide(index){

    if(index >=slides.length){
        slideIndex=0;
    }
    else if(index<0){
        slideIndex=slides.length -1;
    }
    slides.forEach(element => {
        element.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex--);
}
function nextSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}