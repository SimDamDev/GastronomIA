import mongoose from 'mongoose';
import 'dotenv/config.js';

/**
 * Connect to the MongoDB database.
 * If the connection is successful, log a success message.
 * If the connection fails, log the error and exit the process with a failure code.
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
