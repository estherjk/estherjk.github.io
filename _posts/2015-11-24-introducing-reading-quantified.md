---
layout: post
css:
- /css/post.css
title: Introducing Reading Quantified
tags: web angularjs parse books visualization
excerpt: A few years ago, Barnes & Noble gave out free ebooks to promote their Classics Editions, and I ended up downloading way more ebooks than I knew what to do with. The vast majority of them stayed unread in my ereader for a long time. I also had many other books on my list that I wanted to read. I then found this Lifehacker article in 2014, which shows you how to structure your reading with Trello....
---

## Background

A few years ago, Barnes & Noble gave out free ebooks to promote their Classics Editions, and I ended up downloading way more ebooks than I knew what to do with. The vast majority of them stayed unread in my ereader for a long time. I also had many other books on my list that I wanted to read. I then found this [Lifehacker article](http://lifehacker.com/my-secret-to-reading-a-lot-of-books-514189426) in 2014, which shows you how to structure your reading with [Trello](https://trello.com/b/mgqBN7ZV).

<div class="thumbnail">
  <img src="/assets/img/reading-quantified/trello-books-board.png" alt="Trello Books board" class="img-responsive">
  <div class="caption text-center">
    <p>Screenshot of my <a href="https://trello.com/b/mgqBN7ZV">Trello Books</a> board</p>
  </div>
</div>

So far, Trello has been great. It has given me a visual way to organize my books. But not long after I started using it, I wanted to track my progress in more detail. I wanted to know how many books I've read so far, how long it takes me to read a book, etc. This information isn't readily available by looking at my board. As a result, I decided to create a dashboard that accomplishes just that: [Reading Quantified](http://www.drejkim.com/reading-quantified).

## How it works

The first step involves getting key information about my books using the [Trello API](https://developers.trello.com/). As you can see in the screenshot of my Trello board, it consists of 4 lists and each book is given its own card. Certain activities, like moving cards from one list to another are logged. All this information is available from the Trello API. So, I used [Python](https://github.com/drejkim/reading-quantified-py) to fetch and parse the relevant information for each book, then save this information to [Parse](http://www.parse.com), a cloud database.

<div class="thumbnail">
  <img src="/assets/img/reading-quantified/trello-card.png" alt="Trello card" class="img-responsive">
  <div class="caption text-center">
    <p>Screenshot of one of my Trello cards</p>
  </div>
</div>

The second step grabs the data from Parse and visualizes key metrics on a web-based dashboard (see [GitHub](https://github.com/drejkim/reading-quantified) for the code). Right now, the dashboard is very simple. It consists of two key performance indicators (KPIs): "total number of books finished" and "average days to finish", as well as a table listing the books I have finished so far.

<div class="thumbnail">
  <img src="/assets/img/reading-quantified/dashboard.png" alt="Reading Quantified dashboard" class="img-responsive">
  <div class="caption text-center">
    <p>Screenshot of <a href="http://www.drejkim.com/reading-quantified">Reading Quantified</a> (v0.1)</p>
  </div>
</div>

At the moment, the dashboard indicates I have finished one book. If you look at my board, you can see there are a number of finished books. Long story short, when I started this project, there was a mishap, and I lost all the activities of my old cards when I copied and moved them into my public Books board. It's okay though! I may be starting over at one, but it gives me extra motivation to continue going through my list of books.

## Next steps

The first version of the dashboard is very much a 0.1 version. I plan to actively develop this over the next few months. Expect a lot of updates, including an expanded dashboard and enhancements under the hood. Please continue to check back and see how this project evolves!
