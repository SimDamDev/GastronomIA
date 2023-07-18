/**
 * Handles errors and sends appropriate responses.
 *
 * @async
 * @param {Error} error - The error to handle.
 * @param {Object} request - The Fastify request object.
 * @param {Object} reply - The Fastify reply object.
 */
async function errorHandler(error, request, reply) {
  console.error(error);

  if (error.code === 11000) {
    reply.status(400).send('Name must be unique');
  } else if (error.validation) {
    reply.status(400).send(error.validation);
  } else if (error.message) {
    reply.status(500).send(error.message);
  } else {
    reply.status(500).send('Internal Server Error');
  }
}

export {errorHandler};
