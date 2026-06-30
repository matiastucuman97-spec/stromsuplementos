document.addEventListener(“DOMContentLoaded”, () => {

    const header = document.querySelector(".header");
    const menuButton = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    const updateHeader = () => {
        header.style.boxShadow = window.scrollY > 30
            ? "0 8px 24px rgba(0,0,0,.08)"
            : "0 2px 20px rgba(0,0,0,.05)";
    };

    window.addEventListener("scroll", updateHeader);
    updateHeader();

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            navLinks.classList.toggle("mobile-open");
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(
        ".identity article, .category-card, .product-card, .components"
    ).forEach(el => observer.observe(el));

});
