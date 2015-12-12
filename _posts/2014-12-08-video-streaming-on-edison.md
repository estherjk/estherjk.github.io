---
layout: post
title: Video streaming on Edison
tags: edison web nodejs
---

My <a href="/blog/#edison">earlier posts</a> on Edison have been building to this, and here is the result: video streaming to a browser from a webcam connected to Edison... all powered by a 9V battery. It's a relatively simple starter project, and one that I thought would be a nice introduction to Edison, especially if you have some experience with Linux and Node.js.

The setup involves connecting a UVC-compatible webcam and supplying external power to Edison (see this <a href="/blog/2014/11/06/connecting-a-usb-device-to-the-edison-mini-breakout-board/">post</a>). A Node.js web server runs on Edison, listens for the incoming video stream via HTTP (the video is encoded with <a href="https://www.ffmpeg.org/">ffmpeg</a>), and broadcasts the stream to all connected browsers via WebSockets. The video is then decoded on the client-side using <a href="https://github.com/phoboslab/jsmpeg">jsmpeg</a> and rendered onto a canvas element.

The setup instructions and source code are available on <a href="https://github.com/drejkim/edi-cam">GitHub</a>, and it is also on the <a href="https://communities.intel.com/docs/DOC-23530">Intel Edison Project Gallery</a>. Hopefully, this will help with getting a bit more comfortable tinkering on Edison.

Here's a video of it in action:

<div class="video-container">
    <iframe src="//www.youtube.com/embed/nVDL2-bFT3Y" frameborder="0" allowfullscreen=""></iframe>
</div>

One last thing... for those who have read my post on <a href="/blog/2014/12/02/real-time-face-detection-using-opencv-nodejs-and-websockets">real-time face detection using OpenCV and Node.js</a>, it might be a fun follow-up project to get this to run on Edison. You may need to lower the frame rate to 1fps (in <a href="https://github.com/drejkim/face-detection-node-opencv/blob/master/server/lib/routes/socket.js">socket.js</a>) to get it to run successfully. An even more fun follow-up would then be to figure out ways to increase the frame rate.
