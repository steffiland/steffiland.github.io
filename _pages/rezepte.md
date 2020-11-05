---
title: "Rezepte"
permalink: /rezepte/
layout: single
author_profile: false
---

Alle Rezepte:
{% for post in site.categories.rezepte %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
