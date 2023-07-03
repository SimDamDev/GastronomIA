import fastify from 'fastify';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import staticFiles from '@fastify/static';
import routes from './routes/indexRoutes.js';
import {dbConnect} from './services/db.js'
import {errorHandler} from './utils/errorHandler.js';
import {config} from '../config/config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = fastify();

app.register(staticFiles, {
    root: path.join(__dirname, '../public'),
});

dbConnect();

app.register(routes)

app.setErrorHandler(errorHandler)

app.listen(config.server, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});