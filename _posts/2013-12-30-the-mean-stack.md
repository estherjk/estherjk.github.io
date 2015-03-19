---
layout: post
title: The MEAN stack
tags: nodejs web angularjs
---

My new favorite web application development platform is the MEAN stack: <a href="http://www.mongodb.org" target="_blank">MongoDB</a>, <a href="http://expressjs.com" target="_blank">Express</a>, <a href="http://angularjs.org" target="_blank">AngularJS</a>, and <a href="http://nodejs.org" target="_blank">Node.js</a>.

I unknowingly came across it when I began working on a web application prototype at work. While I was familiar with MongoDB (our team used it in a previous prototype), I was really itching to learn Node.js... so I took the plunge and began poring over tutorials. Many of the examples repeatedly mentioned Express as a handy Node.js web application framework, so it was an easy decision to include it as part of my toolset. My biggest challenge, however, was organizing the client-side code. I have used Backbone.js before, but I wasn't fully satisfied with it. A colleague of mine then mentioned an emerging client-side MVC framework from Google called AngularJS and encouraged me to check it out. The rest, I guess you can say, is history.

Well, what's so great about MEAN? The key advantage is using one language, JavaScript, across the whole stack. First, it's a lot easier to move back and forth between server-side and client-side code since they're written in the same language. Second, with MongoDB, the data is in a JSON document structure, which makes passing data between server and client trivial. By using the same language and having a consistent data structure across the whole stack, the web development process is a lot more seamless.

To help others get started with MEAN, I have created a Vagrant environment that can be found <a href="https://github.com/drejkim/mean-vagrant" target="_blank">here</a>.

Also, if you are interested in learning more, here's a video that provides a nice introduction:

<div class="video-container">
    <iframe src="//www.youtube.com/embed/1Sy3vWJ1N2U" frameborder="0" allowfullscreen=""></iframe>
</div>
