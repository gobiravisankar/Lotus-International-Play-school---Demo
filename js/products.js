/* ========================================
   VOGUEVA PRODUCTS PAGE
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    initCategoryFilters();
    initSearch();
    initSorting();
    updateProductCount();

});


/* ========================================
   ELEMENTS
======================================== */

const productCards =
    document.querySelectorAll(".product-card");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const searchInput =
    document.querySelector(".search-box input");

const sortSelect =
    document.querySelector(".sort-box select");

const productGrid =
    document.querySelector(".product-grid");


/* ========================================
   CATEGORY FILTERS
======================================== */

function initCategoryFilters() {

    if (!filterButtons.length) return;

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            const category =
                button.textContent
                    .trim()
                    .toLowerCase();

            productCards.forEach(card => {

                const cardCategory =
                    card.querySelector(
                        ".product-category"
                    )
                    .textContent
                    .trim()
                    .toLowerCase();

                if (
                    category === "all" ||
                    category === cardCategory
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

            updateProductCount();

        });

    });

}


/* ========================================
   SEARCH
======================================== */

function initSearch() {

    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {

        const keyword =
            searchInput.value
                .trim()
                .toLowerCase();

        productCards.forEach(card => {

            const title =
                card.querySelector("h3")
                .textContent
                .toLowerCase();

            const category =
                card.querySelector(
                    ".product-category"
                )
                .textContent
                .toLowerCase();

            if (
                title.includes(keyword) ||
                category.includes(keyword)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

        updateProductCount();

    });

}


/* ========================================
   SORTING
======================================== */

function initSorting() {

    if (!sortSelect) return;

    sortSelect.addEventListener("change", () => {

        const selected =
            sortSelect.value;

        const products =
            [...productCards];

        if (
            selected ===
            "Price: Low to High"
        ) {

            products.sort((a, b) => {

                const priceA =
                    parseFloat(
                        a.querySelector(".price")
                        .textContent
                        .replace("$", "")
                    );

                const priceB =
                    parseFloat(
                        b.querySelector(".price")
                        .textContent
                        .replace("$", "")
                    );

                return priceA - priceB;

            });

        }

        if (
            selected ===
            "Price: High to Low"
        ) {

            products.sort((a, b) => {

                const priceA =
                    parseFloat(
                        a.querySelector(".price")
                        .textContent
                        .replace("$", "")
                    );

                const priceB =
                    parseFloat(
                        b.querySelector(".price")
                        .textContent
                        .replace("$", "")
                    );

                return priceB - priceA;

            });

        }

        products.forEach(product => {

            productGrid.appendChild(
                product
            );

        });

    });

}


/* ========================================
   PRODUCT COUNT
======================================== */

function updateProductCount() {

    let counter =
        document.querySelector(
            ".product-count"
        );

    if (!counter) {

        counter =
            document.createElement("p");

        counter.className =
            "product-count";

        const controls =
            document.querySelector(
                ".shop-controls .container"
            );

        controls.appendChild(counter);

    }

    const visibleProducts =
        [...productCards].filter(card =>
            card.style.display !== "none"
        );

    counter.textContent =
        `Showing ${visibleProducts.length} Products`;

}


/* ========================================
   CONSOLE
======================================== */

console.log(
    "%cVOGUEVA Products Loaded",
    "color:#c9a227;font-size:14px;font-weight:bold;"
);
