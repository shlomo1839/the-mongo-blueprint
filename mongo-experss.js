import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.MONGO_URI).db('test1')

export async function connectToMongo() {
    try {
        await client.connect();
        console.log("connected to mongodb");
    } catch (err) {
        console.log('could not connect to mongo', err.message);
    }
}


