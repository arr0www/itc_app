// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Video handling
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#hero video');
    if (video) {
        // Placeholder: Replace with actual video source
        // video.src = '{% static "videos/innovathink-promo.mp4" %}';
        video.addEventListener('error', () => {
            console.error('Video failed to load. Check source or browser compatibility.');
            video.style.display = 'none';
            const fallback = document.createElement('p');
            fallback.textContent = 'Video content is currently unavailable.';
            fallback.style.color = '#ff4444';
            fallback.style.textAlign = 'center';
            video.parentNode.insertBefore(fallback, video);
        });
    }
});

console.log('InnovaThink Corporation website loaded.');