# Simple Bitmap Transforms with Node ![JVS](assets/siegward.gif)

## Overview
This project reads a bitmap from a file, performs a transform on that bitmap and writes a a new file with the new bitmap data.

It utilizes node buffers to handle binary data.  

From the command line, initialize the dependencies by typing in `npm install`

Run the file with node and pass in three parameters in order:
  - the location of the file that you want to transform
  - the destination of the file
  - the type of transform you want to perform, options are:
    - invert
    - grayscale
  i.e. ```bin/bitmapTransform test/resources/pika.bmp test/output/pikaGray.bmp grayscale```

## Tests
Compares the initial data against the intended transformation to confirm that the binary data has been changed correctly.

Run the command `gulp` to watch all files, then lint the files, and run all tests.

## Bonus Objectives

Can handle palette and non-palette bitmaps

Can handle multiple types of bitmaps (not just BM)

Handle LE and BE computers with a single if statement

Create a command line interface

Command line interface that can select the transform

Can handle various sized bitmaps

Created by `Jeff Gebhardt, Shane Henning & Vien Ly`
