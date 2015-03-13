---
layout: post
title: Migrating my website to Jekyll
categories: web
---

This website was originally developed on the MEAN stack (for those of you who aren't familiar with it, check out this <a href="/blog/2013/12/30/the-mean-stack">post</a>). While MEAN is really great for creating data-driven websites, it's definitely overkill for primarily static websites... like mine. The only dynamic content I had were the blog posts. However, I'd argue that blog posts aren't necessarily dynamic after creation, since they are rarely modified afterwards.

I wanted to leverage the best of MEAN though, so I set up a database to store my blog posts, created the REST API, developed a separate admin interface (with my own <a href="http://drejkim.github.io/rte-angular">rich-text editor</a>) to write posts, added security so that only I could create posts, and so on. It was really great learning how to build everything out, but it quickly became unwieldy. And I spent more of my time worrying about keeping the admin interface secure rather than blogging (although I doubt someone would want to hack my little website).

As a result, I turned to <a href="http://jekyllrb.com" target="_blank">Jekyll</a>, a Ruby-based blog-aware, static site generator. In just a few hours, I had a full-fledged site that allowed me to add blog posts by simply creating Markdown files. It's also much more secure, since there's no admin interface to hack.

<a href="https://pages.github.com" target="_blank">GitHub Pages</a> provides free hosting directly from a GitHub repository and provides a nice set of <a href="https://help.github.com/articles/using-jekyll-with-pages" target="_blank">instructions</a> to help get your site online very quickly. You can also check out <a href="https://github.com/drejkim/drejkim.github.io">my source code</a> to see how I set up this site. I encourage you to check both resources out! You'll be up and running very quickly!
