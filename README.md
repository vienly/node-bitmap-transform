# Simple Bitmap Transforms with Node ![JVS](assets/siegward.gif)
:)

# Lab 04: Bitmap Transformer (7/14/16)

## Overview
This project reads a bitmap from a file, performs a transform on that bitmap and writes a a new file with the new bitmap data.

It utilizes node buffers to handle binary data.  

From the command line, initialize the dependencies by typing in ```npm install```

Run the file with node and pass in three parameters:
  - the location of the file that you want to transform
  - the destination of the file
  - the type of transform you want to perform, options are:
    - invert
    - grayscale
    - if no specification, it will default to black
  i.e. ```node bin/bitmapTransform test/resources/pika.bmp test/output/pikaGray.bmp grayscale```



## Tests
Compares the initial data against the intended transformation to confirm that the binary data has been changed correctly.
