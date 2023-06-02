const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');


mongoose.connect('mongodb+srv://user_academy:3lY0bfalwD73PClG@cluster0.imfaisw.mongodb.net/mobile-ecommerce-db')
    .catch(err => {
        console.log('ERR', err);
    })


    
app.use(express.json());


const categoryRoutes = require('./routes/categoryRoutes');



app.use("/api/categories",categoryRoutes);



app.listen(8080, () => {
    console.log('Server is running...');
})