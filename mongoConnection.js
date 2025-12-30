import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

// Connect to server
try {
    await client.connect();
    console.log("connected to mongodb");
} catch (err) {
    console.log('could not connect to mongo', err.message);
}

// Select database
const db = client.db('test');

// Select collection
const collection = db.collection('users');

// Insert new document
const user = await collection.insertOne({username: "Ben", password: "1234"});

// Create unique index for username
await collection.createIndex({username: 1}, {unique: true})

// Find single document by username
const user = await collection.findOne({username: "Ben"})

// Update specific fields in a document
const user = await collection.updateOne({username: "Ben"}, {$set: {username: "david"}})

// Replace entire document
const user = await collection.replaceOne({username: "david"}, {username: "hagit"})


// Find and delete document
const user = await collection.findOneAndDelete({username: "Ben"})

// Fetch all and sort by 'username'
const users = await collection.find({}).sort({username: 1}).toArray()


// Close connection
await client.close()