---
layout: post
css:
- /css/post.css
title: LediMote - Remote-controlled LEDs using Intel Edison and Node.js
tags: edison nodejs ios android
excerpt: I had some more fun with LEDs and Edison, but this time, I created a JavaScript (Node.js) example....
---

I had some more fun with LEDs and Edison, but this time, I created a JavaScript (Node.js) example.

In this demo, 4 LEDs are controlled remotely from a web page. The [MRAA](https://github.com/intel-iot-devkit/mraa) library is used to interface with the LEDs. [Socket.IO](http://socket.io) is then used to communicate the state of the switches from the web page to the server (Edison).

I also created [iOS](https://github.com/drejkim/LediMoteiOS) and [Android](https://github.com/drejkim/LediMoteAndroid) clients to show that native mobile apps can be used to control the LEDs. To do this, I used the Socket.IO [iOS](http://socket.io/blog/socket-io-on-ios/) and [Android](http://socket.io/blog/native-socket-io-and-android/) libraries, which were both straightforward to integrate.

To see the web and iOS clients in action, check out the video. Unfortunately, the video was made before I finished the Android app, but it behaves similarly to the others.

<div class="embed-responsive embed-responsive-16by9 extra-margin-20">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/i61g4aYkrI0" frameborder="0" allowfullscreen=""></iframe>
</div>

For more details on how to set this up, please take a look on [GitHub](https://github.com/drejkim/LediMote).
