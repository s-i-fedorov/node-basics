require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());

// Підключення до бази
connectDB();

app.use((req,res,next)=>{
    const body = JSON.stringify(req.body)
    console.log(`Method: ${req.method},\n URL: ${req.url},\n Body: ${body}`);
    next()
})

// Роутинг
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
