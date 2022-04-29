
import multer from 'multer';
import multerS3 from 'multer-s3';
import { multerConfig } from '../config/multer.config.js';
import aws from 'aws-sdk';
import environmentConfig from '../config/environment.config.js';
import { getFilenameAndKey } from '../util/functions.util.js';


export const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, multerConfig.dest);
        },
        filename: getFilenameAndKey,
    }),
    prod: multerS3({
        s3: new aws.S3({
            accessKeyId: environmentConfig.aws.accessKeyId,
            secretAccessKey: environmentConfig.aws.secretAccessKey,
            region: environmentConfig.aws.region,
        }),
        bucket: environmentConfig.aws.bucket,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: getFilenameAndKey
    })
};