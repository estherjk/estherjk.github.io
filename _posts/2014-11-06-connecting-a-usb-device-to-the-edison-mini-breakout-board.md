---
layout: post
css:
- /css/post.css
- /css/code.css
title: Connecting a USB device to the Edison Mini breakout board
tags: edison
---

## Introduction

In this post, we will connect a USB device to the Edison mini breakout board. If you haven't set up Edison yet, please go <a href="/blog/2014/10/29/getting-started-with-intel-edison-on-os-x">here</a>, then come back to this post.

## Supplies

These are the supplies you will need:

* Micro USB OTG to USB Adapter (like this <a href="http://www.frys.com/product/7582626?site=sr:SEARCH:MAIN_RSLT_PG">one</a>)
* 9V battery snap connector (like this <a href="https://www.sparkfun.com/products/91">one</a>; in my case, I soldered a 2-pin connector to a snap connector with open leads)
* 9V battery
* A USB device (I'm using the <a href="http://www.amazon.com/Creative-Live-Sync-720P-Webcam/dp/B0092QJRPC/ref=sr_1_4?s=pc&ie=UTF8&qid=1415288513&sr=1-4">Creative Live! Cam Sync HD 720P Webcam</a>)

## Supplying power to the Mini breakout board

<img src="/assets/img/edison/edison-mini-board-on-table.jpg" class="img-responsive extra-margin-20" alt="Edison on Mini breakout board">

There are four primary ways to supply power to Edison using the Mini breakout board (more info can be found <a href="https://communities.intel.com/docs/DOC-23252">here</a>):

* J2 (upper left)&mdash;a battery connector to supply power, such as a rechargeable Lithium Ion battery
* Micro USB port labeled J16 (2nd port from the top)&mdash;this is how the board was powered when we first set up Edison, but it can also act as a USB host
* J21 (lower right)&mdash;this is the main power input, where 7-15 VDC should be applied
* J22 (on the bottom of the board directly underneath J21)&mdash;a power jack can be soldered onto the circle and square solder pads to supply power; again 7-15 VDC should be applied

In order to use Edison as a USB host, power must be supplied externally using either J21 or J22. If you supply power with a battery on J2, it will not power the USB connector. So, let's connect a 9V battery to J21:

<img src="/assets/img/edison/edison-mini-9v.jpg" class="img-responsive extra-margin-20" alt="9V battery connected to the Edison Mini breakout board">

Make sure that the red wire is connected to the left pin and the black wire is connected to the right pin (ground). The board lights should now turn on!

## Connecting a USB device

Attach the Micro USB OTG to USB adapter to J16 and connect the USB device (I am using a webcam in this example):

<img src="/assets/img/edison/edison-mini-9v-webcam.jpg" class="img-responsive extra-margin-20" alt="9V battery and webcam connected to the Edison Mini breakout board">

Let's check if the USB device is detected. First, SSH into Edison:

    ssh root@myedison.local

where `myedison` is the name of your Edison.

Type `lsusb` at the prompt. This is a Linux command for displaying information about connected USB devices. Hopefully, your console output looks something like this:

```
root@myedison:~# lsusb
Bus 001 Device 002: ID 041e:4095 Creative Technology, Ltd
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
```

The first line shows that my Creative Cam is detected.

You should be good to go with a lot of USB devices after following these steps. However, you may need to install drivers, as well. For example, if you want to use a webcam, I highly recommend using a <a href="http://www.ideasonboard.org/uvc/">UVC-compatible webcam</a>, so that you can use the UVC Linux driver.

If you set up <a href="http://alextgalileo.altervista.org/edison-package-repo-configuration-instructions.html">AlexT's unofficial repository</a> when <a href="/blog/2014/10/29/getting-started-with-intel-edison-on-os-x">getting started with Edison</a>, continue reading on; if not, please set it up, then continue.

To install the UVC driver, type:

```bash
opkg install kernel-module-uvcvideo
```

If the webcam was already plugged into the board, unplug and plug it back in to make sure the webcam is detected properly.
Verify that the webcam is detected by typing `dmesg -c`. The console output should look similar to this:

```
[   92.910838] hub 2-0:1.0: USB hub found
[   92.910899] hub 2-0:1.0: 1 port detected
[   92.957888] pmic_ccsm pmic_ccsm: USB VBUS Detected. Notifying OTG driver
[   93.210150] usb 1-1: new high-speed USB device number 2 using dwc3-host
[   93.329961] usb 1-1: New USB device found, idVendor=041e, idProduct=4095
[   93.329992] usb 1-1: New USB device strings: Mfr=3, Product=1, SerialNumber=2
[   93.330014] usb 1-1: Product: Live! Cam Sync HD VF0770
[   93.330033] usb 1-1: Manufacturer: Creative Technology Ltd.
[   93.330052] usb 1-1: SerialNumber: 2014090439994
[   93.339634] uvcvideo: Found UVC 1.00 device Live! Cam Sync HD VF0770 (041e:4095)
[   93.352641] input: Live! Cam Sync HD VF0770 as /devices/pci0000:00/0000:00:11.0/dwc3-host.2/usb1/1-1/1-1:1.0/input/input3
```

Also, verify that the video device node has been created by typing `ls -l /dev/video0`:

```
root@eejun-edison02:~# ls -l /dev/video0
crw-rw----    1 root     video      81,   0 Nov 10 15:57 /dev/video0
```

Congratulations! You have now successfully connected a USB device!
