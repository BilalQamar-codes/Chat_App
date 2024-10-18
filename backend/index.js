const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./utils/db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const port = 3005;

const app = express();

// Apply middlewares
app.use(cors()); // Enable CORS
app.use(bodyparser.json()); // Parse incoming JSON requests

// Define routes
app.use('/user', userRoutes);
app.use('/chat', chatRoutes);

app.get('/', (req, res) => {
  res.status(200).send("Welcome to my web app.");
});

// Start the server and connect to the database
try {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}.`);
    });
    connection; // Connect to the database
} catch (error) {
    console.log(error.message);
}
