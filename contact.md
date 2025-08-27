---
layout: layout.html
meta-description: Contact Mark Kimmerle, a web designer and developer in Fairfield County, CT.
title: Contact Mark Kimmerle  - CT Web Design & Development
---

<section class="content-container">
<h1>Contact Me</h1>
<p>
	Please fill out the form below to send me a message, and I'll get back to you as soon as possible.<br>
	<strong>Remember: All fields are required.</strong>
</p>
<form name="theform" method="post" action="contact.php" id="jform">
	<div class="input-container">
		<label for="name">
			<span class="sr-only">Name</span>
			<input type="text" name="name" id="name" class="text-input" placeholder="Name" required>
			<div role="alert" class="error" hidden>Please enter your name</div>
		</label>
	</div>
	<div class="input-container">
		<label for="email">
			<span class="sr-only">E-mail</span>
			<input type="email" name="email" id="email" class="text-input" placeholder="E-mail" required>
			<div role="alert" class="error" hidden>Please enter a valid e-mail address</div>
		</label>
	</div>
	<div class="input-container">
		<label for="phone">
			<span class="sr-only">Phone</span>
			<input type="tel" name="phone" id="phone" class="text-input" pattern="^\d{4}-\d{3}-\d{4}$" placeholder="Phone" required>
			<div role="alert" class="error" hidden>Please enter your phone number</div>
		</label>
	</div>
	<div class="input-container">
		<label for="comments">
			<span class="sr-only">Message</span>
			<textarea name="comments" id="comments" class="text-input" placeholder="Message" required></textarea>
			<div role="alert" class="error" hidden>Please enter a message</div>
		</label>
	</div>
	<div class="input-container">
		<button type="submit" name="Submit" id="send" class="btn-primary">Submit</button>
	</div>
</form>
</section>
