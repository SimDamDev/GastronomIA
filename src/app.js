import fastify from 'fastify';
import staticFiles from './staticFiles.js';
import routes from './routes/indexRoutes.js';
import {dbConnect} from './services/db.js';
import {errorHandler} from './utils/errorHandler.js';

const app = fastify();

// Configuring where and how static files will be served
app.register(staticFiles);

// Establishing a connection to the database
dbConnect();

// Registering routes
app.register(routes);

// Configuring the error handler
app.setErrorHandler(errorHandler);

// Exporting the application for use by other modules
export default app;
