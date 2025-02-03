const express = require('express')
const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(`Method: ${req.method},\n URL: ${req.url}`);
    next()
})

app.get('/', (req, res) => {
    res.send('Hello from Express.js');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id
    res.send(`You asked user with id = ${userId}`);
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Отримано дані: Ім'я - ${name},\n 
        Електронна пошта - ${email}`);
});

app.use((req,res,next)=>{
    res.status(404).send('Page not found');
    next()
})

app.use((req,res,next)=>{
    res.status(500).send('Something was wrong');
    next()
})

app.listen(3000, () => {
    console.log('Сервер працює на порту 3000');
});

