import mongoose from 'mongoose';
import environmentConfig from '../config/environment.config.js';
import { logger } from '../util/logger.util.js';

export default mongoose.connect(environmentConfig.db.url, {
    useNewUrlParser: true,
}, () => {
    logger.info("Database is connected");
});