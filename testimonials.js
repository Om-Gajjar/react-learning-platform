document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    };

    // Previous button functionality
    document.getElementById('prev-btn').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    // Next button functionality
    document.getElementById('next-btn').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Auto-play: cycle through slides every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);

    console.log("Testimonials page loaded");
});
