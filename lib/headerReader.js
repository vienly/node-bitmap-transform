'use strict';

const os = require('os');
// const fs = require('fs');

module.exports = exports = function readHeader(img) {
  const endianness = os.endianness();

  const readFormat = {
    UInt8: 'readUInt8',
    UInt16: 'readUInt16' + endianness,
    UInt32: 'readUInt32' + endianness
  };

  const bmpType = img.toString('ascii', 0, 2);
  console.log(bmpType);

  var header;

  if (bmpType === 'BM') {
    header = getBMHeaderInfo(img, readFormat);
  } else if (bmpType === 'BA') {
    header = getBAHeaderInfo(img, readFormat);
  }
  return header;
};

function getBMHeaderInfo(img, readFormat) {
  const header = {
    type: 'BM',
    size: img[readFormat.UInt32](2),
    startingPixelOffset: img[readFormat.UInt32](10),
    headerSize: 14 + img[readFormat.UInt32](14),
    width: img[readFormat.UInt32](18),
    height: img[readFormat.UInt32](22),
    colorDepth: img[readFormat.UInt16](28),
    imgSize: img[readFormat.UInt32](34),
    colorCount: img[readFormat.UInt32](46)
  };

  header.rowSize = Math.floor((header.colorDepth * header.width + 4) / 32) * 4;
  // pixelsize is used to brute transform non-palette bmp
  header.pixelSize = header.colorDepth / 8;


  return header;
}

function getBAHeaderInfo(img, readFormat) {
  const header = {
    type: 'BA',
    headerSize: img[readFormat.UInt32](2),
    startingPixelOffset: img[readFormat.UInt32](24)
  };

  return header;
}
