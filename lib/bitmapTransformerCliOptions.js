'use strict';

const fs = require('fs');

// const getHeader = require('./headerReader.js');

module.exports = exports = function(img, outputLocation,transformType){
  console.log(outputLocation);
  console.log(transformType);
  // const header = getHeader(img);
  // const newImg = new Buffer(img);
  // console.log('newImg slice before palette transform');
  // console.log(newImg.slice(54,1077));
  paletteTransform(img, 54, 1077, outputLocation, transformType);
  // console.log('newImg slice after palette transform');
  // console.log(newImg.slice(54,1077));
  // console.log('newImg from start');
  // console.log(newImg);
};

function write(img, outputLocation) {
  fs.writeFileSync(outputLocation, img);
}


function paletteTransform(img, startPixel, endPixel, outputLocation, transformType){
  for (let i = startPixel; i < endPixel; i += 4){
    if(transformType.toLowerCase() === 'invert'){
      img[i] = 255 - img[i];
      img[i + 1] = 255 - img[i + 1];
      img[i + 2] = 255 - img[i + 2];
    } else if(transformType.toLowerCase() === 'grayscale')
    {
      var gray = (img[i] + img[i + 1] + img[i + 2]) / 3;
      img[i] = img[i + 1] = img[i + 2] = gray;
    } else{
      img.writeUInt32LE(0, i);
    }
  }
  write(img, outputLocation);
}
