// Require the framework and instantiate it

import pg from "pg";
// ESM
import Fastify from 'fastify';
import pg_config from "./pg_config/config.js";
import migrations from "./migrations/index.js";

const { Client } = pg;

const fastify = Fastify({
    logger: true
});

const client = new Client({
    user: pg_config.pg.user,
    database: pg_config.pg.database,
    password: pg_config.pg.password,
    port: pg_config.pg.port,
    host: pg_config.pg.host,
})

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
    return { hello: 'World' }
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

        await fastify.listen({
            port: 8080,
            host: "0.0.0.0"
        })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()