document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    
    if (form && submitButton) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            // Disable submit button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // Get form data
            const formData = new FormData(form);
            
            try {
                // Simulate form submission delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                // Show success message
                showToast('Message sent', "We'll get back to you as soon as possible.");
                
                // Reset form
                form.reset();
            } catch (error) {
                // Show error message
                showToast('Error', 'Failed to send message. Please try again.', true);
            } finally {
                // Re-enable submit button and restore text
                submitButton.disabled = false;
                submitButton.textContent = 'Send';
            }
        });
    }
});

// Simple toast notification function
function showToast(title, message, isError = false) {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${isError ? 'toast-error' : 'toast-success'}`;
    toast.innerHTML = `
        <h4>${title}</h4>
        <p>${message}</p>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('toast-fade-out');
        setTimeout(() => {
            toast.remove();
            if (toastContainer.children.length === 0) {
                toastContainer.remove();
            }
        }, 300);
    }, 3000);
}
