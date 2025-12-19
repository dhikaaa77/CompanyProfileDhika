// ===============================
// Mobile Menu (Hamburger) - Revised
// ===============================
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const navLinksMobile = menu.querySelectorAll("a");
btn.addEventListener("click", () => {
    btn.classList.toggle("hamburger-active");

    if (btn.classList.contains("hamburger-active")) {
        menu.classList.remove("hidden");
        
        setTimeout(() => {
            menu.classList.remove("opacity-0", "-translate-y-4");
            animateMobileLinks(true);
        }, 10);

    } else {
        menu.classList.add("opacity-0", "-translate-y-4");
        animateMobileLinks(false);

        setTimeout(() => {
            menu.classList.add("hidden");
        }, 300);
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
    if (window.scrollY > 10) {
        navbar.classList.remove("bg-transparent");
        navbar.classList.add(
            "bg-white/80", 
            "dark:bg-gray-900/80",
            "backdrop-blur-md", 
            "shadow-md"
        );
    } else {
        navbar.classList.add("bg-transparent");
        navbar.classList.remove(
            "bg-white/80", 
            "dark:bg-gray-900/80",
            "backdrop-blur-md", 
            "shadow-md"
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
    rootMargin: "0px" 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
}, observerOptions);

document.querySelectorAll(
    ".fade-in-up, .fade-in-left, .fade-in-right"
).forEach(el => observer.observe(el));

// ===============================
// Contact Form Modal (FIXED LOGIC)
// ===============================
const contactForm = document.getElementById("contactForm");
const successModal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModal");

if (contactForm) {
    // Kita gunakan event 'submit' agar validasi 'required' pada HTML tetap jalan
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Mencegah reload halaman

        // Munculkan Modal
        successModal.classList.remove("hidden");
        successModal.classList.add("flex");
        
        // Tambahkan sedikit delay animasi jika ada di CSS
        successModal.querySelector('div').classList.add('animate-bounce-in'); 

        // Reset isi form setelah dikirim
        contactForm.reset();
    });
}

// Logika menutup modal dan pindah halaman
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        successModal.classList.add("hidden");
        successModal.classList.remove("flex");

        // Redirect ke index.html (Beranda)
        window.location.href = "index.html";
    });
}

// Tutup modal saat user klik di luar kotak putih (overlay)
successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
        successModal.classList.add("hidden");
        successModal.classList.remove("flex");
        window.location.href = "index.html";
    }
});




