/* ============================ Typing Animation ======================*/

var typed = new Typed(".typing", {
    strings:["an Accountant",
    "a Project Manager",
    "a HR Manager",
    "a Problem Solver",
    "a Fierce Young Lady"],
    typeSpeed:150,
    BackSpeed:60,
    loop:true
});



emailjs.init('lfk0reaWA4_Au5Odp'); // Replace with your User ID from EmailJS

function sendEmail() {
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    emailjs.send('service_qnsges7', 'template_ax6yuvq', {
        to_email: to,
        subject: subject,
        message: message
    }).then(function(response) {
        alert("Email sent successfully:", response);
    }, function(error) {
        alert("Email sending failed:", error);
    });
}
