/* ========================================
   VOGUEVA - PREMIUM ANIMATIONS
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    initHeroAnimation();
    initParallaxEffect();
    initProductTilt();
    initCategoryHover();
    initGalleryHover();
    initMagneticButtons();
    initTestimonials();

});


/* ========================================
   HERO GSAP INTRO
======================================== */

function initHeroAnimation() {

    if (typeof gsap === "undefined") return;

    const tl = gsap.timeline();

    tl.from(".hero-label", {
        opacity: 0,
        y: -25,
        duration: 0.8,
        ease: "power3.out"
    })

    .from(".hero h1", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power4.out"
    }, "-=0.4")

    .from(".hero p", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5")

    .from(".hero-buttons .btn", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: "power3.out"
    }, "-=0.4")

    .from(".hero-image img", {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.8");

}


/* ========================================
   SMOOTH PARALLAX
======================================== */

function initParallaxEffect() {

    const image =
        document.querySelector(".hero-image img");

    if (!image) return;

    let ticking = false;

    window.addEventListener("scroll", () => {

        if (!ticking) {

            requestAnimationFrame(() => {

                const offset =
                    window.pageYOffset * 0.05;

                image.style.setProperty(
                    "--parallaxY",
                    `${offset}px`
                );

                ticking = false;

            });

            ticking = true;
        }

    });

}


/* ========================================
   PRODUCT 3D TILT
======================================== */

function initProductTilt() {

    const cards =
        document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - 0.5) * 8;

            const rotateX =
                ((y / rect.height) - 0.5) * -8;

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
                `;
        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                `
                perspective(1000px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0)
                `;
        });

    });

}


/* ========================================
   CATEGORY HOVER
======================================== */

function initCategoryHover() {

    if (typeof gsap === "undefined") return;

    const cards =
        document.querySelectorAll(".category-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {
                y: -10,
                duration: 0.35,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(card, {
                y: 0,
                duration: 0.35,
                ease: "power2.out"
            });

        });

    });

}


/* ========================================
   GALLERY HOVER
======================================== */

function initGalleryHover() {

    const images =
        document.querySelectorAll(
            ".gallery-grid img"
        );

    images.forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.zIndex = "2";

        });

        img.addEventListener("mouseleave", () => {

            img.style.zIndex = "1";

        });

    });

}


/* ========================================
   MAGNETIC BUTTONS
======================================== */

function initMagneticButtons() {

    if (window.innerWidth < 768) return;

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mousemove", e => {

            const rect =
                button.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left -
                rect.width / 2;

            const y =
                e.clientY -
                rect.top -
                rect.height / 2;

            button.style.transform =
                `
                translate(
                    ${x * 0.06}px,
                    ${y * 0.06}px
                )
                `;
        });

        button.addEventListener("mouseleave", () => {

            button.style.transform =
                "translate(0,0)";
        });

    });

}


/* ========================================
   TESTIMONIAL FLOAT
======================================== */

function initTestimonials() {

    const cards =
        document.querySelectorAll(
            ".testimonial"
        );

    cards.forEach((card, index) => {

        card.style.animation =
            `testimonialFloat ${
                4 + index
            }s ease-in-out infinite`;

    });

}


/* ========================================
   TESTIMONIAL KEYFRAMES
======================================== */

const animationStyle =
document.createElement("style");

animationStyle.innerHTML = `

@keyframes testimonialFloat {

    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-8px);
    }

    100% {
        transform: translateY(0px);
    }

}

`;

document.head.appendChild(animationStyle);


/* ========================================
   GSAP PRODUCT ENTRANCE
======================================== */

window.addEventListener("load", () => {

    if (typeof gsap === "undefined") return;

    gsap.from(".product-card", {

        opacity: 0,

        y: 40,

        stagger: 0.12,

        duration: 0.8,

        ease: "power3.out"

    });

});


/* ========================================
   CONSOLE BRANDING
======================================== */

console.log(
    "%cVOGUEVA Luxury Animations Loaded",
    "color:#c9a227;font-size:14px;font-weight:bold;"
);
