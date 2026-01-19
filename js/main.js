document.addEventListener("submit", function (e) {
  if (e.target.classList.contains("contact-form")) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    e.target.reset();
  }
});
