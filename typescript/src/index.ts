import express from 'express';
import hello from './routes';

const app = express();

app.get('/', (request, response) => {
  hello(request, response);
})

app.listen(3333);