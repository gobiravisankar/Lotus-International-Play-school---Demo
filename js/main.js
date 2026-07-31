/* ========================================
   VOGUEVA - MAIN JAVASCRIPT
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    initStickyHeader();
    initScrollProgress();
    initCounterAnimation();
    initMobileMenu();
    initSmoothScroll();
    initNewsletterForm();
    initBackToTop();
    initCurrentYear();

});

/* ========================================
   STICKY HEADER
======================================== */

function initStickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background =
                "rgba(255,255,255,0.95)";

            header.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            header.style.background =
                "rgba(255,255,255,.85)";

            header.style.boxShadow =
                "none";
        }

    });

}

/* ========================================
   SCROLL PROGRESS BAR
======================================== */

function initScrollProgress() {

    const progressBar =
        document.querySelector(".progress-bar");

    if (!progressBar) return;

    window.addEventListener("scroll", () => {

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width =
            progress + "%";

    });

}

/* ========================================
   COUNTER ANIMATION
======================================== */

function initCounterAnimation() {

    const counters =
        document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const counter =
                        entry.target;

                    const target =
                        Number(
                            counter.getAttribute(
                                "data-target"
                            )
                        );

                    animateCounter(
                        counter,
                        target
                    );

                    observer.unobserve(counter);

                }

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => {
        observer.observe(counter);
    });

}

function animateCounter(element, target) {

    let current = 0;

    const duration = 2000;

    const increment =
        target / (duration / 16);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        if (target === 98) {

            element.textContent =
                Math.floor(current) + "%";

        } else {

            element.textContent =
                Math.floor(current).toLocaleString() + "+";

        }

    }, 16);

}

/* ========================================
   MOBILE MENU
======================================== */

function initMobileMenu() {

    const mobileButton =
        document.querySelector(".mobile-menu");

    const navbar =
        document.querySelector(".navbar");

    if (!mobileButton || !navbar) return;

    mobileButton.addEventListener("click", () => {

        navbar.classList.toggle("mobile-active");

    });

    document.addEventListener("click", (e) => {

        const clickedInside =
            navbar.contains(e.target) ||
            mobileButton.contains(e.target);

        if (!clickedInside) {

            navbar.classList.remove(
                "mobile-active"
            );

        }

    });

}

/* ========================================
   SMOOTH SCROLL
======================================== */

function initSmoothScroll() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener("click", (e) => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId === "#" ||
                targetId.length <= 1
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

}

/* ========================================
   NEWSLETTER FORM
======================================== */

function initNewsletterForm() {

    const form =
        document.querySelector(
            ".newsletter form"
        );

    if (!form) return;

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const email =
            form.querySelector(
                "input[type='email']"
            );

        if (!email.value.trim()) {

            alert(
                "Please enter your email address."
            );

            return;
        }

        alert(
            "Thank you for subscribing to VOGUEVA."
        );

        form.reset();

    });

}

/* ========================================
   BACK TO TOP BUTTON
======================================== */

function initBackToTop() {

    const button =
        document.createElement("button");

    button.innerHTML = "↑";

    button.className = "back-to-top";

    document.body.appendChild(button);

    button.style.position = "fixed";
    button.style.right = "25px";
    button.style.bottom = "25px";

    button.style.width = "50px";
    button.style.height = "50px";

    button.style.border = "none";
    button.style.borderRadius = "50%";

    button.style.cursor = "pointer";

    button.style.background =
        "#111827";

    button.style.color =
        "#ffffff";

    button.style.fontSize =
        "20px";

    button.style.opacity = "0";

    button.style.visibility =
        "hidden";

    button.style.transition =
        "all .3s ease";

    button.style.zIndex =
        "999";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            button.style.opacity = "1";

            button.style.visibility =
                "visible";

        } else {

            button.style.opacity = "0";

            button.style.visibility =
                "hidden";

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ========================================
   CURRENT YEAR
======================================== */

function initCurrentYear() {

    const yearElements =
        document.querySelectorAll(
            ".current-year"
        );

    if (!yearElements.length) return;

    const currentYear =
        new Date().getFullYear();

    yearElements.forEach(el => {

        el.textContent =
            currentYear;

    });

}

/* ========================================
   AOS INITIALIZATION
======================================== */

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true,

        easing: "ease-out-cubic"

    });

}

/* ========================================
   WINDOW LOAD
======================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});

/* ========================================
   CONSOLE BRANDING
======================================== */

console.log(
    "%cVOGUEVA Luxury Fashion Store",
    "font-size:18px;color:#c9a227;font-weight:bold;"
);

console.log(
    "%cPremium GitHub Pages Demo",
    "font-size:12px;color:#111827;"
);
