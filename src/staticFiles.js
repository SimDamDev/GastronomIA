import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fastifyStatic from '@fastify/static';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default async function staticFiles(fastify, options) {
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
    prefix: '/', 
  });

  // Servir les fichiers statiques de 'test-API'
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../test-API'),
    prefix: '/test-API/',
    decorateReply: false
  });  
}