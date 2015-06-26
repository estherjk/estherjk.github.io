---
layout: post
title: LediMote - Remote-controlled LEDs using Intel Edison and Node.js
tags: edison nodejs ios
excerpt: I had some more fun with LEDs and Edison, but this time, I created a JavaScript (Node.js) example....
---

I had some more fun with LEDs and Edison, but this time, I created a JavaScript (Node.js) example.

In this demo, 4 LEDs are controlled remotely from a web page. The [MRAA](https://github.com/intel-iot-devkit/mraa) library is used to interface with the LEDs. [Socket.IO](http://socket.io) is then used to communicate the state of the switches from the web page to the server (Edison). An [iOS client](https://github.com/drejkim/LediMoteiOS) is also available.

To see it in action, check out the video:

<div class="video-container">
    <iframe src="https://www.youtube.com/embed/i61g4aYkrI0" frameborder="0" allowfullscreen=""></iframe>
</div>

For more details on how to set this up, please take a look on [GitHub](https://github.com/drejkim/LediMote).
