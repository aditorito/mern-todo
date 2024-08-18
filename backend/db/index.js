const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect('your-mongoose-link');


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}
