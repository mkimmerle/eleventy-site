---
layout: layout.html
meta-description: Mark Kimmerle - Web Design and Development in Fairfield County, CT. Front-end designer/developer, proficient in HTML, CSS, and JavaScript, with a focus on creating standards-compliant, cross-browser/cross-platform compatible web sites. Additional experience in PhotoShop, Illustrator, SEO, and e-mail marketing.
title: Mark Kimmerle - Front-End Developer | WCAG / Accessibility | Performance Optimization | Shopify Plus | Shelton, CT
---

<section class="content-container home-welcome">
	<h1 class="u-hXL home-headline">
      I build <span class="home-headline__accent">fast</span> websites.<br>
      I make them <span class="home-headline__accent">accessible</span>.<br>
      I have <span class="home-headline__accent">opinions</span> about both.
    </h1>
    <p class="home-byline">
      <span class="home-byline__name">Mark Kimmerle</span>
      <span aria-hidden="true">·</span>
      <span>Front-End Developer</span>
      <span aria-hidden="true">·</span>
      <span>WCAG / Accessibility</span>
      <span aria-hidden="true">·</span>
      <span>Performance Optimization</span>
      <span aria-hidden="true">·</span>
      <span>Shopify Plus</span>
      <span aria-hidden="true">·</span>
      <span>Shelton, CT</span>
    </p>
    <h2 class="u-h1">Hi, I'm Mark</h2>
	<p class="home-copy u-bXL">
		I'm a front-end developer based in Shelton, CT. I've spent 25 years building things for the web, most recently six years leading front-end development of <a href="/samples/">over a dozen Shopify Plus storefronts</a> for large-scale CPG brands. 
		These days I'm independent, working on <a href="/accessibility/">accessibility audits</a>, <a href="https://www.github.com/mkimmerle/accessibility-audit-tool" target="_blank" rel="noopener">building tools</a>, and writing about whatever's on my mind, 
		which is mostly the web, but occasionally also Costco and monster trucks. And if browsers would let me, I'd use two spaces after a period.
	</p>
	<h2 class="sr-only">Skills</h2>
	<ul class="home-skills">
      <li role="listitem">WCAG 2.1 AA</li>
      <li role="listitem">Core Web Vitals</li>
      <li role="listitem">Shopify Plus</li>
      <li role="listitem">React</li>
      <li role="listitem">Angular</li>
      <li role="listitem">JavaScript</li>
      <li role="listitem">TypeScript</li>
      <li role="listitem">Node.js</li>
      <li role="listitem">CI/CD</li>
    </ul>
</section>

<section class="content-container home-featured">
  <h2 class="u-h1">Featured Articles</h2>
  <div class="home-featured-grid">
    {% assign featuredPosts = collections.post | where: "data.featured", true %}
    {%- for post in featuredPosts reversed -%}
    <a href="{{ post.url }}" class="featured-post">
        <span class="u-b4">
            <time datetime="{{ post.data['page-datetime'] }}">{{ post.data['authored-date'] }}</time>
        </span>
        <h3 class="featured-post__title u-h3">{{ post.data['page-title'] }}</h3>
        <p class="u-b2">{{ post.data['page-excerpt'] }}</p>
    </a>
    {%- endfor -%}
  </div>
</section>

<section class="content-container home-blog">
	<h2 class="u-h1">All Posts</h2>

	<ul>
		{%- for post in collections.post reversed -%}
		<li class="home-blog__item">
			<b class="u-b1"><time datetime="{{post.data.page-datetime}}">{{ post.data.authored-date }}</time></b><br>
			<a href="{{post.url}}" class="u-b1">{{ post.data.page-title }}</a><br>
			<i class="u-b1">{{ post.data.page-excerpt }}</i>
		</li>
		{%- endfor -%}
	</ul>
</section>
