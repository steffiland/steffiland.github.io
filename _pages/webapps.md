---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
{% if webapp.path contains 'assets/static' %}
<li><a href="{{ webapp.path | relative_url }}">{{ webapp.basename }}</a></li>
{% endif %}
{% endfor %}
