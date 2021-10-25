const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.render('page/home');
});

app.get('/portfolio', (req, res) => {
    res.render('page/portfolio');
});

app.get('/about', (req, res) => {
    res.render('page/about');
});

app.get('/contact', (req, res) => {
    res.render('page/contact');
});

app.listen(3000, () => {
    console.log("ON PORT 3000!")
});
