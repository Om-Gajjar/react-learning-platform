document.addEventListener("DOMContentLoaded", function () {
    // Optional: Add scroll reveal animations to sections
    const sections = document.querySelectorAll('.content-section');
    const revealOptions = {
        threshold: 0.2
    };

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealSection, revealOptions);
    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    console.log("About page loaded");
});
