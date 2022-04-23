// fs  = file system
const fs = require('fs');
const fsPromises = require('fs').promises;

const readAsync = async (path) => {
  console.log(path);
  const file = await fsPromises.readFile(path, { encoding: 'utf-8'});
  console.log(file);
}

function read(path, callback) {
  fs.readFile(path, function (err, data) {
    if (err) {
      throw err
    };
    callback(data.toString());
  });
}

function write(path, text, callback) {
  fs.writeFile(path, text, function (err) {
    if (err) {
      console.log('I couldnt write file. ' + err);
    } else {
      callback('Successfully wrote on file');
    }
  })
}

function deleteFile(path, callback) {
  fs.unlink(path, function (err) {
    if (err) {
      console.log('failed while removing file. '+err);
    } else {
      callback('File successfully removed');
    }
  });
}
const filePath = `${__dirname}/file.txt`;
// read(filePath, console.log);
// write(filePath, "New file: Gustavo y Claudia for ever", console.log);
// read(filePath, console.log);
// deleteFile(filePath, console.log);
readAsync(filePath);