---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
  {% if webapp.path contains 'assets/static' %}
    <a href="{{ webapp.path }}" alt="{{ webapp.basename }}">{{ webapp.name }}</a>
  {% endif %}
{% endfor %}
