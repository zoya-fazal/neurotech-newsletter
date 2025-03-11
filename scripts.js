document.addEventListener('DOMContentLoaded', function () {
    gsap.to('.hero h1', { opacity: 1, y: 0, duration: 1 });
    gsap.to('.hero p', { opacity: 1, y: 0, duration: 1, delay: 0.3 });
    gsap.to('.hero-buttons', { opacity: 1, y: 0, duration: 1, delay: 0.6 });
});
