// Intersection Observer for animation triggers
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add splitting class first to ensure proper initialization
                entry.target.classList.add('splitting');
                // Add animated class after a small delay to trigger the animation
                requestAnimationFrame(() => {
                    entry.target.classList.add('animated');
                });
                // Optionally, stop observing after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '50px' // Start animation slightly before the element comes into view
    });

    // Observe all elements with words and chars classes
    document.querySelectorAll('.words.chars').forEach(element => {
        // Remove classes initially to prevent immediate animation
        element.classList.remove('splitting', 'animated');
        observer.observe(element);
    });
});
