const fs = require('fs');

const filePath = 'gggg/file.txt'; // Đường dẫn tới tệp tin cần đóng

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
    console.log('File content before closing:', fileContent);

    fs.close(fd, (err) => {
      if (err) {
        console.error('Error closing file:', err);
        return;
      }
      
      console.log('File closed');
      
      // Đoạn mã này sẽ được thực hiện sau khi tệp tin đã được đóng
      console.log('File content after closing:', fileContent);
    });
  });
});