const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books",router);
let port = 5000


mongoose.connect(
    "mongodb+srv://School:JanithNanayakkara@cluster0.7ay2le9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)

.then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(port);
    console.log(`Port is Running : ${port}`);
})
.catch((err)=> console.log(err));