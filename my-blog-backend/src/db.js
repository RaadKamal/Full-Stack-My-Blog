import { MongoClient } from 'mongodb';
import 'dotenv/config';

let db;

async function connectToDb(cb)
{
    const client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db =client.db('react-blog-db');
    cb();
}

export
{
    db,
    connectToDb,
};
