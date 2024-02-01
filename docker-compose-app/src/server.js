const express = require("express");
const redis = require("redis");

// Create redis client
const client = redis.createClient({
    socket: {
        host: "redis-server",
        port: 6379,
    },
});

client.on("error", (err) => console.log("Redis Client Error", err));

const app = express();

// Counter App

app.get("/", async (req, res) => {
    await client.connect();

    let number = await client.get("number");
    if (number === null) {
        number = 0;
    }

    res.send("counter : " + number);

    await client.set("number", parseInt(number) + 1);
    await client.disconnect();
});

app.listen(8080);
console.log("Server is running");
