const express = require("express");
const cors = require("cors");
const restaurant =requine("./routrs/restauran.rou")

const PORT = 5000;

//create service
const app = express()

//use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("<h1>This is a restaurant API</h1>");
})

app.use("/", restaurant)

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT)
})