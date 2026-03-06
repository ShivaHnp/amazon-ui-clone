const slides = document.querySelectorAll(".slide");
const prevBTN = document.querySelector(".prev");
const nextBTN = document.querySelector(".next");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-sidebar");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");


let index = 0;
//  فانکشن تکراری برای استفاده تو اسلایدا 
function showSlide(i){

    slides.forEach(function(slide){
        slide.classList.remove("active");
    });

    slides[i].classList.add("active");
}

prevBTN.addEventListener("click", function(){
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    showSlide(index);
});

nextBTN.addEventListener("click", function(){
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);
});

setInterval(function(){
    
    index++;

    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);

}, 4000);

// قسمت سایدبار و باز و بسته شدنش


function openSidebar(){
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}
hamburgerMenu.addEventListener("click", openSidebar);


function closeSidebar(){
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "auto";
}

closeButton.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        closeSidebar();
    }
});

document.querySelector(".back-to-top").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});