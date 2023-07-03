async function errorHandler (error, request, reply) {
    console.error(error);
    
    if (error.validation) {
      reply.status(400).send(error.message);
    } else {
      reply.status(500).send('Internal Server Error');
    }
  }
  
  export { errorHandler };