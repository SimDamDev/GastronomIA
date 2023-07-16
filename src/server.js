import app from './app.js';
import {config} from '../config/config.js';

const port = process.env.PORT || config.server;

app.listen(port, (err, address) => {
    if (err) {
        console.error(`Error in ${__filename}: ${err}`);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
}).on('error', (err) => {
    console.error(`Server error: ${err}`);
});

