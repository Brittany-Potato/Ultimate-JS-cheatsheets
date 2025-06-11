//* ~ Error handling node.js ~

//* ~ Try/Catch for synchronous code

// user try/fetch blocks to catch errors in synchronous code.

function tryCatch(){
    try {
        const result = riskyOperation(); // May throw an error
        console.log(result);
    } catch (error) {
        console.error("An error occured", error.message);
    }
}

//* ~ Promises and Async/Await

// For asynchronous code using await/async, wrap it in a try/catch

async function fetchData() {
    try {
        const data = await someAsyncFunction();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

//* ~ Handling errors in callbacks

// In callback-style functions (Common i older node.js code), handle errors in the first argument

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        return cosole.error("File read error:", err.message);
    }
    console.log(data);
});

//* ~ Express Error Handling Middleware

// Error-handling middleware

app.use((err, req, res, next) => {
    try {
        // const result = await someDBQuery();
        res.json(result);
    } catch (err) {
        next(err); // Pass error to middleware
    }
});

//* ~ Global Error Handlers (Last resort)

// Use these to catch unhandled errors, but don't rely on them for logic.

process.on('uncaughtException', (err) => {
    console.error('uncaught Exception:', err);
    process.exit(1); // Consider exiting or restarting
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection:', reason);
});

//* ~ Best practices

//* Fail fast: Catch and log early.
//* Don't use shallow errors: Always handle them or log them.
//* Use next(err) in Express to delegate to error middleware.
//* Wrap all awaits in try/catch.