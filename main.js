window.addEventListener("click", hamburgerAction);
window.addEventListener("click", navLinkAction);
window.addEventListener("load", projectAction);
window.addEventListener("load", leftArrowAction);
window.addEventListener("load", rightArrowAction);
window.addEventListener("load", contactAction);
window.addEventListener("resize", contactAction);

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
            modal.style.display = "flex";
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

function leftArrowAction() {
    const leftArrow = document.querySelectorAll(".left-arrow");
    for (let i = 0; i < leftArrow.length; i++) {
        leftArrow[i].addEventListener("click", function() {
            plusSlides(-1, i);
        });
    }
}

function rightArrowAction() {
    const rightArrow = document.querySelectorAll(".right-arrow");
    for (let i = 0; i < rightArrow.length; i++) {
        rightArrow[i].addEventListener("click", function() {
            plusSlides(1, i);
        });
    }
}

let slideId = ["project-1", "project-2", "project-3", "project-4", "project-5", "project-6", "project-7"];
let slideIndex = [1,1,1,1,1,1,1];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "flex";  
}