import fastify from 'fastify';
import {dbConnect} from './services/db.js'
import routes from './src/routes/indexRoutes.js';
import errorHandler from './src/utils/errorHandler.js';
import {config} from './config/config.js';
//import {MongoClient} from 'mongodb'

const app = fastify();

dbConnect();

app.register(routes)

app.setErrorHandler(errorHandler)

// app.get('/', async (request, reply) => {
//     const client = new MongoClient(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    
//     try {
//         await client.connect();
//         const database = client.db('gastronomIA');
//         const collection = database.collection('recipes');
//         const result = await collection.findOne({});
//         reply.send(result);
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         reply.status(500).send('Internal Server Error');
//       } finally {
//         await client.close();
//       }
//     });

// const options = {
//     port: process.env.PORT,
//     host: process.env.HOST
// };

app.listen(config.server, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});