  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const formMessage = document.getElementById('formMessage');
    // Simple email validation regex
    const emailPattern = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/;
    if (!name || !email || !message) {
      formMessage.style.color = '#ff6b6b';
      formMessage.textContent = 'Please fill in all required fields.';
      return;
    }
    if (!emailPattern.test(email)) {
      formMessage.style.color = '#ff6b6b';
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }
    // Simulate form submission success
    formMessage.style.color = '#90ee90';
    formMessage.textContent = 'Thank you for your message, we will get back to you soon!';
    // Reset form fields
    form.reset();
  });