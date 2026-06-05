const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const subject = encodeURIComponent(`Intro request: ${data.get("name") || "TRL Bridge"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
      `Email: ${data.get("email") || ""}\n` +
      `Role: ${data.get("role") || ""}\n\n` +
      `${data.get("message") || ""}`
    );

    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  });
}
