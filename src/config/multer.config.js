import directoryConfig from './directory.config.js';
import environmentConfig from './environment.config.js';
import { storageTypes } from '../core/storage.core.js';

export const multerConfig = {
    dest: directoryConfig.dir.uploadsDir,
    storage: environmentConfig.app.env === 'development' 
    ? storageTypes.local 
    : storageTypes.prod,
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
            'image/svg+xml',
        ];
        
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type.'));
        }
    },
};