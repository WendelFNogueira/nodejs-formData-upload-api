import app from './app.js';
import { logger } from './util/logger.util.js';

const port = 3000;
app.listen(port, () => {
    logger.info(`Server is listening on port ${port}`);
    logger.info('Waiting for database connection...');
});