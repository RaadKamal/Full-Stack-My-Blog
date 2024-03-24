import { MongoClient } from 'mongodb';
import 'dotenv/config';

let db;

async function connectToDb(cb)
{
    const client = new MongoClient(`mongodb+srv://kammd1702:${process.env.MONGO_PASSWORD}@cluster0.nxpoqoh.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect();
    db =client.db('react-blog-db');
    cb();
}

export
{
    db,
    connectToDb,
};
