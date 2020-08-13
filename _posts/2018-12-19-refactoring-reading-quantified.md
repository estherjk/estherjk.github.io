---
layout: post
title: Refactoring Reading Quantified
categories: [books, python, web]
excerpt: Goodbye, custom UI. Hello, Metabase!
---

## Introducing Reading Quantified v3.0

Goodbye, custom UI. Hello, [Metabase](https://www.metabase.com/)!

<figure class="figure">
  <img class="figure-img img-fluid border rounded" src="https://media.githubusercontent.com/media/estherjk/estherjk.github.io/master/assets/img/reading-quantified/reading-quantified-v2.2.1.png" alt="Reading Quantified v2.2.1">
  <figcaption class="figure-caption text-center">Reading Quantified v.2.2.1</figcaption>
</figure>

And here's a snapshot of what it looks like now:

<figure class="figure">
  <img class="figure-img img-fluid border rounded" src="https://media.githubusercontent.com/media/estherjk/estherjk.github.io/master/assets/img/reading-quantified/reading-quantified-v3.0.0.png" alt="Reading Quantified v3.0.0">
  <figcaption class="figure-caption text-center">Reading Quantified v3.0.0</figcaption>
</figure>

The 3rd iteration of Reading Quantified is a complete overhaul, from the backend to the frontend. The backend used to be powered by Node.js & Parse; it has been replaced with [Django](https://github.com/estherjk/reading-quantified-server). A new [Python client](https://github.com/estherjk/reading-quantified-trello) has also been created that retrieves cards from Trello & stores them in the Django server.

The repos are all available on GitHub:

* [reading-quantified](https://github.com/estherjk/reading-quantified): A dashboard for analyzing my reading habits, powered by Metabase
* [reading-quantified-server](https://github.com/estherjk/reading-quantified-server): A Django REST API server
* [reading-quantified-trello](https://github.com/estherjk/reading-quantified-trello): Retrieves cards from Trello & stores them in the Django server

And here's how the different components work together:

<figure class="figure">
  <img class="figure-img img-fluid border rounded" src="https://media.githubusercontent.com/media/estherjk/estherjk.github.io/master/assets/img/reading-quantified/reading-quantified-architecture-overview.png" alt="An overview of the Reading Quantified Architecture">
  <figcaption class="figure-caption text-center">An overview of the Reading Quantified Architecture</figcaption>
</figure>

## Why the change?

When I [first started Reading Quantified in 2015](/blog/2015/11/24/introducing-reading-quantified/), I chose [Parse](https://parseplatform.org/) to power the backend & [Angular](https://angular.io/) and [d3](https://d3js.org/) for the frontend. Many things have changed since then. Parse was bought & shutdown by Facebook, and then went open source. Angular is now on v7.1.4, while I haven't upgraded from v1.4.8. I knew a change was in order.

I also was very interested in trying out Metabase. I've tinkered with it in the past, but I wanted to use it in more depth. I thought this project was very well suited as my experimenting platform.

I also wanted to move away from Node.js & NoSQL. The aysynchronous nature of Node.js is great, but the nested callback nightmares can be unwieldy. I decided to go "old school," and use Django & relational database (PostgreSQL) to serve & store the data.

## What about the custom UI?

I may revisit this in the future. One workflow I had in mind is to use Metabase for exploratory analyses. Once I've settled on metrics I'd like to keep an eye for awhile, then I can recreate a more polished version. It's something I'm going back and forth on.

## Conclusion

Looking back, it's amazing to me how the project has evolved since I started it 3 years ago. From the technology choices I made, to the crappy code I initially wrote, to where it is now. Pretty cool. Looking forward to evolving this even more in the future.