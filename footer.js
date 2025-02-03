document.addEventListener("DOMContentLoaded", function () {
    // Handle Newsletter Form Submission
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for subscribing!");
            newsletterForm.reset();
        });
    }

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop");
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    console.log("Footer loaded");
});
