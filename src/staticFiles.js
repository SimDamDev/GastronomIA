import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fastifyStatic from 'fastify-static';
import { errorHandler } from './utils/errorHandler.js';

// Get the current filename and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the paths for the static files directories
const publicPath = path.join(__dirname, '../public');
const testAPIPath = path.join(__dirname, '../test-API');

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
