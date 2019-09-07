---
layout: post
title: A few tips for managing Ruby-based projects
tags: ruby tools web ios
excerpt: A lot of my projects depend on Ruby... from this website to iOS apps using CocoaPods. Given that projects start at different times (meaning that it can require different versions of Ruby, etc.), it's important to know which specific Ruby version and dependencies are required. This is especially important if others need to reproduce the environment, as well.
---

## Introduction

A lot of my projects depend on Ruby: from this website to iOS apps using CocoaPods. Given that projects start at different times (meaning that it can require different versions of Ruby, etc.), it's important to know which specific Ruby version and dependencies are required. This is especially important if others need to reproduce the environment, as well.

With that said, here are a few tips....

## Use rbenv

[rbenv](https://github.com/rbenv/rbenv) is a tool for picking a specific Ruby version for your application.

Install a Ruby version with the following command:

```bash
# List all available versions
rbenv install -l

# Install a specific version, e.g. 2.5.3
rbenv install 2.5.3
```

For each project, create a `.ruby-version` file in the root that specifies the version you need. For example:

```bash
# Navigate to the project root
cd $PROJECT_ROOT

echo "2.5.3" > .ruby-version
```

## Use bundler with rbenv

rbenv takes care of Ruby versions, but what about gems? That's where [bundler](https://bundler.io/) comes in.

To install bundler:

```bash
gem install bundler
```

Specify gems in a `Gemfile` in the project's root:

```bash
# Gemfile content
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

With the gems specified in a single file, the next step is to install them. The default command (`bundle install`) will install all the gems into the global Ruby version specified in `.ruby-version`. That's fine... but there's a better way to manage gems per project....

## Install gems into a hidden folder

Add the following parameter to the `bundle install` command:

```bash
bundle install --path=.gems
```

The `--path` option allows you to specify where the gems should be installed. I like to install them into a hidden folder called `.gems` in the project root. This ensures that the gems are only visible to this project.

## What should be tracked by Git

To ensure reproducibility, I check in the following files:

* `.ruby-version`
* `Gemfile`
* `Gemfile.lock`

What I add to `.gitignore`:

* `.gems`

This folder can be safely ignored since everything is specified in the files above.

## Conclusion

And, that's it! Hope this helps the next time you set up a Ruby project!