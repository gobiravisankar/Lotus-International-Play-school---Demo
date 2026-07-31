/* ========================================
   VOGUEVA - PREMIUM ANIMATIONS
   GSAP + Luxury Interactions
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    initHeroAnimation();
    initParallaxEffects();
    initProductHoverEffects();
    initCategoryAnimations();
    initGalleryAnimation();
    initSectionReveal();
    initMagneticButtons();

});


/* ========================================
   HERO GSAP ANIMATION
======================================== */

function initHeroAnimation() {

    if (typeof gsap === "undefined") return;

    const tl = gsap.timeline();

    tl.from(".hero-label", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })

    .from(".hero h1", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.4")

    .from(".hero p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5")

    .from(".hero-buttons .btn", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.4")

    .from(".hero-image img", {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    }, "-=0.8");

}


/* ========================================
   PARALLAX EFFECT
======================================== */

function initParallaxEffects() {

    const heroImage =
        document.querySelector(".hero-image img");

    if (!heroImage) return;

    window.addEventListener("scroll", () => {

        const scroll =
            window.pageYOffset;

        heroImage.style.setProperty(
    "--parallaxY",
    `${scroll * 0.05}px`
);

    });

}


/* ========================================
   PRODUCT CARD HOVER
======================================== */

function initProductHoverEffects() {

    const cards =
        document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / 25) * -1;

            const rotateY =
                ((x - centerX) / 25);

            card.style.transform =
                `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
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
   CATEGORY CARD EFFECT
======================================== */

function initCategoryAnimations() {

    const cards =
        document.querySelectorAll(".category-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            if (typeof gsap !== "undefined") {

                gsap.to(card, {

                    y: -10,

                    duration: 0.4,

                    ease: "power2.out"

                });

            }

        });

        card.addEventListener("mouseleave", () => {

            if (typeof gsap !== "undefined") {

                gsap.to(card, {

                    y: 0,

                    duration: 0.4,

                    ease: "power2.out"

                });

            }

        });

    });

}


/* ========================================
   GALLERY ZOOM EFFECT
======================================== */

function initGalleryAnimation() {

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
   SCROLL REVEAL
======================================== */

function initSectionReveal() {

    const sections =
        document.querySelectorAll(
            "section"
        );

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    sections.forEach(section => {

        section.classList.add("reveal");

        observer.observe(section);

    });

}


/* ========================================
   MAGNETIC BUTTON EFFECT
======================================== */

function initMagneticButtons() {

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener(
            "mousemove",
            (e) => {

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
                        ${x * 0.08}px,
                        ${y * 0.08}px
                    )
                    `;

            }
        );

        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0,0)";

            }
        );

    });

}


/* ========================================
   STAGGER PRODUCTS
======================================== */

window.addEventListener("load", () => {

    if (typeof gsap === "undefined") return;

    gsap.from(".product-card", {

        y: 40,

        opacity: 0,

        duration: 0.8,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: undefined

    });

});


/* ========================================
   TESTIMONIAL FLOAT
======================================== */

window.addEventListener("load", () => {

    const testimonials =
        document.querySelectorAll(
            ".testimonial"
        );

    testimonials.forEach((card, index) => {

        card.style.animation =
            `testimonialFloat ${
                4 + index
            }s ease-in-out infinite`;

    });

});


/* ========================================
   FLOAT KEYFRAMES
======================================== */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes testimonialFloat {

    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }

    100% {
        transform: translateY(0);
    }

}

`;

document.head.appendChild(style);


/* ========================================
   PREMIUM CONSOLE MESSAGE
======================================== */

console.log(
"%cVOGUEVA Luxury Animations Loaded",
"color:#c9a227;font-size:14px;font-weight:bold;"
);
