const express = require('express');
const app = express();
const connectDb = require('./config/db');

// Connect Database
connectDb();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
app.use('/api/estimate/mobileapp', require('./routes/api/mobile'));

app.get('/', (req, res) => { res.send('Api running') });

// Listening for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));