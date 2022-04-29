import express from 'express';
import morgan from 'morgan';
import routes from './routes/main.routes.js';
import connectToDatabase from './core/database.core.js';
import directoryConfig from './config/directory.config.js';

const app = express();
connectToDatabase;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(directoryConfig.dir.uploadsDir));
app.use(routes);

export default app;