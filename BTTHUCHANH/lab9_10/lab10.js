// Tạo một đối tượng EventEmitter mới
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Tạo một file mới tên là test.txt
const fs = require('fs');
const file = fs.createWriteStream('file.txt');

// Đăng ký hàm callback cho sự kiện khi file được đóng
emitter.on('close', (filename) => {
  // In ra terminal nội dung là file được đóng, kèm theo tên file
  console.log(`File ${filename} đã được đóng`);
});

// Đóng file và phát sinh sự kiện khi file được đóng, truyền vào tên file làm tham số
file.end();
emitter.emit('close', 'file.txt');