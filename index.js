const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/connect");
db();

//import routes

const pokemon = require("./routes/pokemonRoutes");

app.get("/", (req,res) => {
    res.send("Welcome to My Pokemon App!!!");
});

app.use("/pokemon",pokemon);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`App is running on the PORT ${process.env.PORT}`);
});