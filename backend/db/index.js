const mongoose = require('mongoose');
const { string } = require('zod');

mongoose.connect('mongodb+srv://AdityaPratap:qoYeY20Bkg1E45rK@cluster0.p5yi9c8.mongodb.net/todo-app');


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}