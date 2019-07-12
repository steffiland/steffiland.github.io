---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
{% if webapp.path contains 'assets/static' %}
{% if webapp.extname == '.html' %}
{% assign path_to_array = webapp.path | split: "/" %}
<li><a href="{{ webapp.path | relative_url }}">{{ path_to_array.last }}</a> (last update {{ webapp.modified_time | date_to_string }})</li>
{% endif %}
{% endif %}
{% endfor %}
