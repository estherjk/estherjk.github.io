---
layout: post
title: Custom callout styles based on Bootstrap
tags: web bootstrap scss jekyll
excerpt: TBD
---

## Introduction

The Bootstrap docs have nice callout styles that aren't part of the official distribution. Since I wanted to use them in my own site, I created my own extension. They are based off [Bootstrap's callout Scss file](https://github.com/twbs/bootstrap/blob/master/site/assets/scss/_callouts.scss).

Here they are in action:

<div class="callout callout-primary">
  <h4>A primary callout</h4>
  <p>My primary color is red. It's probably too similar to the Danger Callout!</p>
</div>

<div class="callout callout-secondary">
  A secondary callout.
</div>

<div class="callout callout-success">
  A success callout.
</div>

<div class="callout callout-danger">
  A danger callout.
</div>

<div class="callout callout-warning">
  A warning callout.
</div>

<div class="callout callout-info">
  An info callout.
</div>

<div class="callout callout-light">
  A light callout.
</div>

<div class="callout callout-dark">
  A dark callout.
</div>

## How to use this on your own site?

First and foremost, this requires having the [Bootstrap Scss files](https://getbootstrap.com/docs/4.4/getting-started/download/#source-files) as part of your project. My site also uses Jekyll, so the instructions are targeted as such. But, most of these steps should hopefully be applicable to other projects using Scss.

### Folder structure

The Scss files for [my project](https://github.com/estherjk/estherjk.github.io) are located in the `_sass` folder:

```bash
.
├── ...
├── _sass
│   ├── bootstrap
│   ├── bootstrap_extensions
│   │   ├── _callout.scss
│   │   └── ...
├── ...
├── css
│   └── base.scss
└─ ...
```

`_sass/bootstrap` contains the source files untouched, while `_sass/bootstrap_extensions` contains my customizations, such as the callout styles.

### _sass/bootstrap_extensions/_callout.scss

The content of `_callout.scss` is fairly short. A mixin called `callout-variant` changes the left border & heading color based on the specified color. The Bootstrap variable `$theme-colors` is used to generate the color variant classes like `.callout-primary`.

```scss
// Content of _callout.scss

// Callout component based off the Bootstrap Callout
// See: https://github.com/twbs/bootstrap/blob/master/site/assets/scss/_callouts.scss

.callout {
    padding: 1.25rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    border: 1px solid $gray-200;
    border-left-width: .25rem;
    @include border-radius();
  
    h4 {
      margin-bottom: .25rem;
    }
  
    p:last-child {
      margin-bottom: 0;
    }
  
    code {
      @include border-radius();
    }
  
    + .callout {
      margin-top: -.25rem;
    }
}

// Callout color variant
@mixin callout-variant($color) {
    border-left-color: $color;
    
    h4 { color: $color; }
}

// Create the color variant classes, e.g. .callout-primary
@each $color, $value in $theme-colors {
    .callout-#{$color} {
        @include callout-variant(theme-color-level($color));
    }
}
```

### css/base.scss

`css/base.scss` contains the `import` statements and the front matter block (`---`) that Jekyll requires so that the Scss files are turned into usable CSS for your site:

```scss
// Content of css/base.scss

---
# This ensures Jekyll reads the file to be transformed into CSS later
# Only main files contain this front matter, not partials.
---

/* Bootstrap */
@import "bootstrap/bootstrap";

/* My bootstrap extensions */
@import "bootstrap_extensions/callout";
```

### HTML

Now, I am able to use the classes in HTML. Here's the corresponding HTML for all the callout styles shown in the intro:

```html
<div class="callout callout-primary">
  <h4>A primary callout</h4>
  <p>My primary color is red. It's probably too similar to the Danger Callout!</p>
</div>

<div class="callout callout-secondary">
  A secondary callout.
</div>

<div class="callout callout-success">
  A success callout.
</div>

<div class="callout callout-danger">
  A danger callout.
</div>

<div class="callout callout-warning">
  A warning callout.
</div>

<div class="callout callout-info">
  An info callout.
</div>

<div class="callout callout-light">
  A light callout.
</div>

<div class="callout callout-dark">
  A dark callout.
</div>
```

## Conclusion

Now, you should be able to try this out in your own project! It helps to use the source Scss files and extend with your own. Customizations are a lot more maintainable this way.