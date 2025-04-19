const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Giả lập cơ sở dữ liệu từ điển
const dictionary = {
  "xin chào": {
    meaning: "Lời chào hỏi",
    pronunciation: "xin-chào",
    partOfSpeech: "cụm từ",
    nom: "𠬠𠬠",
    examples: ["Xin chào các bạn!", "Xin chào buổi sáng."]
  },
  "tạm biệt": {
    meaning: "Lời chào khi rời đi",
    pronunciation: "tam-biet",
    partOfSpeech: "cụm từ",
    nom: "𠄩別",
    examples: ["Tạm biệt nhé!", "Chào tạm biệt thầy cô."]
  }
};

// API GET
app.get('/api/dictionary', (req, res) => {
  const word = req.query.word;
  const result = dictionary[word];
  if (result) {
    res.json({ word, meaning: result });
  } else {
    res.status(404).json({ message: "Không tìm thấy từ." });
  }
});

// Cho Vercel biết cần export `app`
module.exports = app;
