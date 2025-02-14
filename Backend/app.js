
require("dotenv").config();

const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const connectTodb = require("./db/db")
const userRoutes = require("./route/user.routes")
connectTodb();
app.use(cors());
app.use(express.json(
    
));
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use("/users", userRoutes)

module.exports = app