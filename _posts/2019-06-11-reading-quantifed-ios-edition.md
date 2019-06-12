---
layout: post
title: Reading Quantified, iOS Edition
tags: ios swift books
excerpt: TBD
---

## Introduction

It's finally here! The [iOS version](https://github.com/drejkim/reading-quantified-ios) of Reading Quantified.

Here's a video demonstrating its capabilities:

<div class="mb-3">
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/y5PhF_Pu6CA" frameborder="0" allowfullscreen=""></iframe>
  </div>
</div>

## Features

The UI is pretty barebones at the moment. The goal was to focus on the features I've been most particularly interested in, which are centered around two views:

* Dashboard: Shows key metrics filtered by year. The metrics are: number of books finished, average days to finish, shortest read in days, and longest read in days.
* Books: Provides a table of all the books that are searchable and sortable by title, date started, and date finished.

## How it works

The app communicates with the [REST API server](https://github.com/drejkim/reading-quantified-server) using a network abstraction library called [Moya](https://moya.github.io/). Access to the REST APIs require a JSON Web Token, which is generated for a valid username and password. The data are then stored locally in a [Realm database](https://realm.io/).

The app also attempts to use software design best practices for Swift. (The keyword is **attempts**.... :)) This includes using an MVVM architecture, [Swinject](https://github.com/Swinject/Swinject) for dependency injection, and [RxSwift](https://github.com/ReactiveX/RxSwift) to communicate changes between logically separated portions of the app.

## Next steps

This is just the beginning of the project's iOS journey. Expect enhancements and new features!

## Related blog posts

* [Refactoring Reading Quantified](/blog/2018/12/19/refactoring-reading-quantified/)
* [Redesigning Reading Quantified](/blog/2017/04/11/redesigning-reading-quantified/)
* [Introducing Reading Quantified](/blog/2015/11/24/introducing-reading-quantified/)