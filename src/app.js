import fastify from 'fastify';
import "dotenv/config.js";

const app = fastify();

app.get('/', async (request, reply) => {
    reply.send('Hello, World, test1234');
});

const options = {
    port: process.env.PORT
};

app.listen(options, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});