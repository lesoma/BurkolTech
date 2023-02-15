window.addEventListener("click", hamburgerAction);
window.addEventListener("click", navLinkAction);
window.addEventListener("scroll", animationAdder);
window.addEventListener("load", aboutMeAction);
window.addEventListener("load", projectAction);

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

function animationAdder() {
    const aboutMeLeft = document.querySelectorAll('.fade-in-left');
    const aboutMeRight = document.querySelectorAll('.fade-in-right');
    const projects = document.querySelectorAll('.bounce-in');
    const subtitles = document.querySelectorAll(".subtitle");

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -200px 0px"
    }

    const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add('animation');
            appearOnScroll.unobserve(entry.target);
          }
        });
    }, appearOptions);

    aboutMeLeft.forEach(fader => {
        appearOnScroll.observe(fader);
    });
      
    aboutMeRight.forEach(fader => {
        appearOnScroll.observe(fader);
    });
      
    projects.forEach(bouncer => {
        appearOnScroll.observe(bouncer);
    });
      
    subtitles.forEach(bouncer => {
        appearOnScroll.observe(bouncer);
    });
}

function aboutMeAction() {
    let infoCard = document.querySelectorAll(".info-card");
    for (let i = 0; i < infoCard.length; i++) {
        infoCard[i].addEventListener("click", function() {
            let infoHeader = infoCard[i].querySelector(".info-header");
            let cardContent = infoCard[i].querySelector(".card-content");
            let infoBody = infoCard[i].querySelector(".info-body");
            infoCard[i].classList.toggle("opened");
            infoHeader.classList.toggle("removed");
            cardContent.classList.toggle("opened");
            infoBody.classList.toggle("opened");
        });
    }
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