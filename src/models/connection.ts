import mongoose from 'mongoose';
import 'dotenv/config';

let connectionString: any;

switch (process.env.NODE_ENV) {
  case 'development':
    connectionString = process.env.dev_db_uri;
    console.log(process.env.NODE_ENV);

    break;

  case 'production':
    console.log(process.env.NODE_ENV);
    connectionString = process.env.prod_db_uri;
    break;

  default:
    throw new Error('no connection!');
    break;
}

//connect to MongoDB
export const connection = mongoose
  .connect(`${connectionString}`, { useNewUrlParser: true })
  .then(() => console.log(`connected to ${connectionString}`))
  .catch(error => console.log(error.message));
