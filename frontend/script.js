document.getElementById('classifyButton').addEventListener('click', async () => {
    const input = document.getElementById('imageInput');
    if (input.files.length === 0) {
        alert('Please select an image!');
        return;
    }

    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('http://localhost:5000/classify', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        document.getElementById('result').textContent = `Result: ${data.result}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error classifying image.';
    }
});
