---
layout: blogpost.html
meta-description: Automated tools check rules. They don’t evaluate real-world experience.
title: 100,847 Accessibility Errors. 28 Actual Problems - Mark Kimmerle's Blog - CT Web Design & Development
date: 2026-04-20
page-title: 100,847 Accessibility Errors. 28 Actual Problems.
page-datetime: "2026-04-20"
authored-date: April 20, 2026
page-excerpt: Accessibility at scale is a pattern problem, not a counting problem.
categories: other
tags: post
---

<section class="content-container">

<h1 class="u-h1">{{ page-title }}</h1>

*{{ page-datetime }}*

<div class="u-b1">

There are plenty of good accessibility testing tools out there. Most of them are either expensive (enterprise SaaS platforms with monthly contracts that make sense for a large team but are out of reach for a solo developer or a small agency trying to do the right thing) or limited to only testing one page at a time.

That's why <a href="/accessibility" target="_blank" rel="noopener">I've been building my own testing tool</a>. I wanted something that could crawl an entire site, run axe-core against every page, and generate a report I could actually act on, without a subscription fee. Nothing fancy. Just a tool that could do the job.

Recently, I pointed it at a live ecommerce site to stress-test it. I figured a few hundred pages, maybe a thousand if I was unlucky.

It was **2,774 pages**.

Watching the counter slowly tick by was the roughest four hours I've had since the time I forgot my glasses when I went to the theater to see *Dances With Wolves*. But it didn't crash. It finished, serialized a massive JSON file, and generated a complete report.

Then I opened the report.

<h2 class="u-h2">The Number That Sounds Terrifying</h2>

**100,847 accessibility errors across 2,774 pages.**

If you're a merchant or an agency account manager, that number probably makes you want to close this page right now and forget I even exist. It sounds like a complete rebuild. It sounds like months of work. It sounds expensive and endless.

But it isn't. Here's why.

<h2 class="u-h2">The Number That Actually Matters</h2>

<p class="u-h4">28</p>

That's the number of unique rule violations across those 100,000+ errors.

Every one of those errors came from just 28 distinct problems, repeated across templates, components, and page types. Fix the template, the section, the snippet, the CSS rule, and you fix the violation everywhere it appears. A link without text on a product card isn't 400 separate bugs — it's one empty alt attribute in one component that renders 400 times.

This is what automated accessibility reports almost never tell you, because they're designed to show you everything. But everything, at scale, is paralyzing. What you really need to know is: how many distinct problems do I have, and which ones appear most often?

That's a pattern recognition problem. And it's exactly what I built the tool to surface.

<h2 class="u-h2">What This Means For E-commerce Specifically</h2>

Shopify and other e-commerce platforms have a structural characteristic that makes this especially true: they're driven by templates and components. A product page is a template. A navigation menu is a component. A star rating is a snippet.

Which means accessibility problems on those sites tend to be systematically repeated — the same missing label, the same div masquerading as a button, the same contrast failure on the same CTA — across dozens or hundreds of pages.

The good news: fixing a template-level issue is one fix. 

The bad news: most accessibility testing tools only test a single page at a time and never surface the pattern. You fix the five issues the plugin caught... and miss the 400 identical instances they didn't look at.

A site-wide audit changes that math entirely.

<h2 class="u-h2">What Automation Still Can't Do</h2>

Those 28 violations were everything the scanner could detect. But "detectable" is a narrower category than it first appears.

Automated tools evaluate what's present against a set of measurable rules. They can flag an image that's missing an alt attribute entirely. What they can't do is tell you whether the alt text that is there is actually meaningful, or if the image is decorative and should have an empty alt instead. Both of those require a human looking at the image in context and making a judgment call. A scanner sees the attribute. It can't read the room.

The same is true for color contrast in certain contexts, form labels that exist but don't clearly describe what the field expects, and link text that's technically present but meaningless without surrounding context (think "click here" and "read more").

And then there's a category of issues that automation struggles with: things that require context. A scanner can tell you when an attribute is wrong. It’s much worse at knowing when something should exist in the first place, especially when that depends on how the interface is meant to be used. That's not a rule check. That's domain knowledge.

Automated scanning is the floor, not the ceiling. This tool finds the floor fast, at scale, across an entire site. Everything above the floor still requires a person.

<h2 class="u-h2">The Practical Takeaway</h2>

If you're a merchant or agency looking at an accessibility problem and feeling overwhelmed by the scope, the number that matters isn't the total error count. It's the number of unique violations, weighted by how often they appear.

Find the three violations that appear on 80% of your pages. Fix those in the templates. Run the scan again.

Accessibility at scale isn't about fixing thousands of issues. It's almost always about finding the handful of problems that created them.

Fix them at the source, and watch the numbers fall.

</div>

</section>
