---
layout: post
title: TinyML Book
categories: [ai, embedded, books]
---

I've been slowly making my way through the [TinyML Book](https://tinymlbook.com/). It's been a nice introduction to machine learning on resource-constrained devices. Things are constantly evolving though, and I found that using the book and the [TensorFlow Lite Micro examples](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/lite/micro/examples) together is the best way to get started.

I also created a [GitHub repo](https://github.com/estherjk/tinyml-book) which contains my own copies of the examples. Each example is in its own folder. And each folder contains the Jupyter notebooks used for training, as well as the files needed to deploy to an edge device (in my case, the [Arduino Nano 33 BLE Sense](https://store.arduino.cc/usa/nano-33-ble-sense)). The most notable addition is a `Dockerfile` within each folder to run the notebooks in my own development environment. This has made it easier for me to experiment with and re-train models locally without having to worry about Google Colab sessions timing out.

Here's a screenshot of the Jupyter notebook used to train the `micro_speech` model:

<figure class="figure">
  <img class="img-fluid border rounded" src="https://media.githubusercontent.com/media/estherjk/estherjk.github.io/master/assets/img/tinyml/tinyml-micro-speech-training.png" alt="Training the micro_speech model">
  <figcaption class="figure-caption text-center">Training the micro_speech model</figcaption>
</figure>

And here's the resulting model deployed to a device:

<div class="mb-3">
  <blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">Go-stop wake word detection with <a href="https://twitter.com/arduino?ref_src=twsrc%5Etfw">@arduino</a> Nano 33 BLE Sense <a href="https://twitter.com/hashtag/tinyml?src=hash&amp;ref_src=twsrc%5Etfw">#tinyml</a> <a href="https://t.co/jKJj7DJsPs">https://t.co/jKJj7DJsPs</a> <a href="https://t.co/iGOkfva38R">pic.twitter.com/iGOkfva38R</a></p>&mdash; Esther Makes Tech (@esthermakestech) <a href="https://twitter.com/esthermakestech/status/1280671290769072128?ref_src=twsrc%5Etfw">July 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

Hope my learnings can help you start on your own journey with TinyML.