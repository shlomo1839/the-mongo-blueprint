import express from 'express';

import { db } from '.../mongo-express.js'

const collection = db.collection('users')

const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const users = await collection.find({}).toArray();
        res.send(users)
    } catch (err) {
        console.log(err.message);
        res.status(500).send({msg: "server internal error"})
    }
});

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        delete user.password;
        res.send(user)
    } catch (err) {
        console.log(err.message);
        res.status(500).send({msg: "server internal error"})
    }
})