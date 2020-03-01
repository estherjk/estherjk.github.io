#!/bin/bash

# See http://bergamini.org/computers/creating-favicon.ico-icon-files-with-imagemagick-convert.html

convert assets/img/brand-512.png -resize 16x16 favicon-16.png
convert assets/img/brand-512.png -resize 32x32 favicon-32.png
convert assets/img/brand-512.png -resize 64x64 favicon-64.png
convert assets/img/brand-512.png -resize 128x128 favicon-128.png
convert assets/img/brand-512.png -resize 152x152 favicon-152.png
convert assets/img/brand-512.png -resize 256x256 favicon-256.png
convert favicon-16.png favicon-32.png favicon-64.png favicon-128.png favicon-256.png -colors 256 favicon.ico

mv favicon.ico assets
mv favicon-152.png assets

rm favicon-*
