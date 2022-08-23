const express = require('express');
const path = require('path');
const requirejs = require('requirejs');

const productsRoutes = require('./routes/productsRoutes');

const app = express();

const viewsPath = path.join(__dirname, './views');
app.set('view engine', 'ejs');
app.set('views', viewsPath);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


app.use('/', productsRoutes);

app.get('/login', (req,res) => {
    res.render('login');
});

app.get('/register', (req,res) => {
    res.render('register');
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});
