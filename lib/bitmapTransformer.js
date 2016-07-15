'use strict';

const fs = require('fs');

// const getHeader = require('./headerReader.js');

module.exports = exports = function(img){
  // const header = getHeader(img);
  // const newImg = new Buffer(img);
  // console.log('newImg slice before palette transform');
  // console.log(newImg.slice(54,1077));
  paletteTransform(img,54,1077);
  // console.log('newImg slice after palette transform');
  // console.log(newImg.slice(54,1077));
  // console.log('newImg from start');
  // console.log(newImg);
};

function write(img) {
  fs.writeFileSync('./test/outputs/testOutput.bmp', img);
}


function paletteTransform(img, startPixel, endPixel){
  for (let i = startPixel; i < endPixel; i += 4){
    img.writeUInt32LE(0, i);
    // console.log(i);
    // if(i == (endPixel - 3)){
    //   console.log('writing');
    //   write(buf);
    // }
  }
  write(img);
}
