window.addEventListener("click", hamburgerAction);
window.addEventListener("click", navLinkAction);
window.addEventListener("load", projectAction);
window.addEventListener("resize", contactAction);
window.addEventListener("load", contactAction);

function hamburgerAction() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", mobileMenu);
    hamburger.addEventListener("click", headerTopVisibility);
}

function mobileMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("responsive");
}

function headerTopVisibility() {
    const headerTop = document.querySelector(".header-container .flex-item-left");
    if (window.innerWidth <= 1024) {
        if (headerTop.style.visibility == "hidden") {
            headerTop.style.visibility = "visible";
        } else {
            headerTop.style.visibility = "hidden";
        }
    }
}

function navLinkAction() {
    const navLink = document.querySelectorAll(".link-container a");
    navLink.forEach(n => n.addEventListener("click", closeMenu));
    navLink.forEach(n => n.addEventListener("click", headerTopVisibility));
}

function closeMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar");
    hamburger.classList.remove("active");
    navMenu.classList.remove("responsive");
}

function projectAction() {
    const projectCard = document.querySelectorAll(".project-card");
    for (let i = 0; i < projectCard.length; i++) {
        projectCard[i].addEventListener("click", function() {
            let modal = document.getElementById(this.dataset.modal);
            modal.style.display = "block";
        }, false);
    }
    const modals = document.querySelectorAll('.modal');
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            for (let i = 0; i < modals.length; i++) {
                if (typeof modals[i].style !== 'undefined') modals[i].style.display = "none";    
            }
        }
    }
}

function contactAction() {
    const infoWrapper = document.querySelector(".info-wrapper");
    const form = document.querySelector(".form");
    if (window.innerWidth <= 1024) {
        infoWrapper.style.display = "none";
        form.style.width = "100%";
        form.style.marginLeft = "3%";
    } else {
        infoWrapper.style.display = "flex";
        form.style.marginLeft = "0";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-image");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}