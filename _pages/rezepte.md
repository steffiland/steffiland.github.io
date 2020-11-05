---
title: "Rezepte"
permalink: /rezepte/
author_profile: false
---

## :
 {% assign category = page.title|downcase %}

{% for post in site.posts %}
{% if post.categories contains {{category}}  %}
* {{ post.title }}
{% endif %}
{% endfor %}
