---
layout: post
title: WordPress tips and tricks
categories: [web]
---

## Introduction

Recently, I helped overhaul our [church website](http://revivepres.church) using a self-hosted instance of WordPress. This was my first major experience with [WordPress.org](https://wordpress.org/)&mdash;not [Wordpress.com](https://wordpress.com/)&mdash;and there were a few things I had to get accustomed to. This article summarizes the 3 major things I learned while getting the new site up and running.

## 1. Child themes

Once you pick a theme, create a [child theme](https://developer.wordpress.org/themes/advanced-topics/child-themes/) if you plan to customize it. A child theme ensures that your customizations are kept separate from the parent theme. This is particularly helpful if you update the parent theme. I learned the hard way that the modifications you make directly in the parent disappear as soon as you update the theme.

## 2. Plugins

### Use well-maintained plugins

There are a TON of plugins, and it can be overwhelming at first. Look for plugins that have many installations, have been updated recently, and have an active support thread. Also, take a look at their documentation, including if they have guides on how best to customize a plugin, which leads to... 

### Customize plugins

Customizing plugins. Similar to child themes, you will most likely need to customize a plugin to maintain consistency with your website's look and feel. A great example of a plugin that is well-maintained and easily customizable is the [Events Calendar](https://theeventscalendar.com/) plugin. Any customizations live in the child theme as a sub-folder that follows a similar directory structure to the parent plugin. Their [Themer's Guide](https://support.theeventscalendar.com/153124-Themers-Guide) provides a great tutorial for getting started too.

## 3. Proper file permissions

Lastly, if you ever run into the issue where files are not editable in the Theme Editor, themes are not updatable, or plugins are not installable, there's most likely an issue with file permissions. WordPress files need to be owned by the `www-data` group. You can do this by [executing the following](https://www.digitalocean.com/community/questions/folder-ownership-permissions-for-wordpress-updates-and-sftp):

```bash
chown -Rf www-data:www-data /var/www/html
```

You may need to run this with `sudo` in front if you get a permission denied error.

## Conclusions

There are still a lot of things I need to learn and understand. I'll continue to share about my WordPress adventure!