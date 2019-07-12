---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
{% if webapp.path contains 'assets/static' %}
{% if webapp.extname == '.html' %}
<li><a href="{{ webapp.path | relative_url }}">{{ webapp.basename }}</a> (last update {{ webapp.modified_time | date_to_string }})</li>
{% endif %}
{% endif %}
{% endfor %}
