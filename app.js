require("dotenv").config()
const express = require("express");
const userRouter = require("./src/routes/userRoute")
const mainRoute = require("./server/routes/main")
const connectDB = require("./server/config/db")

const jwt = require('jsonwebtoken');

// app instance
const app = express();

// connect to DB
connectDB();


const PORT = process.env.PORT || 3000


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs'); 

// For Templating - allows the use of html files

app.use(express.static('public'));

app.use('/', mainRoute)
app.use('/', require('./server/routes/admin'))
app.use(`/auth`, userRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
  