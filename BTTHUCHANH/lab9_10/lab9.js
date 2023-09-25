const fs = require('fs');

const filePath = 'file.txt'; // Đường dẫn tới tệp tin cần mở

fs.open(filePath, 'r', (err, fd) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }

  const bufferSize = 1024;
  const buffer = Buffer.alloc(bufferSize);

  fs.read(fd, buffer, 0, bufferSize, 0, (err, bytesRead, buffer) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const fileContent = buffer.toString('utf8', 0, bytesRead);
    console.log('File đã đc mở:', fileContent);
  }); 
});