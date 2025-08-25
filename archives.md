---
layout: default
title: Archives
permalink: /archives/
---
<h2>Archives</h2>
<ul>
{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  <li><h3>{{ year.name }}</h3>
    <ul>
    {% for post in year.items %}
      <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <small>({{ post.date | date: "%b %d" }})</small></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>