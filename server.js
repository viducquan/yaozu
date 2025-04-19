const express = require('express');
const app = express();
const port = 3000;

// Import dữ liệu từ điển từ file dictionary.js
const dictionary = require('./api/dictionary');

// API trả về nghĩa của từ
app.get('/api/dictionary', (req, res) => {
    const word = req.query.word.toLowerCase();
    if (dictionary[word]) {
        res.json({ word, meaning: dictionary[word] });
    } else {
        res.json({ message: "Không tìm thấy từ." });
    }
});

// Cung cấp file HTML frontend
app.use(express.static('public'));

// Khởi động server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
