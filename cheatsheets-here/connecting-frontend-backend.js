//! Connecting a react frontend to a node.js backend

//! One: Set up the backend (Node.js + Express)

// npm init -y
// npm install express cors

// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors()); // Allow requests from frontend
// app.use(express.json()); // Parse JSON bodies

// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Hello from the backend!' });
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//! Two: Start the backend server

// node server.js (npm run dev)

//! Three: Connect from the react frontend

//Example using fetch in react components

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:5000/api/hello')
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return <h1>{message}</h1>;
// }

// export default App;

//! Four: OPTIONAL: Proxy setup (to avoid cors issue)

// If you're running React with npm start (CRA), add proxy to your package.json:
// "proxy": "http://localhost:5000"
//Now you can omit the full URL in fetch:
// fetch('/api/hello')

//! Five: Deploy or package it together (Optional)

// For production, you can serve the React build from express using:
// app.use(express.static(path.join(__dirname, 'client/build')));


//! If using AXIOS

//! One: Install your react project root:
// npm install axios

//! Two: Example: React component Making API call

// Basic GET request

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, []);

  return <h1>{message}</h1>;
}

export default App;

//! Three: Backend Example (Node.js + Express)

// In your server.js or index.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

//! Four: OPTIONAL: POST request with axios

// React:
axios.post('http://localhost:5000/api/data', { name: 'John' })
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

  // Node.js Backend:
  app.post('/api/data', (req, res) => {
  console.log(req.body); // { name: 'John' }
  res.json({ received: true });
});

//! Five: Avoiding CORS issues

// If you run react on a different port (like 3000), CORS needs to be enabled in express:
const cors = require('cors');
app.use(cors()); // Allow all origins — or use specific options 