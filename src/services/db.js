import mongoose from 'mongoose';
import 'dotenv/config.js';

/**
 * Connect to the MongoDB database.
 * If the connection is successful, log a success message.
 * If the connection fails, log the error and exit the process with a failure code.
 * The process.exit(1) line causes the Node.js process to exit with a failure code,
 * which can be useful for stopping the server if the database connection fails.
 */
async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);  // Exit the process with a failure code
  }
}

export {dbConnect};
