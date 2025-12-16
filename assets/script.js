// ===============================
// Mobile Menu (Hamburger)
// ===============================
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const navLinksMobile = menu.querySelectorAll("a");
const navbar = document.querySelector("nav");

btn.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        // buka menu
        menu.classList.remove("hidden");

        setTimeout(() => {
            menu.classList.remove("opacity-0", "-translate-y-4");
            animateMobileLinks(true);
        }, 10);

        btn.classList.add("hamburger-active");
    } else {
        // tutup menu
        menu.classList.add("opacity-0", "-translate-y-4");
        animateMobileLinks(false);

        setTimeout(() => {
            menu.classList.add("hidden");
        }, 300);

        btn.classList.remove("hamburger-active");
    }
});
function animateMobileLinks(open) {
    const links = document.querySelectorAll(".mobile-link");

    links.forEach((link, index) => {
        if (open) {
            setTimeout(() => {
                link.classList.remove("opacity-0", "translate-y-2");
            }, index * 80);
        } else {
            link.classList.add("opacity-0", "translate-y-2");
        }
    });
}
navLinksMobile.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("opacity-0", "-translate-y-4");
        animateMobileLinks(false);

        setTimeout(() => {
            menu.classList.add("hidden");
        }, 300);

        btn.classList.remove("hamburger-active");
    });
});



// Tutup menu saat klik link
navLinksMobile.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
        btn.classList.remove("hamburger-active");
    });
});


// ===============================
// Navbar Scroll Effect
// ===============================
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add(
            "shadow-lg",
            "bg-white",
            "dark:bg-gray-900"
        );
        navbar.classList.remove(
            "bg-white/80",
            "dark:bg-gray-900/80"
        );
    } else {
        navbar.classList.remove(
            "shadow-lg",
            "bg-white",
            "dark:bg-gray-900"
        );
        navbar.classList.add(
            "bg-white/80",
            "dark:bg-gray-900/80"
        );
    }
});



// ===============================
// Scroll Spy (Active Menu)
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function activateMenu() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active-nav");
        if (link.dataset.section === current) {
            link.classList.add("active-nav");
        }
    });
}

window.addEventListener("scroll", activateMenu);


// ===============================
// Dark Mode Toggle (FIXED & STABLE)
// ===============================
const toggle = document.getElementById("darkToggle");
const html = document.documentElement;

// Load theme saat pertama kali
if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
}

toggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        html.classList.contains("dark") ? "dark" : "light"
    );
});


// ===============================
// Animation on Scroll (Intersection Observer)
// ===============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
}, observerOptions);

document.querySelectorAll(
    ".fade-in-up, .fade-in-left, .fade-in-right"
).forEach(el => observer.observe(el));
