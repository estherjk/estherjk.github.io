---
layout: post
css:
- /css/post.css
title: Using WebSockets for developing multi-screen user experiences
tags: nodejs ux web angularjs
---

Although I can't give too much detail about my work while I was at Samsung, there are a few tidbits that I can share now that some aspects have been made public. One key area that Samsung has focused on is multi-screen user experiences, where devices like your smartphone and TV can connect and communicate with each other. The <a href="http://multiscreen.samsung.com">Samsung MultiScreen SDK</a> was released to help developers create such experiences. Check out this video to learn more about the SDK's capabilities:

<div class="video-container">
    <iframe src="//www.youtube.com/embed/4JsE5nrAzoQ" frameborder="0" allowfullscreen=""></iframe>
</div>

While our team didn't work on the MultiScreen SDK, we certainly built multi-screen prototypes. And what's common between the SDK and one of the prototypes that I built was the use of <a href="http://en.wikipedia.org/wiki/WebSocket">WebSockets</a>, which is a persistent, two-way channel between a client and server for exchanging data at any time. Since multi-screen experiences require quick data exchanges, especially when two clients need to interact with one another in realtime, using HTTP requests / responses or XHR polling can cause unwanted latency.

For <a href="http://nodejs.org">Node.js</a>, there is a really nice package called <a href="http://socket.io">socket.io</a> that enables WebSockets. To illustrate its use, I've created a small demo, which you can see in action <a href="http://multi-screen-demo.herokuapp.com">here</a> (<a href="https://github.com/drejkim/multi-screen-demo">source</a>). In just a few lines of code, it's possible to have a seamless, realtime experience between your connected devices. Hopefully, this demo will inspire you to come up with some of your own multi-screen scenarios.
