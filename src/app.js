import fastify from 'fastify';
import "dotenv/config.js";
import {MongoClient} from 'mongodb'

const app = fastify();

console.log(process.env.MONGO_URI)

app.get('/', async (request, reply) => {
    const client = new MongoClient(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    
    try {
        await client.connect();
        const database = client.db('gastronomIA');
        const collection = database.collection('recipes');
        const result = await collection.findOne({});
        reply.send(result);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        reply.status(500).send('Internal Server Error');
      } finally {
        await client.close();
      }
    });

const options = {
    port: process.env.PORT,
    host: process.env.HOST
};

app.listen(options, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});