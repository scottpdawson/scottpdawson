---
title: "A Journey of Recovery: Sad Mac to Happy Mac"
date: "2013-09-05"
permalink: "a-journey-of-recovery-sad-mac-to-happy-mac/"
hero: "/images/2013/09/verified.png"
description: "After several odd Spinning Beach Ball of Death (SBBOD) moments and a neighborhood power failure, my hard drive was clearly sick. I feared for the worse."
---

After several odd Spinning Beach Ball of Death ([SBBOD](http://www.thexlab.com/faqs/sbbod.html)) moments and a neighborhood power failure, my hard drive was clearly sick. I feared for the worse, but had a theory that I had some bad drive sectors. Disk Utility's verify process told me about my drive's **"Invalid Node Structure"**, and gave me a dreaded notification: _Disk Utility stopped repairing "Macintosh HD" - Disk Utility can't repair this disk. Back up as many of your files as possible, reformat the disk, and restore your backed-up files._ 

{% pictureRt "/images/2013/09/disk_utility.png", "Skeumorphism" %}

For fans of skeumorphism, it's alive and well in the Disk Utility interface. Unless, of course, you can REALLY use a stethoscope to troubleshoot.

This was frustrating, because I had just done this to try to resolve the problem, but I missed a key step. When you erase your drive, you must select "Security Options" and select at least the first secure option, which not only writes zeroes on the disc, but it also marks bad sectors as such so they would no longer be used. (See: [Security Options](http://mac.tutsplus.com/tutorials/os-x/the-master-guide-to-formatting-a-hard-drive/))

Here are the steps that I took to resurrect my sad Mac.

- **Reformat and "Zero" the Drive (Attempt 1)** You can't do this if you've launched Disk Utility from the partition you're zeroing. I got a "[Couldn't Unmount Disk](http://osxdaily.com/2013/06/14/resolve-a-couldnt-unmount-disk-error-in-disk-utility/)" error that made this clear to me. _**Solution:** create a USB Boot Drive._ I had another Mac with which to do this, but if you don't, I would highly recommend doing this while you can. It's a good thing to have in your bag of tricks. I had a tough time finding a family member or neighbor with either a DVD-R or thumb drive with the requisite 8 GB of space, but a quick trip to Staples solved that problem. I found great resources at [TechRepublic](http://www.techrepublic.com/blog/apple-in-the-enterprise/how-to-create-a-bootable-usb-to-install-os-x/), [MacWorld](http://www.macworld.com/article/1161069/make_a_bootable_lion_installer.html), another [MacWorld](http://www.macworld.com/article/1160124/osxflashdrive.html) page and [TUAW](http://www.tuaw.com/2012/07/25/building-an-os-x-mountain-lion-installer-thumb-drive/) to help with this process.
- **Double-check in Terminal** While I waited for the USB boot drive to finish creating on the other computer, [I ran a file system check (fsck) from Terminal](http://www.reslabs.com.au/journal/invalid-node-structure) just to be sure. As expected, I found the same errors that Disk Utility had reported.
- **Reformat and "Zero" the Drive (Attempt 2)** After rebooting, holding the Option key while doing so, I selected my USB boot drive and loaded up Disk Utility again. This time, the erase process (make sure you go into Security Options and select at least the first level of zeroing) was smooth, taking just a few hours for my 1TB drive.
- **Restore Data** Finally, I was able to [restore my entire system from my Time Machine backup](http://support.apple.com/kb/HT1427). It took eight hours, but my machine greeted me in the morning as I'd left if, pre-crash. **What a relief!**

As a last step, I ran Disk Utility Verify once more. Happiness.

I'm sure that the bad sectors are indicative of a broader problem with the disk, so I'll keep an eye on that by looking at Disk Utility periodically. Then, I'm sure I'll be in the market for a new drive!
