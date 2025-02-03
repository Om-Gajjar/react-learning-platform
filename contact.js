document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Function to display error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add("error");
        const errorMessage = formGroup.querySelector(".error-message");
        errorMessage.textContent = message;
    }

    // Function to clear error message
    function clearError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove("error");
        const errorMessage = formGroup.querySelector(".error-message");
        errorMessage.textContent = "";
    }

    // Basic email validation regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;

        // Validate Name
        const nameInput = document.getElementById("name");
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required");
            valid = false;
        } else {
            clearError(nameInput);
        }

        // Validate Email
        const emailInput = document.getElementById("email");
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required");
            valid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Enter a valid email");
            valid = false;
        } else {
            clearError(emailInput);
        }

        // Validate Subject
        const subjectInput = document.getElementById("subject");
        if (subjectInput.value.trim() === "") {
            showError(subjectInput, "Subject is required");
            valid = false;
        } else {
            clearError(subjectInput);
        }

        // Validate Message
        const messageInput = document.getElementById("message");
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Message cannot be empty");
            valid = false;
        } else {
            clearError(messageInput);
        }

        if (valid) {
            alert("Thank you for contacting us! We'll get back to you soon.");
            form.reset();
        }
    });

    console.log("Unique contact page loaded");
});
