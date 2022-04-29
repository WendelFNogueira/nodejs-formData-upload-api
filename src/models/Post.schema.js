import mongoose from 'mongoose';
import environmentConfig from '../config/environment.config.js';
import directoryConfig from '../config/directory.config.js';
import aws from 'aws-sdk';
import fs from 'fs';
import { promisify } from 'util';

const s3 = new aws.S3({
    accessKeyId: environmentConfig.aws.accessKeyId,
    secretAccessKey: environmentConfig.aws.secretAccessKey,
    region: environmentConfig.aws.region,
});

export const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const appUrl = environmentConfig.app.url;

PostSchema.pre('save', function(next) {
    if(!this.url) {
        this.url = `${appUrl}/files/${this.key}`;
    }
    next();
});

PostSchema.pre('remove', function() {
    if(environmentConfig.app.env === 'production') {
        return s3.deleteObject({
            Bucket: environmentConfig.aws.bucket,
            Key: this.key,
        }).promise();
    }
    return promisify(fs.unlink)(`${directoryConfig.dir.uploadsDir}/${this.key}`);
});

export default mongoose.model('Post', PostSchema);