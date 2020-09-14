<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
   goodds item
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
          啊啊啊
        </li>
      {% endfor %}
    </ul>
    <hr/>
    <div>
      {% for item in items %}
        <h1> {{item.title}}</h1>
      {% endfor %}
    </div>

  </body>
  <script>
    console.log('2222')
  </script>
</html>