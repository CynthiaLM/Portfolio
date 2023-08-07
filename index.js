const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        contactMessage.textContent = 'Fill out all fields';
    } else {
        emailjs.sendForm('service_h34bd57', 'template_8ydz0es', '#contact-form', 'sxusOKzSnorpsCmZi')
            .then(() => {
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Your message has been sent!';
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 3000);
            })
            .catch((error) => {
                alert('Oops! Something went wrong. Please try again.', error);
            });
    }
};

contactForm.addEventListener('submit', sendEmail);
