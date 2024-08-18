const express = require('express');
const { createTodo, updateTodo } = require('./types')
const bodyParser = require('body-parser');
const { todo } = require('./db');
const cors = require("cors");
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.post("/todos", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload) {
        res.status(411).json({
            msg: "you put worng input",
        })
        return;
    }
    const title = createPayload.title;
    const description = createPayload.description;
    await todo.create({
        title,
        description,
        completed : false
    })
    res.json({
        msg: "Todo created"
    })

    // put it in the mongodb
})

app.get("/todos",async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })

})

app.delete("/delete/:todoId", async function (req,res) {
    const id = req.params.todoId;
    
    const to = await todo.findById(id);       
    await todo.deleteOne({
        _id:id
    }) 
    
})
const port = 3000;
app.listen(port);