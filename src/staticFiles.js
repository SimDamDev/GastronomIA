import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fastifyStatic from '@fastify/static';

// Define the directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

// Define the paths for the static files
const publicPath = path.join(__dirname, '../public');
const testAPIPath = path.join(__dirname, '../test-API');

export default async function staticFiles(fastify, options) {
  // Serve static files from 'public'
  fastify.register(fastifyStatic, {
    root: publicPath,
    prefix: '/', 
  });

  // Serve static files from 'test-API'
  fastify.register(fastifyStatic, {
    root: testAPIPath,
    prefix: '/test-API/',
    decorateReply: false
  });  
}