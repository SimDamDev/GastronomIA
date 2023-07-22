const { startServer } = require('../src/startServer');
const { serverEvents } = require('../src/index');

jest.mock('../src/startServer');

describe('index', () => {
  it('should emit "started" event when server starts successfully', async () => {
    startServer.mockResolvedValue({});
    const mockEmit = jest.spyOn(serverEvents, 'emit');
    require('../src/index');
    expect(mockEmit).toHaveBeenCalledWith('started');
  });

  it('should emit "error" event when server fails to start', async () => {
    startServer.mockRejectedValue('error');
    const mockEmit = jest.spyOn(serverEvents, 'emit');
    require('../src/index');
    expect(mockEmit).toHaveBeenCalledWith('error', 'error');
  });
});
