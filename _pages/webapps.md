---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
{% if webapp.path contains 'assets/static' %}
<li><a href="{{ site.url }}{{ webapp.path }}">{{ webapp.name }}</a></li>
{% endif %}
{% endfor %}
