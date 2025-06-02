//* Storing data / JSON storing

//* 1. In-Memory storage

// Description: Data is stored in variables, objects, temporary data processing.
// Use Cases: Caching, session data, temporary data processing.
// Fast access, and easy to uese. However, Data is lost if the app restarts/crashes.

//* 2. File system (FS module)

// Description: Node.js provides a built-in fs module to read/write files on disk (Text files, JSON, CSV, binary, etc)
// Use Cases: Storing logs, configs, small data files, uploads
// Simple, persistent storage. however, not ideal for complex queries or concurrent access.

// Importing:
const fs = require('fs');
// OR
import fs from 'fs';


// Reading files:

// Asynchronous 
fs.readFile('example.text', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

// utf8 - specifies the encoding so data is returned as a string (Otherwise, it returns a Buffer)
// err will be null if there is no error

// Synchronous (blocking)
try {
    const data = fs.readFileSync('example.text', 'utf8');
    console.log("File contents:", data);
} catch (err) {
    console.error('Error reading file:', err);
}

// Writing files:

// Asynchronous

const content = 'Hello world.js!';

fs.writeFile('output.text', content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File has been written')
    
})

// Synchronous 

try {
    fs.writeFileSync('output.text', content, 'utf8');
    console.log('File has been written');
} catch (err) {
    console.error('Error writing file:', err);
}

// Appending data to a file
// Description: Adding new information to the end of an existing file without deleteing or overwriting the current contents.

fs.appendFile('output.text', '\nApended test', 'utf8', (err) => {
    if (err) {
        console.error('Error appending file:', err);
        return;
    }
    console.log("Data appended to file");
});

// Deleteing a file

fs.unlink('output.text', (err) => {
    if (err) {
        console.error('Error deleteing file:', err);
        return;
    }
    console.log('File deleted successfully')
});

// Creating a Directory

fs.mkdir('myFolder', { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created');
});

// Reading dictionary contents

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }
    console.log('Directory contents:', files);
});

// ~~ Notes ~~

// For larger files, consider using streams (fs.createReadStream / fs.createWriteStream) for better memory efficency.


//* 3. Relational Databases (SQL)

// Description: MySQL, PostgreSQL, SQLite, MariaDB: Structured data stored in tables with relations, access via SQL queries.
// Use Cases: Complex queries, transactions and structured data with relationships.
// Strong data consistency, ACID compliance. However, requires running a database server.