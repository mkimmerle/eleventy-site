---
layout: blogpost.html
meta-description: Automated tools check rules. They don’t evaluate real-world experience.
title: AI Didn’t Make Me A 10x Developer. It Showed Me How Bad I Was At Giving Instructions. - Mark Kimmerle's Blog - CT Web Design & Development
date: 2026-04-27
page-title: AI Didn’t Make Me A 10x Developer. It Showed Me How Bad I Was At Giving Instructions.
page-datetime: "2026-04-27"
authored-date: April 27, 2026
page-excerpt: Tools are only as good as the hands that are using them.
categories: other
tags: post
---

<section class="content-container">

<h1 class="u-h1">{{ page-title }}</h1>

*{{ page-datetime }}*

<div class="u-b1">

I've been doing front-end development since the *Office Space* days, and no matter how much I do, I've always had this nagging feeling that I'm behind on ***something***.

Way back when, it was responsive design.  Then it became frameworks.  Later it was performance.  Now it's AI.

Everywhere I look, developers are talking about “agent workflows,” “autonomous systems,” and how they’ve reinvented the way they build software.  It all sounds very shiny and fancy and magical.

As usual, my experience has been… decidedly less.

For the past few months, I’ve been building a side project with a lot of AI help along the way.  Not in any structured, well-planned sense, though.  Really just bouncing between ChatGPT, Claude, and Gemini, pasting in code, asking questions, trying things, and seeing what sticks.

A lot of it has been genuinely impressive.  There have been plenty of times where something that would’ve taken me (or even a team of mes) a week in the before times legitimately got solved in a few minutes.

But there's also been a ton of watching things go completely off the rails.  Lots of answers that looked right but weren’t, fixes that broke unrelated parts of the code, and long back-and-forth threads that went nowhere.

When I was able to pull myself together and wrap my head around the failures, though, I finally saw a pattern.

The tools weren't the only things that were inconsistent.

So was I.

<h2 class="u-h2">Why I Was Using AI In The First Place</h2>

Before I start in on the AI stuff, I should probably add some context on what I was building.

I wanted to make my own <a href="/blog/posts/2026/2/i-built-a-thing/" target="_blank" rel="noopener">accessibility testing tool</a>.  Nothing earth-shattering.  Just something I could actually use on real projects, and maybe something other developers would find useful, too.

The problem was, it wasn’t a small task, or an “AI built my app in a day” kind of thing.  Even a basic version would involve a mix of crawling logic, DOM analysis, reporting, and a decent understanding of accessibility standards.

It’s the kind of thing I knew **could** be built **eventually**, but not quickly, and definitely not by myself.

So I did what a lot of people (developers, sure, but others, too) are doing: I used AI to help me get it off the ground.  The plan wasn't to have it do the parts I knew how to do, but to get me through the parts I knew I’d get stuck on or maybe never solve on my own.

At least, that was the idea.

<h2 class="u-h2">What I Thought It Would Be Like</h2>

Gotta admit, I was pretty naive going into this.  I actually believed I could just describe what I wanted, and then the AI would know how to see the whole picture, recommend an approach, and build it step by step in a logical and solid way.  Like pair-programming with Data from *TNG*—someone who never gets tired and can explain all the tech instantly.

Calling that idea “optimistic” would be an understatement.

<h2 class="u-h2">What I Did First</h2>

The first thing I did was open ChatGPT and type something like:

*“I want to build a tool I can run locally in a browser, where I can type in a URL and have it run an accessibility test across every page on that site.  How do I do that?”*

I think I thought I'd get a fully-formed project plan.  What actually came out was more like general architecture suggestions, a few framework and library recommendations, and the reassurance that all this was “very doable.”

It did turn out to be doable.  But that first message was less like a map and more like a sketch on a napkin drawn by the guy at the roadside general store.

And the difference between the two is where things got messy fast.

<h2 class="u-h2">When It Started To Break Down</h2>

It wasn't a problem at first.  When you realize you're moving so much faster than you could on your own, it's probably normal to ignore the speed limit signs a bit and just enjoy the thrill of the ride.  And yeah, I was enjoying the ride.

The early parts of the project were mostly scaffolding, like setting up a basic crawler, wiring together some APIs, getting something that resembled a working flow.  In those stages, AI was crazy useful.  I could ask for an idea, tweak it, move forward, get an easy answer for a broken dependency, go to the next step…  lather, rinse, repeat.

It wasn’t perfect, but it was pretty good.  Until I hit the parts where things had to be precise, like “this layout is broken because of this specific interaction between these styles and this DOM structure” precise.  That’s where it went sideways.

I would describe the issue, get a suggestion, try it, and watch something unrelated break somewhere else.  Then I’d go back, re-explain the problem more clearly, get a different suggestion, and repeat the cycle.  Each “iteration” felt less like progress and more like hitting the TV with your shoe when the picture goes fuzzy.

The longer it went on, the more frustrated I got, and the worse my prompts became.  Instead of even trying to describe the problem, I was reacting to it (and badly, too…  but we'll get to that later).  

I took a breath and tried to push the “AI sucks” thoughts out of my brain.  I assumed it was just part of the learning curve of using AI for real development.  So I tried something different.

Instead of relying on just one tool, I started using ChatGPT, Claude, and Gemini together.  If one of them said something that didn’t feel right, I’d ask the same question to the others.  If I got different answers, I’d try to judge them or use one to keep the others honest.

Whatever you want to call that process, it certainly wasn't “orchestrating” tools or anything fancy like that.  It was more like trying not to blindly trust the answers and think a little more critically instead.

For a little while, that helped.  It at least gave me some confidence that I was headed in the right direction.

But it didn’t really solve the underlying issue.

It just delayed it.

<h2 class="u-h2">The “Red Alert” Moment</h2>

I used Claude a lot to help design and build the report templates.  There was a flexbox issue that borked the alignment in a way that didn’t immediately make sense (or maybe should've made sense if I'd been watching more closely).  One of those classic developer moments where “this should be easy” but never is…  which I think is what I was hoping to avoid by using AI in the first place.

So I did what I’d been doing throughout the project: I described the problem, got a suggestion, tried it, and… nothing changed.

I tried again.  And again.  And again.

My prompts stopped being actual questions and devolved into anger instead of debugging.  “This is still broken.”  “Why isn’t this working?”  “JUST FIX IT!!!”

The responses were equally ugly.  Suggestions became more and more vague, and things that were working before started breaking.

I'd stopped trying to solve the problem, or even think about what I was writing at all.  My prompts alternated between f-bombs and repeating the words “Screw Flanders” over and over again.

And at one point, Claude basically said something like: “I’m not sure what else to try here.”

So I gave up on Claude and copied the exact same code and a slightly more detailed question into Gemini.

In seconds, it pointed to a single line of CSS causing the entire issue.

No back-and-forth. No exploration. Just the answer.

That exchange finally woke me up to what was wrong.  These weren't one-offs, but a pattern—not just in how things were breaking, but in how losing control of my side of the process was causing things to break.

<h2 class="u-h2">What I Realized</h2>

Eventually (much later than I probably should've, tbh), I stopped treating issues like individual bugs, and started to recognize the same failure repeating itself in different forms.

If it wasn't a CSS issue I couldn’t clearly isolate, it was a back-end logic error where I didn’t fully understand the state of the system I was trying to control, or the bloated and convoluted structure of the code itself, because I'd been accepting solutions that worked in isolation but didn’t hold up under different use cases.

I realized (and I think this might be a common thread that a lot of AI users have experienced):

**When I didn’t explicitly prompt for restraints, AI defaulted to large, clumsy implementations, with functions and files that tried to do everything all at once.**

So I started pushing the tools back toward “DRY” principles like smaller components, clearer boundaries, and more deliberate separation of concerns.  Instead of telling AI to “build this for me,” it became “help me break this into chunks I can actually wrap my head around.”

When I was calm and specific, the tools were genuinely useful.  But when I was frustrated, vague, or trying to move too fast, everything got blurry—my prompts, the responses, and even my understanding of the system itself.

And it wasn't really AI's fault.  AI wasn’t being obtuse.  I was.  AI was just trying to fill the gaps I was leaving behind.

<h2 class="u-h2">What It All Means</h2>

I still have the same feeling I started with, that I’m behind on whatever the “best way to build things” is supposed to be.  That'll probably never change.

But when I see those “I'm orchestrating teams of agents” posts now, they read a little differently than they used to.  I'm not skeptical, and I'm not awestruck, either.  Instead, I think more about the process for getting there.  The mess that I've been living through?  Maybe I'm not the only one, and they just figured it out before I did.

AI hasn't made me a 10x developer by doing all the work for me.  It's made some things faster, but it's also emphasized a different part of the work.  The design, architecture, and debugging—the thinking parts—don't go away.  They're just part of the prompts themselves now.

Or at least they should be, if you're doing it right.  Which I wasn't.

I'm still working on it.

</div>

</section>
