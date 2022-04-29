import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const root = join( currentDir, '../../' );
const publicDir = join( root, 'public' );
const tmpDir = join( root, 'tmp' );
const uploadsDir = join( tmpDir, 'uploads' );

export default {
    dir: {
        root,
        publicDir,
        tmpDir,
        uploadsDir,
    },
}
