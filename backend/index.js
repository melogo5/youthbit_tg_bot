import pg from "pg";
import Fastify from 'fastify';
import { promises as fs } from "fs";

import config from "../config/index.js";
import migrations from "./migrations/index.js";

console.log(config);
const { Client } = pg;

const fastify = Fastify({
    logger: true
});

const client = new Client(config.database);

fastify.addHook("preHandler", async function (request, reply) {
    reply.headers({
        // "Cache-Control": "no-store",
        // Pragma: "no-cache",
        // "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*", // "http://localhost:3000/",
        "Content-Type": "application/json",
        // "Access-Control-Allow-Methods": "*",
        // "Access-Control-Allow-Headers": "*",
    });
    // next();
});

fastify.post('/api/login', async (request, reply) => {
    // console.log(request.body)
    // return request.body;
    // await reply.send({
    //     hello: 'world',
    //     // request: request.body
    // })
    return {
        "hello": "world"
    }
})

fastify.get('/', async (request, reply) => {
    return {
        hello: 'World'
    }
})

//возвращает список вузов
fastify.get('/api/universities', async (request, reply) => {
    const file = await fs.readFile("../ros-data/universities.json");
    const data = await JSON.parse(file.toString());
    // console.log(data)
    return {
        data
    }
})

//возвращает список общаг
fastify.get('/api/dormitories', async (request, reply) => {
    const file = await fs.readFile("../ros-data/dormitories.json");
    const data = await JSON.parse(file.toString());
    // console.log(data)
    return {
        data
    }
})


//возвращает список комнат
fastify.get('/api/rooms', async (request, reply) => {
    const file = await fs.readFile("../ros-data/rooms.json");
    const data = await JSON.parse(file.toString());
    // console.log(data)
    return {
        data
    }
})

//возвращает список событий
fastify.get('/api/events', async (request, reply) => {
    const file = await fs.readFile("../ros-data/events.json");
    const data = await JSON.parse(file.toString());
    // console.log(data)
    return {
        data
    }
})
//возвращает список лабораторий
fastify.get('/api/labs', async (request, reply) => {
    const file = await fs.readFile("../ros-data/labs.json");
    const data = await JSON.parse(file.toString());
    // console.log(data)
    return {
        data
    }
})

// Run the server!
const start = async () => {
    try {
        await client.connect(err => {
            if (err) {
                console.error('connection error', err.stack)
            } else {
                console.log('connected')
            }
        })

        await migrations(client);

        await fastify.listen(config.backend.http);
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
