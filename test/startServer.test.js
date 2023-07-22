const { startServer } = require('../src/startServer');
const { config } = require('../src/config/config');
const { errorHandler } = require('../src/middlewares/errorHandler');
const app = require('../src/app');

describe('startServer', () => {
  it('should start the server successfully', async () => {
    const mockListen = jest.fn((port, host, callback) => callback());
    app.listen = mockListen;
    await startServer();
    expect(mockListen).toHaveBeenCalledWith(config.server.port, config.server.host, expect.any(Function));
  });

  it('should handle error when starting the server', async () => {
    const mockListen = jest.fn((port, host, callback) => callback('error'));
    app.listen = mockListen;
    await expect(startServer()).rejects.toEqual('error');
    expect(errorHandler).toHaveBeenCalledWith('error');
  });
});
