---
layout: blogpost.html
meta-description: Automated tools check rules. They don’t evaluate real-world experience.
title: Not the Performance Guy&#58; A Case Study in Taking Out the Trash - Mark Kimmerle's Blog - CT Web Design & Development
date: 2026-09-08
page-title: Not the Performance Guy&#58; A Case Study in Taking Out the Trash.
page-datetime: "2026-09-08"
authored-date: September 8, 2026
page-excerpt: How a little patience, a lot of cleanup, and some very old JavaScript transformed an ecommerce site's performance.
categories: other
tags: post
featured: true 
---

<div class="u-b1">
	<style>
		figure {border: 1px solid #666}
		figcaption {display: block; margin: .5rem auto; font-size: .8rem; font-style: italic; color: #555; text-align: center; text-wrap: balance}
	</style>

As a developer, I've always thought of myself as the "accessibility guy," not the "performance guy."  

Semantic HTML and clean CSS were my bread and butter.  

Sure, accessibility and performance tend to overlap — you can't think about alt text without looking at the nuances of `<img>` elements, you inherently reach for `<details>` and `<summary>` instead of JS accordions, and clean CSS equals less CSS equals smaller render-blocking files to download — but performance was never the headliner.  

It was more like sitting through Candlebox so you could see Rush.  (No offense, Candlebox.  You played a perfectly cromulent opening set that night.  But even with the flu, Rush blew the roof off the dump.)

But then I inherited an ecommerce site with FCP and LCP times north of five seconds.

And performance suddenly became Hendrix at a Monkees show.

That first month?  Oof.  Sitting there in onboarding meetings watching those numbers stubbornly sit in Google's "poor" zone while I knew I was supposed to be the fixer but couldn't get access to the version control system was excruciating.  

But the upside was that it gave me plenty of time to investigate.  

I expected that investigation to be like *CSI* with a ton of profiling tools and network diagnostics.  Instead, it was more like an episode of *Hoarders* where you're shocked by how much clutter has built up through years of neglect.

And that's the part that probably makes this more relevant, because it didn't require a mastery of network waterfalls or browser APIs or any other shiny tools.

Digging into the code quickly revealed **WHY** the site was so slow, because of exactly **HOW MUCH** stuff it was loading.  For example, I found:

- An entire Font Awesome library loaded globally for *three* icons that should've been inline SVGs
- Modernizr (in 2026!)
- Two — count 'em, **TWO** — full versions of jQuery at the same time (along with jQuery UI, of course)
- A Google Optimize anti-flicker snippet that had been deprecated in 2023
- And a homepage hero "system" that loaded separate desktop and mobile banner images and toggled them with CSS `display: none` — forcing mobile users on flaky cellular data to download a 300KB desktop image they'd never even see

Once I got access to the code, it was just a process of elimination. Take something out, do regression testing, see if anything broke, and if not, move on to the next thing.  

When things *did* break (and they certainly did), that didn't mean, "oh, well, I guess I'm stuck with this."  It just meant digging deeper and taking out smaller pieces to figure out what really needed to be there.  

After a couple weeks of trimming, testing and repeating, I was ready to deploy.

I thought it'd be magic.

And then...  nothing happened.

It honestly took me longer than it should've to figure out how CrUX and its 28-day rolling window actually works (remember: I'm not a performance guy, I just play one on TV). Core Web Vitals field data isn't a live feed — it represents real user sessions collected over a rolling 28-day window.  Which meant every slow visit from the month before my fixes shipped was still quietly dragging the numbers down. 

Every day, I'd refresh my dashboard, see no movement, and wonder if I had any idea what I was doing.  But eventually, the old slow sessions aged out of the window, and the plateau turned into a cliff.

And it kept plummeting and plummeting and plummeting.  And about a month later, FCP had dropped from ~5s to ~1.5s, and LCP was down from ~4.9s to ~1.7s.

<figure>
  <img 
    src="/art/homepage-fcp-p75-chart.svg" 
    alt="Line chart tracking 75th percentile FCP from June 2 to September 5, 2026. FCP sits near 5.1s until a July 14 deploy, then steadily drops across the 28-day CrUX window past Google's 1.8s Good threshold to 1.45s." 
  />
  <figcaption>
    Figure 1: Homepage 75th percentile First Contentful Paint (FCP) CrUX field data surrounding the July 14 deploy, showing the 28-day window drop into Google's "Good" threshold (&le; 1.8s).
  </figcaption>
</figure>

<figure>
  <img 
    src="/art/homepage-lcp-p75-chart.svg" 
    alt="Line chart tracking 75th percentile LCP from June 2 to September 5, 2026. LCP sits near 5.0s until a July 14 deploy, then steadily drops across the 28-day CrUX window past Google's 2.5s Good threshold to 1.67s." 
  />
  <figcaption>
    Figure 2: Homepage 75th percentile Largest Contentful Paint (LCP) CrUX field data surrounding the July 14 deploy, showing the 28-day window drop into Google's "Good" threshold (&le; 2.5s).
  </figcaption>
</figure>

No JS modules.  No IntersectionObservers.  Nothing fancier than finally cleaning out the garage.

I still don't think I'm a "performance guy."  In fact, the more I try to look at web performance, the more I realize how much I actually **DON'T** know.  There are people I respect tremendously who spend their careers thinking about this stuff at a depth I'll never even approach.  I've still got two other sites with INPs over 250ms to prove that point, and 354 accessibility tickets in my backlog to boot.  

But it doesn't take a rocket surgeon to be patient, ask "why is this still here," and then take out the trash.

And anyone can be that guy.

</div>
