const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    weight:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    height:{
        type: String,
        required: true
    },
    ability:{
        type: String,
        required: true
    },
    moves:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("pokemonRecipe",pokemonSchema);