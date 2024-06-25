const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let todos = []
let idCounter = 1

app.get('/todos', (req, res) => {
    console.log('11')
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    console.log('16')
    const id = parseInt(req?.params?.id, 10);
    const todo = todos?.find(item => item?.id === id)
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'To-do item not found' })
    }
});

app.post('/todos', (req, res) => {
    console.log('27')
    const { title, description } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    const newTodo = { id: idCounter++, title, description, completed: false }
    todos.push(newTodo);
    res.status(201).json(newTodo)
})

app.put('/todos/:id', (req, res) => {
    console.log('38')
    const id = parseInt(req?.params?.id, 10);
    const todo = todos.find(item => item?.id === id);
    if (!todo) {
        return res.status(404).json({ message: 'To-do item not found' })
    }
    const { title, description, completed } = req.body
    if (title !== undefined) todo.title = title
    if (description !== undefined) todo.description = description
    if (completed !== undefined) todo.completed = completed
    res.json(todo)
})

app.delete('/todos/:id', (req, res) => {
    console.log('52')
    const id = parseInt(req.params.id, 10)
    const todoIndex = todos.findIndex(item => item.id === id)
    if (todoIndex === -1) {
        return res.status(404).json({ message: 'To-do item not found' })
    }
    todos.splice(todoIndex, 1)
    res.status(204).send()
})

app.listen(port, () => {
    console.log(`API listening in http://localhost:${port}`)
})
