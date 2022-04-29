import 'dotenv/config';

export default {
    app: {
        env: process.env.NODE_ENV || 'development',
        name: process.env.npm_package_name || 'formdata-upload-byWendel',
        nameUnderscore: (process.env.npm_package_name || '').split('-').join('_') || 'formdata-upload-byWendel'.split('-').join('_'),
        version: process.env.npm_package_version || '?.?.?',
        description: process.env.npm_package_description || 'Brincando com upload de arquivos',
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || 3000,
        url: process.env.APP_URL || `http://localhost:3000`,
        logLevel: process.env.LOG_LEVEL ? process.env.LOG_LEVEL.toLowerCase() : 'info',
        logDisabled: process.env.LOG_DISABLED || false,
    },
    db: {
        pwd: '',
        url: process.env.DB_URL || 'mongodb://localhost:27017/upload',
        user: '',
    },
    aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
        region: process.env.AWS_REGION || 'us-east-1',
        bucket: process.env.AWS_BUCKET || '',
    },
}