import { serverEvents } from './serverEventListener.js';
import initFastifyApp from './initFastifyApp.js';
import { startServer } from './startServer.js';

// Initialize the Fastify application
const app = initFastifyApp();

// Start the server and listen for events
startServer(app)
  .then(() => {
    serverEvents.emit('started');
  })
  .catch(err => {
    serverEvents.emit('error', err);
  });
