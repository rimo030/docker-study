const express = require("express");
const redis = require("redis");

// Create redis client
const client = redis.createClient({
    host: "redis-server",
    port: 6379,
});

const app = express();
app.listen(8080);
console.log("server is running");
