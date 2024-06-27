const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect('mongodb+srv://harshubna:yYQBUqY3jARAdDit@hello.zras1uk.mongodb.net/');

//createe schema


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: boolean
})

const todo = mongoose.model('todos' , todoSchema);

module.exports = {
    todo 
}