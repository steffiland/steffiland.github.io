---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
{% if webapp.path contains 'assets/static' %}
{% if webapp.extname == '.html' %}
{% assign path_to_array = webapp.basename | split: "/" %}
{% assign projectname = path_to_array.last }}
<li><a href="{{ webapp.path | relative_url }}">{{ projectname }}</a> (last update {{ webapp.modified_time | date_to_string }})</li>
{% endif %}
{% endif %}
{% endfor %}
