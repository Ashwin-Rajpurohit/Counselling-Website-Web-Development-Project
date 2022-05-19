const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')


mongoose.connect('mongodb://localhost:27017/Counselling-Website', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
});
const database = mongoose.connection;
database.on('error', (error)=>{
    console.log(error)
})
database.once('connected', ()=>{
    console.log("Database Connected")
})

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

const routes = require('./routes')

app.use('/api', routes)

app.listen(3000,()=>{
    console.log("Server started at port " +3000)
})

