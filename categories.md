---
layout: default
title: Categories
permalink: /categories/
---
<h2>Categories</h2>
<ul>
{% assign cats = site.posts | map: 'categories' | uniq %}
{% for p in site.posts %}
  {% for c in p.categories %}{% assign all = all | append: c | append: ',' %}{% endfor %}
{% endfor %}
{% assign uniq = all | split: ',' | uniq | sort %}
{% for c in uniq %}
  {% if c != '' %}
  <li><a href="/categories/#{{ c | downcase | replace: ' ', '-' }}">{{ c }}</a></li>
  {% endif %}
{% endfor %}
<hr/>
{% for c in uniq %}
  {% if c != '' %}
  <h3 id="{{ c | downcase | replace: ' ', '-' }}">{{ c }}</h3>
  <ul>
  {% for post in site.posts %}
    {% if post.categories contains c %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>({{ post.date | date: "%b %d, %Y" }})</small></li>
    {% endif %}
  {% endfor %}
  </ul>
  {% endif %}
{% endfor %}