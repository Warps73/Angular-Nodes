const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const stuffRoutes = require('./routes/stuff');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-4a4w1.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((e) => console.log(e));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/api/stuff', stuffRoutes);





module.exports = app;
