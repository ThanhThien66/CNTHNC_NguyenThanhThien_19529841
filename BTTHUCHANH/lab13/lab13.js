const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    res.status(400).send('Vui lòng chọn một file để tải lên');
  } else {
    res.send('File đã được tải lên thành công');
  }
});

app.listen(8080, () => {
  console.log('Server đã khởi động trên cổng 8080');
});