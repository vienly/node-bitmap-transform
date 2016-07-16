const expect = require('chai').expect;
// const os = require('os');
const fs = require('fs');

const headerReader = require('../lib/headerReader.js');
// const bitmapTransformer = require('../lib/bitmapTransformer.js');


describe('header reader', function(){
  it('should read the header and output the images properties', function(){
    var image = fs.readFileSync('./test/resources/palette-bitmap.bmp');
    var header = headerReader(image);

    expect(header.type).to.eql('BM');
    expect(header.size).to.eql(11078);
    expect(header.startingPixelOffset).to.eql(1078);
    expect(header.headerSize).to.eql(54);
    expect(header.width).to.eql(100);
    expect(header.height).to.eql(100);
    expect(header.colorDepth).to.eql(8);
    expect(header.imgSize).to.eql(10000);
    expect(header.colorCount).to.eql(256);
    expect(header.rowSize).to.eql(100);
  });
});

describe('bitmap transform', function(){
  it('should transform the image by changing the value of specified bytes corresponding to pixels', function(){
    expect(true).to.eql(true);
  });
});
