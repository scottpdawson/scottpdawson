---
title: "12 Things I Learned After Converting Wordpress Sites to Eleventy"
date: "2020-10-25"
permalink: "convert-wordpress-to-eleventy/"
hero: "/images/eleventy-screenshots/taughannock.png"
description: "I read about static site generators like Hugo and Eleventy and saw the light. After some quick reads on comparing the leading contenders, I rolled up my sleeves with Eleventy."
tags:
  - eleventy
  - wordpress
---

Self-hosted Wordpress? Periodic updates and backups? Inflexible templates? SSL issues and inexplicable server spikes with GoDaddy? Forget it. I wanted out of the game of hosting my own Wordpress and paying money for what is admittedly not a series of highly-trafficked web sites. I read about static site generators like Hugo and Eleventy and saw the light. After some quick reads on comparing the leading contenders, I rolled up my sleeves with Eleventy.

The new sites are [scottpdawson.com](https://scottpdawson.com/) (this one), [skirtrunner.com](https://skirtrunner.com/), [taughannock.us](https://taughannock.us/), [erdawson.com](https://erdawson.com/), [xkdawson.com](https://xkdawson.com/), and [artofworkingremotely.com](https://artofworkingremotely.com/). I think I had the most fun with the Taughannock conversion, because it allowed me to really think freely about the templates and do some sophisticated things (IMHO) with auto-generating front matter like permalinks and calculating what season a post was generated in. Here are 12-ish things I learned after converting these four Wordpress sites to Eleventy.

## Getting Started

I chose Dan Urbanowicz's **eleventy-netlify-boilerplate** project as a starting point. Netlify's automation and built-in SSL made it a very attractive choice. Here's the general startup process.

1. [One-click install](https://templates.netlify.com/template/eleventy-netlify-boilerplate/)
2. Go to Netlify’s General > Site Details and change name to something more friendly
3. <code>git clone</code> to my local desktop

From there, follow the <code>README</code> instructions:

1. <code>npm install @11ty/eleventy</code>
2. Edit <code>\_data/metadata.json</code>
3. <code>npm install</code>
4. <code>npx @11ty/eleventy --watch</code> or <code>npx eleventy --serve --quiet</code>

I also chose to use [Netlify's Large Media service](https://docs.netlify.com/large-media/overview/#large-media-docs) to host full-resolution images and [serve smaller versions to my pages](https://example-nlm-picture.netlify.com). The [setup documentation](https://docs.netlify.com/large-media/setup/) is fantastic and I tracked my images folder with <code>git lfs track "images/\*\*"</code>.

## Downloading Wordpress Posts, Pages, and Images

I had to get my posts, pages, and images into my local folder before I could start updating them for use in Eleventy. I exported the whole site's contents as an XML file from Wordpress (go to your site's <code>/wp-admin/export.php</code> page and follow the instructions), and used FTP to fetch all of the images into my <code>/images</code> folder. I also got a [great package for converting Wordpress posts and pages to markdown](https://github.com/lonekorean/wordpress-export-to-markdown). Here's the steps I used for the markdown conversion:

1. <code>git clone</code> the above repo and put your downloaded XML in the root folder
2. <code>npm install</code>
3. <code>node index.js</code> and follow the instructions

By default, the tool converts only posts. There's an easy edit on line 39 of <code>parser.js</code> to convert pages on a second pass.

## Batch Image Conversion using Mac Terminal

You don't need all of the size variations for the Wordpress images, since Large Media takes care of resizing for us. I'm on a Macbook, and found the following Terminal commands quite helpful. Your mileage may vary.

**Rename jpeg to jpg**
<code>find . -iname "\*.jpeg" -exec bash -c 'mv "$0" "${0%\\.jpeg}.jpg"' {} \\;</code>

**Remove all XxX sized images from Wordpress** (Mac regex find is a little weird)
<code>find -E . -type f -regex '.\*[0-9]+x[0-9]+.(jpg|png|gif|jpeg)$' -delete</code>

**Move all images from subfolders to single folder**
<code>find /path/to/images -mindepth 2 -type f -exec mv -i '{}' /path/to/images ';'</code>

## Batch Markdown Image Path Replacement in Visual Studio Code

I also found these useful to convert Wordpress image code to markdown image code. You have to use Regex find and replace in VS Code, and you might need to tweak these to your unique circumstances. My replacement text, for example, is for my own "picture" shortcode I wrote.

**Replace resized image references**
Replace <code>!\\[(.*)\\]\\((.\*)-[0-9]+x[0-9]+.(jpg|jpeg|png)\\)$</code> with <code>{\% picture "$2.$3", "$1" \%}</code>

**Replace non-resized image references**
Replace <code>!\\[(.*)\\]\\((.\*).(jpg|jpeg|png)\\)$</code> with <code>{\% picture "$2.$3", "$1" \%}</code>

## Contact Form

The <code>eleventy-netlify-boilerplate</code> project also sets up a contact form with [Netlify Forms](https://www.netlify.com/docs/form-handling/) as a processing backend. This all worked out of the box and was easy to set up. You configure notifications of submissions through Netlify's administration screens.

## Content Management

I tried out the [Netlify's content manager](https://www.netlifycms.org/docs/configuration-options/) by accessing /admin on my published site. I added users in Netlify’s Identity console. I could edit a post and add an image, and it all synced back to my local via git. Very cool, but the service's limitations became clear pretty quickly. First, it requires some savvy I don't yet have to configure the CMS preview to be accurate, and also doesn't support any nesting of markdown files or images as of this writing. No worries for me, though, since I decided VS Code and git were a fine enough workflow for me.

## Markdown User Snippets for VS Code

I found it helpful to configure Visual Studio code to spit out complicated markdown using [user snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets). The file is stored in <code>~/Library/Application Support/Code/User/snippets/markdown.json</code>. Make sure your VS Code's <code>editor.tabCompletion</code> is set to true. I used the following user snippets:

{% githubGist "0bef072b68d7eb3c60e0d2ffdb43e83d" %}

## Search

I followed [Phil Hawksworth's instructions for static search](https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/). Brilliant. It offers a fallback to doing a Google site search if JavaScript is disabled.

## Gotchas

Well, almost gotcha, because I found solutions for these issues.

On <code>git push</code> after installing the Large Media service, I got an error saying <code>git: 'credential-netlify' is not a git command</code>. I found [Piper's article](https://piperhaywood.com/configuring-and-troubleshooting-netlify-large-media/) really helpful here. Specifically, had to add <code>"helper = osxkeychain"</code> before the <code>netlify</code> line in <code>/Users/username/.netlify/helper/git-config</code>.

When I was just starting out, I didn't realize that permalinks should have trailing slash. It's in the documentation but it bit me anyway. If you find that files are not being written to <code>filename/index.html</code> and instead are being written to <code>filename.html</code>, check this detail. I also found that sometimes I needed to delete the <code>\_site</code> folder with the generated content and just restart.

I ran into some problems configuring one of my repositories on another computer, specifically with Netlify's Large Media. Here are the steps I followed to get it configured for an existing repository on a new computer.

1. Download Git Large File Storage from [git-lfs.github.com](https://git-lfs.github.com/)
2. run <code>sudo spctl --master-disable</code> in the terminal.
3. <code>git lfs install</code>
4. <code>sudo chown -R $USER /usr/local/lib/node_modules</code>
5. <code>sudo npm install netlify-cli -g</code>
6. <code>netlify plugins:install netlify-lm-plugin</code>
7. <code>netlify lm:install</code>

## Deploying

After pushing my files to git, Netlify picked them up, generated the site, and made it live. All that remained was the map my existing domain's A record to Netlify, and they provided clear instructions for doing so.

## Eleventy's Leaderboard

Eleventy has a performance leaderboard at [11ty.dev/speedlify](https://www.11ty.dev/speedlify/). To add your Eleventy site to the leaderboard:

1. Clone https://github.com/11ty/11ty-website
2. Create a new file in `_data/sites/*.json` (you can model after [my commit](https://github.com/11ty/11ty-website/pull/744/commits/906c873a131293d789fcef707e3bcc6d1af4c70d))
3. Commit your new file and create a pull request

## Resources

- [Eleventy Documentation](https://www.11ty.dev/docs/)
- [Git Repo for scottpdawson.com](https://github.com/scottpdawson/scottpdawson)
- [Git Repo for skirtrunner.com](https://github.com/scottpdawson/skirtrunner)
- [Git Repo for taughannock.us](https://github.com/scottpdawson/taughannock)
- [Git Repo for erdawson.com](https://github.com/scottpdawson/elizabethrdawson)
- [Git Repo for xkdawson.com](https://github.com/scottpdawson/xanderkdawson)
- [Git Repo for artofworkingremotely.com](https://github.com/scottpdawson/art-of-working-remotely)
