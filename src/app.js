import Fastify from 'fastify';

const app = Fastify();

app.get('/', async (request, reply) => {
    reply.send('Hello, World, test1234');
});

const options = {
    port: 3000,
};

app.listen(options, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});