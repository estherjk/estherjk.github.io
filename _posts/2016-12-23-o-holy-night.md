---
layout: post
css:
- /css/post.css
title: O Holy Night
tags: particle ios
excerpt: Heading into Christmas, I wanted to work on a project that commemorates what the day is all about... the birth of Jesus Christ. This project uses the Particle Photon, NeoPixels, a custom iOS app, and some paper cutouts to recreate the Nativity Scene....
---

Heading into Christmas, I wanted to work on a project that commemorates what the day is all about... the birth of Jesus Christ. This project uses the [Particle Photon](https://store.particle.io/), [NeoPixels](https://www.adafruit.com/product/1138), a custom iOS app, and some paper cutouts to recreate the Nativity Scene.

Here's a picture of the final setup, all lit up:

<div class="thumbnail">
  <img src="https://raw.githubusercontent.com/drejkim/o-holy-night/master/img/o-holy-night-lit.png" class="img-responsive" alt="O Holy Night">
</div>

To create the Nativity Scene, the NeoPixels were cut, wired, and arranged on a foam board. Paper templates were created in Illustrator after finding silhouettes of the star, angels, and the manger scene online; they were then cut and placed on top of the foam board. Finally, the NeoPixels were wired to the Particle Photon, which exposes functions to control each set of lights, namely the sky (blue), the manger (orange), and the star and angels (white). A custom iOS app was created, so that a user-friendly UI could be used to control the lights.

Details on how to set everything up is available on [GitHub](https://github.com/drejkim/o-holy-night).

And this video shows all of the components in action... and choreographed to "O Holy Night":

<div class="thumbnail">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/TUcphhJK0uM" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>

Merry Christmas!
