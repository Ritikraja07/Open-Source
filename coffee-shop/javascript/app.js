/* navbar */
console.log("LINK SUCCESSFUL");

const menu = document.getElementById("menu-list");
const navbar = document.getElementById("navbar");
menu.style.maxHeight = "0rem";
navbar.style.height = "auto";


const toggleMenu = () => {
    if (menu.style.maxHeight === "0rem") {
        menu.style.maxHeight = "35rem"
        navbar.style.height = "12rem";
    }
    else {
        menu.style.maxHeight = "0rem"
        navbar.style.height = "auto";
    }
};

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

/* different menu list buttons and site navigation */


const exploreBtn = document.querySelector(".header__button");
const learnMoreBtn = document.querySelector(".about__button");
const inventoryBtn = document.querySelector(".products__description_button");
const readMoreBtn = document.querySelectorAll(".services-card__button");

const gotoPage = (url) => {
    window.location.href = url;
}


exploreBtn.addEventListener("click", () => gotoPage("services.html"));
learnMoreBtn.addEventListener("click", () => gotoPage("about.html"));
inventoryBtn.addEventListener("click", () => gotoPage("products.html"));

readMoreBtn.forEach((btn) => {
    btn.addEventListener("click", () => gotoPage("products.html"))
})

/* Scroll Reveal */
const skillsItems = document.querySelectorAll('.skills__item');

ScrollReveal().reveal(skillsItems, {
    distance: '3rem',
    origin: 'bottom',
    duration: 1000,
    interval: 100,
    easing: 'ease-in-out',
    reset: true
});

const aboutImgContainer = document.querySelector(".about__img-container");

ScrollReveal().reveal(aboutImgContainer, {
    distance: '5rem',
    origin: 'left',
    duration: 1500,
    interval: 100,
    easing: 'ease-in-out',
    reset: true
});

const aboutCard = document.querySelector(".about__card");

ScrollReveal().reveal(aboutCard, {
    distance: '5rem',
    origin: 'right',
    duration: 1500,
    interval: 100,
    easing: 'ease-in-out',
    reset: true
});

const product = document.querySelector(".products");

ScrollReveal().reveal(product.children, {
    scale: 0.5,
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200,
    opacity: 0,
    reset: true
});

const servicesHeading = document.querySelector(".services-heading");

ScrollReveal().reveal(servicesHeading.firstElementChild, {
    distance: '5rem',
    origin: 'right',
    duration: 1500,
    interval: 100,
    easing: 'ease-in-out',
    reset: true
});
ScrollReveal().reveal(servicesHeading.lastElementChild, {
    distance: '5rem',
    origin: 'left',
    duration: 1500,
    interval: 100,
    easing: 'ease-in-out',
    reset: true
});


const servicesCard = document.querySelectorAll(".services-card");

ScrollReveal().reveal(servicesCard, {
    rotate: { x: 0, y: 100, z: 0 },
    duration: 1000,
    easing: 'ease-in-out',
    interval: 200,
    reset: true
});
/* services card hover scale up gets disabled so I fixed that is js */
servicesCard.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


const contactUsText = document.querySelector(".contact-us__details");

ScrollReveal().reveal(contactUsText, {
    distance: '7rem',
    origin: 'right',
    duration: 1500,
    interval: 100,
    easing: 'ease-in-out',
    reset: true
});

const contactUsForm = document.querySelector(".contact-us__form");

ScrollReveal().reveal(contactUsForm, {
    distance: '7rem',
    origin: 'left',
    duration: 1500,
    interval: 100,
    easing: 'ease-in-out',
    reset: true
});













