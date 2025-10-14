---
layout: blogpost.html
meta-description: Because apparently everyone needs one.
title: My Custom CSS Reset - Mark Kimmerle's Blog - CT Web Design & Development
page-title: My Custom CSS Reset
page-datetime: "2025-10-14"
authored-date: October 14, 2025
page-excerpt: Because apparently everyone needs one.
categories: other
tags: post
---

<section class="content-container">

<h1 class="u-h1">{{ page-title }}</h1>

*{{ page-datetime }}*

<div class="u-b1">

For... reasons? ... I went down the rabbit hole of CSS resets. It seems like everyone else in the world has one, and even though I've used some of these ideas in some capacity for a long time, I've never formally gathered them up into one file.  So from now on, this is going to be the starter kit that I use for anything I build.

Here's a [CodePen link to my version](https://codepen.io/mkimmerle/pen/WbrEPjz), with some explanations below.

<h2 class="u-h2">Disclaimer</h2>

This is fairly short and fairly simple.  Like, there are a TON of fancy new whiz-bang CSS features that you **won't** see here -- you're free to use them if you want to, of course, but to me, they don't feel necessary for a starter/reset.  Keep it simple, amirite?

<h2 class="u-h2">The File</h2>

<pre><code>	
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  color-scheme: light-dark;
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
  line-height: 1.5;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  font-feature-settings: "kern";
  font-kerning: normal;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.1;
  text-wrap: balance;
}

p, li {
  text-wrap: pretty;
}

img, svg, video, iframe, canvas {
  display: block;
  max-inline-size: 100%;
  block-size: auto;
  border-style: none;
}

svg {
  fill: currentColor;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  inset-block-end: -0.25em;
}

sup {
  inset-block-start: -0.5em;
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

input, select, textarea, button {
  font-family: inherit;
  font-size: inherit;
}

input:is([type="checkbox"], [type="radio"]), select, label, button {
  cursor: pointer;
  line-height: 1;
}

fieldset {
  border:  0;
  margin:  0;
  padding:  0;
}

[aria-disabled="true"], [disabled] {
  cursor: not-allowed;
}

[hidden] {
  display: none !important;
}

*:focus-visible {
  outline: 2px solid crimson;
  outline-offset: 1px;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
    interpolate-size: allow-keywords;
  }
}

</code></pre>

<h2 class="u-h2">The Reasons</h2>

<h3 class="u-h3">The Basics</h3>

<pre><code>	
*, *::before, *::after {
  box-sizing: border-box;
}
</code></pre>

We've all been using this since, like, forever at this point, so... duh.

<h3 class="u-h3">Typography... mostly</h3>

<pre><code>	
html {
  color-scheme: light-dark;
  font-size: clamp(1rem, 1rem + 0.5vw, 2rem);
  line-height: 1.5;
  word-break: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  font-feature-settings: "kern";
  font-kerning: normal;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</code></pre>

Most of these are design-ish text-related things to help me get away with faux font styling without annoying the designers too badly, but there are also a few noteworthy things I like, such as:

- Fluid font sizes, which I haven't used enough over the years but probably should
- A readable line height, to help make things look nice and to meet some accessibility guidelines
- Some guardrails to break up and hyphenate the occasional long word that usually sneaks into production unnoticed because it wasn't in your "Lorem ipsum" dummy copy when you dev-ed and QA-ed the site

For me, the big one here is <code>color-scheme</code>. Believe it or not, I've never had a chance to build a dark mode on a real site before. It's about time I forced myself to try, though.  Do unto others and all that, y'know?

<h3 class="u-h3">Nuke it from orbit</h3>

<pre><code>	
body {
  margin: 0;
  padding: 0;
}
</code></pre>

Sooner or later, we almost always end up overriding the browser's default <code>&lt;body&gt;</code> spacing. Might as well get that out of the way now.

<h3 class="u-h3">More typography</h3>

<pre><code>	
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.1;
  text-wrap: balance;
}

p, li {
  text-wrap: pretty;
}
</code></pre>

Some baseline styles for heading elements, like bold type and a tighter line height.  I like using <code>text-wrap: balance</code> for headings and <code>text-wrap: pretty</code> for copy to help make the text more balanced and readable (even though **pretty** isn't widely supported yet, but why not future-proof while we're here?).

<h3 class="u-h3">Set it and forget it</h3>

<pre><code>	
img, svg, video, iframe, canvas {
  display: block;
  max-inline-size: 100%;
  block-size: auto;
  border-style: none;
}

svg {
  fill: currentColor;
}

sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  inset-block-end: -0.25em;
}

sup {
  inset-block-start: -0.5em;
}
</code></pre>

Pretty self-explanatory here.

<h3 class="u-h3">Mostly accessibility</h3>

<pre><code>	
.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

input, select, textarea, button {
  font-family: inherit;
  font-size: inherit;
}

input:is([type="checkbox"], [type="radio"]), select, label, button {
  cursor: pointer;
  line-height: 1;
}

fieldset {
  border:  0;
  margin:  0;
  padding:  0;
}

[aria-disabled="true"], [disabled] {
  cursor: not-allowed;
}

[hidden] {
  display: none !important;
}

*:focus-visible {
  outline: 2px solid crimson;
  outline-offset: 1px;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
    interpolate-size: allow-keywords;
  }
}
</code></pre>

Here, we're doing stuff like:

- Handling 'visually-hidden' text like skip links
- Making sure interactive elements look interactive -- i.e., giving them the finger-style cursor on hover
- Encouraging ourselves to properly use the <code>&lt;fieldset&gt;</code> element when we put radio buttons or checkboxes in a form, but also removing the annoying grey border
- Making sure non-interactive hidden and disabled elements look non-interactive by giving them a 'not-allowed' hover cursor
- Hiding hidden elements
- Adding focus highlighting for keyboard navigation (I know designers don't like to see the border around links and form fields and whatnot, but...  it's important, folks)
- Not using fancy scrolling behavior and other animations when someone tells their browser to minimize unnecessary motion (again, respect the user)

<h2 class="u-h2">Thoughts?</h2>

The more I look at this, the more I'm likely to find things I should change (for instance, I should probably add a <code>max-width</code> character setting for content pages), so I bet this will evolve over the days/weeks/months ahead. If anyone ever actually reads this and has any suggestions, I'd really appreciate the feedback.

</div>

</section>
