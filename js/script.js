/* ============================ Typing Animation ======================*/

var typed = new Typed(".typing", {
    strings:["an Accountant",
    "a Project Manager",
    "a HR Manager",
    "a Problem Solver",
    "a Fierce Young Lady"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// Initialize Email.js with your credentials
emailjs.init("service_qnsges7");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(contactForm);

  // Send the email using Email.js
  emailjs
    .sendForm("service_qnsges7", "template_ax6yuvq", formData, "lfk0reaWA4_Au5Odp")
    .then(
      function () {
        alert("Form submitted successfully!");
        contactForm.reset();
      },
      function (error) {
        console.error("Form submission failed:", error);
        alert("Form submission failed. Please try again later.");
      }
    );
});