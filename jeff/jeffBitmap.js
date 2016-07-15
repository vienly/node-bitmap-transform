const fs = require('fs');

fs.readFile('./palette-bitmap.bmp', function (err, data) {
  if (err) return err;
  console.log('Byte length: ' + Buffer.byteLength(data));

  console.log('Complete File: ');
  console.log(data);

  var commonHeader = data.slice(0, 13);
  console.log('Common Header: ');
  console.log(commonHeader);

  var bitmapHeader = data.slice(14, 53);
  console.log('Bitmap Header: ');
  console.log(bitmapHeader);

  var pallete = data.slice(54, 1077);
  console.log('Palette: ');
  console.log(pallete);

  fs.writeFile('./output.txt', data, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log('The file was written!');
  });
});
