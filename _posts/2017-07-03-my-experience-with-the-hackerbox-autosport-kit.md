---
layout: post
css:
- /css/post.css
title: My experience with the HackerBox Autosport kit
tags: hackerbox arduino nodemcu iot blynk
excerpt: HackerBoxes is a DIY electronics monthly subscription service ($44 per month), where the contents of each monthly box are a surprise. It's also possible to purchase past boxes for a slightly higher fee ($59 per box), which is great if you want to try out a kit where its contents are already known. That's what I opted to do when I purchased the Autosport kit. And overall, I thought it was really great...
---

## Introduction

[HackerBoxes](https://hackerboxes.com/) is a DIY electronics monthly subscription service ($44 per month), where the contents of each monthly box are a surprise. It's also possible to purchase past boxes for a slightly higher fee ($59 per box), which is great if you want to try out a kit where its contents are already known. That's what I opted to do when I purchased the Autosport kit. And overall, I thought it was really great!

## What comes in the box

<div class="thumbnail">
  <img src="https://pbs.twimg.com/media/DDhtiQ6WAAA5fOb.jpg:large" alt="Contents of the HackerBox Autosport kit" class="img-responsive">
  <div class="caption text-center">
    <p>Contents of the HackerBox Autosport kit</p>
  </div>
</div>

The box includes:

* 2WD Car Chassis Kit
* NodeMCU WiFi Processor Module
* Motor Shield for NodeMCU
* Jumper Block for Motor Shield
* Battery Box (4 x AA)
* HC-SR04 Ultrasonic Ranging Sensor
* TCRT5000 IR Reflectivity Sensors
* DuPont female-female jumpers 10cm
* Two Red Laser Modules
* Mini-ELM327 on-board diagnostics (OBD)

## Hacking away

It also comes with an [official guide](https://www.instructables.com/id/HackerBoxes-0013-Autosport/) to get started, and it's focused on building out the car chassis, setting up NodeCMU with Arduino, and using Blynk to control the car remotely.

When it comes to using the sensors, the guide becomes progressively less clear. With the ultrasonic range sensor, it does provide a sample program that reads out the distance to the object the sensor is detecting. It also provides some pseudo-code to help you build out a collision avoidance algorithm. But, it's up to you to figure out how to actually implement it and how to integrate it into the Blynk app if you choose to do so.

For the IR sensors, the guide does give a little hint... that they're primarily used for line-following robots. But other than that, you're on your own. It was a good challenge to figure out how to use the IR sensors though. I had to determine what kind of data they provide, how they should be configured, and so on. And after a lot of trial and error, I ended up with a pretty decent line-following car (although it didn't do that well on sharp turns).

While I was able to implement the IR sensors with a lot of gusto, I couldn't muster up the same creative flow with the laser modules. I ended up not using them. Sad. Beyond just being decorative items, I couldn't think of a good way to use them! If anyone has ideas, please comment. I'd be happy to integrate them in a future update.

Lastly, the kit also comes with a OBD dongle, which you can use on a real car. This is a very handy tool to have for car diagnostics, so I'm glad I have one now!

## Car in action

For those who are interested in seeing my code, check out my [GitHub](https://github.com/drejkim/HackerBoxCar).

And, here's the video of my car in action:

<div class="thumbnail">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/K7Yosm08pu0" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>

## Final takeaways

Overall, I had a lot of fun with the kit and learned a lot. I am strongly considering subscribing, so I can be surprised with the next one!