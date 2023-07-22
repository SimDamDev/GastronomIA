import { startServer } from '../src/startServer.js'
import { serverEvents } from '../src/index.js';

jest.mock('../src/startServer.js');

describe('index.js', () => {
  beforeEach(() => {
    startServer.mockClear();
    startServer.mockResolvedValue({});
  });

  it('should call startServer and emit a "started" event when the server starts successfully', async () => {
    const mockEmit = jest.spyOn(serverEvents, 'emit');
    await import('./index.js');
    expect(startServer).toHaveBeenCalled();
    expect(mockEmit).toHaveBeenCalledWith('started');
    mockEmit.mockRestore();
  });

  it('should call startServer and emit an "error" event when the server fails to start', async () => {
    const mockError = new Error('Test error');
    startServer.mockRejectedValue(mockError);
    const mockEmit = jest.spyOn(serverEvents, 'emit');
    await import('./index.js');
    expect(startServer).toHaveBeenCalled();
    expect(mockEmit).toHaveBeenCalledWith('error', mockError);
    mockEmit.mockRestore();
  });
});
