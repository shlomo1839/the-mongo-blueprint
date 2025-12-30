import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
try {
    await client.connect()
    console.log("Connect to MongoDB");
} catch (err) {
    console.err("Connection error:", err.message)
}
const db = client.db('test');
const collection = db.collection('cars');


async function addCar(model, vendor, type, owner) {
    try {
        const newCar = {model, vendor, type, owner}
        const result = await collection.insertOne(newCar)
        console.log(`added new car: ${result}`);
        return result
    } catch (err) {
        console.log("error addCar:", err.message);
    }
}
// await addCar()


async function getCars() {
    try {
        const allCars = await collection.find({}).sort().toArray()
        console.log(`all cars: ${allCars}`);
        return allCars
    } catch (err) {
        console.log('the error is:', err.message);
        
    }
}
// await readCars();


async function updateCar(id, car) {
    try {
        await collection.updateOne(
            {id_: new ObjectId(id)},
            {$set: {
                model: car.model,
                vendor: car.vendor,
                type: car.type,
                owner: car.owner
            }
        })
        console.log("car update");
    } catch (err) {
        console.log("error:", err.message);
    }
}
// await updateCar();


async function deleteCar(carId) {
    try {
        const result = await findOneAndDelete({_id: new ObjectId(carId)})
        console.log(`${result} deleted success`);
        return result
    } catch (err) {
        console.log("error:", err.message);
    }
}
// await deleteCar();

await addCar("Corolla", "Toyota", "Sedan");
await addCar("911", "Porsche", "Sport");
await getCars();
await updateCar("Corolla", "Hybrid");
await deleteCar("911");

await client.close();