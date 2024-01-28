const express = require("express");
const redis = require("redis");

// Create redis client
const client = redis.createClient({
    host: "redis-server",
    port: 6379,
});

const app = express();

// Counter App
client.set("number", 0);

app.get("/", (req, res) => {
    client("number", (err, number) => {
        client.set("number", parseInt(number) + 1);
        res.send("counter : " + number);
    });
});

app.listen(8080);
console.log("server is running");
