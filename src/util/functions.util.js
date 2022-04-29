import crypto from 'crypto';

export const getFilenameAndKey = (req, file, callback) => {
    const hash = crypto.randomBytes(16).toString('hex');
    const fileName = `${hash}-${file.originalname}`;
    if(hash.Error) callback(hash.Error);
    callback(null, fileName);
};