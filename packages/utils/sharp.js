const sharp = require('sharp');
const file = 'original.png';

sharp(file)
  .resize(80, 80)
  .toFile('rezize.png', (err, info) => { 
    console.log(info)
  });


sharp(file)
  .grayscale()
  .toFile('gray.png', (err, info) => { 
    console.log(info)
  });