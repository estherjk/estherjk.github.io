---
layout: post
css:
- /css/post.css
title: Monitoring temperature and humidity using the Particle Photon
tags: iot particle
excerpt: I originally bought the Particle Photon for a Hackster Hardware Meetup, but I ended up not being able to attend at the last minute. However, I managed to play around with it last weekend and wow, I am impressed! What an awesome little board! For $19, you're not only up and running cheaply, but also literally in minutes....

---

## Background

I originally bought the [Particle](https://www.particle.io/) Photon for a [Hackster Hardware Meetup](http://www.meetup.com/Hackster-Hardware-Meetup-SJC/events/230482582/), but I ended up not being able to attend at the last minute. However, I managed to play around with it last weekend and wow, I am impressed! What an awesome little board! For $19, you're not only up and running cheaply, but also literally in minutes.

## The project

My first Particle project measures temperature and humidity using a [DHT11](https://www.adafruit.com/product/386) sensor and streams the data to [Ubidots](http://ubidots.com/), a cloud service for visualizing sensor data. There are Particle libraries available for [DHT11](https://github.com/russgrue/Adafruit_DHT_Library) and [Ubidots](https://github.com/ubidots/ubidots-particle), which made building this project even easier.

The end result is a realtime dashboard that measures the temperature and humidity in my house! Here's a screenshot:

<div class="thumbnail">
  <img src="https://raw.githubusercontent.com/drejkim/particle-weather-station/master/img/ubidots.png" alt="Screenshot of the Ubidots dashboard" class="img-responsive">
  <div class="caption text-center">
    <p>Screenshot of the Ubidots dashboard</p>
  </div>
</div>

## How it works

To see how it all works, check out the [source code](https://github.com/drejkim/particle-weather-station) and video:

<div class="thumbnail">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XKxeXtfn4MM" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>
