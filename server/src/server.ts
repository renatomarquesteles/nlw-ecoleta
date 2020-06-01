import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json(['Renato', 'Marques', 'Teles']);
});

app.listen(3333);
