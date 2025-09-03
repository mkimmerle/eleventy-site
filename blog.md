---
layout: layout.html
meta-description: Blog by Mark Kimmerle, a web designer and developer in Fairfield County, CT.
title: Mark Kimmerle's Blog  - CT Web Design & Development
---

<section class="content-container">
	<h1 class="u-h1">Blog</h1>
	<p class="u-b1">
		Here's the part where I say a whole bunch of stuff that doesn't mean anything.
	</p>

	<h2 class="u-h2">Recent Posts</h2>

	<ul>
		{% for post in collections.post reversed %}
		<li>
			<b><time datetime="{{post.data.page-datetime}}">{{ post.data.authored-date }}</time></b><br>
			<a href="{{post.url}}">{{ post.data.page-title }}</a><br>
			<i>{{ post.data.page-excerpt }}</i>
		</li>
		{% endfor %}
	</ul>

</section>
