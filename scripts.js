document.addEventListener('DOMContentLoaded', function () {
    gsap.to('.hero h1', { opacity: 1, y: 0, duration: 1 });
    gsap.to('.hero p', { opacity: 1, y: 0, duration: 1, delay: 0.3 });
    gsap.to('.hero-buttons', { opacity: 1, y: 0, duration: 1, delay: 0.6 });
});

/* automatically takes to the latest post */
document.addEventListener("DOMContentLoaded", function () {
    // Select the "Latest Post" button
    const latestPostBtn = document.getElementById("latest-post-btn");

    // Find the first blog post link inside the post grid
    const latestPost = document.querySelector(".post a");

    if (latestPost) {
        latestPostBtn.href = latestPost.href; // Set button link to latest post
    }
});
