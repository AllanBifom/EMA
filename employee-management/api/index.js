const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://AllanB:Kettle1256.@cluster0.y6mxula.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

).then(() => {
    console.log("connected to mongoDB")
}).catch((error) => {
    console.log("Error connecting to DB", error)
});

app.listen(port, () => {
    console.log("Server is running on Port 8000")
});

//