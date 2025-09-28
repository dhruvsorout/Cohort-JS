const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())

function getRandomTodos() {
    const titles = ["Go to gym", "Buy groceries", "Finish homework", "Walk the dog", "Read a book"];
    const descriptions = [
        "Do it before evening",
        "Buy vegetables and fruits",
        "Complete before deadline",
        "Take the dog for 30 mins",
        "Read at least 20 pages"
    ];

    let todos = [];
    let count = Math.floor(Math.random() * 5) + 1; // 1–5 todos

    for (let i = 0; i < count; i++) {
        todos.push({
            id: i + 1,
            title: titles[Math.floor(Math.random() * titles.length)],
            description: descriptions[Math.floor(Math.random() * descriptions.length)]
        });
    }
    return todos;
}

// GET /todos → returns random todos
app.get("/todos", (req, res) => {
    res.json({ todos: getRandomTodos() });
});

// Start server
app.listen(3000);