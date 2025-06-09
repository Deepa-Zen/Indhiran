const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Set up multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Dummy classify function (replace with real ML model)
function classifyImage(buffer) {
    // Example logic — random result for demo
    const classes = ['cat', 'dog'];
    return classes[Math.floor(Math.random() * classes.length)];
}

// API endpoint
app.post('/classify', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const result = classifyImage(req.file.buffer);

    res.json({ result });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
