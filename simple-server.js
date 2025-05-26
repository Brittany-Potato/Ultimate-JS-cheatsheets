//! imports and variables
// Typically is found at the top of your main file (i.e. server.js).
// Prepares your server by importing required modules and libraries. It also is used to set up constants or enviroment variables.
// They bring in core modules, Third-party modules and custom files.
// They also configure your apps instance, define port numbers and database URLS, or setting up middleware.


//! Middleware
// functions that ubtercept and process HTTP requests.
// Enables things like parsing data, logging, authentication, or error handling.
// General is a function wit this style of syntax:
// (req, res, next) => {...};

// req - the request object.
// res - the response object.
// next - a callback to pass control to the next middleware - app.use(someMiddlewareFunction);

//! End points
// An endpoint is a URL path on your server, combined with an HTTP method(GET, POST, etc) that executes a function to handle the request
// Basic express endpoint: app.METHOD(PATH, HANDLER) --> PATH --> HANDLER.
// Route parameters = /api/users/:id (access with req.params.id).
// Query strings = /api/search?q=term (access with req.query.q).

//! Starting the server
// Typically you would use the built-in HTML module or a web framework.
// Key function: server.listen(port, callback).
// port: The port number to listen to.
// callback: A function that runs once the server starts (Often used to log a message).


//! Basic server building blocks/blueprint

// Imports, constants and installs.
const express = require("express");
const app = express();
const port = " ";

// Middleware to parse JSON requests.
app.use(express.json());

// Simple GET endpoint.
app.get("./hello", (req, res) => {
  res.json({ message: "Hello from Node.js!" });
});

// Simple POST end point.
app.post("./echo", (req, res) => {
  res.json({
    message: "You sent this",
    data: req.body,
  });
});

// Start the server.
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});



