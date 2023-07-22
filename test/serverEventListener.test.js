import { serverEvents } from '../src/index.js';
import '../src/serverEventListener.js'; 

describe('serverEventListener', () => {
  let exitSpy;
  let logSpy;
  let errorSpy;

  beforeEach(() => {
    exitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
    logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    exitSpy.mockRestore();
    logSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it('logs a message when the server has started', () => {
    serverEvents.emit('started');
    expect(logSpy).toHaveBeenCalledWith("Le serveur a démarré avec succès");
  });

  it('logs an error and calls process.exit when there is an error', () => {
    const testError = new Error('Test error');
    serverEvents.emit('error', testError);
    expect(errorSpy).toHaveBeenCalledWith("Erreur lors du démarrage du serveur:", testError);
    expect(exitSpy).toHaveBeenCalledWith(1);
  });
});
