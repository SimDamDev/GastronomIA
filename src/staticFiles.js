import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import staticFiles from '@fastify/static';

const __dirname = dirname(fileURLToPath(import.meta.url));

const staticFilesConfig = staticFiles({
    root: path.join(__dirname, '../public'),
});

export default staticFilesConfig;