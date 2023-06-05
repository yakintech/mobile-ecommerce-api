const express = require('express');
const app = express();
const { db } = require('./config/db');

const categoryRoutes = require('./routes/categoryRoutes');
const { Book } = require('./models/Books');



db.connect();

app.use(express.json());



app.use("/api/categories", categoryRoutes);



app.listen(8080, () => {
    console.log('Server is running...');
})





Book.find().populate('writers')
    .exec()
    .then(data => {
        console.log('DATA', data);
    })