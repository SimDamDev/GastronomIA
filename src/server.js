import app from './app.js';
import {config} from '../config/config.js';
import {errorHandler} from './utils/errorHandler.js';

const port = config.server;

app.listen(port, (err, address) => {
    if (err) {
        errorHandler(err);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
})


