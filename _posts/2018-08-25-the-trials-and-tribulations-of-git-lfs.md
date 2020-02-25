---
layout: post
title: The trials and tribulations of Git LFS
tags: tools
excerpt: At work, we recently started using Git LFS to track large files like images. It reduces the size of your repository by storing the files on an external server and only tracking the pointers to those files inside Git.
---

At work, we recently started using [Git LFS](https://git-lfs.github.com/) to track large files like images. It reduces the size of your repository by storing the files on an external server and only tracking the pointers to those files inside Git.

Today, I thought it'd be awesome to add Git LFS support to my website. It was pretty simple to do... GitHub has some great [directions](https://help.github.com/articles/configuring-git-large-file-storage/). However, after pushing my changes, all my assets weren't loading on my site! Sigh. To help resolve, I found this [GitHub issue](https://github.com/git-lfs/git-lfs/issues/1342). Basically, the workaround is to get the full URL of where the asset is located rather than using relative paths, which is most likely serving up the pointer text file.

To get the full URL of an asset tracked with Git LFS, navigate to it on GitHub and copy the image address like so:

<figure class="figure">
  <img class="figure-img img-fluid border rounded" src="https://media.githubusercontent.com/media/estherjk/estherjk.github.io/master/assets/img/tools/git-lfs-link.png" alt="Getting the link to your asset when using Git LFS">
  <figcaption class="figure-caption text-center">Getting the link to your asset when using Git LFS</figcaption>
</figure>

The URL essentially has the following format:

```
https://media.githubusercontent.com/media/<username>/<repository>/<branch>/<filename>
```

For assets that you plan to upload, update the URL format for your specific username, repository, branch, and filename. Unfortunately, you won't be able to see the image until you push, but at least it will be there when your site is live!