const { serverEvents } = require('../src/index');

describe('serverEventListener', () => {
  it('should log success message when "started" event is emitted', () => {
    console.log = jest.fn();
    serverEvents.emit('started');
    expect(console.log).toHaveBeenCalledWith('Le serveur a démarré avec succès');
  });

  it('should log error message and exit process when "error" event is emitted', () => {
    console.error = jest.fn();
    process.exit = jest.fn();
    serverEvents.emit('error', 'error');
    expect(console.error).toHaveBeenCalledWith('Erreur lors du démarrage du serveur:', 'error');
    expect(process.exit).toHaveBeenCalledWith(1);
  });
});
