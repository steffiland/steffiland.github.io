---
title: "Webapp Collection"
layout: post
permalink: /webapps/
author_profile: false
---

## Webapp Collection

{% assign webapp_files = site.static_files | where: "webapp", true %}
{% for myimage in webapp_files %}
  {{ myimage.path }}
{% endfor %}