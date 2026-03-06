---
layout: blogpost.html
meta-description: Automated tools check rules. They don’t evaluate real-world experience.
title: Automation Is Powerful. It’s Not Enough. - Mark Kimmerle's Blog - CT Web Design & Development
date: 2026-03-01
page-title: Automation Is Powerful. It’s Not Enough.
page-datetime: "2026-03-01"
authored-date: March 1, 2026
page-excerpt: Automated tools check rules. They don’t evaluate real-world experience.
categories: other
tags: post
---

<section class="content-container">

<h1 class="u-h1">{{ page-title }}</h1>

*{{ page-datetime }}*

<div class="u-b1">

I’ve spent years relying on automated accessibility tools. They’re part of my workflow. I use them in the browser. I use them in audits. I’ve trusted engines like axe-core to quickly show me issues before they make it to production.

So this weekend, while I was testing the <a href="https://github.com/mkimmerle/accessibility-audit-tool" target="_blank" rel="noopener">accessibility audit tool I’m building</a>, I decided to run a simple experiment, where I intentionally planted three obvious issues on one of my own pages:

- Poor color contrast
- A jump from <code>&lt;h1&gt;</code> straight to <code>&lt;h3&gt;</code>
- A form <code>&lt;input&gt;</code> with a placeholder, but no proper <code>&lt;label&gt;</code>

The tool caught the contrast issue.<br>
It caught the heading issue.<br>
But it did **NOT** flag the missing label.

Meat Loaf once sang that "two out of three ain't bad." But in this case, he's wrong.

Placeholder-only form fields are one of the most common accessibility mistakes on the web. And while the engine behind the scan — built by Deque Systems — is widely respected (for good reason; I wouldn't be using it otherwise), this was a reminder of something important:

**Automated tools check rules. They don’t evaluate real-world experience.**

---

<h2 class="u-h2">The Real-World Problem</h2>

Imagine you click into a form field that says:

*Phone number (include area code)*

You click. The placeholder disappears. Your phone rings. Five seconds later, you come back.

Now, what format did it want? Dashes? No dashes? Parentheses? Do you even remember what field you clicked into?

For many users — including people with cognitive disabilities, memory challenges, or attention limitations — that tiny friction point becomes a barrier.

For screen reader users, placeholder text is often unreliable or inconsistently announced.

Technically, the field might pass some automated checks. But functionally, it can still fail a human being. That’s the gap.

---

<h2 class="u-h2">Why This Matters for Businesses</h2>

When a form can’t be completed smoothly, businesses lose money.

If someone can’t:

- Schedule a dentist appointment
- Submit a contact form
- Complete a checkout
- Request a quote

They don’t convert. 

Accessibility barriers aren’t abstract compliance issues. They block transactions. They create frustration. They erode trust.

And beyond lost revenue, there’s legal exposure. When users are prevented from completing core functions, that’s where accessibility complaints — *and lawsuits* — begin.

Automated tools dramatically reduce risk by catching systemic code-level issues early and helping teams find prevent patterns from spreading.

But they don’t guarantee that your site works for real people.

---

<h2 class="u-h2">The 30–50% Reality</h2>

It's estimated that automated testing tools typically only catch 30–50% of accessibility issues. That’s not because the tools are bad. It’s because many accessibility problems depend on context, clarity, workflow, and human understanding.

If even a highly respected engine can miss a common real-world usability problem, that doesn’t mean automation failed. It means automation is limited.

Which is why tools like the one I’m building work best alongside human review: automation finds obvious patterns early, and humans fill in the gaps that rules alone can’t catch.

---

<h2 class="u-h2">The Right Way to Think About It</h2>

The tool I’m building is designed to surface high-level issues quickly and consistently across an entire site. It’s a first layer of defense that reveals obvious problems before they become systemic.

But no automated tool (not even the one I'm making) replaces informed human review.

Automation is powerful. It reduces risk, it improves quality, and it saves time.

But it’s not enough.

If you care about conversions, trust, or legal safety, accessibility can’t begin and end with a scan. It has to include human judgment.

Because at the end of the day, accessibility isn’t about passing a test — it’s about whether people can actually use your website.

That's why the most defensible approach combines the two: automated scanning to catch patterns at scale, and informed human review to catch what the rules miss. If you're not sure where your site stands on either front, that's worth knowing before someone else finds out for you.

</div>

</section>
