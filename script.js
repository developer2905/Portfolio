document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Please fill out all fields.');
        } else {
            alert('Message sent successfully!');
            form.reset();
        }
    });

    // Smooth scrolling with offset for fixed header
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header

            if (target) {
                const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        });
    });
});
