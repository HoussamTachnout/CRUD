const { json } = require('express')
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))//Pour accepter les données de formulaire

mongoose.set('strictQuery', false);
mongoose.connect(process.env.connect)
    .then(res => {
        console.log("connected with success")
    })
    .catch(err => {
        console.log("Error : \n", err)
    });
//userRoutes
app.use('/', userRoutes)

//Port
app.listen(3000, 'localhost', () => { console.log('listennig for port 3000') })