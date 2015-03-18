---
layout: post
title: Building an Edison image and changing the root partition size
tags: edison
---

*Update: As of February 2015, the newest version of the Edison image comes with a default root partition size of 1.4GB, which should be sufficiently large for most people. If you would still like to change the root partition size, these instructions should still work, but with a couple differences in the Linux source files, which are noted below.*

## Introduction

I've been using Edison for a few weeks now, and one of the issues I quickly ran into was not having enough space in the `/dev/root` partition. By default, the size is 512MB, which becomes very small once you start installing packages.

I started investigating on the forums and noticed this very helpful <a href="https://communities.intel.com/thread/55612?start=0&tstart=0" target="_blank">discussion</a> on changing the partition's size. After some trial and error, I was able to build a new Edison image with a larger partition for `/dev/root`, which I have summarized below. For reference, see this <a href="https://communities.intel.com/docs/DOC-23159" target="_blank">document</a> for details on how to build an Edison image.

Before getting started, you also need a Linux machine. In my case, I created an <a href="https://github.com/drejkim/edison-imaging-vm" target="_blank">Ubuntu 12.04 Vagrant VM</a> on my Mac. The VM is provisioned with all the necessary packages to create an Edison image. It is also configured with 2GB of memory and with the ability to connect Edison via USB. You will also need about 30GB of disk space.

## Getting the Linux source files

On your Linux machine, <a href="https://communities.intel.com/docs/DOC-23242?_ga=1.214972689.701615573.1414539807" target="_blank">download</a> the Edison Linux source files (`.tgz`). Unpack the `.tgz` file. If you saved it in the shared folder (if you are using the Vagrant VM), I suggest unpacking the file with the following command:

    tar xvf edison-src.tgz -C ~

where `edison-src.tgz` is the name of the downloaded file. `-C ~` unpacks it into the home directory of the VM. I ran into issues when building the image if the source files were in the shared directory.

## Modifying the source files

First, modify `edison.env`. Based on which version of the Linux sources files you have, the location of the file is different. The quickest way to find it is by typing the following:

    find * -name 'edison.env'

In my case, the file was originally located at:

    edison-src/device-software/meta-edison-distro/recipes-bsp/u-boot/files/

As of February 2015, it is now located at:

    edison-src/device-software/meta-edison/recipes-bsp/u-boot/files/

To change the root partition size, update `rootfs` in the partitions definition to the desired size in MB. In my case, I increased it from 512MB to 1024MB.

Next, modify `edison-src/device-software/meta-edison-distro/recipes-core/images/edison-image.bb`. Update `IMAGE_ROOTFS_SIZE` to the same size as `rootfs` in `edison.env`. Note that the unit is block size, so multiply whatever number you used in `edison.env` by 1024 and use the resulting value.

## Building the image

Before going any further, I should mention that building an image can take HOURS. So, just keep that in mind before proceeding. To build the image:

* Navigate to the `edison-src` directory.
* Initialize the build environment: `./device-software/setup.sh`.
* Configure the shell environment: `source poky/oe-init-build-env`.
* Build the image: `bitbake edison-image`.

## Modifying `flashall.sh`

Once building the image is complete, copy the necessary files to the `build/toFlash` directory:

    ./edison-src/device-software/utils/flash/postBuild.sh

As of February 2015, no modification to `flashall.sh` needs to be made and you can skip the rest of this section. If you have an older version of the Edison source files, please continue reading.

To <a href="https://communities.intel.com/thread/56219" target="_blank">re-partition without using xFSTK</a> (an Intel dependency that is a bit painful to install), modify `edison-src/build/toFlash/flashall.sh`.

To do so, change the script from:

    echo "Flashing U-Boot Environment Backup"  
    flash-command --alt u-boot-env1 -D "${VARIANT_FILE}"  

to:

    echo "Flashing U-Boot Environment Backup and rebooting to apply partition changes"  
    flash-command --alt u-boot-env1 -D "${VARIANT_FILE}" -R

    dfu-wait

This modification causes Edison to reboot and resume flashing once it comes back online.

## Flashing Edison with the new image

To flash Edison with the new image:

    sudo ./edison-src/build/toFlash/flashall.sh

Follow the on-screen instructions. Note that the process can take some time (longer than 5 minutes), so please be patient. Once it's complete, the console should look similar to this:

    Using U-Boot target: edison-blank
    Now waiting for dfu device 8087:0a99
    Please plug and reboot the board
    Flashing IFWI
    ##################################################] finished!
    ##################################################] finished!
    Flashing U-Boot
    ##################################################] finished!
    Flashing U-Boot Environment
    ##################################################] finished!
    Flashing U-Boot Environment Backup and rebooting to apply partition changes
    ##################################################] finished!
    Now waiting for dfu device 8087:0a99
    Please plug and reboot the board
    Flashing boot partition (kernel)
    ##################################################] finished!
    Flashing rootfs, (it can take up to 5 minutes... Please be patient)
    ##################################################] finished!
    Rebooting
    U-boot & Kernel System Flash Success...
    Your board needs to reboot twice to complete the flashing procedure, please do not unplug it for 2 minutes.

## Checking the new image

Log into Edison and check if the partition has changed by typing `df -h`:

    Filesystem                Size      Used Available Use% Mounted on
    /dev/root               927.9M    306.5M    554.2M  36% /
    devtmpfs                480.2M         0    480.2M   0% /dev
    tmpfs                   480.5M         0    480.5M   0% /dev/shm
    tmpfs                   480.5M    480.0K    480.0M   0% /run
    tmpfs                   480.5M         0    480.5M   0% /sys/fs/cgroup
    tmpfs                   480.5M    480.0K    480.0M   0% /etc/machine-id
    systemd-1                 5.5M      5.1M    468.0K  92% /boot
    tmpfs                   480.5M      4.0K    480.5M   0% /tmp
    systemd-1                 1.8G      2.8M      1.7G   0% /home
    tmpfs                   480.5M         0    480.5M   0% /var/volatile
    /dev/mmcblk0p5         1003.0K     21.0K    911.0K   2% /factory
    /dev/mmcblk0p10           1.8G      2.8M      1.7G   0% /home
    /dev/mmcblk0p7            5.5M      5.1M    468.0K  92% /boot

Flashing succeeded! The size of `/dev/root` has increased!
