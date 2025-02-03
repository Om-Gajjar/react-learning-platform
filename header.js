document.addEventListener("DOMContentLoaded", function () {
    // Get the current page name from URL
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        // Compare the href value with the current page name
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Hamburger menu toggle for mobile devices
    const hamburger = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".nav-links");
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navLinksContainer.classList.toggle("active");
            hamburger.classList.toggle("open");
        });
    }

});
