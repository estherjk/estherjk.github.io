# About

This is the source code for Esther Jun Kim's personal website.

## Installation

* Use [rbenv](https://github.com/rbenv/rbenv). On macOS, install via [Homebrew](https://brew.sh/): `brew install rbenv`
* Install [bundler](https://bundler.io/): `gem install bundler`
* Install gems into a hidden folder in project root: `bundle install --path=.gems`

## Local server setup

### Running the server

```bash
./.scripts/start-server.sh
```

### Updating the GitHub Pages gem

To keep your local instance up to date with what's deployed on GitHub, update the `github-pages` gem:

```bash
bundle update github-pages
```

## References 

* [Getting started with GitHub Pages](https://help.github.com/en/github/working-with-github-pages/getting-started-with-github-pages)
* [Testing your GitHub Pages site locally with Jekyll](https://help.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)
* [Dependency versions | GitHub Pages](https://pages.github.com/versions/)