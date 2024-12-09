// Text splitting functionality
(function() {
    function split(element) {
        const text = element.textContent;
        const words = text.split('').filter(word => word.length > 0);
        
        element.innerHTML = words.map((word, wordIndex) => {
            const chars = word.split('');
            const charSpans = chars.map((char, charIndex) => {
                return `<span class="char" data-char="${char}" style="--char-index: ${charIndex};">${char}</span>`;
            }).join('');
            return `<span class="word" data-word="${word}" style="--word-index: ${wordIndex};">${charSpans}</span>`;
        });
    }

    // Initialize splitting
    function init() {
        const elements = document.querySelectorAll('.splitting');
        elements.forEach(element => {
            split(element);
            element.classList.add('animated');
        });
    }

    // Run on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
