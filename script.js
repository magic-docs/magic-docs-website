const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName")?.value?.trim();
    const email = document.getElementById("email")?.value?.trim();
    const interest = document.getElementById("interest")?.value?.trim();
    const message = document.getElementById("message")?.value?.trim();

    if (!fullName || !email || !interest || !message) {
      return;
    }

    const subject = encodeURIComponent(`Website contact from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nService interest: ${interest}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:k.s.magic.docs@gmail.com?subject=${subject}&body=${body}`;
  });
}
