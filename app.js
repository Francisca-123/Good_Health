require("dotenv").config()
const express = require("express");
const userRouter = require("./src/routes/userRoute")
const scheduleRouter = require("./src/routes/scheduleRoute")
const connectDB = require("./src/config/db")

const jwt = require('jsonwebtoken');

// app instance
const app = express();

// connect to DB
connectDB();


const PORT = process.env.PORT || 3000


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(`/auth`, userRouter);
app.use(`/schedule`, scheduleRouter);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
  