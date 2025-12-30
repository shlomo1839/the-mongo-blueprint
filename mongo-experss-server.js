import express from 'express';

import { connectToMongo } from './mongo-experss';
import { userRouter } from './mongo-experss-router.js'


const app = express();

app.use(express.json())
app.use('/users', userRouter)

await connectToMongo()
process.on('SIGINT', async(req, res) => {

})


app.listen(3000, () => console.log("listing"));