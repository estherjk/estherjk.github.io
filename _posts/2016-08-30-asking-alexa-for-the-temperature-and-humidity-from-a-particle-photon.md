---
layout: post
css:
- /css/post.css
title: Asking Alexa for the temperature and humidity from a Particle Photon
tags: iot particle alexa
excerpt: Last week, I received an Amazon Tap, which was given to those who successfully published 3 Alexa skills within 1 month of attending a sponsored Alexa 101 hackathon. I even tweeted my excitement....

---

Last week, I received an [Amazon Tap](https://www.amazon.com/dp/B01BH83OOM), which was given to those who successfully published 3 Alexa skills within 1 month of attending a sponsored [Alexa 101 hackathon](http://www.meetup.com/Hackster-Hardware-Meetup-SJC/events/232329858/). I even tweeted my excitement!

<blockquote class="twitter-tweet tw-align-center" data-lang="en"><p lang="en" dir="ltr">Yay! Received my <a href="https://twitter.com/amazon">@amazon</a> Tap after publishing 3 <a href="https://twitter.com/hashtag/alexa?src=hash">#alexa</a> skills <a href="https://twitter.com/alexadevs">@alexadevs</a> <a href="https://twitter.com/hacksterio">@hacksterio</a> <a href="https://twitter.com/hashtag/sjchackathon?src=hash">#sjchackathon</a> <a href="https://t.co/r2REePGtJN">pic.twitter.com/r2REePGtJN</a></p>&mdash; Esther Jun Kim (@drejkim) <a href="https://twitter.com/drejkim/status/767841485370732545">August 22, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

A lot of the use cases floating around for Alexa are related to making a smarter home. My first step towards achieving this is asking Alexa what the current temperature and humidity is in my house. To do this, I used my original [particle-weather-station](/projects/particle-weather-station/) project.

The project still uses the [Particle](https://www.particle.io/) Photon and a [DHT11](https://www.adafruit.com/product/386) sensor. But, instead of visualizing the data on a dashboard, I can ask Alexa for the current temperature or humidity.

To see how it works, check out the [source code](https://github.com/drejkim/particle-weather-station-alexa) and video:

<div class="thumbnail">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/j5CpMcM5yRI" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>
