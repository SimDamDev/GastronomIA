/**
 * Handles errors and sends appropriate responses.
 *
 * @async
 * @param {Error} error - The error to handle.
 * @param {Object} request - The Fastify request object.
 * @param {Object} reply - The Fastify reply object.
 */
async function errorHandler(error, request, reply) {
  // Log the error and the request that caused it
  console.error('Error:', error);
  console.error('Request that caused the error:', request.url, request.method, request.params, request.body);

  let statusCode;
  let errorMessage;

  if (error.code === 11000) {
    statusCode = 400;
    errorMessage = 'Name must be unique';
  } else if (error.validation) {
    statusCode = 400;
    errorMessage = error.validation;
  } else if (error.message) {
    statusCode = 500;
    errorMessage = error.message;
  } else {
    statusCode = 500;
    errorMessage = 'Internal Server Error';
  }

  // Send the error response in a standardized format
  reply.status(statusCode).send({ error: true, message: errorMessage });
}

export {errorHandler};
