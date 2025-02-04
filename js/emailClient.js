async function sendEmail() {
    // Get form data
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Validate input
    if (!email || !name || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Prepare the request payload
    const payload = {
        email: email,
        name: name,
        message: message,
    };

    try {
        // Send POST request to the API
        const response = await fetch('http://127.0.0.1:8081/api/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        // Handle the response
        if (response.ok) {
            const result = await response.text();
            document.getElementById('responseMessage').innerText = result;
        } else {
            const error = await response.text();
            document.getElementById('responseMessage').innerText = `Error: ${error}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'Failed to send email.';
    }
}