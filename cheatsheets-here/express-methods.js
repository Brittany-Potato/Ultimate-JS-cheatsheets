//! Express and Express methods

//! What is express
// Express.js is a fast and minimalist web framework for Node.js and makes it easy to build APIs, handle routes, process requests, and serve webpages

//! Core express methods

// express() - Creates an express app
const express = require("express");
const app = express();

// app.listen(port, callback) - Starts the server and listens on the given port
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// app.get(path, handler) - Handles GET requests to a route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// app.post(path, handler) - Handles POST requests (Usually for sending data like forms or JSON)
app.post("/submit", (req, res) => {
  res.send("Form submitted");
});

// app.put(path, handler) - Handles PUT requests (Usually used to update resources)
app.put("/user/:id", (req, res) => {
  res.send(`Update user ${req.params.id}`);
});

// app.delete(path, handler) - Handles DELETE requests (used to delete resources)
app.delete("/item/:id", (req, res) => {
  res.send(`Delete item ${req.params.id}`);
});

// app.use(middleware) - Mounts middleware functions like body parse, CORS, logging, etc
app.use(express.json()); // Parses JSON body
app.use(cors()); // Enables CORS

//! Common Middleware functions

//Built in
// express.json() - Parse incoming JSON requests
// express.urlencoded() - Parse form data (URL-encoded)
// express.static() - Serves static files like HTML, CSS
app.use(express.static("public"));

//! Requests and response methods

// Request(req)
// req.body - Data sent in POST/PUT (requires middleware)
// req.params - Route parameters (/user/:id)
// req.query - Query string (/search?term=x)
// req.headers - Requst headers
// req.methods - HTTP method (GET, POST, etc)
//req.url - Full request URL path

// Response(red)
// res.send() - Sends a plain response
// res.json() - Sends a JSON response
// res.status() - Sets the status code (e.g., 404, 200)
// res.redirect() - Redirects to another URL
// res.sendFile() - Sends a file from the server
res.status(200).json({ message: "Success" });

//! Route praramters and Query strings

// Route parameters:
app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// Query strings:
app.get("/search", (req, res) => {
  res.send(`You searched for ${req.query.term}`);
});
