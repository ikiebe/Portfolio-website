// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

/* 

Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with your actual EmailJS service and template IDs.
Sign up for EmailJS at https://www.emailjs.com/ and create a new service and template. Note down your service ID and template ID to replace in the script.
Upload these three files (index.html, style.css, and script.js) to your web server.
Now, you have a beautiful Python-themed contact form that uses HTML, CSS, and JavaScript for the front-end, and EmailJS to send emails. When a user submits the form, the email will be sent using the EmailJS service you set up.


*/


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");
    
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    
      emailjs.sendForm("service_u7ynjp8", "template_r5h477f", this)
          .then(function () {
              form.reset();
              successMessage.classList.remove("hidden");
              errorMessage.classList.add("hidden");
          }, function (error) {
              console.error("Email send error:", error);
              errorMessage.classList.remove("hidden");
              successMessage.classList.add("hidden");
          });
    });
    });
    