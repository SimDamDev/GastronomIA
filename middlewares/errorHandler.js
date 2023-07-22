/**
 * This module exports a function that handles errors and sends appropriate responses.
 * @module errorHandler
 */

/**
 * Handles errors and sends appropriate responses.
 *
 * @function
 * @param {Error} error - The error to handle.
 * @param {Object} request - The Fastify request object.
 * @param {Object} reply - The Fastify reply object.
 * @returns {void} Nothing
 * @throws Will throw an error if error is not an instance of Error
 */
function errorHandler(error, request, reply) {
    if (!(error instanceof Error)) {
      throw new TypeError('error must be an instance of Error');
    }
  
    // Log the error and the request that caused it
    request.log.error({
      message: 'Error occurred during request processing',
      error: error,
      request: {
        url: request.url,
        method: request.method,
        params: request.params,
        body: request.body
      }
    });
  
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
  
  export { errorHandler };
  