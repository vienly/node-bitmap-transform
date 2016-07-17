'use strict';

const fs = require('fs');

const getHeader = require('./headerReader.js');

module.exports = exports = function(img, outputFile, transformType){
  const header = getHeader(img);
  console.log(header);

  // palette transform
  // pixelSize = 4 is based on palette's pixel size and not the actual bitmap pixelsize
  if(header.startingPixelOffset - header.headerSize >= 1 || header.type === 'BA') {
    console.log('palette transforming');
    performTransform(img, outputFile, 4, header.headerSize, header.startingPixelOffset - 1, transformType);
  // non-palette transform
  } else {
    console.log('non-palette transforming');
    for (var row = 0; row < header.height; row++) {
      var pixelI = row * header.rowSize + header.startingPixelOffset;
      var pixelF = pixelI + header.rowSize;
      performTransform(img, outputFile, header.pixelSize, pixelI, pixelF, transformType);
    }
  }
};

function write(img, outputFile) {
  console.log('writing to ' + outputFile);
  fs.writeFileSync(outputFile, img);
}

function performTransform(img, outputFile, pixelSize, startPixel, endPixel, transformType) {
  console.log('transform type: ' + transformType);
  for (let i = startPixel; i < endPixel; i += pixelSize) {
    if (transformType.toLowerCase() === 'invert') {
      invertPixel(img.slice(i, i + pixelSize));
    } else if (transformType.toLowerCase() === 'grayscale') {
      convertGrayscale(img.slice(i, i + pixelSize));
    }
  }
  write(img, outputFile);
}

// todo: account for 8bit and 16bit pixels, maybe alpha transform
function invertPixel(pixel) {
  if(Buffer.byteLength(pixel) === 3 || Buffer.byteLength(pixel) === 4) {
    pixel[0] = 255 - pixel[0];
    pixel[1] = 255 - pixel[1];
    pixel[2] = 255 - pixel[2];
  }
}

function convertGrayscale(pixel) {
  if(Buffer.byteLength(pixel) === 3 || Buffer.byteLength(pixel) === 4) {
    var grayscaleValue = (pixel[0] + pixel[1] + pixel[2]) / 3;
    pixel[0] = pixel[1] = pixel[2] = grayscaleValue;
  }
}
