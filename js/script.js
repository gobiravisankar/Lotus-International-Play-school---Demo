/* =====================================
   LOTUS INTERNATIONAL PLAY SCHOOL
   PROFESSIONAL INTERACTIONS
===================================== */


/* =========================
   STICKY NAVBAR EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";
    }
});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(

    ".about-card, .program-card, .feature-box, .testimonial-card, .gallery-grid img, .contact-info"

);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("active-reveal");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   ACTIVE NAVIGATION LINKS
========================= */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active-link");
        }
    });
});


/* =========================
   TESTIMONIAL CAROUSEL
========================= */

const testimonials =
    document.querySelectorAll(".testimonial-card");

let testimonialIndex = 0;

function rotateTestimonials() {

    if (testimonials.length <= 1) return;

    testimonials.forEach((card) => {

        card.style.opacity = "0.45";
        card.style.transform = "scale(0.96)";
    });

    testimonials[testimonialIndex].style.opacity = "1";
    testimonials[testimonialIndex].style.transform =
        "scale(1)";

    testimonialIndex++;

    if (
        testimonialIndex >= testimonials.length
    ) {

        testimonialIndex = 0;
    }
}

rotateTestimonials();

setInterval(
    rotateTestimonials,
    3000
);


/* =========================
   ADMISSION FORM
========================= */

const admissionForm =
    document.querySelector(".admission-form");

if (admissionForm) {

    admissionForm.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            const inputs =
                admissionForm.querySelectorAll(

                    "input, select"

                );

            let valid = true;

            inputs.forEach((input) => {

                if (
                    input.value.trim() === ""
                ) {

                    valid = false;

                    input.style.border =
                        "2px solid #ef4444";

                } else {

                    input.style.border =
                        "2px solid #10b981";
                }
            });

            if (valid) {

                alert(
                    "Thank you! Your admission enquiry has been submitted."
                );

                admissionForm.reset();

                inputs.forEach(input => {

                    input.style.border = "none";
                });
            }
        }
    );
}


/* =========================
   BUTTON HOVER EFFECTS
========================= */

const buttons =
    document.querySelectorAll(

        ".btn-primary, .btn-secondary, .nav-btn"
    );

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0)";
    });
});


/* =========================
   FLOATING PROGRAM CARDS
========================= */

const programCards =
    document.querySelectorAll(".program-card");

programCards.forEach((card, index) => {

    card.style.animation =
        `floatCard ${4 + index}s ease-in-out infinite`;
});


/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.background =
    "linear-gradient(135deg,#8b5cf6,#ec4899)";
scrollBtn.style.color = "white";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "9999";
scrollBtn.style.boxShadow =
    "0 10px 25px rgba(0,0,0,.15)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "🌸 Lotus International Play School website loaded successfully."
);
