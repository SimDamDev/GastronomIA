import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fastifyStatic from '@fastify/static';
import { errorHandler } from './utils/errorHandler.js';

// Get the current filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the paths for the static files directories
const publicPath = path.join(__dirname, '../public');
const testAPIPath = path.join(__dirname, '../test-API');

/**
 * Registers static file servers for the 'public' and 'test-API' directories.
 *
 * @async
 * @param {Object} fastify - The Fastify instance.
 * @param {Object} options - The options object.
 */
export default async function staticFiles(fastify, options) {
  // Register the static file server for the 'public' directory
  fastify.register(fastifyStatic, {
    root: publicPath,
    prefix: '/',
    errorHandler,
  });

  // Register the static file server for the 'test-API' directory
  fastify.register(fastifyStatic, {
    root: testAPIPath,
    prefix: '/test-API/',
    decorateReply: false,
    errorHandler,
  });
}
