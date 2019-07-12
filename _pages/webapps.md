---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
{% if webapp.path contains 'assets/static' %}
{% if webapp.extname == '.html' %}
{% assign path_to_array = webapp.basename | split: "/" %}
<li><a href="{{ webapp.path | relative_url }}">{{ path_to_array[-2] }}</a> (last update {{ webapp.modified_time | date_to_string }})</li>
{% endif %}
{% endif %}
{% endfor %}
