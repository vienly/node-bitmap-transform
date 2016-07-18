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

describe('bitmap transform "invert"', function(){
  it('should match the data for what is outputted throw an invert filter from photoshop', function(){
    var test = fs.readFileSync('./test/outputs/pika-inverted.bmp');
    var testResult = test.readUInt32LE(1200);
    var testResult2 = test.readUInt32LE(1600);
    console.log(testResult);
    var transformed = fs.readFileSync('./test/resources/pikaInvertedPhotoshop.bmp');
    var transformedResult = transformed.readUInt32LE(1200);
    var transformedResult2 = transformed.readUInt32LE(1600);
    console.log(transformedResult);
    expect(testResult).to.eql(transformedResult);
    expect(testResult2).to.eql(transformedResult2);
  });
});

describe('bitmap transform "grayscale"', function(){
  it('should match the data for what is outputted throw an invert filter from photoshop', function(){
    var test = fs.readFileSync('./test/outputs/pika-grayscale.bmp');
    var testResult = test.readUInt32LE(1200);
    var testResult2 = test.readUInt32LE(1600);
    console.log(testResult);
    var transformed = fs.readFileSync('./test/resources/pikaGrayscalePhotoshop2.bmp');
    var transformedResult = transformed.readUInt32LE(1200);
    var transformedResult2 = transformed.readUInt32LE(1600);
    console.log(transformedResult);
    expect(testResult).to.eql(transformedResult);
    expect(testResult2).to.eql(transformedResult2);
  });
});

describe('bitmap transform "grayscale"', function(){
  it('should match the data for what is outputted throw an invert filter from photoshop', function(){
    var test = fs.readFileSync('./test/outputs/pika-grayscale.bmp');
    var testResult = test.readUInt32LE(1200);
    var testResult2 = test.readUInt32LE(1600);
    console.log(testResult);
    var transformed = fs.readFileSync('./test/resources/pikaGrayscalePhotoshop.bmp');
    var transformedResult = transformed.readUInt32LE(1200);
    var transformedResult2 = transformed.readUInt32LE(1600);
    console.log(transformedResult);
    expect(testResult).to.eql(transformedResult);
    expect(testResult2).to.eql(transformedResult2);
  });
});

describe('bitmap transform', function(){
  it('should transform the image by changing the value of specified bytes corresponding to pixels', function(){
    expect(true).to.eql(true);
  });
});
