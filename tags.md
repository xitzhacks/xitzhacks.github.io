---
layout: default
title: Tags
permalink: /tags/
---
<h2>Tags</h2>
{% assign alltags = "" %}
{% for post in site.posts %}{% for tag in post.tags %}{% assign alltags = alltags | append: tag | append: ',' %}{% endfor %}{% endfor %}
{% assign uniq = alltags | split: ',' | uniq | sort %}
<ul>
{% for t in uniq %}
  {% if t != '' %}<li><a href="/tags/#{{ t | downcase | replace: ' ', '-' }}">{{ t }}</a></li>{% endif %}
{% endfor %}
</ul>
<hr/>
{% for t in uniq %}
  {% if t != '' %}
  <h3 id="{{ t | downcase | replace: ' ', '-' }}">{{ t }}</h3>
  <ul>
  {% for post in site.posts %}
    {% if post.tags contains t %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>({{ post.date | date: "%b %d, %Y" }})</small></li>
    {% endif %}
  {% endfor %}
  </ul>
  {% endif %}
{% endfor %}