import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fastifyStatic from '@fastify/static';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default async function staticFiles(fastify, options) {
  fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
  });
}