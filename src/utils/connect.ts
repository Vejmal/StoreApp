import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    logger.info('Successfully connected to database.');
  } catch (error) {
    console.error('An error occurred while connecting to database.');
    process.exit(1);
  }
};

export default connect;