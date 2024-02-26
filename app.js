require('dotenv').config();
const express = require('express');
const cors = require("cors");

const connectToDb = require('./config/db.js');

const app = express();

//Express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Define the allowed origin
const allowedOrigin = 'https://campus360.vercel.app';

// Configure CORS options
const corsOptions = {
  origin: allowedOrigin
};

// Enable CORS with specific options
app.use(cors(corsOptions));

// Init connection to db
connectToDb();

const userRoutes = require('./routes/userRoutes.js');

app.use('/', userRoutes);

module.exports = app;
