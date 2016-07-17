'use strict';

const fs = require('fs');

const getHeader = require('./headerReader.js');

module.exports = exports = function(img, transformType){
  const header = getHeader(img);
  // var transformedImg;
  console.log(header);

  // palette transform
  // pixelSize = 4 is based on palette's pixel size and not the actual bitmap pixelsize
  if(header.startingPixelOffset - header.headerSize >= 1) {
    console.log('palette transforming');
    performTransform(img, 4, header.headerSize, header.startingPixelOffset - 1);
  } else {
    console.log('non-palette transforming');

    for (var row = 0; row < header.height; row++) {
      var pixelI = row * header.rowSize + header.startingPixelOffset;
      var pixelF = pixelI + header.rowSize;
      performTransform(img, header.pixelSize, pixelI, pixelF);
    }
  }
};

function write(img) {
  console.log('writing');
  fs.writeFileSync('./test/outputs/testOutput-non-palette.bmp', img);
}

function performTransform(img, pixelSize, startPixel, endPixel){
  for (let i = startPixel; i < endPixel; i += pixelSize){
    console.log(startPixel + ' : ' + endPixel);
    img[i] = 255 - img[i];
    img[i + 1] = 255 - img[i + 1];
    img[i + 2] = 255 - img[i + 2];
  }
  write(img);
}

function invertPixel()
