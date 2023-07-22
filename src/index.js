import { startServer } from './startServer.js';
import EventEmitter from 'events';
import './serverEventListener.js';  

export const serverEvents = new EventEmitter();

startServer()
  .then(server => {
    serverEvents.emit('started');
  })
  .catch(err => {
    serverEvents.emit('error', err);
  });
