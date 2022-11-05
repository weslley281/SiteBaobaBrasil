import express from 'express';
import bodyParser from 'body-parser';
import { pagesRoutes } from './routes/pages.routes';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/pages', pagesRoutes);

export { app };
