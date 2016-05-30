---
layout: post
css:
- /css/post.css
title: Real-time face detection using OpenCV, Node.js, and WebSockets
tags: web nodejs opencv
---

I've been meaning to play with <a href="http://opencv.org/">OpenCV</a> for quite some time now. To get my feet wet, I created a small demo using <a href="https://github.com/peterbraden/node-opencv">node-opencv</a>, which provides OpenCV bindings for Node.js, and WebSockets to capture video from a webcam and stream the processed frames to a web browser in real-time.

Here's a video of it in action:

<div class="video-container">
    <iframe src="//www.youtube.com/embed/v2SY0naPBFw" frameborder="0" allowfullscreen=""></iframe>
</div>

The source code is also available on <a href="https://github.com/drejkim/face-detection-node-opencv">GitHub</a>.
