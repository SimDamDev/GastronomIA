import fastify from 'fastify';
import {dbConnect} from './services/db.js'
import routes from './routes/indexRoutes.js';
import {errorHandler} from './utils/errorHandler.js';
import {config} from '../config/config.js';

const app = fastify();

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