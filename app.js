const express = require('express');

const app = express();
app.use(express.json());

// require('dotenv').config();
app.get('/users', (req, res) => {
    console.log('hello word');
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});