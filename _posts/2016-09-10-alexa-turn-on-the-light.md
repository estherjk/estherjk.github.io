---
layout: post
css:
- /css/post.css
title: Alexa, turn on the light
tags: iot particle alexa
excerpt: I'm having too much fun playing with my Amazon Tap and Particle Photon. My first two Alexa-Particle projects utilize two different types of Particle Cloud Functions. In my first project, I used Particle variables to ask Alexa for data using GET requests. In this project, I use Particle functions that can be called with POST requests. The Alexa skill then makes these requests to control a light&mdash;a NeoPixel ring to be more precise....
---

I'm having too much fun playing with my Amazon Tap and Particle Photon.

My first two Alexa-Particle projects utilize two different types of [Particle Cloud Functions](https://docs.particle.io/reference/firmware/photon/#cloud-functions). In my first [project](/projects/particle-weather-station-alexa/), I used [Particle variables](https://docs.particle.io/reference/firmware/photon/#particle-variable-) to ask Alexa for data using GET requests. In this project, I use [Particle functions](https://docs.particle.io/reference/firmware/photon/#particle-function-) that can be called with POST requests. The Alexa skill then makes these requests to control a light&mdash;a [NeoPixel ring](https://www.adafruit.com/products/2856) to be more precise.

To see how it works, check out the [source code](https://github.com/drejkim/particle-light-alexa) and video:

<div class="thumbnail">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/y9VvusYF1sg" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>
