/* =========================================================
   مأكولات سكره — Electronic Menu
   Ahmed Maitham
========================================================= */

const categories = [
    {
        id: "all",
        name: "الكل",
        icon: "",
        subtitle: "كل أصناف مأكولات سكره"
    },
    {
        id: "main",
        name: "الأكلات الرئيسية",
        icon: "🍽️",
        subtitle: "أطباق سُكره المميزة"
    },
    {
        id: "desserts",
        name: "الحلويات والكيك",
        icon: "🍰",
        subtitle: "حلاها غير"
    },
    {
        id: "pastries",
        name: "المعجنات",
        icon: "🥐",
        subtitle: "مخبوزات طازجة ولذيذة"
    }
];


/* =========================================================
   MENU ITEMS
========================================================= */

const menuItems = [

    /* =========================
       الأكلات الرئيسية
    ========================= */

    {
        id: 1,
        category: "main",
        name: "دولمة",
        description: "",
        options: [
            { name: "صغير", price: 10 },
            { name: "وسط", price: 15 },
            { name: "كبير", price: 20 }
        ],
        image: "images/d.jpg"
    },

    {
        id: 2,
        category: "main",
        name: "برياني",
        description: "",
        options: [
            { name: "صغير", price: 10 },
            { name: "وسط", price: 15 },
            { name: "كبير", price: 20 }
        ],
        image: "images/bry.jpg"
    },

    {
        id: 3,
        category: "main",
        name: "مقلوبة دجاج",
        description: "",
        options: [
            { name: "دجاجة كاملة", price: 22 },
            { name: "نصف دجاجة", price: 11 }
        ],
        image: "images/mkl.jpg"
    },

    {
        id: 4,
        category: "main",
        name: "مندي دجاج",
        description: "",
        options: [
            { name: "دجاجة كاملة", price: 18 },
            { name: "نصف دجاجة", price: 10 }
        ],
        image: "images/dodo.jpg"
    },

    {
        id: 5,
        category: "main",
        name: "كبسة دجاج",
        description: "",
        options: [
            { name: "دجاجة كاملة", price: 18 },
            { name: "نصف دجاجة", price: 10 }
        ],
        image: "images/mndy.jpg"
    },

    {
        id: 6,
        category: "main",
        name: "كبة تمن",
        description: "",
        options: [
            { name: "15 حبة", price: 5 },
        ],
        image: "images/kbh.jpg"
    },

    {
        id: 7,
        category: "main",
        name: "كبة برغل",
        description: "",
        options: [
            { name: "15 حبة", price: 5 },
        ],
        image: "images/brg.jpg"
    },

    {
        id: 8,
        category: "main",
        name: "ميني بيتزا",
        description: "",
        options: [
            { name: "10 قطع", price: 7 }
        ],
        image: "images/lhm.jpg"
    },

    {
        id: 9,
        category: "main",
        name: "بيتزا",
        description: "",
        options: [
            { name: "صغير", price: 6 },
            { name: "وسط", price: 8 },
            { name: "كبير", price: 10 }
        ],
        image: "images/pitza.jpg"
    },


    /* =========================
       الحلويات والكيك
    ========================= */

    {
        id: 10,
        category: "desserts",
        name: "كيك شاي",
        description: "",
        options: [
            { name: "صغير", price: 5 },
            { name: "وسط", price: 8 },
            { name: "كبير", price: 10 }
        ],
        image: "images/k.jpg"
    },

    {
        id: 11,
        category: "desserts",
        name: "كيك بركاني",
        description: "",
        options: [
            { name: "صغير", price: 10 },
            { name: "وسط", price: 12 },
            { name: "كبير", price: 15 }
        ],
        image: "images/brk.jpg"
    },

    {
        id: 12,
        category: "desserts",
        name: "كيكة حليب ترليشا",
        description: "",
        options: [
            { name: "القطعة", price: 2 }
        ],
        image: "images/tr.jpg"
    },

    {
        id: 13,
        category: "desserts",
        name: "حلا الخشخش",
        description: "",
        options: [
            { name: "العلبة", price: 5 }
        ],
        image: "images/khshkhsh.jpg"
    },

    {
        id: 14,
        category: "desserts",
        name: "بسبوسة",
        description: "",
        options: [
            { name: "عادية", price: 6 },
            { name: "بالمكسرات", price: 8 }
        ],
        image: "images/bsbs.jpg"
    },

    {
        id: 15,
        category: "desserts",
        name: "كيك بارد",
        description: "",
        options: [
            { name: "حشوة واحدة", price: 5 },
            { name: "مكس حشوات بدون مكسرات", price: 6 },
            { name: "مكس حشوات مع مكسرات", price: 7 }
        ],
        note: "الحشوات: نوتيلا • بستاشيو • لوتس • وايت شوكليت",
        image: "images/bard.jpg"
    },

    {
        id: 16,
        category: "desserts",
        name: "كوكيز",
        description: "",
        options: [
            { name: "وسط", price: 1 },
            { name: "كبير", price: 1.5 }
        ],
        image: "images/coc.jpg"
    },


    /* =========================
       المعجنات
    ========================= */

    {
        id: 17,
        category: "pastries",
        name: "سمبوسة",
        description: "",
        options: [
            { name: "25 قطعة", price: 7 },
        ],
        note: "لحم / دجاج / جبن",
        image: "images/samposa.jpg"
    },

    {
        id: 18,
        category: "pastries",
        name: "فطائر",
        description: "",
        options: [
            { name: "10 قطع", price: 6 }
        ],
        image: "images/ftaar.jpg"
    },

    {
        id: 19,
        category: "pastries",
        name: "لحم بعجين",
        description: "",
        options: [
            { name: "10 قطع", price: 6 }
        ],
        image: "images/mnmn.jpg"
    },

    {
        id: 20,
        category: "pastries",
        name: "كليجة",
        description: "",
        options: [
            { name: "تمر - حلقوم - مبروش - سمسم", price: 7 },
            { name: "جوز وتمر", price: 10 },
            { name: "جوز", price: 12 }
        ],
        image: "images/klicha.jpg"
    },

    {
        id: 21,
        category: "pastries",
        name: "صاج",
        description: "",
        options: [
            { name: "القطعة", price: 2 }
        ],
        image: "images/saj.jpg"
    },

    {
        id: 22,
        category: "pastries",
        name: "خلية نحل",
        description: "",
        options: [
            { name: "صغير", price: 5 },
            { name: "وسط", price: 8 },
            { name: "كبير", price: 10 }
        ],
        image: "images/klia.jpg"
    }
];


/* =========================================================
   STATE
========================================================= */

let activeCategory = "all";


/* =========================================================
   START
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});


function initializeApp() {

    renderCategories();

    selectCategory("all");

    setupSplash();

    setupTopButtons();

    setupScroll();

    document.body.classList.add("app-ready");
}


/* =========================================================
   SPLASH
========================================================= */

function setupSplash() {

    const splash = document.getElementById("splashScreen");

    if (!splash) return;

    setTimeout(() => {

        splash.classList.add("hide");

        setTimeout(() => {
            splash.remove();
        }, 700);

    }, 1700);
}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

    const container = document.getElementById("categories");

    if (!container) return;

    container.innerHTML = categories.map(category => {

        const active =
            category.id === activeCategory ? "active" : "";

        return `
            <button
                class="category-card ${active}"
                data-category="${category.id}"
                type="button"
            >
                <span class="category-icon">
                    ${category.icon}
                </span>

                <span class="category-name">
                    ${category.name}
                </span>
            </button>
        `;

    }).join("");


    container.querySelectorAll(".category-card")
        .forEach(button => {

            button.addEventListener("click", () => {

                const categoryId =
                    button.dataset.category;

                selectCategory(categoryId);

            });

        });
}


/* =========================================================
   SELECT CATEGORY
========================================================= */

function selectCategory(categoryId) {

    activeCategory = categoryId;

    document
        .querySelectorAll(".category-card")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === categoryId
            );

        });


    updateCategoryHeader();

    renderMenu();

    scrollMenuIntoView();
}


/* =========================================================
   CATEGORY HEADER
========================================================= */

function updateCategoryHeader() {

    const category =
        categories.find(item => item.id === activeCategory);

    if (!category) return;


    const title =
        document.getElementById("activeCategoryTitle");

    const subtitle =
        document.getElementById("activeCategorySubtitle");


    if (title) {
        title.textContent = category.name;
    }

    if (subtitle) {
        subtitle.textContent = category.subtitle;
    }
}


/* =========================================================
   RENDER MENU
========================================================= */

function renderMenu() {

    const container =
        document.getElementById("menuGrid");

    if (!container) return;


    let items;


    if (activeCategory === "all") {

        items = menuItems;

    } else {

        items = menuItems.filter(
            item => item.category === activeCategory
        );

    }


    container.innerHTML = "";


    items.forEach((item, index) => {

        const card =
            createMenuCard(item, index);

        container.appendChild(card);

    });


    requestAnimationFrame(() => {

        container
            .querySelectorAll(".menu-card")
            .forEach((card, index) => {

                card.style.setProperty(
                    "--card-delay",
                    `${index * 55}ms`
                );

                card.classList.add("show");

            });

    });
}


/* =========================================================
   CREATE MENU CARD
========================================================= */

function createMenuCard(item, index) {

    const card =
        document.createElement("article");

    card.className = "menu-card";


    let imageHTML;


    if (item.image) {

        imageHTML = `
            <div class="food-image has-image">
                <img
                    src="${item.image}"
                    alt="${item.name}"
                    loading="lazy"
                >
            </div>
        `;

    } else {

        imageHTML = `
            <div class="food-image">
                <span class="food-placeholder">
                    ${getFoodIcon(item.category)}
                </span>
            </div>
        `;

    }


    const optionsHTML =
        item.options.map(option => {

            return `
                <div class="price-row">

                    <span class="option-name">
                        ${option.name}
                    </span>

                    <span class="price">
                        ${formatPrice(option.price)}
                    </span>

                </div>
            `;

        }).join("");


    const noteHTML = item.note
        ? `
            <div class="item-note">
                ${item.note}
            </div>
        `
        : "";


    card.innerHTML = `

        ${imageHTML}

        <div class="menu-card-content">

            <div class="menu-card-top">

                <h3>
                    ${item.name}
                </h3>

            </div>

            <p class="food-description">
                ${item.description || ""}
            </p>

            <div class="prices">
                ${optionsHTML}
            </div>

            ${noteHTML}

        </div>

    `;


    return card;
}


/* =========================================================
   ICONS
========================================================= */

function getFoodIcon(category) {

    if (category === "main") {
        return "🍽️";
    }

    if (category === "desserts") {
        return "🍰";
    }

    if (category === "pastries") {
        return "🥐";
    }

    return "";
}


/* =========================================================
   PRICE FORMAT
========================================================= */

function formatPrice(price) {

    if (price === null || price === undefined) {
        return "";
    }

    const dinars = Number(price) * 1000;

    return `${dinars.toLocaleString("en-US")} د.ع`;
}

/* =========================================================
   SCROLL TO MENU
========================================================= */

function scrollMenuIntoView() {

    const section =
        document.getElementById("menuSection");

    if (!section) return;


    const rect =
        section.getBoundingClientRect();


    const isAlreadyVisible =
        rect.top > 80 &&
        rect.top < window.innerHeight * 0.75;


    if (!isAlreadyVisible) {

        setTimeout(() => {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 80);

    }
}


/* =========================================================
   TOP BUTTONS
========================================================= */

function setupTopButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-scroll-top]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            scrollToTop
        );

    });

}


/* =========================================================
   TOP
========================================================= */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   SCROLL
========================================================= */

function setupScroll() {

    updateScrollButtons();


    window.addEventListener(
        "scroll",
        updateScrollButtons,
        { passive: true }
    );

}


function updateScrollButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-scroll-top]"
        );


    const show =
        window.scrollY > 500;


    buttons.forEach(button => {

        button.classList.toggle(
            "visible",
            show
        );

    });

}


/* =========================================================
   CATEGORY HORIZONTAL TOUCH
========================================================= */

const categoryContainer =
    document.getElementById("categories");


if (categoryContainer) {

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;


    categoryContainer.addEventListener(
        "pointerdown",
        event => {

            isDown = true;

            startX = event.clientX;

            scrollLeft =
                categoryContainer.scrollLeft;

            categoryContainer.setPointerCapture(
                event.pointerId
            );

        }
    );


    categoryContainer.addEventListener(
        "pointermove",
        event => {

            if (!isDown) return;

            const distance =
                event.clientX - startX;

            categoryContainer.scrollLeft =
                scrollLeft - distance;

        }
    );


    categoryContainer.addEventListener(
        "pointerup",
        () => {

            isDown = false;

        }
    );


    categoryContainer.addEventListener(
        "pointercancel",
        () => {

            isDown = false;

        }
    );

}


/* =========================================================
   PREVENT CONTEXT MENU
========================================================= */

document.addEventListener(
    "contextmenu",
    event => {

        if (
            event.target.closest(
                ".food-image, .menu-card"
            )
        ) {
            event.preventDefault();
        }

    }
);
