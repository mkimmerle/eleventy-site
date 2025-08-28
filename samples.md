---
layout: layout.html
meta-description: Work samples of Mark Kimmerle, a web designer and developer in Fairfield County, CT.
title: Web Design &amp; Print Design Samples by Mark Kimmerle - CT Web Design &amp; Development
---

<section class="content-container">
	<h1>Work Samples</h1>

	{% for sample in workSamples %}
		<div id="{{ sample.id }}" class="samplebox">
			<div class="samplepic">
				<img src="{{ sample.image }}" alt="">
			</div>
			<div class="sampletxt">
				<h2>{{ sample.company }}</h2>
				{% if sample.role != blank %}
				<p>
					<em>({{ sample.role }})</em>
				</p>
				{% endif %}
				{% if sample.highlights %}
					<ul>
						{% for highlight in sample.highlights %}
							<li>{{ highlight }}</li>
						{% endfor %}
					</ul>
				{% endif %}
			</div>
		</div>
	{% endfor %}

</section>
