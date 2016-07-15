'use strict';

const fs = require('fs');

// const getHeader = require('./headerReader.js');

module.exports = exports = function(img){
  // const header = getHeader(img);
  const newImg = new Buffer(img);
  console.log('newImg slice before palette transform');
  console.log(newImg.slice(54,1077));
  paletteTransform(newImg,54,1077);
  console.log('newImg slice after palette transform');
  console.log(newImg.slice(54,1077));
  console.log('newImg from start');
  console.log(newImg);
};

function write(img) {
  fs.writeFile('./test/outputs/testOutput.bmp', img, function(err) {
    if(err) console.log(err);

    console.log('done');
  });
}


function paletteTransform(buf, startPixel, endPixel){
  for (let i = startPixel; i < endPixel; i += 4){
    buf.writeUInt32LE(0, i);
    console.log(i);
    console.log(endPixel);
    if(i == (endPixel - 3)){
      console.log('writing');
      write(buf);
    }
  }
}
