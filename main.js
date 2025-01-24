const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello from Express.js');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    res.send(`You asked user with id = ${userId}`);
});


app.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});