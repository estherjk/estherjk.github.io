---
layout: post
css:
- /css/post.css
- /css/code.css
title: Visualizing usability data with a heat map in R
tags: r ux visualization
excerpt: Usability testing is a great way to identify potential problems with an interface. Quantifying the results can help illustrate what's not working and to what extent. One common usability metric is the number of users who successfully (or unsuccessfully) complete a task....
js:
- https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.4/gist-embed.min.js
---

Usability testing is a great way to identify potential problems with an interface. Quantifying the results can help illustrate what's not working and to what extent. One common usability metric is the number of users who successfully (or unsuccessfully) complete a task.

For example, let's say we've redesigned our app's navigation scheme. We want to know whether or not users can successfully navigate the redesign. We can break down the interface elements into features or tasks to test, e.g. swipe left / right to view previous / next pages, find settings by opening the navigation drawer, and so on. To keep our example generic, let's say we have 5 tasks... cleverly named Task A, B, C, D, and E. We run a small usability test with 8 people. We record the data in a spreadsheet (or CSV file) and use 1s and 0s to denote whether a user successfully or unsuccessfully completes a given task. Each row represents a user.

The recorded data looks like this:

<code data-gist-id="06e7ba1d7446ec8de4ed" data-gist-file="data.csv"></code>

When analyzing and reporting the results, a table similar to this one is often used:

<code data-gist-id="06e7ba1d7446ec8de4ed" data-gist-file="total.csv"></code>

This is a great start. But, visualizing the information can provide clearer insights. A heat map is a great way to enhance the table by adding color to the table of values:

<img src="/assets/img/uxr-heatmap/heatmap.png" alt="Heat map" class="img-responsive img-thumbnail">

The color scale used in this example goes from dark orange to light gray. If none of the users successfully complete a task, the color is dark orange; if all of the users successfully complete a task, the color is light gray. By color coding the data in this manner, we can immediately see potential problems... the darker the orange, the more we ought to pay attention to it. So, Tasks A and E are on our radar.

## Picking a color scheme

Why did I choose dark orange to light gray? There are many color schemes to choose from, but these are my reasons:

* On the low end of the scale, I used dark orange because to me, it represents caution... let's pause and take a look at the data. Red typically signifies "danger" or "stop" and can alarm the team into thinking something is seriously wrong and someone is at fault. When this happens, people tend to get into defensive positions. So, I deliberately did not want to use red.
* So, why not green for the other extreme? Green typically means "okay", right? Rainbow color maps are very popular, but it's difficult to compare relative values. I know what varying shades of orange mean... the lighter the better. If colors start mixing, it takes more mental effort to parse what it indicates. See this [post](https://eagereyes.org/basics/rainbow-color-map) that talks about color maps in detail. Plus, it's not user-friendly for those who are red-green color blind.
* But, light gray? My intent with using light gray is to mimic white. However, white can blend into the background of presentation tools like PowerPoint. In large heat maps with many white cells, they can look like holes in the plot. Light gray stands out just enough where the plot looks whole. It also doesn't have a big impact on the color mixing.

There are other valid color schemes to choose. It also depends on the type of data you want to represent. In this case, this particular scheme has worked for me when I want to show teams potential problems in the interface. It gets the discussion started on where to focus the next design iteration.

## Creating the heat map, step-by-step

### Preparing the data

Since this is a visualization I commonly use, I thought I'd share how to create it using [R](https://cran.r-project.org/) and [ggplot2](http://ggplot2.org/), a popular graphics library.

The first thing we need to do is load the libraries we need: ggplot2 and reshape. reshape is used to transform data. If you haven't installed these packages before, you can do so by typing `install.packages('package name')`.

<code data-gist-id="06e7ba1d7446ec8de4ed" data-gist-file="heatmap.R" data-gist-line="1-2"></code>

Next, set the working directory where you have the data saved and read it in. Let's also store basic stats, such as the number of users and the number of tasks:

<code data-gist-id="06e7ba1d7446ec8de4ed" data-gist-file="heatmap.R" data-gist-line="4-10"></code>

Here comes the data preparation part. We want the total number of successes for each task in a data frame and in a format that ggplot2 can use. The following code accomplishes this:

<code data-gist-id="06e7ba1d7446ec8de4ed" data-gist-file="heatmap.R" data-gist-line="12-22"></code>

The resulting data looks like this:

```
> total.m
    task variable value
1 Task A    value     2
2 Task B    value     4
3 Task C    value     6
4 Task D    value     7
5 Task E    value     1
```

### Plotting the results

ggplot2 is a great graphics tool, but it can be a bit overwhelming to use when first starting out. Here's the code to plot the heat map broken down into several steps.

<code data-gist-id="06e7ba1d7446ec8de4ed" data-gist-file="heatmap.R" data-gist-line="24-51"></code>

The following pictures show what's happening at each step:

<div class="row">
  <div class="col-md-12">
    <div class="thumbnail">
      <img src="/assets/img/uxr-heatmap/heatmap-step1.png" alt="Heat map step 1" class="img-responsive">
      <div class="caption text-center">
        <p>1. Create heat map</p>
        <p>
          This creates color cells using the scale specified. The limits of the scale should go from 0 to the total number of users.
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <div class="thumbnail">
      <img src="/assets/img/uxr-heatmap/heatmap-step2.png" alt="Heat map step 2" class="img-responsive">
      <div class="caption text-center">
        <p>2. Add text</p>
        <p>
          The values themselves are still meaningful, so let's include them.
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <div class="thumbnail">
      <img src="/assets/img/uxr-heatmap/heatmap-step3.png" alt="Heat map step 3" class="img-responsive">
      <div class="caption text-center">
        <p>3. Re-size the plot</p>
        <p>
          The size of the plot can use an update. ggplot2 defaults to creating plots where one unit is the same length on each axis. However, it's possible to change this. In our case, we want the y-axis to be just tall enough to fit our data.
        </p>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <div class="thumbnail">
      <img src="/assets/img/uxr-heatmap/heatmap.png" alt="Heat map step 4" class="img-responsive">
      <div class="caption text-center">
        <p>4. Give finishing touches</p>
        <p>
          By default, ggplot2 creates axis titles, tick marks, and uses a gray background. Let's remove all that and add a title to create the final plot.
        </p>
      </div>
    </div>
  </div>
</div>

There's our final plot. We can then save it!

## Final thoughts

The next time you conduct a usability test, consider using a heat map to visualize table summaries of your data. Choose color scales that are meaningful to you, then plot away!
