import { startServer } from '../src/startServer.js';
import { getConfig } from '../config/config.js';
import sinon from 'sinon';
import { expect } from 'chai';

/**
 * Unit tests for the startServer function.
 * Mocks the server and configuration.
 * Tests successful startup, error handling, and signal handling.
 */
describe('startServer', () => {
  let server;
  let app;
  let config;
  let timer;

  /**
   * Setup for each test. Restores stubs and mocks the app and server.
   */
  beforeEach(() => {
    sinon.restore();

    config = getConfig();

    // Mock the app
    app = {
      listen: sinon.stub(),
      log: {
        info: sinon.stub(),
        error: sinon.stub()
      }
    };

    // Mock the server
    server = {
      close: sinon.stub()
    };

    // Make app.listen return the mock server
    app.listen.callsArgWith(2, null, server);
  });

  /**
   * Cleanup after each test. Clears any timers.
   */
  afterEach(() => {
    if (timer) {
      clearTimeout(timer);
    }
  });

  /**
   * Test for successful server startup.
   */
  describe('server startup', () => {
    it('starts the server successfully', async () => {
      await startServer(app);
      expect(app.listen.calledWith(config.server.port, config.server.host)).to.be.true;
    });

    it('logs a successful startup', async () => {
      await startServer(app);
      expect(app.log.info.calledWith(`Server listening on ${config.server.host}:${config.server.port}`)).to.be.true;
    });
  });

  /**
   * Test for error handling during server startup.
   */
  describe('error handling', () => {
    it('handles errors when starting the server', async () => {
      const error = new Error('Test error');
      app.listen.callsArgWith(2, error);

      try {
        await startServer(app);
      } catch (err) {
        expect(err).to.equal(error);
      }
    });

    it('handles specific errors during startup', async () => {
      const error = new Error('Port already in use');
      error.code = 'EADDRINUSE';
      app.listen.callsArgWith(2, error);

      try {
        await startServer(app);
      } catch (err) {
        expect(err).to.equal(error);
        expect(app.log.error.calledWith('Port already in use')).to.be.true;
      }
    });
  });

  /**
   * Test for handling SIGTERM and SIGINT signals.
   */
  describe('signal handling', () => {
    
    it('handles SIGTERM signal', (done) => {
      let closeCalled = 0;

      server.close.callsFake(() => {
        timer = setTimeout(() => {
          expect(closeCalled).to.equal(1);
          done();
        }, 2000);
        closeCalled++;
      });

      startServer(app, server);
      process.emit('SIGTERM');
    });

    it('handles SIGINT signal', (done) => {
      server.close.callsFake(() => {
        expect(server.close.calledOnce).to.be.true;
        done();
      });
      startServer(app, server);
      process.emit('SIGINT');
    });
  });
});
