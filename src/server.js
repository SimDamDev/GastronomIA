import app from './app.js';
import {config} from '../config/config.js';

app.listen(config.server, (err, address) => {
    if (err) {
        console.error(`Error in ${__filename}: ${err}`);
        process.exit(1);
    }

    console.log(`Server listening at ${address}`);
});

