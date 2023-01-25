// Importing modules
const express = require('express');
const app = express();
const port = 80;

// Middlewares


// Routes
const cars = require("../routes/cars");
app.use("/cars", cars);

// App Startup

app.listen(port, () => console.log(`Server is running on port ${port}`))


// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });