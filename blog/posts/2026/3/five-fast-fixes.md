---
layout: blogpost.html
meta-description: An accessibility "bang for your buck" list.
title: Five Fast Fixes - Mark Kimmerle's Blog - CT Web Design & Development
date: 2026-03-11
page-title: Five Fast Fixes
page-datetime: "2026-03-11"
authored-date: March 11, 2026
page-excerpt: An accessibility "bang for your buck" list.
categories: other
tags: post
featured: true 
---

<div class="u-b1">

I saw a LinkedIn post the other day that said something like: *“Here are the top accessibility fixes I'd implement on a website to get the most bang for your buck.”* The author was definitely on the right track, and it got me thinking about what my own “bang for your buck” list would look like. If you want to make a site meaningfully better and eliminate a huge percentage of real-world accessibility issues **without rebuilding the entire thing**, start here.

**BONUS:** None of these are rocket surgery that need JavaScript frameworks, accessibility overlays, or a week-long refactor.  Just some good old-fashioned HTML and a few lines of CSS.

<h2 class="u-h2">1. Semantic HTML</h2>

Start with the basics.

Don’t “div soup” your way through a build. Need a button? Use `<button>`, not `<div role="button">`. Put your main content inside `<main>`, not another random `<div>`. Use `<nav>` for menus. Let HTML do its job. It already gives you a ton of accessibility for free — but only if you actually use it.

<h2 class="u-h2">2. Focus Highlighting</h2>

For years, developers loved this CSS rule:

```
outline: none;
```

It removed those “ugly dotted lines” around links, buttons, and form fields. Unfortunately, those outlines were the **only navigation indicator for keyboard users**.

Style your `:focus` states so they’re visible and intentional. And if you really want to hide them from mouse users, use `:focus-visible` instead. Anyone navigating with their keyboard while drinking their coffee will thank you, too.

<h2 class="u-h2">3. Form Labels</h2>

Forms are probably the most notorious accessibility problem on the web.

**Placeholders are ***NOT*** labels.**

Every form field should have a `<label>` whose `for` attribute matches the field’s `id`. And that label should actually be visible on the page. Clear labels help screen reader users, keyboard users, and — honestly — everyone else too.

<h2 class="u-h2">4. Color Contrast</h2>

Check your text for **4.5:1 contrast**, and your interactive icons for **3:1**. There are dozens of free tools that will check this instantly, so there’s really no reason to get this wrong anymore. And trust me: anyone trying to read your site on their phone in bright sunlight will appreciate it.

<h2 class="u-h2">5. Image Alt Text</h2>

Yeah, I know — sometimes it's contextual whether an image needs *meaningful* alt text. But you know what's not up for debate? **Every `<img>` needs an `alt` attribute.**  At a bare minimum, even an empty `alt` is better than no `alt` at all. Go add one.

<h2 class="u-h2">Sixth Man Award - 200% Zoom Testing</h2>

This one gets overlooked a lot, but it's an easy win if you remember to sneak it into the game.

Set your browser zoom to **200%** and see what happens.

Does text overlap? Does content get cut off? Do you suddenly need to scroll horizontally just to read a paragraph? If everything still works at 200%, you’ve probably dodged a whole host of accessibility problems — and you’ll earn some serious tech-nerd street cred in the process.

If your site passes these five checks, you’re already doing better than a ton of live websites. 

If not... get to work.

</div>
