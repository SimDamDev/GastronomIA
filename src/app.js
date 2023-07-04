import staticFilesConfig from './staticFiles.js';
import routes from './routes/indexRoutes.js';
import {dbConnect} from './services/db.js'
import {errorHandler} from './utils/errorHandler.js';

app.register(staticFilesConfig);

dbConnect();

app.register(routes)

app.setErrorHandler(errorHandler)

export default app;