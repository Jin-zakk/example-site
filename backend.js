const express = require('express');
const path = require('path');
const app = express();
app.use(express.json())

/**
 * массив новостей
 */
const news = [
  'Недельный чарт Steam',
  'Хидео Кодзима записал распаковку коллекционного издания',
  'Восьмую «Миссию невыполнима» перенесли на май 2025 года',
  '«Би-би-си» начал съёмки 15 сезона «Доктора Кто»'
]

/**
 * возвращает новости
 */
app.get('/news', (request, response) => {
  response.send(news);
});

/**
 * добавляет новую новость
 */
app.post('/news', (request, response) => {
  const body = request.body;
  console.log('body: ', body);

  news.push(body.news);

  response.sendStatus(200);
});

/**
 * возвращает html страницы
 */
app.get('/', (request, response) => {
  response.sendFile(path.resolve('frontend.html'));
});

const PORT = 5000;
const HOST = 'localhost';
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);