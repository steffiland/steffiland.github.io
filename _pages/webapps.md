---
title: "Webapp Collection"
permalink: /webapps/
---

## Webapp Collection

The following webapps are available:

{% assign webapp_files = site.static_files | where: "webapp", true %}
{% for myimage in webapp_files %}
  {{ myimage.path }}
{% endfor %}