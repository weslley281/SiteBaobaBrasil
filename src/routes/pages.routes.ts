import { Router } from 'express';

const pagesRoutes = Router();

pagesRoutes.get('/', (request, response) => {
  response.render('home');
});

export { pagesRoutes };
