---
layout: layout.html
meta-description: Contact Mark Kimmerle, a web designer and developer in Fairfield County, CT.
title: Contact Mark Kimmerle  - CT Web Design & Development
---

<section class="content-container">
	<style>label span{display:block;font-weight:700}</style>
	<h1 class="u-h1">Contact Me</h1>
	<p class="u-b1">
		Please fill out the form below to send me a message, and I'll get back to you as soon as possible.<br>
		<strong>Remember: All fields are required.</strong>
	</p>
	<form name="contact" method="POST" action="/thanks" data-netlify="true" id="jform">
		<div class="input-container">
			<label for="name">
				<span>Name</span>
				<input type="text" name="name" id="name" class="text-input" aria-describedby="name-error" required>
				<div role="alert" id="name-error" class="error" hidden>Please enter your name</div>
			</label>
		</div>
		<div class="input-container">
			<label for="email">
				<span>Email</span>
				<input type="email" name="email" id="email" class="text-input" aria-describedby="email-error" required>
				<div role="alert" id="email-error" class="error" hidden>Please enter a valid email address</div>
			</label>
		</div>
		<div class="input-container">
			<label for="phone">
				<span>Phone (ex: 203-555-1234)</span>
				<input type="tel" name="phone" id="phone" class="text-input" pattern="^\d{3}-\d{3}-\d{4}$" aria-describedby="phone-error" required>
				<div role="alert" id="phone-error" class="error" hidden>Please enter your phone number (ex: 203-555-1234)</div>
			</label>
		</div>
		<div class="input-container">
			<label for="comments">
				<span>Message</span>
				<textarea name="comments" id="comments" class="text-input" aria-describedby="comments-error" required></textarea>
				<div role="alert" id="comments-error" class="error" hidden>Please enter a message</div>
			</label>
		</div>
		<div class="input-container">
			<button type="submit" name="Submit" id="send" class="btn-primary">Submit</button>
		</div>
	</form>
</section>
