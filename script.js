document.addEventListener('DOMContentLoaded', () => {
    // Fade in sections on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(sec => {
        sec.style.opacity = 0;
        sec.style.transform = 'translateY(30px)';
        sec.style.transition = 'all 0.8s ease';
        observer.observe(sec);
    });

    // Contact form placeholder
    document.getElementById('contact-form').addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you! Your message has been sent. (Live email coming soon!)');
    });
});