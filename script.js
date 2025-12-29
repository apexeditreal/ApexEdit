(function () {
  emailjs.init(Hr1iNEwEOg4ZdkWUJ); // ← ovde ubaci public key
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    service_pir2oc8,   // Gmail service
    template_tcdfd7g,  // Email template
    this
  )
  .then(() => {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  })
  .catch(() => {
    status.innerHTML = "❌ Error sending message. Try again.";
  });
});
