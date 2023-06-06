const express = require('express');
const app = express();
const { db } = require('./config/db');
var jwt = require('jsonwebtoken');


const categoryRoutes = require('./routes/categoryRoutes');
const { User } = require('./models/User');
db.connect();

app.use(express.json());

let privateKey = "gojira"

let expireDate = 10

app.use((req, res, next) => {


    // token a gelmek isterse de next diyorum. Çünkü public page
    if (req.url == "/token") {
        next();
    }
    else {
        if (req.headers.authorization) {
            //Bearer şkmgkmgeqklqgeklqklfwqkşwqmşlfqwmşlfqw
            let data = req.headers.authorization.split(' ');

            if (data.length == 2 && data[0] == "Bearer") {

                let token = data[1]

                try {
                    jwt.verify(token, privateKey)
                    next();
                } catch (error) {
                    res.status(401).json({ "message": "token error" })
                }

            }
            else {
                res.status(401).json({ "message": "token error" })

            }

        }
        else {
            res.status(401).json({ "message": "token error" })
        }
    }


})

app.use("/api/categories", categoryRoutes);


//token generate edeceğim login ucunu acıyorum

app.post('/token', (req, res) => {

    User.findOne({ email: req.body.email, password: req.body.password })
        .then(data => {
            if (data) {

                //user varsa token generate edeceğim
                let token = jwt.sign({email: req.body.email}, privateKey,{
                    algorithm: 'HS256',
                    expiresIn: expireDate
                })


                res.json({ "token": token })
            }
            else {
                res.status(401).json({ "message": "Access denied" })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })

})

app.listen(8080, () => {
    console.log('Server is running...');
})



