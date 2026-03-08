---
layout: layout.html
meta-description: Website Accessibility Assessment in Shelton, CT.
title: Is Your Website an Accessibility Liability? Mark Kimmerle - CT Website Accessibility Testing
---

<section class="content-container">
	<h1 class="u-h1">Is Your Website an Accessibility Liability?</h1>
	<style>label span{display:inline-block;width:100%;font-weight:700;}img{display:block;width:100%;max-width:500px;border:1px solid #eee;border-radius:8px;box-shadow: 0 4px 12px rgba(0,0,0,0.1);}@media(min-width:600px){img{float:right;margin:0 0 2rem 2rem;}}</style>
	<p><img src="/art/a11y_audit_tool.jpg" alt="Dashboard showing 27 new accessibility violations and 1 resolved issue"></p>
	<p class="u-b1">
		If your business has a website, it may be exposed to ADA accessibility complaints — even if you've never thought about it. A growing number of small businesses receive demand letters every year from plaintiffs' attorneys who use automated tools to identify accessibility failures. Having a documented, professional assessment on record is the difference between demonstrating good-faith effort and having nothing to show.
	</p>
	<h2 class="u-h2">What You Get</h2>
	<p class="u-b1">I conduct a technical accessibility assessment of your website using industry-standard tools and manual review. You receive three reports:</p>
	<ul>
		<li class="u-b1">A technical findings document your developer can act on</li>
		<li class="u-b1">An executive summary for decision-makers</li>
		<li class="u-b1">A plain-English letter explaining what was found and what it means for your business</li>
	</ul>
	<h2 class="u-h2">About Me</h2>
	<p class="u-b1">I'm a front-end developer based in Shelton, CT, with 25 years of experience building for the web. Accessibility has been a core part of my practice for years — not as an afterthought, but as a design constraint I take seriously on every project from start to finish. I've built my own auditing tools, and I understand both the technical and the human side of what makes a website work for everyone.</p>
	<h2 class="u-h2">Let's Talk</h2>
	<p class="u-b1">Curious whether your site has issues worth knowing about? Email me through this form — I'll take a quick look and tell you honestly what I find.</p>
	<p class="u-b2"><em>All fields are required</em></p>

	<form name="accessibility" action="/thanks" method="POST" data-netlify="true" id="jform">
	<div class="input-container">
		<label for="name">
			<span>Name</span>
			<input type="text" name="name" id="name" class="text-input" required>
			<div role="alert" class="error" hidden>Please enter your name</div>
		</label>
	</div>
	<div class="input-container">
		<label for="email">
			<span>E-mail</span>
			<input type="email" name="email" id="email" class="text-input" required>
			<div role="alert" class="error" hidden>Please enter a valid e-mail address</div>
		</label>
	</div>
	<div class="input-container">
		<label for="phone">
			<span>Phone (ex: 203-555-1234)</span>
			<input type="tel" name="phone" id="phone" class="text-input" pattern="^\d{3}-\d{3}-\d{4}$" required>
			<div role="alert" class="error" hidden>Please enter your phone number (ex: 203-555-1234)</div>
		</label>
	</div>
	<div class="input-container">
		<label for="url">
			<span>Website URL (ex: https://www.yoursite.com)</span>
			<input type="url" name="url" id="url" class="text-input" required>
			<div role="alert" class="error" hidden>Please enter your website URL</div>
		</label>
	</div>
	<div class="input-container">
		<label for="comments">
			<span>Questions or Comments</span>
			<textarea name="comments" id="comments" class="text-input" required></textarea>
			<div role="alert" class="error" hidden>Please enter a message</div>
		</label>
	</div>
	<div class="input-container">
		<button type="submit" name="Submit" id="send" class="btn-primary">Submit</button>
	</div>
</form>

</section>
