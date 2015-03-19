---
layout: post
title: Filtering posts by tags with Jekyll
tags: web jekyll
excerpt: The blog section has been redesigned to take advantage of Jekyll's tags. Now, it's possible to filter posts by tags and see related posts.
---

The blog section has been redesigned to take advantage of <a href="http://jekyllrb.com/docs/frontmatter/" target="_blank">Jekyll's tags</a>. Now, it's possible to filter posts by tags and see related posts.

To get started, I came across <a href="http://www.jokecamp.com/blog/listing-jekyll-posts-by-tag/" target="_blank">this blog</a>, which shows how to list all the site tags and display all the posts by tag. I expanded upon this by doing the following:

* Sort and display all the site tags
* Show only the list of posts related to a tag when that tag is clicked
* In a post, sort and display its tags, which then link to related posts

The following HTML shows how to sort and display the site tags:

```html
{% raw %}
<ul class="blog-tags-list">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}
    {% assign t = tag | first %}
    {% assign posts = tag | last %}
    <li class="blog-tag-item" id="{{ t }}-item">
      <a href onclick="filter('{{ t }}'); return false;">{{ t }}</a>
    </li>
  {% endfor %}
</ul>
{% endraw %}
```

Note that the `onclick` attribute is used in the anchor tag to call a JavaScript function, `filter(tag)`. This adds the `active` class to the selected list item and changes it to a different color (`setActiveTag(tag)`). It also shows the corresponding list of posts for the selected tag (`showContainer(tag)`)... we'll get to that in a moment. The call to `onclick` also returns `false` to prevent the default link behavior, which is to follow the link.

The full JavaScript code is given below:

```javascript
function filter(tag) {
  setActiveTag(tag);
  showContainer(tag);
}

function setActiveTag(tag) {
  // loop through all items and remove active class
  var items = document.getElementsByClassName('blog-tag-item');
  for(var i=0; i < items.length; i++) {
    items[i].setAttribute('class', 'blog-tag-item');
  }

  // set the selected tag's item to active
  var item = document.getElementById(tag + '-item');
  if(item) {
    item.setAttribute('class', 'blog-tag-item active');
  }
}

function showContainer(tag) {
  // loop through all lists and hide them
  var lists = document.getElementsByClassName('blog-list-container');
  for(var i=0; i < lists.length; i++) {
    lists[i].setAttribute('class', 'blog-list-container hidden');
  }

  // remove the hidden class from the list corresponding to the selected tag
  var list = document.getElementById(tag + '-container');
  if(list) {
    list.setAttribute('class', 'blog-list-container');
  }
}
```

The following HTML shows how to list the corresponding posts by tag:

```html
{% raw %}
{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}
  <div class="blog-list-container hidden" id="{{ t }}-container">
    <ul class="blog-list">
      {% for post in posts %}
        {% if post.tags contains t %}
          <li>
            <span class="blog-item-date">{{ post.date | date: "%d %b %Y" }}</span>
            <a href="{{ post.url }}">{{ post.title }}</a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>

    {% assign numPosts = posts | size %}
    {% if numPosts == 1 %}
      <p>{{ posts | size }} post containing tag <b>{{ t }}</b></p>
    {% else %}
      <p>{{ posts | size }} posts containing tag <b>{{ t }}</b></p>
    {% endif %}
  </div>
{% endfor %}
{% endraw %}
```

The `hidden` class is added to all the lists to start and is removed for the appropriate list of posts when `showContainer(tag)` is called (see the JavaScript code above). The `hidden` class is provided by <a href="http://getbootstrap.com" target="_blank">Bootstrap</a>, but you can manually add it into your own CSS file:

```css
.hidden {
  display: none!important;
  visibility: hidden!important;
}
```

I also wanted to provide links to related posts when a user is reading a given post. So, in the post layout, I provide a hashed link to the blog page for each tag:

```html
{% raw %}
{% assign sorted_tags = page.tags | sort %}
{% for tag in sorted_tags %}
  <span class="tag"><a href="/blog#{{ tag }}">{{ tag }}</a></span>
{% endfor %}
{% endraw %}
```

When a user clicks on a tag, the blog page loads, and the hash is then used to show the appropriate list of posts by calling `filter(tag)`:

```javascript
if(window.location.hash) {
  var tag = window.location.hash.split('#')[1];
  filter(tag);
}
```

And that's pretty much it! To see it used in context, feel free to take a look at this website's source code on <a href="https://github.com/drejkim/drejkim.github.io" target="_blank">GitHub</a>.
