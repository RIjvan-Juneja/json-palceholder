// Import necessary modules
const express = require('express');
const mysql = require('mysql2');

// Create Express app
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
// Configure MySQL connection

app.get('/', (req, res) =>{
    res.render('form');
})

app.get('/comments', (req, res) =>{
  res.render('comments');
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
