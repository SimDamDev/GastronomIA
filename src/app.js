// Import necessary modules
import staticFilesConfig from './staticFiles.js';
import routes from './routes/indexRoutes.js';
import {dbConnect} from './services/db.js'
import {errorHandler} from './utils/errorHandler.js';

// Initialize the application
const app = express();

// Configure static files
// This function configures where and how static files will be served
app.register(staticFilesConfig);

// Connect to the database
// This function establishes a connection to our database
dbConnect();

// Register routes
// This function registers all the routes our application will use
app.register(routes)

// Configure error handler
// This function defines how our application will handle errors
app.setErrorHandler(errorHandler)

// Export the application so it can be used by other modules
export default app;