---
title: "Webapp Collection"
permalink: /webapps/
---

The following webapps are available:

{% for webapp in site.static_files %}
{% if webapp.path contains 'assets/static' %}
* [{{ webapp.name }}]({{ webapp.path }})
{% endif %}
{% endfor %}
