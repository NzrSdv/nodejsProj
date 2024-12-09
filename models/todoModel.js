const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type:String
    },
    isDone:{
        type:Boolean
    }
})

const todo = mongoose.model("examTodos",todoSchema);
module.exports = todo;