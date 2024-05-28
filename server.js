const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI)
app.use(cors());
app.use(express.json())
const trackRouter = require('./controllers/Tracks.js')
app.use('/tracks', trackRouter);

app.listen(3000, ()=>{
    console.log("App is Running")
})