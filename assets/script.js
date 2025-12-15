// ===============================
// Mobile Menu
// ===============================
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const navLinksMobile = menu.querySelectorAll("a");
const navbar = document.querySelector("nav");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

navLinksMobile.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
    });
});

// ===============================
// Navbar Scroll Effect
// ===============================
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-md", "bg-white", "backdrop-blur-none");
        navbar.classList.remove("bg-white/80", "backdrop-blur-md");
    } else {
        navbar.classList.remove("shadow-md", "bg-white", "backdrop-blur-none");
        navbar.classList.add("bg-white/80", "backdrop-blur-md");
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
// Dark Mode Toggle (FIXED)
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
