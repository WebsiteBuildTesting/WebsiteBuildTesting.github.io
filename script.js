document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo img");
  const phoneNumberLink = document.querySelector(".contact-info a");

  // Redirect logo click to phone dialer
  logo.addEventListener("click", function() {
    window.location.href = "tel:+919740405218";
  });

  // Redirect phone number click to phone dialer
  phoneNumberLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "tel:+919740405218";
  });
});
