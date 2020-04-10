---
layout: post
title: Creating category pages with Jekyll
categories: [web]
---

## Introduction

A long time ago, my blog used [Jekyll tags]({% post_url 2015-03-18-filtering-posts-by-tags-with-jekyll %}) to filter posts. When I [redesigned the site]({% post_url 2017-09-09-a-new-site-design-with-bootstrap-4 %}), I got rid of this feature in the hopes of improving upon it. A couple years later (yikes!), it's now back as category pages. It's also fully responsive and works for the projects section too.

<figure class="figure">
  <img class="img-fluid border rounded" src="https://media.githubusercontent.com/media/estherjk/estherjk.github.io/master/assets/img/categories/project-categories.gif" alt="Project categories in action">
  <figcaption class="figure-caption text-center">Project category pages in action. The UI for selecting categories is different depending on the screen size.</figcaption>
</figure>

## How it works

<div class="callout callout-warning">
  <h4>Note</h4>
  <p>If there's a better way to do this, let me know by leaving a comment below!</p>
</div>

A plugin called [Jekyll Archives](https://jekyll.github.io/jekyll-archives/) is available that appears to have very similar functionality. However, it's not available for use with GitHub Pages, which is why I went this approach.

### An index.html page per category

To start, each category requires its own page (e.g. `projects/category/<category_name>/index.html`). Unfortunately, this isn't super elegant even though each file is short and contains just a few lines of front matter. It doesn't scale well if you want to have a lot of categories. Keeping it to a manageable number is key for this approach.

Here's the file for `projects/category/ai/index.html`:

```html
---
layout: project-category
title: Projects&#58; AI
category: ai
---
```

The layout of this page is specified by `project-category`. Details on its content are provided later in this post. 

### Category data

In addition to creating an `index.html` page for each category (and in each section), the corresponding data for each category includes a more reader-friendly title.

The data for project categories are stored in `_data/project-categories.yml`:

```yml
ai:
  title: AI
android:
  title: Android
embedded:
  title: Embedded
ios:
  title: iOS
iot:
  title: IoT
python:
  title: Python
web:
  title: Web
```

A similar data structure exists for the blog categories and is located at `_data/blog-categories.yml`.

### Displaying the results

The project category page layout is located at `_layouts/project-category.html`. It is responsible for displaying the appropriate projects, as well as all available categories. It also displays a different category selection UI depending on the screen size. For larger screens, a list group is displayed (`_includes/category-list-group.html`). For smaller screens, a form select option is displayed (`_includes/category-select.html`). The current category is also highlighted or selected.

#### _layouts/project-category.html

```html
{% raw %}
---
layout: default
---

{% assign category = site.data.project-categories[page.category] %}
{% assign categories = site.data.project-categories %}
{% assign category_link_prefix = "/projects/category" %}

<div class="container mt-5 mb-5">
  <div class="row justify-content-center">

    <!-- Projects -->
    <div class="col-lg-10 col-xl-10">
      <div class="row">
        <!-- site.data.projects contains all of the project details, including an array of categories that this project belongs to -->
        <!-- See _data/projects.yml -->
        {% for projectDict in site.data.projects %}
        {% assign projectTitle = projectDict[0] %}
        {% assign project = projectDict[1] %}
    
        <!-- Display the project if it matches the page's category -->
        {% if project.categories contains page.category %}
        <div class="col-sm-6 col-md-4 col-lg-4">
          <div class="mb-4">
            {% include project-card.html %}
          </div>
        </div>
        {% endif %}
        {% endfor %}
      </div>
    </div>

    <!-- Category List Group: Do not show on smaller devices -->
    <div class="col-lg-auto d-none d-lg-block">
      {% include category-list-group.html %}
    </div>

    <!-- Category Select: Only show on smaller devices -->
    <div class="d-xs-block d-sm-block d-md-block d-lg-none order-first mb-2">
      {% include category-select.html %}
    </div>
  </div>
</div>
{% endraw %}
```

#### _includes/category-list-group.html

```html
{% raw %}
{% assign sorted_categories = categories | sort %}

<ul class="list-group">
  {% for category in sorted_categories%}
    {% assign category_label = category[0] %}

    {% if category_label == page.category %}
      <li class="list-group-item active">
        <a href="{{category_link_prefix}}/{{ category_label }}" class="text-white stretched-link">{{ categories[category_label].title }}</a>
      </li>
    {% else %}
      <li class="list-group-item">
        <a href="{{category_link_prefix}}/{{ category_label }}" class="stretched-link">{{ categories[category_label].title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
{% endraw %}
```

#### _includes/category-select.html

```html
{% raw %}
{% assign sorted_categories = categories | sort %}

<form class="form-inline">
  <div class="form-group mx-2 mb-2">
    <select class="form-control" id="categorySelect" onchange="window.location.href=document.getElementById('categorySelect').value; return false;">
      <option disabled selected value> -- select category -- </option>

      {% for category in sorted_categories%}
        {% assign category_label = category[0] %}
        
        {% if category_label == page.category %}
          <option value="{{ category_link_prefix}}/{{ category_label }}" selected>{{ categories[category_label].title }}</option>
        {% else %}
          <option value="{{ category_link_prefix}}/{{ category_label }}">{{ categories[category_label].title }}</option>
        {% endif %}
      {% endfor %}
    </select>
  </div>
</form>
{% endraw %}
```

#### Blog layout

A similar layout file exists for the blog at `_layouts/blog-category.html`. It also uses the same list group & form select option components as the projects section.

## That's a wrap

Categories are now back on the site. It doesn't rely on any plugins, which is great. But, it does have the one drawback of having to create a page for each category. Hope you find this useful in your own Jekyll site.

## Related posts

* [Filtering posts by tags with Jekyll]({% post_url 2015-03-18-filtering-posts-by-tags-with-jekyll %})
* [A new site design with Bootstrap 4]({% post_url 2017-09-09-a-new-site-design-with-bootstrap-4 %})