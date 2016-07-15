'use strict';

const os = require('os');
const fs = require('fs');

// var bitmap = fs.readFileSync('./assets/palette-bitmap.bmp');
// only working on BM at the moment :^)

module.exports = exports = function readHeader(img) {
  const endianness = os.endianness();

  const readFormat = {
    UInt8: 'readUInt8',
    UInt16: 'readUInt16' + endianness,
    UInt32: 'readUInt32' + endianness
  };

  const header = getHeaderInfo(img, readFormat);

  return header;
};

function getHeaderInfo(img, readFormat) {
  const header = {
    type: img.toString('ascii', 0, 2),
    size: img[readFormat.UInt32](2),
    startingPixelOffset: img[readFormat.UInt32](10),
    headerSize: 14 + img[readFormat.UInt32](14),
    width: img[readFormat.UInt32](18),
    height: img[readFormat.UInt32](22),
    colorDepth: img[readFormat.UInt32](28),
    imgSize: img[readFormat.UInt32](34),
    colorCount: img[readFormat.UInt32](46)
  };

  header.rowSize = Math.floor((header.colorDepth * header.width + 4) / 32) * 4;

  return header;
}
