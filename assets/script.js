const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
const navLinks = menu.querySelectorAll('a');
const navbar = document.querySelector('nav');

// Toggle menu mobile
btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Tutup menu saat link diklik (mobile UX)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Efek navbar saat scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {

        // Navbar solid
        navbar.classList.add(
            'shadow-md',
            'bg-white',
            'backdrop-blur-none'
        );

        navbar.classList.remove(
            'bg-white/80',
            'backdrop-blur-md'
        );

    } else {

        // Navbar transparan kembali
        navbar.classList.remove(
            'shadow-md',
            'bg-white',
            'backdrop-blur-none'
        );

        navbar.classList.add(
            'bg-white/80',
            'backdrop-blur-md'
        );
    }

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function activateMenu() {
        let current = "";

        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-nav");
            if (link.getAttribute("data-section") === current) {
                link.classList.add("active-nav");
            }
        });
    }

    window.addEventListener("scroll", activateMenu);

    const toggle = document.getElementById("darkToggle");
    const html = document.documentElement;

    toggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        localStorage.setItem("theme",
            html.classList.contains("dark") ? "dark" : "light"
        );
    });

    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
    }

});




