const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.render('home')
})

app.get('/about', (req, res, next) => {
    res.render('about')
})

app.get('/works', (req, res, next) => {
    res.render('works')
})

app.get('/photos', (req, res, next) => {
    res.render('photos')
})

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

const port = 3002
app.listen(port, () => console.log(`Aplication running at port ${port}`))